import { createVNode as _createVNode } from "vue";
// Styles
import "./VMain.css";

// Composables
import { makeTagProps } from "../../composables/tag.mjs";
import { useLayout } from "../../composables/layout.mjs";
import { useSsrBoot } from "../../composables/ssrBoot.mjs"; // Utilities
import { defineComponent, useRender } from "../../util/index.mjs";
export const VMain = defineComponent({
  name: 'VMain',
  props: {
    scrollable: Boolean,
    ...makeTagProps({
      tag: 'main'
    })
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      mainStyles
    } = useLayout();
    const {
      ssrBootStyles
    } = useSsrBoot();
    useRender(() => {
      var _slots$default, _slots$default2;
      return _createVNode(props.tag, {
        "class": ['v-main', {
          'v-main--scrollable': props.scrollable
        }],
        "style": [mainStyles.value, ssrBootStyles.value]
      }, {
        default: () => [props.scrollable ? _createVNode("div", {
          "class": "v-main__scroller"
        }, [(_slots$default = slots.default) == null ? void 0 : _slots$default.call(slots)]) : (_slots$default2 = slots.default) == null ? void 0 : _slots$default2.call(slots)]
      });
    });
    return {};
  }
});
//# sourceMappingURL=VMain.mjs.map