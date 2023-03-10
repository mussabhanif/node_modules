import * as vue from 'vue';
import { VNodeChild, PropType, JSXComponent, ComputedRef, Ref, ExtractPropTypes, nextTick } from 'vue';

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

interface LoaderSlotProps {
    color: string | undefined;
    isActive: boolean;
}

declare type IconValue = string | JSXComponent;
declare const IconValue: PropType<IconValue>;

declare type Density = null | 'default' | 'comfortable' | 'compact';

declare type ValidationResult = string | boolean;
declare type ValidationRule = ValidationResult | PromiseLike<ValidationResult> | ((value: any) => ValidationResult) | ((value: any) => PromiseLike<ValidationResult>);

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

interface DefaultInputSlot {
    isActive: Ref<boolean>;
    isFocused: Ref<boolean>;
    controlRef: Ref<HTMLElement | undefined>;
    focus: () => void;
    blur: () => void;
}
interface VFieldSlot extends DefaultInputSlot {
    props: Record<string, unknown>;
}
declare type VFieldSlots = MakeSlots<{
    clear: [];
    'prepend-inner': [DefaultInputSlot & VInputSlot];
    'append-inner': [DefaultInputSlot & VInputSlot];
    label: [DefaultInputSlot & VInputSlot];
    loader: [LoaderSlotProps];
    default: [VFieldSlot];
}>;

declare const VTextField: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            reverse: boolean;
            type: string;
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
        }> & Omit<Readonly<ExtractPropTypes<Omit<{
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
            autofocus: BooleanConstructor;
            counter: PropType<string | number | true>;
            counterValue: PropType<(value: any) => number>;
            hint: StringConstructor;
            persistentHint: BooleanConstructor;
            prefix: StringConstructor;
            placeholder: StringConstructor;
            persistentPlaceholder: BooleanConstructor;
            persistentCounter: BooleanConstructor;
            suffix: StringConstructor;
            type: {
                type: StringConstructor;
                default: string;
            };
        }, "$children" | "v-slots" | "v-slot:default" | "v-slot:prepend" | "v-slot:append" | "v-slot:details" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | "v-slot:label" | "v-slot:loader">>> & {
            "onUpdate:modelValue"?: ((val: string) => any) | undefined;
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
            "onClick:control"?: ((e: MouseEvent) => any) | undefined;
            "onClick:input"?: ((e: MouseEvent) => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "reverse" | "type" | "error" | "active" | "direction" | "autofocus" | "disabled" | "readonly" | "messages" | "density" | "variant" | "clearIcon" | "focused" | "errorMessages" | "maxErrors" | "rules" | "clearable" | "dirty" | "persistentClear" | "singleLine" | "persistentHint" | "persistentPlaceholder" | "persistentCounter">;
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
        $emit: ((event: "update:modelValue", val: string) => void) & ((event: "click:control", e: MouseEvent) => void) & ((event: "update:focused", focused: boolean) => void) & ((event: "click:input", e: MouseEvent) => void);
        $el: any;
        $options: vue.ComponentOptionsBase<Readonly<ExtractPropTypes<Omit<{
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
            autofocus: BooleanConstructor;
            counter: PropType<string | number | true>;
            counterValue: PropType<(value: any) => number>;
            hint: StringConstructor;
            persistentHint: BooleanConstructor;
            prefix: StringConstructor;
            placeholder: StringConstructor;
            persistentPlaceholder: BooleanConstructor;
            persistentCounter: BooleanConstructor;
            suffix: StringConstructor;
            type: {
                type: StringConstructor;
                default: string;
            };
        }, "$children" | "v-slots" | "v-slot:default" | "v-slot:prepend" | "v-slot:append" | "v-slot:details" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | "v-slot:label" | "v-slot:loader">>> & {
            "onUpdate:modelValue"?: ((val: string) => any) | undefined;
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
            "onClick:control"?: ((e: MouseEvent) => any) | undefined;
            "onClick:input"?: ((e: MouseEvent) => any) | undefined;
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
            }> & Omit<Readonly<ExtractPropTypes<Omit<{
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
            $options: vue.ComponentOptionsBase<Readonly<ExtractPropTypes<Omit<{
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
        } & Readonly<ExtractPropTypes<Omit<{
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
        }, "id" | "name" | "label" | "$children" | "v-slots" | keyof vue.VNodeProps | keyof vue.AllowedComponentProps | "v-slot:default" | "v-slot:prepend" | "v-slot:append" | "modelValue" | "onUpdate:modelValue" | "prependIcon" | "appendIcon" | "onClick:append" | "onClick:prepend" | "validateOn" | "validationValue" | "hideDetails" | "v-slot:details" | ("error" | "direction" | "disabled" | "readonly" | "messages" | "density" | "focused" | "errorMessages" | "maxErrors" | "rules")>, `$${any}`> & Omit<Omit<{
            $: vue.ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                reverse: boolean;
                error: boolean;
                active: boolean;
                disabled: boolean;
                variant: "filled" | "outlined" | "plain" | "underlined" | "solo";
                clearIcon: IconValue;
                focused: boolean;
                clearable: boolean;
                dirty: boolean;
                persistentClear: boolean;
                singleLine: boolean;
            }> & Omit<Readonly<ExtractPropTypes<Omit<{
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
                id: StringConstructor;
            }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "onUpdate:modelValue" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | "v-slot:label" | "v-slot:loader">>> & {
                "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
                "onClick:control"?: ((e: MouseEvent) => any) | undefined;
            } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "reverse" | "error" | "active" | "disabled" | "variant" | "clearIcon" | "focused" | "clearable" | "dirty" | "persistentClear" | "singleLine">;
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
            $emit: ((event: "click:control", e: MouseEvent) => void) & ((event: "update:focused", focused: boolean) => void);
            $el: any;
            $options: vue.ComponentOptionsBase<Readonly<ExtractPropTypes<Omit<{
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
                id: StringConstructor;
            }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "onUpdate:modelValue" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | "v-slot:label" | "v-slot:loader">>> & {
                "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
                "onClick:control"?: ((e: MouseEvent) => any) | undefined;
            }, {
                controlRef: vue.Ref<HTMLElement | undefined>;
            }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
                'click:control': (e: MouseEvent) => boolean;
                'update:focused': (focused: boolean) => boolean;
                'update:modelValue': (val: any) => boolean;
            }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | "v-slot:label" | "v-slot:loader">, string, {
                reverse: boolean;
                error: boolean;
                active: boolean;
                disabled: boolean;
                variant: "filled" | "outlined" | "plain" | "underlined" | "solo";
                clearIcon: IconValue;
                focused: boolean;
                clearable: boolean;
                dirty: boolean;
                persistentClear: boolean;
                singleLine: boolean;
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
        } & Readonly<ExtractPropTypes<Omit<{
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
            id: StringConstructor;
        }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "onUpdate:modelValue" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | "v-slot:label" | "v-slot:loader">>> & {
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
            "onClick:control"?: ((e: MouseEvent) => any) | undefined;
        } & vue.ShallowUnwrapRef<{
            controlRef: vue.Ref<HTMLElement | undefined>;
        }> & {} & vue.ComponentCustomProperties & {
            $props: {
                modelValue?: unknown;
                'onUpdate:modelValue'?: ((val: unknown) => any) | undefined;
            } & {
                $children?: {} | vue.VNodeChild | {
                    clear?: (() => vue.VNodeChild) | undefined;
                    'prepend-inner'?: ((args_0: DefaultInputSlot & VInputSlot) => vue.VNodeChild) | undefined;
                    'append-inner'?: ((args_0: DefaultInputSlot & VInputSlot) => vue.VNodeChild) | undefined;
                    label?: ((args_0: DefaultInputSlot & VInputSlot) => vue.VNodeChild) | undefined;
                    loader?: ((args_0: LoaderSlotProps) => vue.VNodeChild) | undefined;
                    default?: ((args_0: VFieldSlot) => vue.VNodeChild) | undefined;
                };
                'v-slots'?: {
                    clear?: false | (() => vue.VNodeChild) | undefined;
                    'prepend-inner'?: false | ((args_0: DefaultInputSlot & VInputSlot) => vue.VNodeChild) | undefined;
                    'append-inner'?: false | ((args_0: DefaultInputSlot & VInputSlot) => vue.VNodeChild) | undefined;
                    label?: false | ((args_0: DefaultInputSlot & VInputSlot) => vue.VNodeChild) | undefined;
                    loader?: false | ((args_0: LoaderSlotProps) => vue.VNodeChild) | undefined;
                    default?: false | ((args_0: VFieldSlot) => vue.VNodeChild) | undefined;
                } | undefined;
            } & {
                "v-slot:clear"?: false | (() => vue.VNodeChild) | undefined;
                "v-slot:prepend-inner"?: false | ((args_0: DefaultInputSlot & VInputSlot) => vue.VNodeChild) | undefined;
                "v-slot:append-inner"?: false | ((args_0: DefaultInputSlot & VInputSlot) => vue.VNodeChild) | undefined;
                "v-slot:label"?: false | ((args_0: DefaultInputSlot & VInputSlot) => vue.VNodeChild) | undefined;
                "v-slot:loader"?: false | ((args_0: LoaderSlotProps) => vue.VNodeChild) | undefined;
                "v-slot:default"?: false | ((args_0: VFieldSlot) => vue.VNodeChild) | undefined;
            };
        }, "id" | "color" | "loading" | "label" | "$children" | "theme" | "v-slots" | keyof vue.VNodeProps | keyof vue.AllowedComponentProps | "v-slot:default" | "modelValue" | "onUpdate:modelValue" | "bgColor" | "appendInnerIcon" | "prependInnerIcon" | "onClick:clear" | "onClick:appendInner" | "onClick:prependInner" | "onUpdate:focused" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | "v-slot:label" | "v-slot:loader" | "onClick:control" | ("reverse" | "error" | "active" | "disabled" | "variant" | "clearIcon" | "focused" | "clearable" | "dirty" | "persistentClear" | "singleLine")>, `$${any}`>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
            'click:control': (e: MouseEvent) => boolean;
            'click:input': (e: MouseEvent) => boolean;
            'update:focused': (focused: boolean) => boolean;
            'update:modelValue': (val: string) => boolean;
        }, "$children" | "v-slots" | "v-slot:default" | "v-slot:prepend" | "v-slot:append" | "v-slot:details" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | "v-slot:label" | "v-slot:loader">, string, {
            reverse: boolean;
            type: string;
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
    } & Readonly<ExtractPropTypes<Omit<{
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
        autofocus: BooleanConstructor;
        counter: PropType<string | number | true>;
        counterValue: PropType<(value: any) => number>;
        hint: StringConstructor;
        persistentHint: BooleanConstructor;
        prefix: StringConstructor;
        placeholder: StringConstructor;
        persistentPlaceholder: BooleanConstructor;
        persistentCounter: BooleanConstructor;
        suffix: StringConstructor;
        type: {
            type: StringConstructor;
            default: string;
        };
    }, "$children" | "v-slots" | "v-slot:default" | "v-slot:prepend" | "v-slot:append" | "v-slot:details" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | "v-slot:label" | "v-slot:loader">>> & {
        "onUpdate:modelValue"?: ((val: string) => any) | undefined;
        "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        "onClick:control"?: ((e: MouseEvent) => any) | undefined;
        "onClick:input"?: ((e: MouseEvent) => any) | undefined;
    } & vue.ShallowUnwrapRef<Omit<Omit<{
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
        }> & Omit<Readonly<ExtractPropTypes<Omit<{
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
        $options: vue.ComponentOptionsBase<Readonly<ExtractPropTypes<Omit<{
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
    } & Readonly<ExtractPropTypes<Omit<{
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
    }, "id" | "name" | "label" | "$children" | "v-slots" | keyof vue.VNodeProps | keyof vue.AllowedComponentProps | "v-slot:default" | "v-slot:prepend" | "v-slot:append" | "modelValue" | "onUpdate:modelValue" | "prependIcon" | "appendIcon" | "onClick:append" | "onClick:prepend" | "validateOn" | "validationValue" | "hideDetails" | "v-slot:details" | ("error" | "direction" | "disabled" | "readonly" | "messages" | "density" | "focused" | "errorMessages" | "maxErrors" | "rules")>, `$${any}`> & Omit<Omit<{
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            reverse: boolean;
            error: boolean;
            active: boolean;
            disabled: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo";
            clearIcon: IconValue;
            focused: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
        }> & Omit<Readonly<ExtractPropTypes<Omit<{
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
            id: StringConstructor;
        }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "onUpdate:modelValue" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | "v-slot:label" | "v-slot:loader">>> & {
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
            "onClick:control"?: ((e: MouseEvent) => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "reverse" | "error" | "active" | "disabled" | "variant" | "clearIcon" | "focused" | "clearable" | "dirty" | "persistentClear" | "singleLine">;
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
        $emit: ((event: "click:control", e: MouseEvent) => void) & ((event: "update:focused", focused: boolean) => void);
        $el: any;
        $options: vue.ComponentOptionsBase<Readonly<ExtractPropTypes<Omit<{
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
            id: StringConstructor;
        }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "onUpdate:modelValue" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | "v-slot:label" | "v-slot:loader">>> & {
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
            "onClick:control"?: ((e: MouseEvent) => any) | undefined;
        }, {
            controlRef: vue.Ref<HTMLElement | undefined>;
        }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
            'click:control': (e: MouseEvent) => boolean;
            'update:focused': (focused: boolean) => boolean;
            'update:modelValue': (val: any) => boolean;
        }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | "v-slot:label" | "v-slot:loader">, string, {
            reverse: boolean;
            error: boolean;
            active: boolean;
            disabled: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo";
            clearIcon: IconValue;
            focused: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
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
    } & Readonly<ExtractPropTypes<Omit<{
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
        id: StringConstructor;
    }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "onUpdate:modelValue" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | "v-slot:label" | "v-slot:loader">>> & {
        "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        "onClick:control"?: ((e: MouseEvent) => any) | undefined;
    } & vue.ShallowUnwrapRef<{
        controlRef: vue.Ref<HTMLElement | undefined>;
    }> & {} & vue.ComponentCustomProperties & {
        $props: {
            modelValue?: unknown;
            'onUpdate:modelValue'?: ((val: unknown) => any) | undefined;
        } & {
            $children?: {} | vue.VNodeChild | {
                clear?: (() => vue.VNodeChild) | undefined;
                'prepend-inner'?: ((args_0: DefaultInputSlot & VInputSlot) => vue.VNodeChild) | undefined;
                'append-inner'?: ((args_0: DefaultInputSlot & VInputSlot) => vue.VNodeChild) | undefined;
                label?: ((args_0: DefaultInputSlot & VInputSlot) => vue.VNodeChild) | undefined;
                loader?: ((args_0: LoaderSlotProps) => vue.VNodeChild) | undefined;
                default?: ((args_0: VFieldSlot) => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                clear?: false | (() => vue.VNodeChild) | undefined;
                'prepend-inner'?: false | ((args_0: DefaultInputSlot & VInputSlot) => vue.VNodeChild) | undefined;
                'append-inner'?: false | ((args_0: DefaultInputSlot & VInputSlot) => vue.VNodeChild) | undefined;
                label?: false | ((args_0: DefaultInputSlot & VInputSlot) => vue.VNodeChild) | undefined;
                loader?: false | ((args_0: LoaderSlotProps) => vue.VNodeChild) | undefined;
                default?: false | ((args_0: VFieldSlot) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:clear"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:prepend-inner"?: false | ((args_0: DefaultInputSlot & VInputSlot) => vue.VNodeChild) | undefined;
            "v-slot:append-inner"?: false | ((args_0: DefaultInputSlot & VInputSlot) => vue.VNodeChild) | undefined;
            "v-slot:label"?: false | ((args_0: DefaultInputSlot & VInputSlot) => vue.VNodeChild) | undefined;
            "v-slot:loader"?: false | ((args_0: LoaderSlotProps) => vue.VNodeChild) | undefined;
            "v-slot:default"?: false | ((args_0: VFieldSlot) => vue.VNodeChild) | undefined;
        };
    }, "id" | "color" | "loading" | "label" | "$children" | "theme" | "v-slots" | keyof vue.VNodeProps | keyof vue.AllowedComponentProps | "v-slot:default" | "modelValue" | "onUpdate:modelValue" | "bgColor" | "appendInnerIcon" | "prependInnerIcon" | "onClick:clear" | "onClick:appendInner" | "onClick:prependInner" | "onUpdate:focused" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | "v-slot:label" | "v-slot:loader" | "onClick:control" | ("reverse" | "error" | "active" | "disabled" | "variant" | "clearIcon" | "focused" | "clearable" | "dirty" | "persistentClear" | "singleLine")>, `$${any}`>> & {} & vue.ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<Readonly<ExtractPropTypes<Omit<{
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
    autofocus: BooleanConstructor;
    counter: PropType<string | number | true>;
    counterValue: PropType<(value: any) => number>;
    hint: StringConstructor;
    persistentHint: BooleanConstructor;
    prefix: StringConstructor;
    placeholder: StringConstructor;
    persistentPlaceholder: BooleanConstructor;
    persistentCounter: BooleanConstructor;
    suffix: StringConstructor;
    type: {
        type: StringConstructor;
        default: string;
    };
}, "$children" | "v-slots" | "v-slot:default" | "v-slot:prepend" | "v-slot:append" | "v-slot:details" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | "v-slot:label" | "v-slot:loader">>> & {
    "onUpdate:modelValue"?: ((val: string) => any) | undefined;
    "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
    "onClick:control"?: ((e: MouseEvent) => any) | undefined;
    "onClick:input"?: ((e: MouseEvent) => any) | undefined;
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
    }> & Omit<Readonly<ExtractPropTypes<Omit<{
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
    $options: vue.ComponentOptionsBase<Readonly<ExtractPropTypes<Omit<{
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
} & Readonly<ExtractPropTypes<Omit<{
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
}, "id" | "name" | "label" | "$children" | "v-slots" | keyof vue.VNodeProps | keyof vue.AllowedComponentProps | "v-slot:default" | "v-slot:prepend" | "v-slot:append" | "modelValue" | "onUpdate:modelValue" | "prependIcon" | "appendIcon" | "onClick:append" | "onClick:prepend" | "validateOn" | "validationValue" | "hideDetails" | "v-slot:details" | ("error" | "direction" | "disabled" | "readonly" | "messages" | "density" | "focused" | "errorMessages" | "maxErrors" | "rules")>, `$${any}`> & Omit<Omit<{
    $: vue.ComponentInternalInstance;
    $data: {};
    $props: Partial<{
        reverse: boolean;
        error: boolean;
        active: boolean;
        disabled: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo";
        clearIcon: IconValue;
        focused: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
    }> & Omit<Readonly<ExtractPropTypes<Omit<{
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
        id: StringConstructor;
    }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "onUpdate:modelValue" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | "v-slot:label" | "v-slot:loader">>> & {
        "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        "onClick:control"?: ((e: MouseEvent) => any) | undefined;
    } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "reverse" | "error" | "active" | "disabled" | "variant" | "clearIcon" | "focused" | "clearable" | "dirty" | "persistentClear" | "singleLine">;
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
    $emit: ((event: "click:control", e: MouseEvent) => void) & ((event: "update:focused", focused: boolean) => void);
    $el: any;
    $options: vue.ComponentOptionsBase<Readonly<ExtractPropTypes<Omit<{
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
        id: StringConstructor;
    }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "onUpdate:modelValue" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | "v-slot:label" | "v-slot:loader">>> & {
        "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        "onClick:control"?: ((e: MouseEvent) => any) | undefined;
    }, {
        controlRef: vue.Ref<HTMLElement | undefined>;
    }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
        'click:control': (e: MouseEvent) => boolean;
        'update:focused': (focused: boolean) => boolean;
        'update:modelValue': (val: any) => boolean;
    }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | "v-slot:label" | "v-slot:loader">, string, {
        reverse: boolean;
        error: boolean;
        active: boolean;
        disabled: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo";
        clearIcon: IconValue;
        focused: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
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
} & Readonly<ExtractPropTypes<Omit<{
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
    id: StringConstructor;
}, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "onUpdate:modelValue" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | "v-slot:label" | "v-slot:loader">>> & {
    "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
    "onClick:control"?: ((e: MouseEvent) => any) | undefined;
} & vue.ShallowUnwrapRef<{
    controlRef: vue.Ref<HTMLElement | undefined>;
}> & {} & vue.ComponentCustomProperties & {
    $props: {
        modelValue?: unknown;
        'onUpdate:modelValue'?: ((val: unknown) => any) | undefined;
    } & {
        $children?: {} | vue.VNodeChild | {
            clear?: (() => vue.VNodeChild) | undefined;
            'prepend-inner'?: ((args_0: DefaultInputSlot & VInputSlot) => vue.VNodeChild) | undefined;
            'append-inner'?: ((args_0: DefaultInputSlot & VInputSlot) => vue.VNodeChild) | undefined;
            label?: ((args_0: DefaultInputSlot & VInputSlot) => vue.VNodeChild) | undefined;
            loader?: ((args_0: LoaderSlotProps) => vue.VNodeChild) | undefined;
            default?: ((args_0: VFieldSlot) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            clear?: false | (() => vue.VNodeChild) | undefined;
            'prepend-inner'?: false | ((args_0: DefaultInputSlot & VInputSlot) => vue.VNodeChild) | undefined;
            'append-inner'?: false | ((args_0: DefaultInputSlot & VInputSlot) => vue.VNodeChild) | undefined;
            label?: false | ((args_0: DefaultInputSlot & VInputSlot) => vue.VNodeChild) | undefined;
            loader?: false | ((args_0: LoaderSlotProps) => vue.VNodeChild) | undefined;
            default?: false | ((args_0: VFieldSlot) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:clear"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:prepend-inner"?: false | ((args_0: DefaultInputSlot & VInputSlot) => vue.VNodeChild) | undefined;
        "v-slot:append-inner"?: false | ((args_0: DefaultInputSlot & VInputSlot) => vue.VNodeChild) | undefined;
        "v-slot:label"?: false | ((args_0: DefaultInputSlot & VInputSlot) => vue.VNodeChild) | undefined;
        "v-slot:loader"?: false | ((args_0: LoaderSlotProps) => vue.VNodeChild) | undefined;
        "v-slot:default"?: false | ((args_0: VFieldSlot) => vue.VNodeChild) | undefined;
    };
}, "id" | "color" | "loading" | "label" | "$children" | "theme" | "v-slots" | keyof vue.VNodeProps | keyof vue.AllowedComponentProps | "v-slot:default" | "modelValue" | "onUpdate:modelValue" | "bgColor" | "appendInnerIcon" | "prependInnerIcon" | "onClick:clear" | "onClick:appendInner" | "onClick:prependInner" | "onUpdate:focused" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | "v-slot:label" | "v-slot:loader" | "onClick:control" | ("reverse" | "error" | "active" | "disabled" | "variant" | "clearIcon" | "focused" | "clearable" | "dirty" | "persistentClear" | "singleLine")>, `$${any}`>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
    'click:control': (e: MouseEvent) => boolean;
    'click:input': (e: MouseEvent) => boolean;
    'update:focused': (focused: boolean) => boolean;
    'update:modelValue': (val: string) => boolean;
}, "$children" | "v-slots" | "v-slot:default" | "v-slot:prepend" | "v-slot:append" | "v-slot:details" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | "v-slot:label" | "v-slot:loader">, string, {
    reverse: boolean;
    type: string;
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
}> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new () => {
    $props: SlotsToProps<Omit<VInputSlots & VFieldSlots, 'default'> & MakeSlots<{
        default: [];
    }>>;
});
declare type VTextField = InstanceType<typeof VTextField>;

export { VTextField };
