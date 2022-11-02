import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

const pinia = createPinia()

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
  faBitcoinSign,
    faCubes,
    faFaceSmile,
    faFolder,
    faFolderOpen,
    faFolderTree,
    faScroll,
    faUserSecret
} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)
library.add(faCubes)
library.add(faFolder)
library.add(faScroll)
library.add(faFolderOpen)
library.add(faFolderTree)
library.add(faFaceSmile)
library.add(faBitcoinSign)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .use(pinia)
  .use(vuetify)
  .mount('#app')
