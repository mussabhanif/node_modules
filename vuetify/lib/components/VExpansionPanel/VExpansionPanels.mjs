import { createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";
// Styles
import "./VExpansionPanel.css";

// Composables
import { makeGroupProps, useGroup } from "../../composables/group.mjs";
import { makeTagProps } from "../../composables/tag.mjs";
import { makeThemeProps, provideTheme } from "../../composables/theme.mjs";
import { provideDefaults } from "../../composables/defaults.mjs"; // Utilities
import { computed, toRef } from 'vue';
import { defineComponent, useRender } from "../../util/index.mjs"; // Types
export const VExpansionPanelSymbol = Symbol.for('vuetify:v-expansion-panel');
const allowedVariants = ['default', 'accordion', 'inset', 'popout'];
export const VExpansionPanels = defineComponent({
  name: 'VExpansionPanels',
  props: {
    color: String,
    variant: {
      type: String,
      default: 'default',
      validator: v => allowedVariants.includes(v)
    },
    readonly: Boolean,
    ...makeGroupProps(),
    ...makeTagProps(),
    ...makeThemeProps()
  },
  emits: {
    'update:modelValue': val => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useGroup(props, VExpansionPanelSymbol);
    const {
      themeClasses
    } = provideTheme(props);
    const variantClass = computed(() => props.variant && `v-expansion-panels--variant-${props.variant}`);
    provideDefaults({
      VExpansionPanel: {
        color: toRef(props, 'color')
      },
      VExpansionPanelTitle: {
        readonly: toRef(props, 'readonly')
      }
    });
    useRender(() => _createVNode(props.tag, {
      "class": ['v-expansion-panels', themeClasses.value, variantClass.value]
    }, slots));
    return {};
  }
});
//# sourceMappingURL=VExpansionPanels.mjs.map