<template>
  <div>
    这是页面4
    <hr/>
    {{this.$store.state.count.num}}
  </div>
</template>

<script>
  import store from "../vuex/store.js";
  export default {
    data(){
        return{

        }
    },
    store,
  }
</script>
