import { createApp } from "vue";
import App from "./App.vue";
import { VueQueryPlugin, QueryClient } from "@tanstack/vue-query";
import router from "./router/router";

const queryClient = new QueryClient();

const app = createApp(App);
app.use(VueQueryPlugin, { queryClient });
app.use(router);
app.mount("#app");
