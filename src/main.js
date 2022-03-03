import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store.js";
import "./assets/styles/global.css";
import axios from 'axios';
import 'vue3-carousel/dist/carousel.css';
createApp(App).use(router, store, axios).mount("#app");