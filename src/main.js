import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store.js";
import "./assets/styles/global.css";
import axios from 'axios';
import 'vue3-carousel/dist/carousel.css';
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'
createApp(App).use(router, store, axios, createToast).mount("#app");