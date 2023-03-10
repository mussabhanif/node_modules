import { withDirectives as _withDirectives, vShow as _vShow, createVNode as _createVNode } from "vue";
// Components
import { VDefaultsProvider } from "../VDefaultsProvider/index.mjs";
import { VExpandTransition } from "../transitions/index.mjs"; // Composables
import { useList } from "./list.mjs";
import { IconValue } from "../../composables/icons.mjs";
import { makeTagProps } from "../../composables/tag.mjs";
import { useNestedGroupActivator, useNestedItem } from "../../composables/nested/nested.mjs"; // Utilities
import { computed, toRef } from 'vue';
import { defineComponent, genericComponent, pick, propsFactory, useRender } from "../../util/index.mjs"; // Types
const VListGroupActivator = defineComponent({
  name: 'VListGroupActivator',
  setup(_, _ref) {
    let {
      slots
    } = _ref;
    useNestedGroupActivator();
    return () => {
      var _slots$default;
      return (_slots$default = slots.default) == null ? void 0 : _slots$default.call(slots);
    };
  }
});
export const makeVListGroupProps = propsFactory({
  activeColor: String,
  color: String,
  collapseIcon: {
    type: IconValue,
    default: '$collapse'
  },
  expandIcon: {
    type: IconValue,
    default: '$expand'
  },
  prependIcon: IconValue,
  appendIcon: IconValue,
  fluid: Boolean,
  subgroup: Boolean,
  value: null,
  ...makeTagProps()
}, 'v-list-group');
export const VListGroup = genericComponent()({
  name: 'VListGroup',
  props: {
    title: String,
    ...makeVListGroupProps()
  },
  setup(props, _ref2) {
    let {
      slots
    } = _ref2;
    const {
      isOpen,
      open,
      id: _id
    } = useNestedItem(toRef(props, 'value'), true);
    const id = computed(() => `v-list-group--id-${String(_id.value)}`);
    const list = useList();
    function onClick(e) {
      open(!isOpen.value, e);
    }
    const activatorProps = computed(() => ({
      onClick,
      class: 'v-list-group__header',
      id: id.value
    }));
    const toggleIcon = computed(() => isOpen.value ? props.collapseIcon : props.expandIcon);
    useRender(() => {
      var _slots$default2;
      return _createVNode(props.tag, {
        "class": ['v-list-group', {
          'v-list-group--prepend': list == null ? void 0 : list.hasPrepend.value,
          'v-list-group--fluid': props.fluid,
          'v-list-group--subgroup': props.subgroup,
          'v-list-group--open': isOpen.value
        }]
      }, {
        default: () => [slots.activator && _createVNode(VDefaultsProvider, {
          "defaults": {
            VListItem: {
              active: isOpen.value,
              activeColor: props.activeColor,
              color: props.color,
              prependIcon: props.prependIcon || props.subgroup && toggleIcon.value,
              appendIcon: props.appendIcon || !props.subgroup && toggleIcon.value,
              title: props.title,
              value: props.value
            }
          }
        }, {
          default: () => [_createVNode(VListGroupActivator, null, {
            default: () => [slots.activator({
              props: activatorProps.value,
              isOpen
            })]
          })]
        }), _createVNode(VExpandTransition, null, {
          default: () => [_withDirectives(_createVNode("div", {
            "class": "v-list-group__items",
            "role": "group",
            "aria-labelledby": id.value
          }, [(_slots$default2 = slots.default) == null ? void 0 : _slots$default2.call(slots)]), [[_vShow, isOpen.value]])]
        })]
      });
    });
    return {};
  }
});
export function filterListGroupProps(props) {
  return pick(props, Object.keys(VListGroup.props));
}
//# sourceMappingURL=VListGroup.mjs.map