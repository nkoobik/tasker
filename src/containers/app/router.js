import Vue from "vue";
import VueRouter from "vue-router";

import Root from "./Root/App.vue";
import Board from "./Board/App.vue";
import Table from "./Table/App.vue";
import Task from "./Task/App.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "root",
    component: Root,
  },
  {
    path: "/board/:id",
    name: "board",
    component: Board,
  },
  {
    path: "/tasks",
    name: "tasks",
    component: Table,
  },
  {
    path: "/task/:id",
    name: "task",
    component: Task,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
