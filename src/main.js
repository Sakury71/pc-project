import {createApp} from "vue";
import App from "./App.vue";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from "./router/index.js";
import axios from "axios";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
axios.defaults.baseURL = "http://localhost:8080";

const app = createApp(App);
app.use(router);
app.use(ElementPlus)
app.mount("#app");
