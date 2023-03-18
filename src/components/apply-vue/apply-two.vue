<template>
  <div class="main">
    <div>
      <div class="title-apply-two">商品标题<br />￥20</div>  
      <van-stepper v-model="value" class="input-apply-two"/>

    </div>
    <div>
      <div class="title-apply-two">商品标题<br />￥15</div>  
      <van-stepper v-model="value" class="input-apply-two"/>
    </div>
    <div>
      <div class="title-apply-two">商品标题<br />￥5</div>  
      <van-stepper v-model="value" class="input-apply-two"/>        
    </div>
    <div><div class="title-apply-two">商品标题<br />￥1</div><van-stepper v-model="value" class="input-apply-two"/></div>
    <div><div class="title-apply-two">商品标题<br />￥10</div><van-stepper v-model="value" class="input-apply-two"/></div>
    <div><div class="title-apply-two">商品标题<br />￥25</div><van-stepper v-model="value" class="input-apply-two"/></div>
  </div>
  <div class="btn-apply-two" @click="apply">申请</div>
  <div class="show-ok" v-if="isshow">
    <div>申请成功</div>
    <div>请前往下面的补货地点进行补货<br />地点：上官村</div>
    <div><a href="https://www.amap.com/">去这里</a></div>
  </div>
</template>

<script>
export default {
  methods: {
    apply() {
      this.isshow=true 
    }
  },
  data() {
    return {
      isshow:false  
    }
  }
}
</script>

<style lang="less" scoped>
.main{
  overflow: scroll;
  height: 666px;
  >div{
    height: 210px;
    display: inline-block;
    margin: 20px;
    width: 160px;
    border: 1px solid #000;
    position: relative;
  }
}
.btn-apply-two{
  position: fixed;
  height: 60px;  
  width: 180px;
  background-color: #AD8A68; 
  z-index: 99; 
  bottom: 50px;
  left: 121px;
  line-height: 60px;
  color: #fff;
  border-radius: 30px;
  font-size: 35px;
}
.title-apply-two{
  height: 50px;
  line-height: 25px;
  font-size: large;
  position: absolute;
  top: 100px;
  left: 45px;

}
.input-apply-two{
  position: absolute;
  left: 37px;
  bottom: 15px;
}
.show-ok{
  position: fixed;
  height: 280px;
  bottom: 200px;  
  width: 374px;
  left: 20px;
  border-radius: 20px;
  background-color: #AD8A68;
  color: #fff;
  >div{
    &:nth-child(1){
      height: 50px;
      font-size: 30px;  
      line-height: 50px;
    }
    &:nth-child(2){
      height: 80px;
      font-size: 20px;  
      line-height: 40px;
      margin-top: 20px;
    }
    &:nth-child(3){
      height: 50px;
      font-size: 35px;  
      line-height: 50px;
      margin: 40px 80px;
      border-radius: 20px;
      background-color: #FFF7EB;
      color:#F9B264
    }
  }
}
</style>>