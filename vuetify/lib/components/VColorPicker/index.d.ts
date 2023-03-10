import * as vue from 'vue';
import { PropType } from 'vue';

declare const VColorPicker: vue.DefineComponent<{
    theme: StringConstructor;
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    canvasHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    disabled: BooleanConstructor;
    dotSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    hideCanvas: BooleanConstructor;
    hideSliders: BooleanConstructor;
    hideInputs: BooleanConstructor;
    mode: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    modes: {
        type: PropType<string[]>;
        default: () => string[];
        validator: (v: any) => boolean;
    };
    showSwatches: BooleanConstructor;
    swatches: PropType<string[][]>;
    swatchesMaxHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    modelValue: {
        type: PropType<string | Record<string, unknown> | null | undefined>;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (color: any) => true;
    'update:mode': (mode: string) => true;
}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    theme: StringConstructor;
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    canvasHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    disabled: BooleanConstructor;
    dotSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    hideCanvas: BooleanConstructor;
    hideSliders: BooleanConstructor;
    hideInputs: BooleanConstructor;
    mode: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    modes: {
        type: PropType<string[]>;
        default: () => string[];
        validator: (v: any) => boolean;
    };
    showSwatches: BooleanConstructor;
    swatches: PropType<string[][]>;
    swatchesMaxHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    modelValue: {
        type: PropType<string | Record<string, unknown> | null | undefined>;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}>> & {
    "onUpdate:modelValue"?: ((color: any) => any) | undefined;
    "onUpdate:mode"?: ((mode: string) => any) | undefined;
}, {
    width: string | number;
    disabled: boolean;
    mode: string;
    rounded: string | number | boolean;
    dotSize: string | number;
    modes: string[];
    canvasHeight: string | number;
    hideCanvas: boolean;
    hideSliders: boolean;
    hideInputs: boolean;
    showSwatches: boolean;
    swatchesMaxHeight: string | number;
}>;
declare type VColorPicker = InstanceType<typeof VColorPicker>;

export { VColorPicker };
