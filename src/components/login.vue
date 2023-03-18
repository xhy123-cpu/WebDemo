<template>
  <main>
    <div class="show-top">
        <div class="hello">Hello!<br />欢迎登陆</div>
        <div class="select-login">
            <div class="select-bar">
                <div class="active">登录</div>
                <div @click="register">注册</div>
            </div>
            <div class="box-input">
                <img src="../../public/login-img/shouji.png">
                <input type="text" placeholder="
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                手机号" v-model="myphone">
            </div>
            <div class="box-input">
                <img src="../../public/login-img/suoding.png">
                <input type="password" placeholder="
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                密码" v-model="mypassword">
            </div>
        </div>
    </div>
    <div class="btn-login" @click="home">立即登录</div>
    <div class="info-bottom">
        --------------第三方登陆--------------
    </div>
    <div class="bottom">
        <img src="../../public/login-img/QQ.png">
        <img src="../../public/login-img/weixin.png">
        <img src="../../public/login-img/youxiang.png">
    </div>
    <div>

    </div>
  </main>
</template>

<script>
export default {
  methods: {
    register() {
      this.$router.push('/register')
    },
    home() {
      if (this.password == this.mypassword && this.phone == this.myphone)
      this.$router.push('/home')
    }
    },
  data() {
    return {
      phone: '123456789',
      password: '1314520',
      myphone: '',
      mypassword: '',      
    }
  }
}
</script>

<style lang="less" scoped>
main{
    
    height: 736px;
    background-color: #fff;
}
.show-top{
background-color: #e3e0eb;
height: 300px;
border-bottom-right-radius:30% ;
border-bottom-left-radius:30% ;
position: relative;
}
.hello{
    text-align: left;
    font-size: 40px;
    padding: 20px;
}
.select-login{
    position: absolute;
    width: 340px;
    height: 200px;
    right: 37px;
    top: 180px;
    background-color: #fff;
    border: 2px solid #000;
}
.select-bar{
    height: 50px;
    div{
        background-color: #808641;
        display: inline-block;
        width: 170px;
        text-align: center;
        font-size: 35px;
        &.active{
            background-color: #fff;
        }
    }
}
.btn-login{
    height: 50px;
    width: 250px;
    background-color: #121c47;
    margin-top: 150px;
    margin-left: 82px;
    font-size: 35px;
    line-height: 50px;
    color: #fff;
    border-radius: 30px;
    
}
.info-bottom{
    margin-top: 50px;
}
.box-input{
    height: 70px;
    position: relative;
    img{
        background-color: #fff;
        height: 60px;
        border: transparent;
        padding: 0;
        position: absolute;
        top: 10px;
        left: 10px;
    }
    input{
        position: absolute;
        top: 15px;
        left: 70px;
        height: 40px;
        width: 230px;
    }
}
.bottom{
    margin: 50px;
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-content: space-around;
    img{
        height: 60px;
    }
}
</style>