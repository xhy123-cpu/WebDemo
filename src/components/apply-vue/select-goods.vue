<template>
    <div class="title-apply"><img src="../../../public/apply-img/返回5.png" @click="back">选择推荐商品</div>
    <div class="bar">
        <div @click="select(1)" ref="a"></div>
        <div @click="select(2)" ref="b"></div>
        <div @click="select(3)" ref="c"></div>
    </div>
    <div class="bar">
        <div @click="select(4)" ref="d"></div>
        <div @click="select(5)" ref="e"></div>
        <div @click="select(6)" ref="f"></div>
    </div>
    <div class="bar">
        <div @click="select(7)" ref="g"></div>
        <div @click="select(8)" ref="h"></div>
        <div @click="select(9)" ref="i"></div>
    </div>
    <div class="bar">
        <div @click="select(10)" ref="j"></div>
        <div @click="select(11)" ref="k"></div>
        <div @click="select(12)" ref="l"></div>
    </div>
    <div class="btn-apply-two" @click="apply">立即选择</div>
</template>

<script>
export default {
    methods: {
    back() {
      this.$router.go(-1)
    },
    apply(){
        this.$router.push('/apply')
    },
    select(id){
       if(id==1)this.$refs.a.className=this.$refs.a.className=='active'?'':'active'
       if(id==2)this.$refs.b.className=this.$refs.b.className=='active'?'':'active'
       if(id==3)this.$refs.c.className=this.$refs.c.className=='active'?'':'active'
       if(id==4)this.$refs.d.className=this.$refs.d.className=='active'?'':'active'
       if(id==5)this.$refs.e.className=this.$refs.e.className=='active'?'':'active'
       if(id==6)this.$refs.f.className=this.$refs.f.className=='active'?'':'active'
       if(id==7)this.$refs.g.className=this.$refs.g.className=='active'?'':'active'
       if(id==8)this.$refs.h.className=this.$refs.h.className=='active'?'':'active'
       if(id==9)this.$refs.i.className=this.$refs.i.className=='active'?'':'active'
       if(id==10)this.$refs.j.className=this.$refs.j.className=='active'?'':'active'
       if(id==11)this.$refs.k.className=this.$refs.k.className=='active'?'':'active'
       if(id==12)this.$refs.l.className=this.$refs.l.className=='active'?'':'active'
    },
  }
}
</script>

<style lang="less" scoped>
.btn-apply-two{
  position: fixed;
  height: 60px;  
  width: 180px;
  background-color: #AD8A68; 
  z-index: 99; 
  bottom: 20px;
  left: 121px;
  line-height: 60px;
  color: #fff;
  border-radius: 30px;
  font-size: 35px;
}
.bar{
    margin-top: 20px;
    height: 120px;
    display: flex;
    justify-content: space-around;
    div{
      height: 110px;
      width: 110px;
      display: inline-block;  
      border: 1px solid #000;
      &.active{
        border: 2px solid #10a88e;
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
</style>