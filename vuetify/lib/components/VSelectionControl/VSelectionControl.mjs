import { withDirectives as _withDirectives, resolveDirective as _resolveDirective, mergeProps as _mergeProps, createVNode as _createVNode } from "vue";
// Styles
import "./VSelectionControl.css";

// Components
import { VIcon } from "../VIcon/index.mjs";
import { VLabel } from "../VLabel/index.mjs";
import { makeSelectionControlGroupProps, VSelectionControlGroupSymbol } from "../VSelectionControlGroup/VSelectionControlGroup.mjs"; // Directives
import { Ripple } from "../../directives/ripple/index.mjs"; // Composables
import { useDensity } from "../../composables/density.mjs";
import { useProxiedModel } from "../../composables/proxiedModel.mjs";
import { useTextColor } from "../../composables/color.mjs"; // Utilities
import { computed, inject, nextTick, ref } from 'vue';
import { filterInputAttrs, genericComponent, getUid, pick, propsFactory, SUPPORTS_FOCUS_VISIBLE, useRender, wrapInArray } from "../../util/index.mjs"; // Types
export const makeSelectionControlProps = propsFactory({
  label: String,
  trueValue: null,
  falseValue: null,
  value: null,
  ...makeSelectionControlGroupProps()
}, 'v-selection-control');
export function useSelectionControl(props) {
  const group = inject(VSelectionControlGroupSymbol, undefined);
  const {
    densityClasses
  } = useDensity(props);
  const modelValue = useProxiedModel(props, 'modelValue');
  const trueValue = computed(() => props.trueValue !== undefined ? props.trueValue : props.value !== undefined ? props.value : true);
  const falseValue = computed(() => props.falseValue !== undefined ? props.falseValue : false);
  const isMultiple = computed(() => !!props.multiple || props.multiple == null && Array.isArray(modelValue.value));
  const model = computed({
    get() {
      const val = group ? group.modelValue.value : modelValue.value;
      return isMultiple.value ? val.some(v => props.valueComparator(v, trueValue.value)) : props.valueComparator(val, trueValue.value);
    },
    set(val) {
      if (props.readonly) return;
      const currentValue = val ? trueValue.value : falseValue.value;
      let newVal = currentValue;
      if (isMultiple.value) {
        newVal = val ? [...wrapInArray(modelValue.value), currentValue] : wrapInArray(modelValue.value).filter(item => !props.valueComparator(item, trueValue.value));
      }
      if (group) {
        group.modelValue.value = newVal;
      } else {
        modelValue.value = newVal;
      }
    }
  });
  const {
    textColorClasses,
    textColorStyles
  } = useTextColor(computed(() => {
    return model.value && !props.error && !props.disabled ? props.color : undefined;
  }));
  const icon = computed(() => model.value ? props.trueIcon : props.falseIcon);
  return {
    group,
    densityClasses,
    trueValue,
    falseValue,
    model,
    textColorClasses,
    textColorStyles,
    icon
  };
}
export const VSelectionControl = genericComponent()({
  name: 'VSelectionControl',
  directives: {
    Ripple
  },
  inheritAttrs: false,
  props: makeSelectionControlProps(),
  emits: {
    'update:modelValue': val => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      group,
      densityClasses,
      icon,
      model,
      textColorClasses,
      textColorStyles,
      trueValue
    } = useSelectionControl(props);
    const uid = getUid();
    const id = computed(() => props.id || `input-${uid}`);
    const isFocused = ref(false);
    const isFocusVisible = ref(false);
    const input = ref();
    group == null ? void 0 : group.onForceUpdate(() => {
      if (input.value) {
        input.value.checked = model.value;
      }
    });
    function onFocus(e) {
      isFocused.value = true;
      if (!SUPPORTS_FOCUS_VISIBLE || SUPPORTS_FOCUS_VISIBLE && e.target.matches(':focus-visible')) {
        isFocusVisible.value = true;
      }
    }
    function onBlur() {
      isFocused.value = false;
      isFocusVisible.value = false;
    }
    function onInput(e) {
      if (props.readonly && group) {
        nextTick(() => group.forceUpdate());
      }
      model.value = e.target.checked;
    }
    useRender(() => {
      var _slots$default, _slots$input;
      const label = slots.label ? slots.label({
        label: props.label,
        props: {
          for: id.value
        }
      }) : props.label;
      const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
      return _createVNode("div", _mergeProps({
        "class": ['v-selection-control', {
          'v-selection-control--dirty': model.value,
          'v-selection-control--disabled': props.disabled,
          'v-selection-control--error': props.error,
          'v-selection-control--focused': isFocused.value,
          'v-selection-control--focus-visible': isFocusVisible.value,
          'v-selection-control--inline': props.inline
        }, densityClasses.value]
      }, rootAttrs), [_createVNode("div", {
        "class": ['v-selection-control__wrapper', textColorClasses.value],
        "style": textColorStyles.value
      }, [(_slots$default = slots.default) == null ? void 0 : _slots$default.call(slots), _withDirectives(_createVNode("div", {
        "class": ['v-selection-control__input']
      }, [icon.value && _createVNode(VIcon, {
        "key": "icon",
        "icon": icon.value
      }, null), _createVNode("input", _mergeProps({
        "ref": input,
        "checked": model.value,
        "disabled": props.disabled,
        "id": id.value,
        "onBlur": onBlur,
        "onFocus": onFocus,
        "onInput": onInput,
        "aria-disabled": props.readonly,
        "type": props.type,
        "value": trueValue.value,
        "name": props.name,
        "aria-checked": props.type === 'checkbox' ? model.value : undefined
      }, inputAttrs), null), (_slots$input = slots.input) == null ? void 0 : _slots$input.call(slots, {
        model,
        textColorClasses,
        textColorStyles,
        props: {
          onFocus,
          onBlur,
          id: id.value
        }
      })]), [[_resolveDirective("ripple"), props.ripple && [!props.disabled && !props.readonly, null, ['center', 'circle']]]])]), label && _createVNode(VLabel, {
        "for": id.value,
        "clickable": true
      }, {
        default: () => [label]
      })]);
    });
    return {
      isFocused,
      input
    };
  }
});
export function filterControlProps(props) {
  return pick(props, Object.keys(VSelectionControl.props));
}
//# sourceMappingURL=VSelectionControl.mjs.map