<template>
  <div class="title-apply"><img src="../../public/apply-img/返回5.png" @click="back">商品管理</div>
  <div class="select-top">
    <div @click="select('sell')" class="active" ref="sell">在售商品</div>
    <div @click="select('rent')" ref="rent">租赁商品</div>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  methods: {
    back() {
    this.$router.push('/home')    
    },
    select(arg) {
    if (arg == 'sell') { this.$refs.sell.className = 'active'; this.$refs.rent.className = ''; }  
    else {this.$refs.sell.className='';this.$refs.rent.className='active';}
    this.$router.push('/manage/'+arg)    
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
.select-top{
  background-color: #AD8A68;  
  height: 70px;
  line-height: 70px;
  font-size: 35px;
  margin-top: -1px;
  padding-top: 1px;
  display: flex;
  justify-content: space-around;
  div{
    display: inline-block;
    height: 50px;
    line-height: 50px;
    margin-top: 10px;
    width: 100px;
    font-size: 20px;
    color: #000;  
    border: 1px solid #000;
    &.active{
    border: 1px solid #fff;
    color: aliceblue;
    }
  }
}
</style>