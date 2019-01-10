<template>
  <div>
    这是视频组件
  </div>
</template>

<script>
  import CrossSend from "../modal/crossLevel.js";
  export default {
      mounted(){
        CrossSend.$on("toVedioMsg",(data)=>{
          console.log(data,'data')
        })
      }
  }
</script>
