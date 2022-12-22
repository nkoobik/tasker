<template>
  <div id="home">
    <h1>Тут будет задача</h1>
    <h2>{{ $route.getParams.id }}</h2>
  </div>
</template>

<style lang="less" scoped>
#home {
  h1 {
    color: firebrick;
  }
}
</style>
