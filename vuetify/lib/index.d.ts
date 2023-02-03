import * as vue from 'vue';
import { Ref, DeepReadonly, JSXComponent, PropType, CSSProperties, App } from 'vue';

interface LocaleMessages {
    [key: string]: LocaleMessages | string;
}
interface LocaleOptions {
    messages?: LocaleMessages;
    locale?: string;
    fallback?: string;
    adapter?: LocaleInstance;
}
interface LocaleInstance {
    name: string;
    messages: Ref<LocaleMessages>;
    current: Ref<string>;
    fallback: Ref<string>;
    t: (key: string, ...params: unknown[]) => string;
    n: (value: number) => string;
    provide: (props: LocaleOptions) => LocaleInstance;
}
declare function useLocale(): LocaleInstance & RtlInstance;
interface RtlOptions {
    rtl?: Record<string, boolean>;
}
interface RtlInstance {
    isRtl: Ref<boolean>;
    rtl: Ref<Record<string, boolean>>;
    rtlClasses: Ref<string>;
}
declare function useRtl(): {
    isRtl: Ref<boolean>;
    rtlClasses: Ref<string>;
};

declare type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
declare type ThemeOptions = false | {
    cspNonce?: string;
    defaultTheme?: string;
    variations?: false | VariationsOptions;
    themes?: Record<string, ThemeDefinition>;
};
declare type ThemeDefinition = DeepPartial<InternalThemeDefinition>;
interface VariationsOptions {
    colors: string[];
    lighten: number;
    darken: number;
}
interface InternalThemeDefinition {
    dark: boolean;
    colors: Colors;
    variables: Record<string, string | number>;
}
interface Colors extends BaseColors, OnColors {
    [key: string]: string;
}
interface BaseColors {
    background: string;
    surface: string;
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    error: string;
    info: string;
}
interface OnColors {
    'on-background': string;
    'on-surface': string;
    'on-primary': string;
    'on-secondary': string;
    'on-success': string;
    'on-warning': string;
    'on-error': string;
    'on-info': string;
}
interface ThemeInstance {
    readonly isDisabled: boolean;
    readonly themes: Ref<Record<string, InternalThemeDefinition>>;
    readonly name: Readonly<Ref<string>>;
    readonly current: DeepReadonly<Ref<InternalThemeDefinition>>;
    readonly computedThemes: DeepReadonly<Ref<Record<string, InternalThemeDefinition>>>;
    readonly themeClasses: Readonly<Ref<string | undefined>>;
    readonly styles: Readonly<Ref<string>>;
    readonly global: {
        readonly name: Ref<string>;
        readonly current: DeepReadonly<Ref<InternalThemeDefinition>>;
    };
}
declare function useTheme(): ThemeInstance;

declare type DisplayBreakpoint = keyof DisplayThresholds;
interface DisplayThresholds {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
}
interface DisplayOptions {
    mobileBreakpoint?: number | DisplayBreakpoint;
    thresholds?: Partial<DisplayThresholds>;
}
interface DisplayPlatform {
    android: boolean;
    ios: boolean;
    cordova: boolean;
    electron: boolean;
    chrome: boolean;
    edge: boolean;
    firefox: boolean;
    opera: boolean;
    win: boolean;
    mac: boolean;
    linux: boolean;
    touch: boolean;
    ssr: boolean;
}
interface DisplayInstance {
    xs: Ref<boolean>;
    sm: Ref<boolean>;
    md: Ref<boolean>;
    lg: Ref<boolean>;
    xl: Ref<boolean>;
    xxl: Ref<boolean>;
    smAndUp: Ref<boolean>;
    mdAndUp: Ref<boolean>;
    lgAndUp: Ref<boolean>;
    xlAndUp: Ref<boolean>;
    smAndDown: Ref<boolean>;
    mdAndDown: Ref<boolean>;
    lgAndDown: Ref<boolean>;
    xlAndDown: Ref<boolean>;
    name: Ref<DisplayBreakpoint>;
    height: Ref<number>;
    width: Ref<number>;
    mobile: Ref<boolean>;
    mobileBreakpoint: Ref<number | DisplayBreakpoint>;
    platform: Ref<DisplayPlatform>;
    thresholds: Ref<DisplayThresholds>;
    update(): void;
}
declare function useDisplay(): DisplayInstance;

interface DefaultsInstance {
    [key: string]: undefined | Record<string, unknown>;
    global?: Record<string, unknown>;
}
declare type DefaultsOptions = Partial<DefaultsInstance>;

declare type IconValue = string | JSXComponent;
declare const IconValue: PropType<IconValue>;
interface IconAliases {
    [name: string]: IconValue;
    complete: IconValue;
    cancel: IconValue;
    close: IconValue;
    delete: IconValue;
    clear: IconValue;
    success: IconValue;
    info: IconValue;
    warning: IconValue;
    error: IconValue;
    prev: IconValue;
    next: IconValue;
    checkboxOn: IconValue;
    checkboxOff: IconValue;
    checkboxIndeterminate: IconValue;
    delimiter: IconValue;
    sort: IconValue;
    expand: IconValue;
    menu: IconValue;
    subgroup: IconValue;
    dropdown: IconValue;
    radioOn: IconValue;
    radioOff: IconValue;
    edit: IconValue;
    ratingEmpty: IconValue;
    ratingFull: IconValue;
    ratingHalf: IconValue;
    loading: IconValue;
    first: IconValue;
    last: IconValue;
    unfold: IconValue;
    file: IconValue;
    plus: IconValue;
    minus: IconValue;
}
interface IconProps {
    tag: string;
    icon: IconValue;
    disabled?: Boolean;
}
declare type IconComponent = JSXComponent<IconProps>;
interface IconSet {
    component: IconComponent;
}
declare type IconOptions = {
    defaultSet: string;
    aliases?: Partial<IconAliases>;
    sets: Record<string, IconSet>;
};

declare type Position = 'top' | 'left' | 'right' | 'bottom';
interface Layer {
    top: number;
    bottom: number;
    left: number;
    right: number;
}
interface LayoutItem extends Layer {
    id: string;
    size: number;
    position: Position;
}
declare function useLayout(): {
    getLayoutItem: (id: string) => LayoutItem | undefined;
    mainRect: Ref<Layer>;
    mainStyles: Ref<CSSProperties>;
};

interface FieldValidationResult {
    id: number | string;
    errorMessages: string[];
}
interface FormValidationResult {
    valid: boolean;
    errors: FieldValidationResult[];
}
interface SubmitEventPromise extends SubmitEvent, Promise<FormValidationResult> {
}

interface VuetifyOptions {
    aliases?: Record<string, any>;
    blueprint?: Blueprint;
    components?: Record<string, any>;
    directives?: Record<string, any>;
    defaults?: DefaultsOptions;
    display?: DisplayOptions;
    theme?: ThemeOptions;
    icons?: IconOptions;
    locale?: LocaleOptions & RtlOptions;
    ssr?: boolean;
}
interface Blueprint extends Omit<VuetifyOptions, 'blueprint'> {
}
declare function createVuetify(vuetify?: VuetifyOptions): {
    install: (app: App) => void;
    defaults: vue.Ref<DefaultsInstance>;
    display: DisplayInstance;
    theme: ThemeInstance & {
        install: (app: App<any>) => void;
    };
    icons: Record<string, any>;
    locale: {
        isRtl: vue.Ref<boolean>;
        rtl: vue.Ref<Record<string, boolean>>;
        rtlClasses: vue.Ref<string>;
        name: string;
        messages: vue.Ref<LocaleMessages>;
        current: vue.Ref<string>;
        fallback: vue.Ref<string>;
        t: (key: string, ...params: unknown[]) => string;
        n: (value: number) => string;
        provide: (props: LocaleOptions) => LocaleInstance;
    };
};
declare namespace createVuetify {
    var version: string;
}
declare const version: string;

export { Blueprint, DefaultsInstance, DisplayBreakpoint, DisplayInstance, DisplayThresholds, IconAliases, IconOptions, IconProps, IconSet, LocaleInstance, LocaleMessages, LocaleOptions, RtlInstance, RtlOptions, SubmitEventPromise, ThemeDefinition, ThemeInstance, VuetifyOptions, createVuetify, useDisplay, useLayout, useLocale, useRtl, useTheme, version };

import type { ComponentPublicInstance, FunctionalComponent, UnwrapNestedRefs, VNodeChild } from 'vue'


declare global {
  namespace JSX {
    interface ElementChildrenAttribute {
      $children: {}
    }
  }
}

declare module 'vue' {
  export type JSXComponent<Props = any> = { new (): ComponentPublicInstance<Props> } | FunctionalComponent<Props>
}

declare module '@vue/runtime-dom' {
  export interface HTMLAttributes {
    $children?: VNodeChild
  }
  export interface SVGAttributes {
    $children?: VNodeChild
  }
}

declare module '@vue/runtime-core' {
  interface Vuetify {
    defaults: DefaultsInstance
    display: UnwrapNestedRefs<DisplayInstance>
    theme: UnwrapNestedRefs<ThemeInstance>
    icons: IconOptions
    locale: UnwrapNestedRefs<LocaleInstance & RtlInstance>
  }

  export interface ComponentCustomProperties {
    $vuetify: Vuetify
  }

  export interface GlobalComponents {
    VDefaultsProvider: typeof import('vuetify/components')['VDefaultsProvider']
    VContainer: typeof import('vuetify/components')['VContainer']
    VCol: typeof import('vuetify/components')['VCol']
    VRow: typeof import('vuetify/components')['VRow']
    VSpacer: typeof import('vuetify/components')['VSpacer']
    VHover: typeof import('vuetify/components')['VHover']
    VForm: typeof import('vuetify/components')['VForm']
    VLayout: typeof import('vuetify/components')['VLayout']
    VLayoutItem: typeof import('vuetify/components')['VLayoutItem']
    VLazy: typeof import('vuetify/components')['VLazy']
    VLocaleProvider: typeof import('vuetify/components')['VLocaleProvider']
    VNoSsr: typeof import('vuetify/components')['VNoSsr']
    VParallax: typeof import('vuetify/components')['VParallax']
    VRadio: typeof import('vuetify/components')['VRadio']
    VRangeSlider: typeof import('vuetify/components')['VRangeSlider']
    VResponsive: typeof import('vuetify/components')['VResponsive']
    VFabTransition: typeof import('vuetify/components')['VFabTransition']
    VDialogBottomTransition: typeof import('vuetify/components')['VDialogBottomTransition']
    VDialogTopTransition: typeof import('vuetify/components')['VDialogTopTransition']
    VFadeTransition: typeof import('vuetify/components')['VFadeTransition']
    VScaleTransition: typeof import('vuetify/components')['VScaleTransition']
    VScrollXTransition: typeof import('vuetify/components')['VScrollXTransition']
    VScrollXReverseTransition: typeof import('vuetify/components')['VScrollXReverseTransition']
    VScrollYTransition: typeof import('vuetify/components')['VScrollYTransition']
    VScrollYReverseTransition: typeof import('vuetify/components')['VScrollYReverseTransition']
    VSlideXTransition: typeof import('vuetify/components')['VSlideXTransition']
    VSlideXReverseTransition: typeof import('vuetify/components')['VSlideXReverseTransition']
    VSlideYTransition: typeof import('vuetify/components')['VSlideYTransition']
    VSlideYReverseTransition: typeof import('vuetify/components')['VSlideYReverseTransition']
    VExpandTransition: typeof import('vuetify/components')['VExpandTransition']
    VExpandXTransition: typeof import('vuetify/components')['VExpandXTransition']
    VDialogTransition: typeof import('vuetify/components')['VDialogTransition']
    VApp: typeof import('vuetify/components')['VApp']
    VAlert: typeof import('vuetify/components')['VAlert']
    VAlertTitle: typeof import('vuetify/components')['VAlertTitle']
    VThemeProvider: typeof import('vuetify/components')['VThemeProvider']
    VAutocomplete: typeof import('vuetify/components')['VAutocomplete']
    VAvatar: typeof import('vuetify/components')['VAvatar']
    VValidation: typeof import('vuetify/components')['VValidation']
    VBadge: typeof import('vuetify/components')['VBadge']
    VBanner: typeof import('vuetify/components')['VBanner']
    VBannerActions: typeof import('vuetify/components')['VBannerActions']
    VBannerText: typeof import('vuetify/components')['VBannerText']
    VBottomNavigation: typeof import('vuetify/components')['VBottomNavigation']
    VBreadcrumbs: typeof import('vuetify/components')['VBreadcrumbs']
    VBreadcrumbsItem: typeof import('vuetify/components')['VBreadcrumbsItem']
    VBreadcrumbsDivider: typeof import('vuetify/components')['VBreadcrumbsDivider']
    VBtn: typeof import('vuetify/components')['VBtn']
    VBtnGroup: typeof import('vuetify/components')['VBtnGroup']
    VBtnToggle: typeof import('vuetify/components')['VBtnToggle']
    VCard: typeof import('vuetify/components')['VCard']
    VCardActions: typeof import('vuetify/components')['VCardActions']
    VCardItem: typeof import('vuetify/components')['VCardItem']
    VCardSubtitle: typeof import('vuetify/components')['VCardSubtitle']
    VCardText: typeof import('vuetify/components')['VCardText']
    VCardTitle: typeof import('vuetify/components')['VCardTitle']
    VCarousel: typeof import('vuetify/components')['VCarousel']
    VCarouselItem: typeof import('vuetify/components')['VCarouselItem']
    VCheckbox: typeof import('vuetify/components')['VCheckbox']
    VCheckboxBtn: typeof import('vuetify/components')['VCheckboxBtn']
    VChipGroup: typeof import('vuetify/components')['VChipGroup']
    VChip: typeof import('vuetify/components')['VChip']
    VCode: typeof import('vuetify/components')['VCode']
    VColorPicker: typeof import('vuetify/components')['VColorPicker']
    VCombobox: typeof import('vuetify/components')['VCombobox']
    VCounter: typeof import('vuetify/components')['VCounter']
    VDialog: typeof import('vuetify/components')['VDialog']
    VDivider: typeof import('vuetify/components')['VDivider']
    VField: typeof import('vuetify/components')['VField']
    VFieldLabel: typeof import('vuetify/components')['VFieldLabel']
    VExpansionPanels: typeof import('vuetify/components')['VExpansionPanels']
    VExpansionPanel: typeof import('vuetify/components')['VExpansionPanel']
    VExpansionPanelText: typeof import('vuetify/components')['VExpansionPanelText']
    VExpansionPanelTitle: typeof import('vuetify/components')['VExpansionPanelTitle']
    VFooter: typeof import('vuetify/components')['VFooter']
    VFileInput: typeof import('vuetify/components')['VFileInput']
    VIcon: typeof import('vuetify/components')['VIcon']
    VComponentIcon: typeof import('vuetify/components')['VComponentIcon']
    VSvgIcon: typeof import('vuetify/components')['VSvgIcon']
    VLigatureIcon: typeof import('vuetify/components')['VLigatureIcon']
    VClassIcon: typeof import('vuetify/components')['VClassIcon']
    VImg: typeof import('vuetify/components')['VImg']
    VInput: typeof import('vuetify/components')['VInput']
    VKbd: typeof import('vuetify/components')['VKbd']
    VLabel: typeof import('vuetify/components')['VLabel']
    VItemGroup: typeof import('vuetify/components')['VItemGroup']
    VItem: typeof import('vuetify/components')['VItem']
    VList: typeof import('vuetify/components')['VList']
    VListGroup: typeof import('vuetify/components')['VListGroup']
    VListImg: typeof import('vuetify/components')['VListImg']
    VListItem: typeof import('vuetify/components')['VListItem']
    VListItemAction: typeof import('vuetify/components')['VListItemAction']
    VListItemMedia: typeof import('vuetify/components')['VListItemMedia']
    VListItemSubtitle: typeof import('vuetify/components')['VListItemSubtitle']
    VListItemTitle: typeof import('vuetify/components')['VListItemTitle']
    VListSubheader: typeof import('vuetify/components')['VListSubheader']
    VMain: typeof import('vuetify/components')['VMain']
    VMenu: typeof import('vuetify/components')['VMenu']
    VMessages: typeof import('vuetify/components')['VMessages']
    VNavigationDrawer: typeof import('vuetify/components')['VNavigationDrawer']
    VOverlay: typeof import('vuetify/components')['VOverlay']
    VPagination: typeof import('vuetify/components')['VPagination']
    VProgressCircular: typeof import('vuetify/components')['VProgressCircular']
    VProgressLinear: typeof import('vuetify/components')['VProgressLinear']
    VRadioGroup: typeof import('vuetify/components')['VRadioGroup']
    VRating: typeof import('vuetify/components')['VRating']
    VSelect: typeof import('vuetify/components')['VSelect']
    VSelectionControl: typeof import('vuetify/components')['VSelectionControl']
    VSelectionControlGroup: typeof import('vuetify/components')['VSelectionControlGroup']
    VSheet: typeof import('vuetify/components')['VSheet']
    VSlideGroup: typeof import('vuetify/components')['VSlideGroup']
    VSlideGroupItem: typeof import('vuetify/components')['VSlideGroupItem']
    VSlider: typeof import('vuetify/components')['VSlider']
    VSnackbar: typeof import('vuetify/components')['VSnackbar']
    VSwitch: typeof import('vuetify/components')['VSwitch']
    VSystemBar: typeof import('vuetify/components')['VSystemBar']
    VTabs: typeof import('vuetify/components')['VTabs']
    VTab: typeof import('vuetify/components')['VTab']
    VTextarea: typeof import('vuetify/components')['VTextarea']
    VTextField: typeof import('vuetify/components')['VTextField']
    VTable: typeof import('vuetify/components')['VTable']
    VTimeline: typeof import('vuetify/components')['VTimeline']
    VTimelineItem: typeof import('vuetify/components')['VTimelineItem']
    VToolbar: typeof import('vuetify/components')['VToolbar']
    VToolbarTitle: typeof import('vuetify/components')['VToolbarTitle']
    VToolbarItems: typeof import('vuetify/components')['VToolbarItems']
    VTooltip: typeof import('vuetify/components')['VTooltip']
    VWindow: typeof import('vuetify/components')['VWindow']
    VWindowItem: typeof import('vuetify/components')['VWindowItem']
    VAppBar: typeof import('vuetify/components')['VAppBar']
    VAppBarNavIcon: typeof import('vuetify/components')['VAppBarNavIcon']
    VAppBarTitle: typeof import('vuetify/components')['VAppBarTitle']
  }
}
