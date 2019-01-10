<template>
  <div>
    这是新闻组件
    <button @click="sendMsgToVedio()">点我</button>
  </div>
</template>

<script>
  import CrossSend from "../modal/crossLevel.js";
  export default {
    data(){
        return{
            newsMsg:"新闻组件的信息"
        }
    },
    methods:{
      sendMsgToVedio(){
        CrossSend.$emit("toVedioMsg",this.newsMsg)
      }
    }
  }
</script>
