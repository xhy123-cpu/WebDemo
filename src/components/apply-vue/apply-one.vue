<template>
  <div class="map">
    <van-search
  v-model="value"
  show-action
  label="地址"
  placeholder="请输入搜索关键词"
  @search="onSearch"
>
  <template #action>
    <div @click="onClickButton">搜索</div>
  </template>
    </van-search>
  </div>
  <div class="select-apply-one" @click="make">田坪补货点&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.1KM></div>
  <div class="select-apply-one" @click="make">上官庄补货点&nbsp;&nbsp;&nbsp;3.5KM></div>
  <div class="select-apply-one" @click="make">大观村补货点&nbsp;&nbsp;&nbsp;3.8KM></div>
</template>

<script>
export default {
  methods: {
  make() {
    this.$router.push('/apply/applyTwo')
  }  
  }
}
</script>

<style lang="less" scoped>
.map{
  height: 300px;  
  background-image: url('../../../public/apply-img/map.png');
  background-size: cover;
}
.select-apply-one{
  background-color: #AD8A68;  
  height: 90px;
  margin: 20px;
  color: #fff;
  line-height: 90px;
  font-size: 35px;

}
</style>>
