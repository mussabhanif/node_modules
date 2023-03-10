import { Fragment as _Fragment, withDirectives as _withDirectives, createVNode as _createVNode, mergeProps as _mergeProps, resolveDirective as _resolveDirective } from "vue";
// Styles
import "./VTextField.css";

// Components
import { filterFieldProps, makeVFieldProps, VField } from "../VField/VField.mjs";
import { filterInputProps, makeVInputProps, VInput } from "../VInput/VInput.mjs";
import { VCounter } from "../VCounter/index.mjs"; // Directives
import Intersect from "../../directives/intersect/index.mjs"; // Composables
import { forwardRefs } from "../../composables/forwardRefs.mjs";
import { useFocus } from "../../composables/focus.mjs";
import { useProxiedModel } from "../../composables/proxiedModel.mjs"; // Utilities
import { cloneVNode, computed, nextTick, ref } from 'vue';
import { callEvent, filterInputAttrs, genericComponent, pick, propsFactory, useRender } from "../../util/index.mjs"; // Types
const activeTypes = ['color', 'file', 'time', 'date', 'datetime-local', 'week', 'month'];
const EventProp = [Function, Array];
export const makeVTextFieldProps = propsFactory({
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: Function,
  hint: String,
  persistentHint: Boolean,
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  suffix: String,
  type: {
    type: String,
    default: 'text'
  },
  ...makeVInputProps(),
  ...makeVFieldProps()
}, 'v-text-field');
export const VTextField = genericComponent()({
  name: 'VTextField',
  directives: {
    Intersect
  },
  inheritAttrs: false,
  props: makeVTextFieldProps(),
  emits: {
    'click:control': e => true,
    'click:input': e => true,
    'update:focused': focused => true,
    'update:modelValue': val => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const model = useProxiedModel(props, 'modelValue');
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const counterValue = computed(() => {
      return typeof props.counterValue === 'function' ? props.counterValue(model.value) : (model.value ?? '').toString().length;
    });
    const max = computed(() => {
      if (attrs.maxlength) return attrs.maxlength;
      if (!props.counter || typeof props.counter !== 'number' && typeof props.counter !== 'string') return undefined;
      return props.counter;
    });
    function onIntersect(isIntersecting, entries) {
      var _entries$0$target, _entries$0$target$foc;
      if (!props.autofocus || !isIntersecting) return;
      (_entries$0$target = entries[0].target) == null ? void 0 : (_entries$0$target$foc = _entries$0$target.focus) == null ? void 0 : _entries$0$target$foc.call(_entries$0$target);
    }
    const vInputRef = ref();
    const vFieldRef = ref();
    const inputRef = ref();
    const isActive = computed(() => activeTypes.includes(props.type) || props.persistentPlaceholder || isFocused.value);
    const messages = computed(() => {
      return props.messages.length ? props.messages : isFocused.value || props.persistentHint ? props.hint : '';
    });
    function onFocus() {
      if (inputRef.value !== document.activeElement) {
        var _inputRef$value;
        (_inputRef$value = inputRef.value) == null ? void 0 : _inputRef$value.focus();
      }
      if (!isFocused.value) focus();
    }
    function onControlClick(e) {
      onFocus();
      emit('click:control', e);
    }
    function onClear(e) {
      e.stopPropagation();
      onFocus();
      nextTick(() => {
        model.value = null;
        callEvent(props['onClick:clear'], e);
      });
    }
    function onInput(e) {
      model.value = e.target.value;
    }
    useRender(() => {
      const hasCounter = !!(slots.counter || props.counter || props.counterValue);
      const hasDetails = !!(hasCounter || slots.details);
      const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
      const [{
        modelValue: _,
        ...inputProps
      }] = filterInputProps(props);
      const [fieldProps] = filterFieldProps(props);
      return _createVNode(VInput, _mergeProps({
        "ref": vInputRef,
        "modelValue": model.value,
        "onUpdate:modelValue": $event => model.value = $event,
        "class": ['v-text-field', {
          'v-text-field--prefixed': props.prefix,
          'v-text-field--suffixed': props.suffix,
          'v-text-field--flush-details': ['plain', 'underlined'].includes(props.variant)
        }],
        "onClick:prepend": props['onClick:prepend'],
        "onClick:append": props['onClick:append']
      }, rootAttrs, inputProps, {
        "focused": isFocused.value,
        "messages": messages.value
      }), {
        ...slots,
        default: _ref2 => {
          let {
            id,
            isDisabled,
            isDirty,
            isReadonly,
            isValid
          } = _ref2;
          return _createVNode(VField, _mergeProps({
            "ref": vFieldRef,
            "onMousedown": e => {
              if (e.target === inputRef.value) return;
              e.preventDefault();
            },
            "onClick:control": onControlClick,
            "onClick:clear": onClear,
            "onClick:prependInner": props['onClick:prependInner'],
            "onClick:appendInner": props['onClick:appendInner'],
            "role": "textbox"
          }, fieldProps, {
            "id": id.value,
            "active": isActive.value || isDirty.value,
            "dirty": isDirty.value || props.dirty,
            "focused": isFocused.value,
            "error": isValid.value === false
          }), {
            ...slots,
            default: _ref3 => {
              let {
                props: {
                  class: fieldClass,
                  ...slotProps
                }
              } = _ref3;
              const inputNode = _withDirectives(_createVNode("input", _mergeProps({
                "ref": inputRef,
                "value": model.value,
                "onInput": onInput,
                "autofocus": props.autofocus,
                "readonly": isReadonly.value,
                "disabled": isDisabled.value,
                "name": props.name,
                "placeholder": props.placeholder,
                "size": 1,
                "type": props.type,
                "onFocus": onFocus,
                "onBlur": blur
              }, slotProps, inputAttrs), null), [[_resolveDirective("intersect"), {
                handler: onIntersect
              }, null, {
                once: true
              }]]);
              return _createVNode(_Fragment, null, [props.prefix && _createVNode("span", {
                "class": "v-text-field__prefix"
              }, [props.prefix]), slots.default ? _createVNode("div", {
                "class": fieldClass,
                "onClick": e => emit('click:input', e),
                "data-no-activator": ""
              }, [slots.default(), inputNode]) : cloneVNode(inputNode, {
                class: fieldClass
              }), props.suffix && _createVNode("span", {
                "class": "v-text-field__suffix"
              }, [props.suffix])]);
            }
          });
        },
        details: hasDetails ? slotProps => {
          var _slots$details;
          return _createVNode(_Fragment, null, [(_slots$details = slots.details) == null ? void 0 : _slots$details.call(slots, slotProps), hasCounter && _createVNode(_Fragment, null, [_createVNode("span", null, null), _createVNode(VCounter, {
            "active": props.persistentCounter || isFocused.value,
            "value": counterValue.value,
            "max": max.value
          }, slots.counter)])]);
        } : undefined
      });
    });
    return forwardRefs({}, vInputRef, vFieldRef, inputRef);
  }
});
export function filterVTextFieldProps(props) {
  return pick(props, Object.keys(VTextField.props));
}
//# sourceMappingURL=VTextField.mjs.map