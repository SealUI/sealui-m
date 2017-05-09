import alert from '../../../packages/alert';
import confirm from '../../../packages/confirm';
import toast from '../../../packages/toast';

export default {
    install (Vue, opts) {
        if (!Vue.$dialog) {
          Vue.$dialog = {
            alert,
            confirm,
            toast
          }
        } else {
          Vue.$dialog.alert = alert;
          Vue.$dialog.confirm = confirm;
        }

        Vue.mixin({
          created: function () {
            this.$dialog = Vue.$dialog;
            this.$toast = toast;
          }
        })
    }
}

// export default plugin
// export const install = plugin.install
