<template>
<div class="show">
    <div><img src="../../../public/mange-img/可口可乐汽水.png"></div>
    <div>广告名:可口可乐<br />播放时长:2天3h</div>
</div>
<div class="show">
    <div></div>
    <div></div>
</div>
<div class="show">
    <div></div>
    <div></div>
</div>

</template>

<script>
export default {
data() {
    return {
    willShow:'货柜'
    }
},
methods: {
    select(arg) {
    if (arg == 'h') { this.willShow = '货柜'; this.$refs.h.className='active';this.$refs.k.className='';}
    else { this.willShow = '库存';this.$refs.k.className='active';this.$refs.h.className=''; } 
    }
},
}
</script>

<style lang="less" scoped>
.show{
margin-top: 50px;
margin-left: 50px;
margin-right: 50px;
height: 120px;
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
    width: 150px;
    margin: 10px;
    font-size: 20px;
    line-height: 50px;
    display: inline-block;
    text-align: left;
    }
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