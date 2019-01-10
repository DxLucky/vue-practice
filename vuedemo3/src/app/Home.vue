<template>
  <div>
    这是首页
     <Header title="头部标题" msg="这是消息" :num="num" :run="run"/>
</div>
</template>

<script>
  import Header from "../components/Header.vue";
  export default {
      data(){
          return{
              num:200
          }
      },
      methods:{
        run(msg){
            alert(`我是父组件中的方法${msg}`)
        }
      },
      components:{
        Header
      }
  }
</script>
