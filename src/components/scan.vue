<template>
    <div style="height: 736px;background-color: #DFE0DF;">
        <button id="button_take" style="height: 0;width: 0;display: none;position: fixed;"></button><br />
        <div class="top-show">
          <img src="../../public/apply-img/返回5.png" @click="make"><a>扫描标签</a>
        </div>
        <div style="height: 50px;"></div>
    
        <div style="float: left;width:50%"><video id="v"></video></div>
        <canvas id="canvas" style="display:none;"></canvas><br />  
        <div class="bian-one"></div>
        <div class="bian-two"></div>
        <div class="bian-three"></div>
        <div class="bian-four"></div>
        <div class="bian-five"></div>
    
    </div>
    </template>
    
    <script setup>
    import { ref, onMounted } from 'vue'
    import router from '../router.js'
    onMounted(() => {
        !(function () {
            // 老的浏览器可能根本没有实现 mediaDevices，所以我们可以先设置一个空的对象
            if (navigator.mediaDevices === undefined) {
                navigator.mediaDevices = {};
            }
            if (navigator.mediaDevices.getUserMedia === undefined) {
                navigator.mediaDevices.getUserMedia = function (constraints) {
                    // 首先，如果有getUserMedia的话，就获得它
                    var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
     
                    // 一些浏览器根本没实现它 - 那么就返回一个error到promise的reject来保持一个统一的接口
                    if (!getUserMedia) {
                        return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
                    }
     
                    // 否则，为老的navigator.getUserMedia方法包裹一个Promise
                    return new Promise(function (resolve, reject) {
                        getUserMedia.call(navigator, constraints, resolve, reject);
                    });
                }
            }
            const constraints = {
                video: true,
                audio: false
            };
            let videoPlaying = false;
            let v = document.getElementById('v');
            let promise = navigator.mediaDevices.getUserMedia(constraints);
            promise.then(stream => {
                // 旧的浏览器可能没有srcObject
                if ("srcObject" in v) {
                    v.srcObject = stream;
                } else {
                    // 防止再新的浏览器里使用它，应为它已经不再支持了
                    v.src = window.URL.createObjectURL(stream);
                }
                v.onloadedmetadata = function (e) {
                    v.play();
                    videoPlaying = true;
                };
            }).catch(err => {
                console.error(err.name + ": " + err.message);
            });
            document.getElementById('button_take').addEventListener('click', function () {
                if (videoPlaying) {
                    let canvas = document.getElementById('canvas');
                    canvas.width = v.videoWidth;
                    canvas.height = v.videoHeight;
                    canvas.getContext('2d').drawImage(v, 0, 0);
                    let data = canvas.toDataURL('image/webp');
                    document.getElementById('photo').setAttribute('src', data);
                    //   canvas.getContext("2d").drawImage(Img,0,0,width,height); //将图片绘制到canvas中
                }
            }, false);
        })();
    })
    </script>
    <script>
    export default {
        emits:['goback'],
        methods:{
        make() {
        this.$emit('goback','replenish')
        }
        }
    }
    </script>
    
    <style lang="less" scoped>
    .top-show{
      background-color: #808641;
      height: 70px;
      z-index: 99;
      text-align: left;
      position: relative;
      top: -14px;
      img{
       height: 50px;
       margin-left: 20px;
       margin-top: 10px;
      }
      a{
       position: absolute; 
       height: 50px;
       left: 150px;
       top: 10px;
       line-height: 50px;
       font-size: 35px;
      }
    }
    .bian-one{
        height: 150px;width: 150px;
        z-index: 999;position: fixed;  
        top: 200px;
        left: 34px;
        border-top: 2px solid #000;
        border-left: 2px solid #000;
    
    }
    .bian-two{
        height: 150px;width: 150px;
        z-index: 999;position: fixed;  
        top: 201px;
        right: 263px;
        border-top: 2px solid #000;
        border-right: 2px solid #000;
    }
    .bian-three{
        height: 150px;width: 150px;
        z-index: 999;position: fixed;  
        top: 385px;
        left: 34px;
        border-bottom: 2px solid #000;
        border-left: 2px solid #000;
    }
    .bian-four{
        height: 150px;width: 150px;
        z-index: 999;position: fixed;  
        top: 387px;
        right: 263px;
        border-bottom: 2px solid #000;
        border-right: 2px solid #000;
    }
    .bian-five{
        height: 3px;width: 380px;
        z-index: 999;position: fixed;  
        top: 367px;
        background-color: #000;
        right: 245px;
    }
    </style>