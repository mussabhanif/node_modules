import { mergeProps as _mergeProps, resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
// Styles
import "./VSnackbar.css";

// Components
import { VDefaultsProvider } from "../VDefaultsProvider/index.mjs";
import { VOverlay } from "../VOverlay/index.mjs"; // Composables
import { genOverlays, makeVariantProps, useVariant } from "../../composables/variant.mjs";
import { makeLocationProps, useLocation } from "../../composables/location.mjs";
import { makePositionProps, usePosition } from "../../composables/position.mjs";
import { makeRoundedProps, useRounded } from "../../composables/rounded.mjs";
import { makeThemeProps, provideTheme } from "../../composables/theme.mjs";
import { useProxiedModel } from "../../composables/proxiedModel.mjs";
import { useScopeId } from "../../composables/scopeId.mjs";
import { forwardRefs } from "../../composables/forwardRefs.mjs"; // Utilities
import { mergeProps, onMounted, ref, watch } from 'vue';
import { genericComponent, omit, useRender } from "../../util/index.mjs";
import { filterVOverlayProps, makeVOverlayProps } from "../VOverlay/VOverlay.mjs"; // Types
export const VSnackbar = genericComponent()({
  name: 'VSnackbar',
  props: {
    multiLine: Boolean,
    timeout: {
      type: [Number, String],
      default: 5000
    },
    vertical: Boolean,
    ...makeLocationProps({
      location: 'bottom'
    }),
    ...makePositionProps(),
    ...makeRoundedProps(),
    ...makeVariantProps(),
    ...makeThemeProps(),
    ...omit(makeVOverlayProps({
      transition: 'v-snackbar-transition'
    }), ['persistent', 'noClickAnimation', 'scrim', 'scrollStrategy'])
  },
  emits: {
    'update:modelValue': v => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const isActive = useProxiedModel(props, 'modelValue');
    const {
      locationStyles
    } = useLocation(props);
    const {
      positionClasses
    } = usePosition(props);
    const {
      scopeId
    } = useScopeId();
    const {
      themeClasses
    } = provideTheme(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(props);
    const {
      roundedClasses
    } = useRounded(props);
    const overlay = ref();
    watch(isActive, startTimeout);
    watch(() => props.timeout, startTimeout);
    onMounted(() => {
      if (isActive.value) startTimeout();
    });
    let activeTimeout = -1;
    function startTimeout() {
      window.clearTimeout(activeTimeout);
      const timeout = Number(props.timeout);
      if (!isActive.value || timeout === -1) return;
      activeTimeout = window.setTimeout(() => {
        isActive.value = false;
      }, timeout);
    }
    function onPointerenter() {
      window.clearTimeout(activeTimeout);
    }
    useRender(() => {
      const [overlayProps] = filterVOverlayProps(props);
      return _createVNode(VOverlay, _mergeProps({
        "ref": overlay,
        "class": ['v-snackbar', {
          'v-snackbar--active': isActive.value,
          'v-snackbar--multi-line': props.multiLine && !props.vertical,
          'v-snackbar--vertical': props.vertical
        }, positionClasses.value]
      }, overlayProps, {
        "modelValue": isActive.value,
        "onUpdate:modelValue": $event => isActive.value = $event,
        "contentProps": mergeProps({
          style: locationStyles.value
        }, overlayProps.contentProps),
        "persistent": true,
        "noClickAnimation": true,
        "scrim": false,
        "scrollStrategy": "none"
      }, scopeId), {
        default: () => [_createVNode("div", {
          "class": ['v-snackbar__wrapper', themeClasses.value, colorClasses.value, roundedClasses.value, variantClasses.value],
          "style": [colorStyles.value],
          "onPointerenter": onPointerenter,
          "onPointerleave": startTimeout
        }, [genOverlays(false, 'v-snackbar'), slots.default && _createVNode("div", {
          "class": "v-snackbar__content",
          "role": "status",
          "aria-live": "polite"
        }, [slots.default()]), slots.actions && _createVNode(VDefaultsProvider, {
          "defaults": {
            VBtn: {
              variant: 'text',
              ripple: false
            }
          }
        }, {
          default: () => [_createVNode("div", {
            "class": "v-snackbar__actions"
          }, [slots.actions()])]
        })])],
        activator: slots.activator
      });
    });
    return forwardRefs({}, overlay);
  }
});
//# sourceMappingURL=VSnackbar.mjs.map