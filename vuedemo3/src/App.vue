<template>
  <div id="app">
    <router-link exact to="/">首页</router-link>
    <router-link to="/one">页面1</router-link>
    <router-link to="/two/12345">页面2</router-link>
    <router-link to="/three">页面3</router-link>
    <router-link to="/four">页面4</router-link>
    <hr/>
    <router-view/>
  </div>
</template>

<style>
</style>


