import { createVNode as _createVNode } from "vue";
// Styles
import "./VSelectionControlGroup.css";

// Composables
import { IconValue } from "../../composables/icons.mjs";
import { makeDensityProps } from "../../composables/density.mjs";
import { makeThemeProps } from "../../composables/theme.mjs";
import { provideDefaults } from "../../composables/defaults.mjs";
import { useProxiedModel } from "../../composables/proxiedModel.mjs"; // Utilities
import { computed, onScopeDispose, provide, toRef } from 'vue';
import { deepEqual, defineComponent, getUid, propsFactory, useRender } from "../../util/index.mjs"; // Types
export const VSelectionControlGroupSymbol = Symbol.for('vuetify:selection-control-group');
export const makeSelectionControlGroupProps = propsFactory({
  color: String,
  disabled: Boolean,
  error: Boolean,
  id: String,
  inline: Boolean,
  falseIcon: IconValue,
  trueIcon: IconValue,
  ripple: {
    type: Boolean,
    default: true
  },
  multiple: {
    type: Boolean,
    default: null
  },
  name: String,
  readonly: Boolean,
  modelValue: null,
  type: String,
  valueComparator: {
    type: Function,
    default: deepEqual
  },
  ...makeThemeProps(),
  ...makeDensityProps()
}, 'v-selection-control-group');
export const VSelectionControlGroup = defineComponent({
  name: 'VSelectionControlGroup',
  props: {
    defaultsTarget: {
      type: String,
      default: 'VSelectionControl'
    },
    ...makeSelectionControlGroupProps()
  },
  emits: {
    'update:modelValue': val => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const modelValue = useProxiedModel(props, 'modelValue');
    const uid = getUid();
    const id = computed(() => props.id || `v-selection-control-group-${uid}`);
    const name = computed(() => props.name || id.value);
    const updateHandlers = new Set();
    provide(VSelectionControlGroupSymbol, {
      modelValue,
      forceUpdate: () => {
        updateHandlers.forEach(fn => fn());
      },
      onForceUpdate: cb => {
        updateHandlers.add(cb);
        onScopeDispose(() => {
          updateHandlers.delete(cb);
        });
      }
    });
    provideDefaults({
      [props.defaultsTarget]: {
        color: toRef(props, 'color'),
        disabled: toRef(props, 'disabled'),
        density: toRef(props, 'density'),
        error: toRef(props, 'error'),
        inline: toRef(props, 'inline'),
        modelValue,
        multiple: computed(() => !!props.multiple || props.multiple == null && Array.isArray(modelValue.value)),
        name,
        falseIcon: toRef(props, 'falseIcon'),
        trueIcon: toRef(props, 'trueIcon'),
        readonly: toRef(props, 'readonly'),
        ripple: toRef(props, 'ripple'),
        type: toRef(props, 'type'),
        valueComparator: toRef(props, 'valueComparator')
      }
    });
    useRender(() => {
      var _slots$default;
      return _createVNode("div", {
        "class": ['v-selection-control-group', {
          'v-selection-control-group--inline': props.inline
        }],
        "role": props.type === 'radio' ? 'radiogroup' : undefined
      }, [(_slots$default = slots.default) == null ? void 0 : _slots$default.call(slots)]);
    });
    return {};
  }
});
//# sourceMappingURL=VSelectionControlGroup.mjs.map