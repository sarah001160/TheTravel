import './assets/main.scss' //匯入scss檔案
import { createApp } from 'vue'
import {createPinia} from 'pinia';//狀態管理
import App from './App.vue'
import router from './router'


//全局註冊
import SearchBarglobal from './components/SearchBarglobal.vue';
import Footerglobal from './components/Footerglobal.vue';


const app = createApp(App)
app.use(router)
app.use(createPinia())//啟用 狀態管理
app.mount('#app')


//全局註冊元件
app.component("SearchBarglobal", SearchBarglobal);
app.component("Footerglobal", Footerglobal);

