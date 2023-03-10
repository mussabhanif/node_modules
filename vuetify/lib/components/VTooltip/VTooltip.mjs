import { createVNode as _createVNode, mergeProps as _mergeProps } from "vue";
// Styles
import "./VTooltip.css";

// Components
import { VOverlay } from "../VOverlay/index.mjs"; // Composables
import { useProxiedModel } from "../../composables/proxiedModel.mjs";
import { useScopeId } from "../../composables/scopeId.mjs";
import { forwardRefs } from "../../composables/forwardRefs.mjs"; // Utilities
import { computed, mergeProps, ref } from 'vue';
import { genericComponent, getUid, omit, useRender } from "../../util/index.mjs";
import { filterVOverlayProps, makeVOverlayProps } from "../VOverlay/VOverlay.mjs"; // Types
export const VTooltip = genericComponent()({
  name: 'VTooltip',
  props: {
    id: String,
    text: String,
    ...omit(makeVOverlayProps({
      closeOnBack: false,
      location: 'end',
      locationStrategy: 'connected',
      minWidth: 0,
      offset: 10,
      openOnClick: false,
      openOnHover: true,
      origin: 'auto',
      scrim: false,
      scrollStrategy: 'reposition',
      transition: false
    }), ['absolute', 'persistent', 'eager'])
  },
  emits: {
    'update:modelValue': value => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const isActive = useProxiedModel(props, 'modelValue');
    const {
      scopeId
    } = useScopeId();
    const uid = getUid();
    const id = computed(() => props.id || `v-tooltip-${uid}`);
    const overlay = ref();
    const location = computed(() => {
      return props.location.split(' ').length > 1 ? props.location : props.location + ' center';
    });
    const origin = computed(() => {
      return props.origin === 'auto' || props.origin === 'overlap' || props.origin.split(' ').length > 1 || props.location.split(' ').length > 1 ? props.origin : props.origin + ' center';
    });
    const transition = computed(() => {
      if (props.transition) return props.transition;
      return isActive.value ? 'scale-transition' : 'fade-transition';
    });
    useRender(() => {
      const [overlayProps] = filterVOverlayProps(props);
      return _createVNode(VOverlay, _mergeProps({
        "ref": overlay,
        "class": ['v-tooltip'],
        "id": id.value
      }, overlayProps, {
        "modelValue": isActive.value,
        "onUpdate:modelValue": $event => isActive.value = $event,
        "transition": transition.value,
        "absolute": true,
        "location": location.value,
        "origin": origin.value,
        "persistent": true,
        "role": "tooltip",
        "eager": true,
        "activatorProps": mergeProps({
          'aria-describedby': id.value
        }, props.activatorProps),
        "_disableGlobalStack": true
      }, scopeId), {
        activator: slots.activator,
        default: function () {
          var _slots$default;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return ((_slots$default = slots.default) == null ? void 0 : _slots$default.call(slots, ...args)) ?? props.text;
        }
      });
    });
    return forwardRefs({}, overlay);
  }
});
//# sourceMappingURL=VTooltip.mjs.map