<template>
  <div class="title-apply"><img src="../../../public/apply-img/返回5.png" @click="back">使用过的补货点</div>
  <div class="show">
    <div>XX补货点</div>
    <div>xx年xx月xx日</div>
  </div>
  <div class="show">
    <div>XX补货点</div>
    <div>xx年xx月xx日</div>
  </div>
  <div class="show">
    <div>XX补货点</div>
    <div>xx年xx月xx日</div>
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
border: 1px solid #000;

>div{
    &:nth-child(1){
    vertical-align:middle ;
    height: 50px;
    margin: 10px;
    font-size: 35px;
    line-height: 50px;
    text-align: left;
    img{
      height: 100px;  
    }
    }
    &:nth-child(2){
    vertical-align:middle ;
    height: 60px;
    margin: 10px;
    text-align: right;
    font-size: 20px;
    line-height: 50px;
    }
}
}

</style>