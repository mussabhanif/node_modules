import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";
// Styles
import "./VSwitch.css";

// Components
import { filterControlProps, makeSelectionControlProps, VSelectionControl } from "../VSelectionControl/VSelectionControl.mjs";
import { filterInputProps, makeVInputProps, VInput } from "../VInput/VInput.mjs";
import { VProgressCircular } from "../VProgressCircular/index.mjs"; // Composables
import { LoaderSlot, useLoader } from "../../composables/loader.mjs";
import { useFocus } from "../../composables/focus.mjs";
import { useProxiedModel } from "../../composables/proxiedModel.mjs"; // Utility
import { computed, ref } from 'vue';
import { defineComponent, filterInputAttrs, getUid, useRender } from "../../util/index.mjs";
export const VSwitch = defineComponent({
  name: 'VSwitch',
  inheritAttrs: false,
  props: {
    indeterminate: Boolean,
    inset: Boolean,
    flat: Boolean,
    loading: {
      type: [Boolean, String],
      default: false
    },
    ...makeVInputProps(),
    ...makeSelectionControlProps()
  },
  emits: {
    'update:focused': focused => true,
    'update:modelValue': () => true,
    'update:indeterminate': val => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const indeterminate = useProxiedModel(props, 'indeterminate');
    const model = useProxiedModel(props, 'modelValue');
    const {
      loaderClasses
    } = useLoader(props);
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const loaderColor = computed(() => {
      return typeof props.loading === 'string' && props.loading !== '' ? props.loading : props.color;
    });
    const uid = getUid();
    const id = computed(() => props.id || `switch-${uid}`);
    function onChange() {
      if (indeterminate.value) {
        indeterminate.value = false;
      }
    }
    useRender(() => {
      const [inputAttrs, controlAttrs] = filterInputAttrs(attrs);
      const [inputProps, _1] = filterInputProps(props);
      const [controlProps, _2] = filterControlProps(props);
      const control = ref();
      function onClick() {
        var _control$value, _control$value$input;
        (_control$value = control.value) == null ? void 0 : (_control$value$input = _control$value.input) == null ? void 0 : _control$value$input.click();
      }
      return _createVNode(VInput, _mergeProps({
        "class": ['v-switch', {
          'v-switch--inset': props.inset
        }, {
          'v-switch--indeterminate': indeterminate.value
        }, loaderClasses.value]
      }, inputAttrs, inputProps, {
        "id": id.value,
        "focused": isFocused.value
      }), {
        ...slots,
        default: _ref2 => {
          let {
            id,
            isDisabled,
            isReadonly,
            isValid
          } = _ref2;
          return _createVNode(VSelectionControl, _mergeProps({
            "ref": control
          }, controlProps, {
            "modelValue": model.value,
            "onUpdate:modelValue": [$event => model.value = $event, onChange],
            "id": id.value,
            "type": "checkbox",
            "aria-checked": indeterminate.value ? 'mixed' : undefined,
            "disabled": isDisabled.value,
            "readonly": isReadonly.value,
            "onFocus": focus,
            "onBlur": blur
          }, controlAttrs), {
            ...slots,
            default: () => _createVNode("div", {
              "class": "v-switch__track",
              "onClick": onClick
            }, null),
            input: _ref3 => {
              let {
                textColorClasses,
                textColorStyles
              } = _ref3;
              return _createVNode("div", {
                "class": ['v-switch__thumb', textColorClasses.value],
                "style": textColorStyles.value
              }, [props.loading && _createVNode(LoaderSlot, {
                "name": "v-switch",
                "active": true,
                "color": isValid.value === false ? undefined : loaderColor.value
              }, {
                default: slotProps => slots.loader ? slots.loader(slotProps) : _createVNode(VProgressCircular, {
                  "active": slotProps.isActive,
                  "color": slotProps.color,
                  "indeterminate": true,
                  "size": "16",
                  "width": "2"
                }, null)
              })]);
            }
          });
        }
      });
    });
    return {};
  }
});
//# sourceMappingURL=VSwitch.mjs.map