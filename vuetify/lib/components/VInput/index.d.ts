import * as vue from 'vue';
import { VNodeChild, PropType, JSXComponent, ComputedRef, Ref } from 'vue';

declare type Density = null | 'default' | 'comfortable' | 'compact';

declare type SlotsToProps<T extends Record<string, any>> = T extends Record<string, Slot> ? ({
    $children?: (VNodeChild | (keyof T extends 'default' ? T['default'] : {}) | {
        [K in keyof T]?: T[K];
    });
    'v-slots'?: {
        [K in keyof T]?: T[K] | false;
    };
} & {
    [K in keyof T as `v-slot:${K & string}`]?: T[K] | false;
}) : T extends Record<string, any[]> ? SlotsToProps<MakeSlots<T>> : never;
declare type Slot<T extends any[] = any[]> = (...args: T) => VNodeChild;
declare type MakeSlots<T extends Record<string, any[]>> = {
    [K in keyof T]?: Slot<T[K]>;
};

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
declare type VInputSlots = MakeSlots<{
    default: [VInputSlot];
    prepend: [VInputSlot];
    append: [VInputSlot];
    details: [VInputSlot];
}>;
declare const VInput: {
    new (...args: any[]): {
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
        $nextTick: typeof vue.nextTick;
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
    }> & {} & vue.ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<Omit<{
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
}> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new () => {
    $props: SlotsToProps<VInputSlots>;
});
declare type VInput = InstanceType<typeof VInput>;

export { VInput };
