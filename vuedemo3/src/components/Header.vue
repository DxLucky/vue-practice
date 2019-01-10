<template>
  <div>
    <h2>这是头部</h2>
    <p @click="run(123)">标题{{title}}{{msg}}</p>
    <p>数字是{{num}}</p>
  </div>
</template>

<script>
  export default {
    data(){
        return{

        }
    },
    props:{
      title:String,
      msg:String,
      run:Function,
      num:{
        type:Number,
        default:100
      }
    },
    mounted(){
      console.log(this.title,"title")
    }
  }
</script>
