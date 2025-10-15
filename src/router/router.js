import { createRouter, createWebHistory } from "vue-router";
import PokemonView from "@/views/PokemonView.vue";

const routes = [{ path: "/", name: "home", component: PokemonView }];

export default createRouter({
  history: createWebHistory(),
  routes,
});
