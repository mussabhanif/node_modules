// @ts-nocheck
/* eslint-disable */

import Vue from 'vue';
export default Vue.extend({
  name: 'mouse',
  methods: {
    getDefaultMouseEventHandlers(suffix, getEvent) {
      return this.getMouseEventHandlers({
        ['click' + suffix]: {
          event: 'click'
        },
        ['contextmenu' + suffix]: {
          event: 'contextmenu',
          prevent: true,
          result: false
        },
        ['mousedown' + suffix]: {
          event: 'mousedown'
        },
        ['mousemove' + suffix]: {
          event: 'mousemove'
        },
        ['mouseup' + suffix]: {
          event: 'mouseup'
        },
        ['mouseenter' + suffix]: {
          event: 'mouseenter'
        },
        ['mouseleave' + suffix]: {
          event: 'mouseleave'
        },
        ['touchstart' + suffix]: {
          event: 'touchstart'
        },
        ['touchmove' + suffix]: {
          event: 'touchmove'
        },
        ['touchend' + suffix]: {
          event: 'touchend'
        }
      }, getEvent);
    },
    getMouseEventHandlers(events, getEvent) {
      const on = {};
      for (const event in events) {
        const eventOptions = events[event];
        if (!this.$listeners[event]) continue;

        // TODO somehow pull in modifiers

        const prefix = eventOptions.passive ? '&' : (eventOptions.once ? '~' : '') + (eventOptions.capture ? '!' : '');
        const key = prefix + eventOptions.event;
        const handler = e => {
          const mouseEvent = e;
          if (eventOptions.button === undefined || mouseEvent.buttons > 0 && mouseEvent.button === eventOptions.button) {
            if (eventOptions.prevent) {
              e.preventDefault();
            }
            if (eventOptions.stop) {
              e.stopPropagation();
            }

            // Due to TouchEvent target always returns the element that is first placed
            // Even if touch point has since moved outside the interactive area of that element
            // Ref: https://developer.mozilla.org/en-US/docs/Web/API/Touch/target
            // This block of code aims to make sure touchEvent is always dispatched from the element that is being pointed at
            if (e && 'touches' in e) {
              var _e$target, _e$target2;
              const currentTarget = document.elementFromPoint(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
              if (currentTarget && !((_e$target = e.target) != null && _e$target.isSameNode(currentTarget)) && ((_e$target2 = e.target) == null ? void 0 : _e$target2.className) === currentTarget.className) {
                currentTarget.dispatchEvent(new TouchEvent(e.type, {
                  changedTouches: e.changedTouches,
                  targetTouches: e.targetTouches,
                  touches: e.touches
                }));
                return;
              }
            }
            this.$emit(event, getEvent(e), e);
          }
          return eventOptions.result;
        };
        if (key in on) {
          /* istanbul ignore next */
          if (Array.isArray(on[key])) {
            on[key].push(handler);
          } else {
            on[key] = [on[key], handler];
          }
        } else {
          on[key] = handler;
        }
      }
      return on;
    }
  }
});
//# sourceMappingURL=mouse.mjs.map