import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faLinkedin} from '@fortawesome/fontawesome-free-brands'
import { faBars, faArrowDown, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(faBars)
library.add(faLinkedin)
library.add(faArrowDown)
library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
