import { createVNode as _createVNode } from "vue";
// Styles
import "./VLayout.css";

// Utilities
import { defineComponent, useRender } from "../../util/index.mjs"; // Composables
import { createLayout, makeLayoutProps } from "../../composables/layout.mjs";
export const VLayout = defineComponent({
  name: 'VLayout',
  props: makeLayoutProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      layoutClasses,
      layoutStyles,
      getLayoutItem,
      items,
      layoutRef
    } = createLayout(props);
    useRender(() => {
      var _slots$default;
      return _createVNode("div", {
        "ref": layoutRef,
        "class": layoutClasses.value,
        "style": layoutStyles.value
      }, [(_slots$default = slots.default) == null ? void 0 : _slots$default.call(slots)]);
    });
    return {
      getLayoutItem,
      items
    };
  }
});
//# sourceMappingURL=VLayout.mjs.map