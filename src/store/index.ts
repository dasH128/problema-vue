import Vue from 'vue'
import Vuex from 'vuex'
import customers from '@/store/modules/customers'
import accounts from '@/store/modules/accounts'
Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    customers,
    accounts
  },
})
export default store
