import * as vue from 'vue';
import { PropType, JSXComponent, ComputedRef, Ref, nextTick } from 'vue';

declare type Density = null | 'default' | 'comfortable' | 'compact';

declare type EventProp<T = (...args: any[]) => any> = T | T[];
declare const EventProp: PropType<EventProp<(...args: any[]) => any>>;

declare type ValidationResult = string | boolean;
declare type ValidationRule = ValidationResult | PromiseLike<ValidationResult> | ((value: any) => ValidationResult) | ((value: any) => PromiseLike<ValidationResult>);

declare type IconValue = string | JSXComponent;
declare const IconValue: PropType<IconValue>;

interface VInputSlot {
    id: ComputedRef<string>;
    isDirty: ComputedRef<boolean>;
    isDisabled: ComputedRef<boolean>;
    isReadonly: ComputedRef<boolean>;
    isPristine: Ref<boolean>;
    isValid: ComputedRef<boolean | null>;
    isValidating: Ref<boolean>;
    reset: () => void;
    resetValidation: () => void;
    validate: () => void;
}

declare const VTextarea: vue.DefineComponent<{
    loading: (StringConstructor | BooleanConstructor)[];
    theme: StringConstructor;
    appendInnerIcon: PropType<IconValue>;
    bgColor: StringConstructor;
    clearable: BooleanConstructor;
    clearIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    active: BooleanConstructor;
    color: StringConstructor;
    dirty: BooleanConstructor;
    disabled: BooleanConstructor;
    error: BooleanConstructor;
    label: StringConstructor;
    persistentClear: BooleanConstructor;
    prependInnerIcon: PropType<IconValue>;
    reverse: BooleanConstructor;
    singleLine: BooleanConstructor;
    variant: {
        type: PropType<"filled" | "outlined" | "plain" | "underlined" | "solo">;
        default: string;
        validator: (v: any) => boolean;
    };
    'onClick:clear': PropType<EventProp<(...args: any[]) => any>>;
    'onClick:appendInner': PropType<EventProp<(...args: any[]) => any>>;
    'onClick:prependInner': PropType<EventProp<(...args: any[]) => any>>;
    focused: BooleanConstructor;
    errorMessages: {
        type: PropType<string | string[]>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    name: StringConstructor;
    readonly: BooleanConstructor;
    rules: {
        type: PropType<ValidationRule[]>;
        default: () => never[];
    };
    modelValue: null;
    validateOn: PropType<"input" | "blur" | "submit" | undefined>;
    validationValue: null;
    density: {
        type: PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    id: StringConstructor;
    appendIcon: PropType<IconValue>;
    prependIcon: PropType<IconValue>;
    hideDetails: PropType<boolean | "auto">;
    messages: {
        type: PropType<string | string[]>;
        default: () => never[];
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    'onClick:prepend': PropType<EventProp<(...args: any[]) => any>>;
    'onClick:append': PropType<EventProp<(...args: any[]) => any>>;
    autoGrow: BooleanConstructor;
    autofocus: BooleanConstructor;
    counter: PropType<string | number | true>;
    counterValue: PropType<(value: any) => number>;
    hint: StringConstructor;
    persistentHint: BooleanConstructor;
    prefix: StringConstructor;
    placeholder: StringConstructor;
    persistentPlaceholder: BooleanConstructor;
    persistentCounter: BooleanConstructor;
    noResize: BooleanConstructor;
    rows: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
        validator: (v: any) => boolean;
    };
    maxRows: {
        type: (StringConstructor | NumberConstructor)[];
        validator: (v: any) => boolean;
    };
    suffix: StringConstructor;
}, Omit<Omit<{
    $: vue.ComponentInternalInstance;
    $data: {};
    $props: Partial<{
        error: boolean;
        direction: "horizontal" | "vertical";
        disabled: boolean;
        readonly: boolean;
        messages: string | string[];
        density: Density;
        focused: boolean;
        errorMessages: string | string[];
        maxErrors: string | number;
        rules: ValidationRule[];
    }> & Omit<Readonly<vue.ExtractPropTypes<Omit<{
        focused: BooleanConstructor;
        disabled: BooleanConstructor;
        error: BooleanConstructor;
        errorMessages: {
            type: PropType<string | string[]>;
            default: () => never[];
        };
        maxErrors: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        name: StringConstructor;
        label: StringConstructor;
        readonly: BooleanConstructor;
        rules: {
            type: PropType<ValidationRule[]>;
            default: () => never[];
        };
        modelValue: null;
        validateOn: PropType<"input" | "blur" | "submit" | undefined>;
        validationValue: null;
        density: {
            type: PropType<Density>;
            default: string;
            validator: (v: any) => boolean;
        };
        id: StringConstructor;
        appendIcon: PropType<IconValue>;
        prependIcon: PropType<IconValue>;
        hideDetails: PropType<boolean | "auto">;
        messages: {
            type: PropType<string | string[]>;
            default: () => never[];
        };
        direction: {
            type: PropType<"horizontal" | "vertical">;
            default: string;
            validator: (v: any) => boolean;
        };
        'onClick:prepend': PropType<EventProp<(...args: any[]) => any>>;
        'onClick:append': PropType<EventProp<(...args: any[]) => any>>;
    }, "$children" | "v-slots" | "v-slot:default" | "v-slot:prepend" | "v-slot:append" | "v-slot:details">>> & {
        "onUpdate:modelValue"?: ((val: any) => any) | undefined;
    } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "error" | "direction" | "disabled" | "readonly" | "messages" | "density" | "focused" | "errorMessages" | "maxErrors" | "rules">;
    $attrs: {
        [x: string]: unknown;
    };
    $refs: {
        [x: string]: unknown;
    };
    $slots: Readonly<{
        [name: string]: vue.Slot | undefined;
    }>;
    $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
    $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
    $emit: (event: "update:modelValue", val: any) => void;
    $el: any;
    $options: vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<Omit<{
        focused: BooleanConstructor;
        disabled: BooleanConstructor;
        error: BooleanConstructor;
        errorMessages: {
            type: PropType<string | string[]>;
            default: () => never[];
        };
        maxErrors: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        name: StringConstructor;
        label: StringConstructor;
        readonly: BooleanConstructor;
        rules: {
            type: PropType<ValidationRule[]>;
            default: () => never[];
        };
        modelValue: null;
        validateOn: PropType<"input" | "blur" | "submit" | undefined>;
        validationValue: null;
        density: {
            type: PropType<Density>;
            default: string;
            validator: (v: any) => boolean;
        };
        id: StringConstructor;
        appendIcon: PropType<IconValue>;
        prependIcon: PropType<IconValue>;
        hideDetails: PropType<boolean | "auto">;
        messages: {
            type: PropType<string | string[]>;
            default: () => never[];
        };
        direction: {
            type: PropType<"horizontal" | "vertical">;
            default: string;
            validator: (v: any) => boolean;
        };
        'onClick:prepend': PropType<EventProp<(...args: any[]) => any>>;
        'onClick:append': PropType<EventProp<(...args: any[]) => any>>;
    }, "$children" | "v-slots" | "v-slot:default" | "v-slot:prepend" | "v-slot:append" | "v-slot:details">>> & {
        "onUpdate:modelValue"?: ((val: any) => any) | undefined;
    }, {
        reset: () => void;
        resetValidation: () => void;
        validate: () => Promise<string[]>;
    }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
        'update:modelValue': (val: any) => boolean;
    }, "$children" | "v-slots" | "v-slot:default" | "v-slot:prepend" | "v-slot:append" | "v-slot:details">, string, {
        error: boolean;
        direction: "horizontal" | "vertical";
        disabled: boolean;
        readonly: boolean;
        messages: string | string[];
        density: Density;
        focused: boolean;
        errorMessages: string | string[];
        maxErrors: string | number;
        rules: ValidationRule[];
    }> & {
        beforeCreate?: ((() => void) | (() => void)[]) | undefined;
        created?: ((() => void) | (() => void)[]) | undefined;
        beforeMount?: ((() => void) | (() => void)[]) | undefined;
        mounted?: ((() => void) | (() => void)[]) | undefined;
        beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
        updated?: ((() => void) | (() => void)[]) | undefined;
        activated?: ((() => void) | (() => void)[]) | undefined;
        deactivated?: ((() => void) | (() => void)[]) | undefined;
        beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
        beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
        destroyed?: ((() => void) | (() => void)[]) | undefined;
        unmounted?: ((() => void) | (() => void)[]) | undefined;
        renderTracked?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
        renderTriggered?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
        errorCaptured?: (((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
    };
    $forceUpdate: () => void;
    $nextTick: typeof nextTick;
    $watch(source: string | Function, cb: Function, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
} & Readonly<vue.ExtractPropTypes<Omit<{
    focused: BooleanConstructor;
    disabled: BooleanConstructor;
    error: BooleanConstructor;
    errorMessages: {
        type: PropType<string | string[]>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    name: StringConstructor;
    label: StringConstructor;
    readonly: BooleanConstructor;
    rules: {
        type: PropType<ValidationRule[]>;
        default: () => never[];
    };
    modelValue: null;
    validateOn: PropType<"input" | "blur" | "submit" | undefined>;
    validationValue: null;
    density: {
        type: PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    id: StringConstructor;
    appendIcon: PropType<IconValue>;
    prependIcon: PropType<IconValue>;
    hideDetails: PropType<boolean | "auto">;
    messages: {
        type: PropType<string | string[]>;
        default: () => never[];
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    'onClick:prepend': PropType<EventProp<(...args: any[]) => any>>;
    'onClick:append': PropType<EventProp<(...args: any[]) => any>>;
}, "$children" | "v-slots" | "v-slot:default" | "v-slot:prepend" | "v-slot:append" | "v-slot:details">>> & {
    "onUpdate:modelValue"?: ((val: any) => any) | undefined;
} & vue.ShallowUnwrapRef<{
    reset: () => void;
    resetValidation: () => void;
    validate: () => Promise<string[]>;
}> & {} & vue.ComponentCustomProperties & {
    $props: {
        $children?: {} | vue.VNodeChild | {
            default?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
            prepend?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
            append?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
            details?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
            prepend?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
            append?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
            details?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
        "v-slot:append"?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
        "v-slot:details"?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
    };
}, "id" | "name" | "label" | "$children" | "v-slots" | keyof vue.VNodeProps | keyof vue.AllowedComponentProps | "v-slot:default" | "v-slot:prepend" | "v-slot:append" | "modelValue" | "onUpdate:modelValue" | "prependIcon" | "appendIcon" | "onClick:append" | "onClick:prepend" | "validateOn" | "validationValue" | "hideDetails" | "v-slot:details" | ("error" | "direction" | "disabled" | "readonly" | "messages" | "density" | "focused" | "errorMessages" | "maxErrors" | "rules")>, `$${any}`>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'click:control': (e: MouseEvent) => true;
    'update:focused': (focused: boolean) => true;
    'update:modelValue': (val: string) => true;
}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    loading: (StringConstructor | BooleanConstructor)[];
    theme: StringConstructor;
    appendInnerIcon: PropType<IconValue>;
    bgColor: StringConstructor;
    clearable: BooleanConstructor;
    clearIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    active: BooleanConstructor;
    color: StringConstructor;
    dirty: BooleanConstructor;
    disabled: BooleanConstructor;
    error: BooleanConstructor;
    label: StringConstructor;
    persistentClear: BooleanConstructor;
    prependInnerIcon: PropType<IconValue>;
    reverse: BooleanConstructor;
    singleLine: BooleanConstructor;
    variant: {
        type: PropType<"filled" | "outlined" | "plain" | "underlined" | "solo">;
        default: string;
        validator: (v: any) => boolean;
    };
    'onClick:clear': PropType<EventProp<(...args: any[]) => any>>;
    'onClick:appendInner': PropType<EventProp<(...args: any[]) => any>>;
    'onClick:prependInner': PropType<EventProp<(...args: any[]) => any>>;
    focused: BooleanConstructor;
    errorMessages: {
        type: PropType<string | string[]>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    name: StringConstructor;
    readonly: BooleanConstructor;
    rules: {
        type: PropType<ValidationRule[]>;
        default: () => never[];
    };
    modelValue: null;
    validateOn: PropType<"input" | "blur" | "submit" | undefined>;
    validationValue: null;
    density: {
        type: PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    id: StringConstructor;
    appendIcon: PropType<IconValue>;
    prependIcon: PropType<IconValue>;
    hideDetails: PropType<boolean | "auto">;
    messages: {
        type: PropType<string | string[]>;
        default: () => never[];
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    'onClick:prepend': PropType<EventProp<(...args: any[]) => any>>;
    'onClick:append': PropType<EventProp<(...args: any[]) => any>>;
    autoGrow: BooleanConstructor;
    autofocus: BooleanConstructor;
    counter: PropType<string | number | true>;
    counterValue: PropType<(value: any) => number>;
    hint: StringConstructor;
    persistentHint: BooleanConstructor;
    prefix: StringConstructor;
    placeholder: StringConstructor;
    persistentPlaceholder: BooleanConstructor;
    persistentCounter: BooleanConstructor;
    noResize: BooleanConstructor;
    rows: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
        validator: (v: any) => boolean;
    };
    maxRows: {
        type: (StringConstructor | NumberConstructor)[];
        validator: (v: any) => boolean;
    };
    suffix: StringConstructor;
}>> & {
    "onUpdate:modelValue"?: ((val: string) => any) | undefined;
    "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
    "onClick:control"?: ((e: MouseEvent) => any) | undefined;
}, {
    reverse: boolean;
    error: boolean;
    active: boolean;
    direction: "horizontal" | "vertical";
    autofocus: boolean;
    disabled: boolean;
    readonly: boolean;
    messages: string | string[];
    density: Density;
    variant: "filled" | "outlined" | "plain" | "underlined" | "solo";
    clearIcon: IconValue;
    focused: boolean;
    errorMessages: string | string[];
    maxErrors: string | number;
    rules: ValidationRule[];
    clearable: boolean;
    dirty: boolean;
    persistentClear: boolean;
    singleLine: boolean;
    persistentHint: boolean;
    persistentPlaceholder: boolean;
    persistentCounter: boolean;
    autoGrow: boolean;
    noResize: boolean;
    rows: string | number;
}>;
declare type VTextarea = InstanceType<typeof VTextarea>;

export { VTextarea };
