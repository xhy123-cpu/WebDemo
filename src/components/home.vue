<template>
<main>
  <router-view></router-view>
  <div class="select-bottom">
    <div @click="select('/home')"><img src="../../public/home-img/shouye.png"><br />首页</div>
    <div @click="select('/home/person')"><img src="../../public/home-img/wode.png"><br />我的</div>
  </div>
</main>
</template>

<script>
export default {
  methods: {
    select(arg) {
    this.$router.push(arg)
  }
}
}
</script>

<style lang="less" scoped>
main{
    height: 736px;
    background-color: #fff;
    overflow: scroll;
}
.select-bottom{
  height: 90px;
  width: 414px;
  position: fixed;
  background-color: #e3e0eb;
  bottom: 0px;
  display: flex;
  justify-content: space-around;
  >div{
    line-height: 10px;
    height: 90px;
    width: 90px;
    display: inline-block;
    img{
        height: 70px;
    }
  }
}
</style>