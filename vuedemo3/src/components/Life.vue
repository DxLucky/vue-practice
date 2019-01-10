<template>
  <div>
    <h3>生命周期函数演示</h3>
  </div>
</template>

<script>
  export default {
    data(){
        return{

        }
    },
    methods:{

    },
    beforeCreated(){
        console.log("实例创建之前")
    },
    created(){
      console.log("实例创建完成")
    }
  }
</script>
