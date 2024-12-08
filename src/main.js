import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css"; // Importar CSS de Bootstrap
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

createApp(App).use(router).mount("#app");
