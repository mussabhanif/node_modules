import { vModelText as _vModelText, withDirectives as _withDirectives, mergeProps as _mergeProps, resolveDirective as _resolveDirective, createVNode as _createVNode, Fragment as _Fragment } from "vue";
// Styles
import "./VTextarea.css";
import "../VTextField/VTextField.css";

// Components
import { filterFieldProps, makeVFieldProps } from "../VField/VField.mjs";
import { filterInputProps, makeVInputProps, VInput } from "../VInput/VInput.mjs";
import { VCounter } from "../VCounter/index.mjs";
import { VField } from "../VField/index.mjs"; // Directives
import Intersect from "../../directives/intersect/index.mjs"; // Composables
import { forwardRefs } from "../../composables/forwardRefs.mjs";
import { useFocus } from "../../composables/focus.mjs";
import { useProxiedModel } from "../../composables/proxiedModel.mjs"; // Utilities
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { callEvent, clamp, convertToUnit, defineComponent, filterInputAttrs, useRender } from "../../util/index.mjs"; // Types
export const VTextarea = defineComponent({
  name: 'VTextarea',
  directives: {
    Intersect
  },
  inheritAttrs: false,
  props: {
    autoGrow: Boolean,
    autofocus: Boolean,
    counter: [Boolean, Number, String],
    counterValue: Function,
    hint: String,
    persistentHint: Boolean,
    prefix: String,
    placeholder: String,
    persistentPlaceholder: Boolean,
    persistentCounter: Boolean,
    noResize: Boolean,
    rows: {
      type: [Number, String],
      default: 5,
      validator: v => !isNaN(parseFloat(v))
    },
    maxRows: {
      type: [Number, String],
      validator: v => !isNaN(parseFloat(v))
    },
    suffix: String,
    ...makeVInputProps(),
    ...makeVFieldProps()
  },
  emits: {
    'click:control': e => true,
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
      return typeof props.counterValue === 'function' ? props.counterValue(model.value) : (model.value || '').toString().length;
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
    const controlHeight = ref('');
    const textareaRef = ref();
    const isActive = computed(() => isFocused.value || props.persistentPlaceholder);
    const messages = computed(() => {
      return props.messages.length ? props.messages : isActive.value || props.persistentHint ? props.hint : '';
    });
    function onFocus() {
      if (textareaRef.value !== document.activeElement) {
        var _textareaRef$value;
        (_textareaRef$value = textareaRef.value) == null ? void 0 : _textareaRef$value.focus();
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
        model.value = '';
        callEvent(props['onClick:clear'], e);
      });
    }
    function onInput(e) {
      model.value = e.target.value;
    }
    const sizerRef = ref();
    function calculateInputHeight() {
      if (!props.autoGrow) return;
      nextTick(() => {
        if (!sizerRef.value || !vFieldRef.value) return;
        const style = getComputedStyle(sizerRef.value);
        const fieldStyle = getComputedStyle(vFieldRef.value.$el);
        const padding = parseFloat(style.getPropertyValue('--v-field-padding-top')) + parseFloat(style.getPropertyValue('--v-input-padding-top')) + parseFloat(style.getPropertyValue('--v-field-padding-bottom'));
        const height = sizerRef.value.scrollHeight;
        const lineHeight = parseFloat(style.lineHeight);
        const minHeight = Math.max(parseFloat(props.rows) * lineHeight + padding, parseFloat(fieldStyle.getPropertyValue('--v-input-control-height')));
        const maxHeight = parseFloat(props.maxRows) * lineHeight + padding || Infinity;
        controlHeight.value = convertToUnit(clamp(height ?? 0, minHeight, maxHeight));
      });
    }
    onMounted(calculateInputHeight);
    watch(model, calculateInputHeight);
    watch(() => props.rows, calculateInputHeight);
    watch(() => props.maxRows, calculateInputHeight);
    watch(() => props.density, calculateInputHeight);
    let observer;
    watch(sizerRef, val => {
      if (val) {
        observer = new ResizeObserver(calculateInputHeight);
        observer.observe(sizerRef.value);
      } else {
        var _observer;
        (_observer = observer) == null ? void 0 : _observer.disconnect();
      }
    });
    onBeforeUnmount(() => {
      var _observer2;
      (_observer2 = observer) == null ? void 0 : _observer2.disconnect();
    });
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
        "class": ['v-textarea v-text-field', {
          'v-textarea--prefixed': props.prefix,
          'v-textarea--suffixed': props.suffix,
          'v-text-field--prefixed': props.prefix,
          'v-text-field--suffixed': props.suffix,
          'v-textarea--auto-grow': props.autoGrow,
          'v-textarea--no-resize': props.noResize || props.autoGrow,
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
            isDisabled,
            isDirty,
            isReadonly,
            isValid
          } = _ref2;
          return _createVNode(VField, _mergeProps({
            "ref": vFieldRef,
            "style": {
              '--v-textarea-control-height': controlHeight.value
            },
            "onClick:control": onControlClick,
            "onClick:clear": onClear,
            "onClick:prependInner": props['onClick:prependInner'],
            "onClick:appendInner": props['onClick:appendInner'],
            "role": "textbox"
          }, fieldProps, {
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
              return _createVNode(_Fragment, null, [props.prefix && _createVNode("span", {
                "class": "v-text-field__prefix"
              }, [props.prefix]), _withDirectives(_createVNode("textarea", _mergeProps({
                "ref": textareaRef,
                "class": fieldClass,
                "value": model.value,
                "onInput": onInput,
                "autofocus": props.autofocus,
                "readonly": isReadonly.value,
                "disabled": isDisabled.value,
                "placeholder": props.placeholder,
                "rows": props.rows,
                "name": props.name,
                "onFocus": onFocus,
                "onBlur": blur
              }, slotProps, inputAttrs), null), [[_resolveDirective("intersect"), {
                handler: onIntersect
              }, null, {
                once: true
              }]]), props.autoGrow && _withDirectives(_createVNode("textarea", {
                "class": [fieldClass, 'v-textarea__sizer'],
                "onUpdate:modelValue": $event => model.value = $event,
                "ref": sizerRef,
                "readonly": true,
                "aria-hidden": "true"
              }, null), [[_vModelText, model.value]]), props.suffix && _createVNode("span", {
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
    return forwardRefs({}, vInputRef, vFieldRef, textareaRef);
  }
});
//# sourceMappingURL=VTextarea.mjs.map