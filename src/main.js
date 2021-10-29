import Vue from 'vue'
import router from './router'
import { store } from '@store'
import VueCompositionAPI from '@vue/composition-api'
import VueMeta from 'vue-meta'

Vue.use(VueCompositionAPI)
Vue.use(VueMeta)

Vue.config.productionTip = false

import { i18nPlugin } from '@plugins/i18n'
import { eventBus } from '@plugins/bus'
import vuetify from '@plugins/vuetify'
import '@plugins/vue-google-oauth2'

import clientApi from '@/core/apis/client'
import authApi from '@/core/apis/auth'

import { globalMixin } from '@mixins/global'
import { utils } from '@utils'

import App from '@/App.vue'

import '@/core/components/base'

import '@/core/styles/css/main.css'
import '@styles/custom.scss'

Vue.mixin(globalMixin)

Vue.use(clientApi)
Vue.use(authApi)
Vue.use(eventBus)
Vue.use(utils)

new Vue({
  store,
  router,
  i18n: i18nPlugin,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
