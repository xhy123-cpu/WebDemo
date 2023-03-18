<template>
<div class="title-apply"><img src="../../public/apply-img/返回5.png" @click="back">设备入货</div>
<div class="main">
    <div>
    <div class="title-apply-two">柜门1</div>  
    <div class="input-apply-two" @click="make">入货</div>
    </div>
    <div>
    <div class="title-apply-two">柜门2</div>  
    <div class="input-apply-two" @click="make">入货</div>
    </div>
    <div>
    <div class="title-apply-two">柜门3</div>  
    <div class="input-apply-two" @click="make">入货</div>        
    </div>
    <div><div class="title-apply-two">柜门4</div>  
    <div class="input-apply-two" @click="make">入货</div></div>
    <div><div class="title-apply-two">柜门5</div>  
    <div class="input-apply-two" @click="make">入货</div></div>
    <div><div class="title-apply-two">柜门6</div>  
    <div class="input-apply-two" @click="make">入货</div></div>
    <div style="height: 20px;"></div>
</div>
<div class="bottom-bar">
  <div></div>
  <div></div>
  <div></div>  
</div>
</template>
  
<script>
export default {
methods: {
    back() {
    this.$router.push('/home')  
    },
    make() {
    this.$router.push('/scan')
    }    
},
data() {
    return {

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
  width: 80px;
  background-color: #fff;  
  margin-top: 10px;
  display: inline-block;
  border-radius: 10px;
}
}
.title-apply-two{
height: 50px;
line-height: 50px;
font-size: 35px;
position: absolute;
top: 100px;
left: 42px;

}
.input-apply-two{
position: absolute;
left: 32px;
bottom: 15px;
height: 40px;
width: 100px;
background-color: #AD8A68;
border-radius: 10px;
font-size: 30px;
line-height: 40px;
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
</style>>