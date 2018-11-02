import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'

library.add(faBars)
library.add(brands)
library.add(faArrowDown)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
