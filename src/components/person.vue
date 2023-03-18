<template>
  <div class="top-show">
    <img src="../../public/home-img/shuju.png" alt="">
    <div>用户名：<br />性别：<br />年龄：</div>
  </div>
  <div class="select-person" @click="go('/info/infoOne')">累计收入</div>
  <div class="select-person" @click="go('/bind')">我的设备</div>
  <div class="select-person" @click="go('/record')">补货记录</div>
  <div class="select-person long" @click="go('/used')">我使用的补货点</div>
  <div class="select-person" @click="go('/approve')">我的认证</div>
  <div class="select-person" @click="go('/tips')">补货提醒</div>
</template>

<script>
export default {
  methods: {
    go(arg) {
    if(arg=='/bind'||arg=='/approve'){
    if(sessionStorage.getItem('user'))this.$router.push(arg)        
    else return
    }
    else this.$router.push(arg)    
    }
}
}
</script>

<style lang="less" scoped>
.top-show{
  height: 100px;
  display: flex;
  justify-content: space-around;
  img{

    height: 80px;
  }
  div{
    height: 100px;
    display: inline-block;
    width: 150px;
    line-height: 30px;
    font-size: 20px;
  }
}
.select-person{
    height: 68px;
    width: 150px;
    border: 1px solid #000;
    font-size: 35px;
    line-height: 68px;
    margin: 20px;
    text-align: left;
    padding-left: 10px;
    border-radius: 10px;
    &.long{
      width: 250px;  
    }
}
</style>