import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faLinkedin, faGithubSquare} from '@fortawesome/fontawesome-free-brands'
import { faBars, faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons'

library.add(faBars)
library.add(faEnvelope)
library.add(faLinkedin)
library.add(faGithubSquare)
library.add(faFilePdf)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
