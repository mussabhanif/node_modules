import * as vue from 'vue';
import { JSXComponent, PropType, ComputedRef, Ref } from 'vue';

declare type IconValue = string | JSXComponent;
declare const IconValue: PropType<IconValue>;

declare type EventProp<T = (...args: any[]) => any> = T | T[];
declare const EventProp: PropType<EventProp<(...args: any[]) => any>>;

interface LoaderSlotProps {
    color: string | undefined;
    isActive: boolean;
}

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
declare const VField: {
    new (...args: any[]): {
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
        }> & Omit<Readonly<vue.ExtractPropTypes<Omit<{
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
        $options: vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<Omit<{
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
            controlRef: Ref<HTMLElement | undefined>;
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
        $nextTick: typeof vue.nextTick;
        $watch(source: string | Function, cb: Function, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & Readonly<vue.ExtractPropTypes<Omit<{
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
        controlRef: Ref<HTMLElement | undefined>;
    }> & {} & vue.ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<Omit<{
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
    controlRef: Ref<HTMLElement | undefined>;
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
}> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new <T>() => {
    $props: {
        modelValue?: T | undefined;
        'onUpdate:modelValue'?: ((val: T) => any) | undefined;
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
});
declare type VField = InstanceType<typeof VField>;

declare const VFieldLabel: vue.DefineComponent<{
    floating: BooleanConstructor;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    floating: BooleanConstructor;
}>>, {
    floating: boolean;
}>;
declare type VFieldLabel = InstanceType<typeof VFieldLabel>;

export { VField, VFieldLabel };
