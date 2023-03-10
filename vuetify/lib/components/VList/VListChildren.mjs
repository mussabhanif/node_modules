import { mergeProps as _mergeProps, resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
// Components
import { VDivider } from "../VDivider/index.mjs";
import { filterListGroupProps, VListGroup } from "./VListGroup.mjs";
import { VListItem } from "./VListItem.mjs";
import { VListSubheader } from "./VListSubheader.mjs"; // Utilities
import { createList } from "./list.mjs";
import { genericComponent } from "../../util/index.mjs"; // Types
export const VListChildren = genericComponent()({
  name: 'VListChildren',
  props: {
    items: Array
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    createList();
    return () => {
      var _slots$default, _props$items;
      return ((_slots$default = slots.default) == null ? void 0 : _slots$default.call(slots)) ?? ((_props$items = props.items) == null ? void 0 : _props$items.map(_ref2 => {
        let {
          children,
          props: itemProps,
          type,
          raw: item
        } = _ref2;
        if (type === 'divider') {
          var _slots$divider;
          return ((_slots$divider = slots.divider) == null ? void 0 : _slots$divider.call(slots, {
            props: itemProps
          })) ?? _createVNode(VDivider, itemProps, null);
        }
        if (type === 'subheader') {
          var _slots$subheader;
          return ((_slots$subheader = slots.subheader) == null ? void 0 : _slots$subheader.call(slots, {
            props: itemProps
          })) ?? _createVNode(VListSubheader, itemProps, {
            default: slots.subheader
          });
        }
        const slotsWithItem = {
          subtitle: slots.subtitle ? slotProps => {
            var _slots$subtitle;
            return (_slots$subtitle = slots.subtitle) == null ? void 0 : _slots$subtitle.call(slots, {
              ...slotProps,
              item
            });
          } : undefined,
          prepend: slots.prepend ? slotProps => {
            var _slots$prepend;
            return (_slots$prepend = slots.prepend) == null ? void 0 : _slots$prepend.call(slots, {
              ...slotProps,
              item
            });
          } : undefined,
          append: slots.append ? slotProps => {
            var _slots$append;
            return (_slots$append = slots.append) == null ? void 0 : _slots$append.call(slots, {
              ...slotProps,
              item
            });
          } : undefined,
          default: slots.default ? slotProps => {
            var _slots$default2;
            return (_slots$default2 = slots.default) == null ? void 0 : _slots$default2.call(slots, {
              ...slotProps,
              item
            });
          } : undefined,
          title: slots.title ? slotProps => {
            var _slots$title;
            return (_slots$title = slots.title) == null ? void 0 : _slots$title.call(slots, {
              ...slotProps,
              item
            });
          } : undefined
        };
        const [listGroupProps, _1] = filterListGroupProps(itemProps);
        return children ? _createVNode(VListGroup, _mergeProps({
          "value": itemProps == null ? void 0 : itemProps.value
        }, listGroupProps), {
          activator: _ref3 => {
            let {
              props: activatorProps
            } = _ref3;
            return slots.header ? slots.header({
              ...itemProps,
              ...activatorProps
            }) : _createVNode(VListItem, _mergeProps(itemProps, activatorProps), slotsWithItem);
          },
          default: () => _createVNode(VListChildren, {
            "items": children
          }, slots)
        }) : slots.item ? slots.item(itemProps) : _createVNode(VListItem, itemProps, slotsWithItem);
      }));
    };
  }
});
//# sourceMappingURL=VListChildren.mjs.map