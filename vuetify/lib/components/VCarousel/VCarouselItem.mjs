import { createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";
// Components
import { VImg } from "../VImg/index.mjs";
import { VWindowItem } from "../VWindow/index.mjs"; // Utilities
import { defineComponent, useRender } from "../../util/index.mjs";
export const VCarouselItem = defineComponent({
  name: 'VCarouselItem',
  inheritAttrs: false,
  props: {
    value: null
  },
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    useRender(() => _createVNode(VWindowItem, {
      "class": "v-carousel-item",
      "value": props.value
    }, {
      default: () => [_createVNode(VImg, attrs, slots)]
    }));
  }
});
//# sourceMappingURL=VCarouselItem.mjs.map