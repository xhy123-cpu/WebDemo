<template>
<div class="title-apply"><img src="../../../public/apply-img/返回5.png" @click="back">申请补货</div>
<img src="../../../public/person-img/个人_2.png" class="head-portrait">
<div class="bar">司机：XXX</div>
<div class="bar">车牌号：{{ chepaihao }}</div>
<div class="bar">年龄：X岁</div>
</template>

<script>
export default {
    methods: {
    back() {
    this.$router.go(-1)
    }
},
data(){
    chepaihao:sessionStorage.getItem('user')
}
}
</script>

<style lang="less" scoped>
.bar{
    height: 50px;
    font-size: 35px;
    line-height: 50px;
    margin-top: 30px;
}
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
.head-portrait{
  margin-top: 20px;  
  height: 300px;
}
</style>