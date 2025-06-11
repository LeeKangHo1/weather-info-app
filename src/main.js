import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import store from './store/store' vuex store
import { createPinia } from 'pinia'; // 피니아 등록

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// 사용할 아이콘 불러오기
import { faBarsStaggered, faLocationDot, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

// 아이콘 등록하기
library.add(faBarsStaggered, faLocationDot, faMagnifyingGlass);

// pinia 객체를 가져와 변수에 할당
const pinia = createPinia();

createApp(App)
  // .use(store)
  .use(pinia) // store 대신 pinia 사용
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
