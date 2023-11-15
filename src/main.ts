import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';


import './styles/GlobalStyles.scss'

library.add(fab)
createApp(App)
    .use(router)
    .mount('#app')
