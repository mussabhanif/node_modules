import { withDirectives as _withDirectives, resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
/* eslint-disable complexity */

// Styles
import "./VCard.css";

// Components
import { VCardActions } from "./VCardActions.mjs";
import { VCardItem } from "./VCardItem.mjs";
import { VCardText } from "./VCardText.mjs";
import { VDefaultsProvider } from "../VDefaultsProvider/index.mjs";
import { VImg } from "../VImg/index.mjs"; // Directives
import { Ripple } from "../../directives/ripple/index.mjs"; // Composables
import { genOverlays, makeVariantProps, useVariant } from "../../composables/variant.mjs";
import { IconValue } from "../../composables/icons.mjs";
import { LoaderSlot, makeLoaderProps, useLoader } from "../../composables/loader.mjs";
import { makeBorderProps, useBorder } from "../../composables/border.mjs";
import { makeDensityProps, useDensity } from "../../composables/density.mjs";
import { makeDimensionProps, useDimension } from "../../composables/dimensions.mjs";
import { makeElevationProps, useElevation } from "../../composables/elevation.mjs";
import { makeLocationProps, useLocation } from "../../composables/location.mjs";
import { makePositionProps, usePosition } from "../../composables/position.mjs";
import { makeRoundedProps, useRounded } from "../../composables/rounded.mjs";
import { makeRouterProps, useLink } from "../../composables/router.mjs";
import { makeTagProps } from "../../composables/tag.mjs";
import { makeThemeProps, provideTheme } from "../../composables/theme.mjs"; // Utilities
import { defineComponent, useRender } from "../../util/index.mjs";
import { computed } from 'vue';
export const VCard = defineComponent({
  name: 'VCard',
  directives: {
    Ripple
  },
  props: {
    appendAvatar: String,
    appendIcon: IconValue,
    disabled: Boolean,
    flat: Boolean,
    hover: Boolean,
    image: String,
    link: {
      type: Boolean,
      default: undefined
    },
    prependAvatar: String,
    prependIcon: IconValue,
    ripple: Boolean,
    subtitle: String,
    text: String,
    title: String,
    ...makeThemeProps(),
    ...makeBorderProps(),
    ...makeDensityProps(),
    ...makeDimensionProps(),
    ...makeElevationProps(),
    ...makeLoaderProps(),
    ...makeLocationProps(),
    ...makePositionProps(),
    ...makeRoundedProps(),
    ...makeRouterProps(),
    ...makeTagProps(),
    ...makeVariantProps({
      variant: 'elevated'
    })
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      loaderClasses
    } = useLoader(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      positionClasses
    } = usePosition(props);
    const {
      roundedClasses
    } = useRounded(props);
    const link = useLink(props, attrs);
    const isLink = computed(() => props.link !== false && link.isLink.value);
    const isClickable = computed(() => !props.disabled && props.link !== false && (props.link || link.isClickable.value));
    useRender(() => {
      var _slots$image, _slots$text, _slots$default;
      const Tag = isLink.value ? 'a' : props.tag;
      const hasTitle = !!(slots.title || props.title);
      const hasSubtitle = !!(slots.subtitle || props.subtitle);
      const hasHeader = hasTitle || hasSubtitle;
      const hasAppend = !!(slots.append || props.appendAvatar || props.appendIcon);
      const hasPrepend = !!(slots.prepend || props.prependAvatar || props.prependIcon);
      const hasImage = !!(slots.image || props.image);
      const hasCardItem = hasHeader || hasPrepend || hasAppend;
      const hasText = !!(slots.text || props.text);
      return _withDirectives(_createVNode(Tag, {
        "class": ['v-card', {
          'v-card--disabled': props.disabled,
          'v-card--flat': props.flat,
          'v-card--hover': props.hover && !(props.disabled || props.flat),
          'v-card--link': isClickable.value
        }, themeClasses.value, borderClasses.value, colorClasses.value, densityClasses.value, elevationClasses.value, loaderClasses.value, positionClasses.value, roundedClasses.value, variantClasses.value],
        "style": [colorStyles.value, dimensionStyles.value, locationStyles.value],
        "href": link.href.value,
        "onClick": isClickable.value && link.navigate,
        "tabindex": props.disabled ? -1 : undefined
      }, {
        default: () => [hasImage && _createVNode(VDefaultsProvider, {
          "key": "image",
          "defaults": {
            VImg: {
              cover: true,
              src: props.image
            }
          }
        }, {
          default: () => [_createVNode("div", {
            "class": "v-card__image"
          }, [((_slots$image = slots.image) == null ? void 0 : _slots$image.call(slots)) ?? _createVNode(VImg, null, null)])]
        }), _createVNode(LoaderSlot, {
          "name": "v-card",
          "active": !!props.loading,
          "color": typeof props.loading === 'boolean' ? undefined : props.loading
        }, {
          default: slots.loader
        }), hasCardItem && _createVNode(VCardItem, {
          "key": "item",
          "prependAvatar": props.prependAvatar,
          "prependIcon": props.prependIcon,
          "title": props.title,
          "subtitle": props.subtitle,
          "appendAvatar": props.appendAvatar,
          "appendIcon": props.appendIcon
        }, {
          default: slots.item,
          prepend: slots.prepend,
          title: slots.title,
          subtitle: slots.subtitle,
          append: slots.append
        }), hasText && _createVNode(VCardText, {
          "key": "text"
        }, {
          default: () => [((_slots$text = slots.text) == null ? void 0 : _slots$text.call(slots)) ?? props.text]
        }), (_slots$default = slots.default) == null ? void 0 : _slots$default.call(slots), slots.actions && _createVNode(VCardActions, null, {
          default: slots.actions
        }), genOverlays(isClickable.value, 'v-card')]
      }), [[_resolveDirective("ripple"), isClickable.value]]);
    });
    return {};
  }
});
//# sourceMappingURL=VCard.mjs.map