<template>
  <router-view @goback="take"></router-view>
</template>

<script>


export default {
  name: 'App',
  methods: {
    take(arg) {
      this.$router.push('/'+arg)
    }
  },
  components: {

  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
