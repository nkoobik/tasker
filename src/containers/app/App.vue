<template>
  <div id="app">
    <sui-menu>
      <router-link :active="$route.path === '/'" is="sui-menu-item" to="/">Home</router-link>
      <router-link :active="$route.path === '/board/main'" is="sui-menu-item" to="/board/main">Board - Main</router-link>
      <router-link :active="$route.path === '/tasks'" is="sui-menu-item" to="/tasks">Tasks</router-link>
      <router-link :active="$route.path === '/task/edit'" is="sui-menu-item" to="/task/edit">Task - edit</router-link>
    </sui-menu>
    <div class="nav"></div>

    <router-view />
  </div>
</template>

<script>
export default {
  mounted() {
    console.log('!!router', this.$route, this.$route.getParams);
  },
  updated() {
    console.log('!!router upd', this.$route, this.$route.getParams);
  }
};
</script>
