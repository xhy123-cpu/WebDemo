<template>
  <div class="title-apply"><img src="../../../public/apply-img/返回5.png" @click="back">申请补货</div>
  <div class="box">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#">XX补货点></a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;xx年xx月xx日
    <div class="show">
    <div><img src="../../../public/mange-img/可口可乐汽水.png"></div>
    <div>￥3.5<br />×10</div>
    </div>
    <div class="show">
    <div><img src="../../../public/person-img/纸巾.png"></div>
    <div>￥1<br />×20</div>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
    back() {
      this.$router.go(-1)
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
.show{
margin-top: 10px;
margin-left: 30px;
margin-right: 30px;
height: 120px;
display: flex;
justify-content: space-around;
border: 1px solid #000;

>div{
    &:nth-child(1){
    vertical-align:middle ;
    height: 100px;
    width: 100px;
    margin: 10px;
    font-size: 35px;
    line-height: 50px;
    display: inline-block;
    img{
      height: 100px;  
    }
    }
    &:nth-child(2){
    vertical-align:middle ;
    height: 100px;
    width: 50px;
    margin: 10px;
    font-size: 20px;
    line-height: 50px;
    display: inline-block;
    text-align: left;
    }
}
}
.box{
    text-align: left;

    height: 300px;
    border: 1px solid #000;
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 10px;
}
</style>