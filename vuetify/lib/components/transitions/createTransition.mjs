// Utilities
import { h, Transition, TransitionGroup } from 'vue';
import { defineComponent } from "../../util/index.mjs"; // Types
export function createCssTransition(name) {
  let origin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top center 0';
  let mode = arguments.length > 2 ? arguments[2] : undefined;
  return defineComponent({
    name,
    props: {
      group: Boolean,
      hideOnLeave: Boolean,
      leaveAbsolute: Boolean,
      mode: {
        type: String,
        default: mode
      },
      origin: {
        type: String,
        default: origin
      }
    },
    setup(props, _ref) {
      let {
        slots
      } = _ref;
      return () => {
        const tag = props.group ? TransitionGroup : Transition;
        return h(tag, {
          name,
          mode: props.mode,
          onBeforeEnter(el) {
            el.style.transformOrigin = props.origin;
          },
          onLeave(el) {
            if (props.leaveAbsolute) {
              const {
                offsetTop,
                offsetLeft,
                offsetWidth,
                offsetHeight
              } = el;
              el._transitionInitialStyles = {
                position: el.style.position,
                top: el.style.top,
                left: el.style.left,
                width: el.style.width,
                height: el.style.height
              };
              el.style.position = 'absolute';
              el.style.top = `${offsetTop}px`;
              el.style.left = `${offsetLeft}px`;
              el.style.width = `${offsetWidth}px`;
              el.style.height = `${offsetHeight}px`;
            }
            if (props.hideOnLeave) {
              el.style.setProperty('display', 'none', 'important');
            }
          },
          onAfterLeave(el) {
            if (props.leaveAbsolute && el != null && el._transitionInitialStyles) {
              const {
                position,
                top,
                left,
                width,
                height
              } = el._transitionInitialStyles;
              delete el._transitionInitialStyles;
              el.style.position = position || '';
              el.style.top = top || '';
              el.style.left = left || '';
              el.style.width = width || '';
              el.style.height = height || '';
            }
          }
        }, slots.default);
      };
    }
  });
}
export function createJavascriptTransition(name, functions) {
  let mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'in-out';
  return defineComponent({
    name,
    props: {
      mode: {
        type: String,
        default: mode
      }
    },
    setup(props, _ref2) {
      let {
        slots
      } = _ref2;
      return () => {
        return h(Transition, {
          name,
          // mode: props.mode, // TODO: vuejs/vue-next#3104
          ...functions
        }, slots.default);
      };
    }
  });
}
//# sourceMappingURL=createTransition.mjs.map