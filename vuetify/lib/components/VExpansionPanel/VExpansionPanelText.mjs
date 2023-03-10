import { withDirectives as _withDirectives, vShow as _vShow, createVNode as _createVNode } from "vue";
// Components
import { VExpandTransition } from "../transitions/index.mjs";
import { VExpansionPanelSymbol } from "./VExpansionPanels.mjs"; // Composables
import { makeLazyProps, useLazy } from "../../composables/lazy.mjs"; // Utilities
import { defineComponent, useRender } from "../../util/index.mjs";
import { inject } from 'vue';
export const VExpansionPanelText = defineComponent({
  name: 'VExpansionPanelText',
  props: {
    ...makeLazyProps()
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const expansionPanel = inject(VExpansionPanelSymbol);
    if (!expansionPanel) throw new Error('[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel');
    const {
      hasContent,
      onAfterLeave
    } = useLazy(props, expansionPanel.isSelected);
    useRender(() => {
      var _slots$default;
      return _createVNode(VExpandTransition, {
        "onAfterLeave": onAfterLeave
      }, {
        default: () => [_withDirectives(_createVNode("div", {
          "class": "v-expansion-panel-text"
        }, [slots.default && hasContent.value && _createVNode("div", {
          "class": "v-expansion-panel-text__wrapper"
        }, [(_slots$default = slots.default) == null ? void 0 : _slots$default.call(slots)])]), [[_vShow, expansionPanel.isSelected.value]])]
      });
    });
    return {};
  }
});
//# sourceMappingURL=VExpansionPanelText.mjs.map