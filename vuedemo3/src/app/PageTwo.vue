<template>
  <div>
    这是页面2
    <hr/>
    {{this.$route.params.id}}
  </div>
</template>

<script>
  export default {
    data(){
        return{

        }
    },
    mounted(){
        console.log(this.$route.params,'13233')
    }
  }
</script>
