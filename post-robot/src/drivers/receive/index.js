/* @flow */

import { isWindowClosed, type CrossDomainWindowType } from 'cross-domain-utils/src';

import { CONSTANTS, POST_MESSAGE_NAMES_LIST } from '../../conf';
import { deserializeMethods, jsonParse, addEventListener, noop } from '../../lib';
import { global } from '../../global';

import { RECEIVE_MESSAGE_TYPES } from './types';

global.receivedMessages = global.receivedMessages || [];

type MessageEvent = {
    source : CrossDomainWindowType,
    origin : string,
    data : string
};

function parseMessage(message : string) : ?Object {

    let parsedMessage;

    try {
        parsedMessage = jsonParse(message);
    } catch (err) {
        return;
    }

    if (!parsedMessage) {
        return;
    }

    if (typeof parsedMessage !== 'object' || parsedMessage === null) {
        return;
    }

    parsedMessage = parsedMessage[CONSTANTS.WINDOW_PROPS.POSTROBOT];

    if (!parsedMessage || typeof parsedMessage !== 'object' || parsedMessage === null) {
        return;
    }

    if (!parsedMessage.type || typeof parsedMessage.type !== 'string') {
        return;
    }

    if (!RECEIVE_MESSAGE_TYPES[parsedMessage.type]) {
        return;
    }

    return parsedMessage;
}


export function receiveMessage(event : MessageEvent) {

    if (!window || window.closed) {
        return;
    }

    try {
        if (!event.source) {
            return;
        }
    } catch (err) {
        return;
    }

    let { source, origin, data } = event;

    let message = parseMessage(data);

    if (!message) {
        return;
    }

    if (!message.sourceDomain || typeof message.sourceDomain !== 'string') {
        throw new Error(`Expected message to have sourceDomain`);
    }

    if (message.sourceDomain.indexOf(CONSTANTS.MOCK_PROTOCOL) === 0 || message.sourceDomain.indexOf(CONSTANTS.FILE_PROTOCOL) === 0) {
        origin = message.sourceDomain;
    }

    if (global.receivedMessages.indexOf(message.id) === -1) {
        global.receivedMessages.push(message.id);
    } else {
        return;
    }

    if (__DEBUG__) {
        let level;

        if (POST_MESSAGE_NAMES_LIST.indexOf(message.name) !== -1 || message.type === CONSTANTS.POST_MESSAGE_TYPE.ACK) {
            level = 'debug';
        } else if (message.ack === 'error') {
            level = 'error';
        } else {
            level = 'info';
        }
        
        // eslint-disable-next-line no-console
        console[level]('postrobot_receive', message.type.replace(/^postrobot_message_/, ''), '::', message.name, '::', origin, '\n\n', message);
    }

    if (isWindowClosed(source) && !message.fireAndForget) {
        return;
    }

    if (message.data) {
        message.data = deserializeMethods(source, origin, message.data);
    }

    RECEIVE_MESSAGE_TYPES[message.type](source, origin, message);
}

export function messageListener(event : { source : CrossDomainWindowType, origin : string, data : string, sourceElement : CrossDomainWindowType, originalEvent? : { origin : string } }) {

    try {
        noop(event.source);
    } catch (err) {
        return;
    }

    // $FlowFixMe
    let messageEvent : MessageEvent = {
        source: event.source || event.sourceElement,
        origin: event.origin || (event.originalEvent && event.originalEvent.origin),
        data:   event.data
    };

    if (__POST_ROBOT__.__IE_POPUP_SUPPORT__) {
        try {
            require('../../compat').emulateIERestrictions(messageEvent.source, window);
        } catch (err) {
            return;
        }
    }

    receiveMessage(messageEvent);
}

export function listenForMessages() {
    addEventListener(window, 'message', messageListener);
}

global.receiveMessage = receiveMessage;
