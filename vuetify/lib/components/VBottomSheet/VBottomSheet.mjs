// @ts-nocheck
/* eslint-disable */

import "./VBottomSheet.css";

// Extensions
import VDialog from "../VDialog/VDialog.mjs";
/* @vue/component */
export default VDialog.extend({
  name: 'v-bottom-sheet',
  props: {
    inset: Boolean,
    maxWidth: {
      type: [String, Number],
      default: 'auto'
    },
    transition: {
      type: String,
      default: 'bottom-sheet-transition'
    }
  },
  computed: {
    classes() {
      return {
        ...VDialog.options.computed.classes.call(this),
        'v-bottom-sheet': true,
        'v-bottom-sheet--inset': this.inset
      };
    }
  }
});
//# sourceMappingURL=VBottomSheet.mjs.map