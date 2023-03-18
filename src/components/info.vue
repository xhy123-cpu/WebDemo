<template>
  <div class="title-apply"><img src="../../public/apply-img/返回5.png" @click="back">信息记录</div>
  <router-view></router-view>
  <div class="bottom-bar">
    <div class="active" @click="select('One')" ref="h">分成数据</div>
    <div @click="select('Two')" ref="k">广告播放量</div>
  </div>
</template>

<script>
export default {
    methods: {
    back() {
    this.$router.push('/home')    
    },
    select(arg) {
      if (arg == 'One') { this.$refs.h.className='active';this.$refs.k.className='';}
      else { ; this.$refs.k.className = 'active'; this.$refs.h.className = ''; } 
      this.$router.push('/info/info'+arg)  
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
.bottom-bar{
position: fixed;
height: 60px;  
width: 414px;
background-color: #AD8A68; 
z-index: 99; 
bottom: 0px;
line-height: 60px;
color: #fff;
font-size: 35px;
display: flex;
justify-content: space-around;
>div{
  height: 40px;
  width: 120px;
  background-color: #fff;  
  margin-top: 10px;
  display: inline-block;
  border-radius: 10px;
  font-size: 20px;
  color: #000;
  line-height: 40px;
  &.active{
    color: #fff;
    background-color: #5b0acd;
  }
}
}
</style>