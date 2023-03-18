<template>
  <div class="show-top">
    <div class="show-bar">
      <div></div>
      <img src="../../public/home-img/扫码.png" class="saoyisao" @click="make('sweep')">
    </div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" style="margin-left: 20px;margin-right: 20px;">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <div class="select">
      <div @click="make('apply')"><img src="../../public/login-img/tihuoshenqing.png"><br />申请补货</div>
      <div @click="make('replenish')"><img src="../../public/login-img/ico_shebeiguanli_shebeiweixiu.png"><br />设备入货</div>
      <div @click="make('manage')"><img src="../../public/login-img/shangpin.png"><br />商品管理</div>
      <div @click="make('info')"><img src="../../public/login-img/xinxijilu.png"><br />信息记录</div>  
    </div>
  </div>
  <div class="show-bottom" @click="make('bind')">
    <div class="title-bottom">我的设备</div>
    <div class="show-bottom-tip" v-if="showbtn">暂时还没有绑定设备</div>
    <div class="show-bottom-btn" v-if="showbtn" @click="showTip=true">立即绑定</div>
    <div class="show-bottom-tip" v-if="!showbtn">编号:00001</div>
    <div class="show-bottom-tip" v-if="!showbtn">车牌:{{ showchepai }}</div>
  </div>
  <div class="show-bottom" @click="make('selectGoods')" >
    <div class="title-bottom">推荐
      <div class="th">护手霜</div>
      <div class="th">梳子</div>
      <div class="th">糖</div>
      <div class="th">棉签</div>
    </div>
  </div>
  <div style="height: 90px;"></div>
  <div class="dengji" v-show="showTip">
    <input type="text" v-model="chepai" placeholder="请输入车牌号">
    <van-button round type="success" @click="bangding">确定</van-button>
  </div>
</template>

<script>
export default {
  methods: {
    make(arg) {
    if(arg=='bind'&&this.showbtn) return
    this.$router.push('/'+arg) 
    },
    bangding() {
      sessionStorage.setItem('user', this.chepai)
      this.showTip=false
    },

  },
  computed: {
    showbtn() {
      if (sessionStorage.getItem('user')) {
        return false
      }
      return true
    }
  },
  data() {
    return {
    showTip: false,
    chepai: '',
    showchepai:sessionStorage.getItem('user')
    }
  }
}
</script>

<style lang="less" scoped>
.show-top{
  height: 370px;
  background-color: #e3e0eb;
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
input{
  height: 40px;
  width: 210px;
  margin-bottom: 40px;
}
}
.show-bar{
    height: 90px;
    position: relative;
    line-height: 100px;
    >div{
      position: absolute;
      height: 70px;
      width: 70px;
      left: 4px;
      top: 4px;
      background-color: #ea1111;
    }
}
.saoyisao{
    height: 70px;
    margin-left: 300px;
}
.my-swipe .van-swipe-item {
    color: #000;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #AD8A68;
}
.select{
  margin-top: 10px;  
  height: 120px;  
  display: flex;
  justify-content: space-around;
  >div{
    height: 120px;
    display: inline-block;
    width: 70px;
    img{
      height: 70px;  
    }
  }
}
.show-bottom{
  border: 1px solid #000; 
  margin: 10px 20px;
  height: 200px;
  position: relative;
  .th{
    height: 37px;
    display: inline-block;
    width: 80px;
    position: absolute;
    line-height: 37px;
    font-size: 25px;
    background-color: #ad6a6a;
    text-align: center;
    &:nth-child(1){
      top: 80px;
      left: 62px;
    }
    &:nth-child(2){
      top: 130px;
      left: 62px;
    }
    &:nth-child(3){
      top: 80px;
      left:230px;
    }
    &:nth-child(4){
      top: 130px;
      left:230px;
    }
  }
}
.title-bottom{
  height: 40px;
  line-height: 40px;
  text-align: left;
  font-size: large;
  margin: 10px 15px 15px;
  border-bottom:2px solid #e3e0eb;

}
.show-bottom-tip{
  font-size: 25px;  
  margin-top: 30px;
}
.show-bottom-btn{
  display: inline-block;  
  margin-top: 20px;
  width: 160px;
  border-radius: 20px;
  line-height: 40px;
  font-size: 25px;
  height: 40px;
  background-color:#AD8A68;
}
</style>