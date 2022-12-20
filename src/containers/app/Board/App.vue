<template>
  <div id="home">
    <h1>Тут будут доски</h1>
    <h2>{{ $route.params.id }}</h2>
  </div>
</template>

<style lang="less" scoped>
#home {
  h1 {
    color: firebrick;
  }
}
</style>
