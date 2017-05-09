// import axios from 'axios'

// export default {
//   install (Vue) {
//     if (!Vue.$seal) {
//       Vue.$seal = {
//         axios
//       }
//     } else {
//       Vue.$seal.http = axios;
//     }
//     Vue.mixin({
//         created: function () {
//           this.$seal = Vue.$seal
//         }
//       })
//   }

// }

import axios from 'axios'

export default function (Vue) {
  Vue.mixin({
    created: function () {
      this.$http = axios
    }
  })
}

// export default {
//   install (Vue) {
//     Vue.prototype.$http = axios
//   },
//   //$http: axios
// }

// export const $http = axios
