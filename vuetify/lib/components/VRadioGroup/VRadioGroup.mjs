import { mergeProps as _mergeProps, resolveDirective as _resolveDirective, createVNode as _createVNode, Fragment as _Fragment } from "vue";
// Styles
import "./VRadioGroup.css";

// Components
import { filterControlProps } from "../VSelectionControl/VSelectionControl.mjs";
import { filterInputProps, makeVInputProps, VInput } from "../VInput/VInput.mjs";
import { makeSelectionControlGroupProps, VSelectionControlGroup } from "../VSelectionControlGroup/VSelectionControlGroup.mjs";
import { VLabel } from "../VLabel/index.mjs"; // Composables
import { IconValue } from "../../composables/icons.mjs";
import { useProxiedModel } from "../../composables/proxiedModel.mjs"; // Utilities
import { computed } from 'vue';
import { defineComponent, filterInputAttrs, getUid, omit, useRender } from "../../util/index.mjs";
export const VRadioGroup = defineComponent({
  name: 'VRadioGroup',
  inheritAttrs: false,
  props: {
    height: {
      type: [Number, String],
      default: 'auto'
    },
    ...makeVInputProps(),
    ...omit(makeSelectionControlGroupProps(), ['multiple']),
    trueIcon: {
      type: IconValue,
      default: '$radioOn'
    },
    falseIcon: {
      type: IconValue,
      default: '$radioOff'
    },
    type: {
      type: String,
      default: 'radio'
    }
  },
  emits: {
    'update:modelValue': val => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const uid = getUid();
    const id = computed(() => props.id || `radio-group-${uid}`);
    const model = useProxiedModel(props, 'modelValue');
    useRender(() => {
      const [inputAttrs, controlAttrs] = filterInputAttrs(attrs);
      const [inputProps, _1] = filterInputProps(props);
      const [controlProps, _2] = filterControlProps({
        ...props,
        multiple: false
      });
      const label = slots.label ? slots.label({
        label: props.label,
        props: {
          for: id.value
        }
      }) : props.label;
      return _createVNode(VInput, _mergeProps({
        "class": "v-radio-group"
      }, inputAttrs, inputProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": $event => model.value = $event,
        "id": id.value
      }), {
        ...slots,
        default: _ref2 => {
          let {
            id,
            isDisabled,
            isReadonly
          } = _ref2;
          return _createVNode(_Fragment, null, [label && _createVNode(VLabel, {
            "id": id.value
          }, {
            default: () => [label]
          }), _createVNode(VSelectionControlGroup, _mergeProps(controlProps, {
            "id": id.value,
            "defaultsTarget": "VRadio",
            "trueIcon": props.trueIcon,
            "falseIcon": props.falseIcon,
            "type": props.type,
            "disabled": isDisabled.value,
            "readonly": isReadonly.value,
            "aria-labelledby": label ? id.value : undefined
          }, controlAttrs, {
            "modelValue": model.value,
            "onUpdate:modelValue": $event => model.value = $event
          }), slots)]);
        }
      });
    });
    return {};
  }
});
//# sourceMappingURL=VRadioGroup.mjs.map