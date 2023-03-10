// Utilities
import { onBeforeUnmount, ref, watch } from 'vue';
import { SUPPORTS_INTERSECTION } from "../util/index.mjs";
export function useIntersectionObserver(callback) {
  const intersectionRef = ref();
  const isIntersecting = ref(false);
  if (SUPPORTS_INTERSECTION) {
    const observer = new IntersectionObserver(entries => {
      callback == null ? void 0 : callback(entries, observer);
      isIntersecting.value = !!entries.find(entry => entry.isIntersecting);
    });
    onBeforeUnmount(() => {
      observer.disconnect();
    });
    watch(intersectionRef, (newValue, oldValue) => {
      if (oldValue) {
        observer.unobserve(oldValue);
        isIntersecting.value = false;
      }
      if (newValue) observer.observe(newValue);
    }, {
      flush: 'post'
    });
  }
  return {
    intersectionRef,
    isIntersecting
  };
}
//# sourceMappingURL=intersectionObserver.mjs.map