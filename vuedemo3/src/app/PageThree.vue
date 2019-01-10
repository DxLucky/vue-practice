<template>
  <div>
    这是页面3
    <hr/>
    <button @click="addCount()">增加Count</button>{{this.$store.state.count.num}}

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
    mounted(){
        console.log(this.$store.state.count.num,"vuex状态树")
    },
    methods:{
      addCount(){
          this.$store.commit("increment",2)
      }
    }
  }
</script>
