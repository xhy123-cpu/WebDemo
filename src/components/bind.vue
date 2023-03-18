<template>
    <div class="title-apply"><img src="../../public/apply-img/返回5.png" @click="back">申请补货</div>
    <img src="../../public/home-img/1.jpg" class="show">
    <div class="show-info" v-if="show">
        <div>编号：00001</div>
        <div>车牌：{{ chepai }}</div>
        <van-button type="danger" @click="jiebang">解绑</van-button>
    </div>
    <div class="dengji" v-show="showTip">
    <div>是否确认解绑</div>
    <van-button round type="success" @click="bangding">确定</van-button>
  </div>
</template>

<script>
import { Dialog } from 'vant';
export default {
methods: {
back() {
this.$router.go(-1)  
},
jiebang() {
sessionStorage.removeItem('user') 
this.showTip=true
},
bangding() {
  this.showTip=false
  this.show=false

}
},

data() {
    return {
        chepai: sessionStorage.getItem('user'),
        show: true,
        showTip:false
    }
    },

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
.show{
  width: 300px;
}
.show-info{
  height: 200px;  
  margin: 30px 80px;
  background-color: #7f3d3d;
  padding: 1px;
  border-radius: 10px;
  font-size: 30px;
  div{
    height: 50px;line-height: 50px;
    margin: 10px;

  }
}
.dengji{
background-color: #F9B264;
position: fixed;
height: 150px;
width: 220px;
z-index: 99;
top: 200px;
left: 100px;
border-radius: 10px;
div{
  height: 50px;
  font-size: 35px;
  width: 210px;
  margin-bottom: 40px;
}
}
</style>