// Composables
import { useForm } from "./form.mjs";
import { useProxiedModel } from "./proxiedModel.mjs";
import { useToggleScope } from "./toggleScope.mjs";
import { makeFocusProps } from "./focus.mjs"; // Utilities
import { computed, onBeforeMount, onBeforeUnmount, onMounted, ref, unref, watch } from 'vue';
import { getCurrentInstanceName, getUid, propsFactory, wrapInArray } from "../util/index.mjs"; // Types
export const makeValidationProps = propsFactory({
  disabled: Boolean,
  error: Boolean,
  errorMessages: {
    type: [Array, String],
    default: () => []
  },
  maxErrors: {
    type: [Number, String],
    default: 1
  },
  name: String,
  label: String,
  readonly: Boolean,
  rules: {
    type: Array,
    default: () => []
  },
  modelValue: null,
  validateOn: String,
  validationValue: null,
  ...makeFocusProps()
}, 'validation');
export function useValidation(props) {
  let name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getCurrentInstanceName();
  let id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : getUid();
  const model = useProxiedModel(props, 'modelValue');
  const validationModel = computed(() => props.validationValue === undefined ? model.value : props.validationValue);
  const form = useForm();
  const internalErrorMessages = ref([]);
  const isPristine = ref(true);
  const isDirty = computed(() => !!(wrapInArray(model.value === '' ? null : model.value).length || wrapInArray(validationModel.value === '' ? null : validationModel.value).length));
  const isDisabled = computed(() => !!(props.disabled || form != null && form.isDisabled.value));
  const isReadonly = computed(() => !!(props.readonly || form != null && form.isReadonly.value));
  const errorMessages = computed(() => {
    return props.errorMessages.length ? wrapInArray(props.errorMessages).slice(0, Math.max(0, +props.maxErrors)) : internalErrorMessages.value;
  });
  const isValid = computed(() => {
    if (props.error || errorMessages.value.length) return false;
    if (!props.rules.length) return true;
    return isPristine.value ? null : true;
  });
  const isValidating = ref(false);
  const validationClasses = computed(() => {
    return {
      [`${name}--error`]: isValid.value === false,
      [`${name}--dirty`]: isDirty.value,
      [`${name}--disabled`]: isDisabled.value,
      [`${name}--readonly`]: isReadonly.value
    };
  });
  const uid = computed(() => props.name ?? unref(id));
  onBeforeMount(() => {
    form == null ? void 0 : form.register({
      id: uid.value,
      validate,
      reset,
      resetValidation
    });
  });
  onBeforeUnmount(() => {
    form == null ? void 0 : form.unregister(uid.value);
  });
  const validateOn = computed(() => props.validateOn || (form == null ? void 0 : form.validateOn.value) || 'input');

  // Set initial valid state, for inputs that might not have rules
  onMounted(() => form == null ? void 0 : form.update(uid.value, isValid.value, errorMessages.value));
  useToggleScope(() => validateOn.value === 'input', () => {
    watch(validationModel, () => {
      if (validationModel.value != null) {
        validate();
      } else if (props.focused) {
        const unwatch = watch(() => props.focused, val => {
          if (!val) validate();
          unwatch();
        });
      }
    });
  });
  useToggleScope(() => validateOn.value === 'blur', () => {
    watch(() => props.focused, val => {
      if (!val) validate();
    });
  });
  watch(isValid, () => {
    form == null ? void 0 : form.update(uid.value, isValid.value, errorMessages.value);
  });
  function reset() {
    resetValidation();
    model.value = null;
  }
  function resetValidation() {
    isPristine.value = true;
    internalErrorMessages.value = [];
  }
  async function validate() {
    const results = [];
    isValidating.value = true;
    for (const rule of props.rules) {
      if (results.length >= (props.maxErrors ?? 1)) {
        break;
      }
      const handler = typeof rule === 'function' ? rule : () => rule;
      const result = await handler(validationModel.value);
      if (result === true) continue;
      if (typeof result !== 'string') {
        // eslint-disable-next-line no-console
        console.warn(`${result} is not a valid value. Rule functions must return boolean true or a string.`);
        continue;
      }
      results.push(result);
    }
    internalErrorMessages.value = results;
    isValidating.value = false;
    isPristine.value = false;
    return internalErrorMessages.value;
  }
  return {
    errorMessages,
    isDirty,
    isDisabled,
    isReadonly,
    isPristine,
    isValid,
    isValidating,
    reset,
    resetValidation,
    validate,
    validationClasses
  };
}
//# sourceMappingURL=validation.mjs.map