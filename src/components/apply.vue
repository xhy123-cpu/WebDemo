<template>
  <div class="title-apply"><img src="../../public/apply-img/返回5.png" @click="back">申请补货</div>
  <router-view></router-view>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="less" scoped>
.title-apply{
  background-color: #AD8A68;  
  height: 70px;
  line-height: 70px;
  font-size: 35px;
  color: aliceblue;
  position: relative;
  img{
    position: absolute;
    left: 10px;
    top: 10px;
    height: 50px;
  }
}
</style>

