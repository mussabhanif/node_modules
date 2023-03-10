import { createVNode as _createVNode, mergeProps as _mergeProps, resolveDirective as _resolveDirective } from "vue";
// Components
import { makeSelectionControlProps, VSelectionControl } from "../VSelectionControl/VSelectionControl.mjs"; // Utilities
import { defineComponent, useRender } from "../../util/index.mjs";
export const VRadio = defineComponent({
  name: 'VRadio',
  props: {
    ...makeSelectionControlProps({
      falseIcon: '$radioOff',
      trueIcon: '$radioOn'
    })
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => _createVNode(VSelectionControl, _mergeProps(props, {
      "class": "v-radio",
      "type": "radio"
    }), slots));
    return {};
  }
});
//# sourceMappingURL=VRadio.mjs.map