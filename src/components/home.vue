<template>
  <div class="hello">
     <div id="thao">
           <Snowf
  :amount="100"
  :size="8"
  :speed="0.6"
  :wind="0"
  :opacity="1"
  :swing="1"
  :image="null"
  :zIndex="-1"
  :resize="true"
  color="#fff"
/>
 
        <img id="imgthao1" style="left:0px; " src="../assets/HappyBirthday.png">
        <img id="imgthao2" style="left:10%;" src="../assets/HappyBirthday.png">
        <img id="imgthao3" style="left:20%; height:100px; width: 100px;" src="../assets/thao3.png">
        <img id="imgthao4" style="left:30%;;" src="../assets/HappyBirthday.png">
        <img id="imgthao5" style="left:40%; height:100px; width: 100px;" src="../assets/timg.gif">
        <img id="imgthao6" style="left:50%; height:50px; width: 50px;" src="../assets/thao3.png">
        <img id="imgthao7" style="left:60%; height:100px; width: 100px;" src="../assets/timg.gif">
        <img id="imgthao8" style="left:70%; height:100px; width: 100px;" src="../assets/timg.gif">
        <img id="imgthao9" style="left:80%; height:100px; width: 100px;" src="../assets/timg.gif">
        <img id="imgthao10" style="left:90%; height:50px; width: 50px;" src="../assets/thao3.png">
      <ul style="margin-top: 8%">
        <input class="thaomminput" type="text" placeholder="Nhập tên của bạn" />
        <input class="thaomminput" type="password" placeholder="Nhập mật mã" />
         <li>
          <router-link to="/like">
            <button class="thaommsubmit">Đăng nhập</button>
          </router-link>
        </li>
        <!-- <li>
          <router-link to="/like">
            <button class="btn-primary">Thích</button>
          </router-link>
        </li> -->
        <!-- <li>
          <router-link to="/unlike">
            <button class="btn-primary">Không thích</button>
          </router-link>
        </li> -->
      </ul>
      <!-- <div>
        <h2>15/08/2018</h2>
      </div> -->
  </div>
  </div>
</template>

<script>
import Snowf from "vue-snowf";
export default {
  components: {
    Snowf
  },
  name: "home",
  data() {
    return {
      show: false,
      show1: false,
      snow: "../assets/thao1.png"
    };
  },
  mounted() {
    this.show = true;
    this.show1 = true;
  }
};
</script>
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 4s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/*slide-fade-out */
.slide-fade-out-enter-active {
  transition: all 3s ease;
}
.slide-fade-out-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-out-enter,
.slide-fade-out-leave-to {
  transform: translateX(300px);
  opacity: 1;
}
/*slide-fade */
.slide-fade-enter-active {
  transition: all 3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(-300px);
  opacity: 1;
}


/*icon move top to bottom*/

#imgthao1 {
  animation: flow 25s infinite;
  animation-direction: normal ;
  position: absolute; 
}
#imgthao2 {
  animation: flow1 14s infinite;
  animation-direction: normal ;
  position: absolute; 
}
#imgthao3 {
  animation: flow1 24s infinite;
  animation-direction: normal ;
  position: absolute; 
}
#imgthao3 {
  animation: flow2 28s infinite;
  animation-direction: normal ;
  position: absolute; 
}
#imgthao4 {
  animation: flow1 24s infinite;
  animation-direction: normal ;
  position: absolute; 
}
#imgthao5 {
  animation: flow1 18s infinite;
  animation-direction: normal ;
  position: absolute; 
}
#imgthao6 {
  animation: flow1 17s infinite;
  animation-direction: normal ;
  position: absolute; 
}
#imgthao7 {
  animation: flow3 15.5s infinite;
  animation-direction: normal ;
  position: absolute; 
}
#imgthao8 {
  animation: flow2 35s infinite;
  animation-direction: normal ;
  position: absolute; 
}
#imgthao9 {
  animation: flow1 22.5s infinite;
  animation-direction: normal ;
  position: absolute; 
}#imgthao10 {
  animation: flow1 21.5s infinite;
  animation-direction: normal ;
  position: absolute; 
}
@keyframes flow {
    from{ top: -100px;
     }
    to{ 
      top: 100%;
    }
}
@keyframes flow1 {
    from{ top: -150px;
      transform: rotate(360deg);
     }
    to{ top: 100%;
    animation-name: rotate360;
    }
}
@keyframes flow2 {
    from{ top: -150px;
     transform: rotate(90deg);
     }
    to{ top: 100%;
    transform: rotate(-360deg)
    }
}
@keyframes flow3 {
    from{ top: -150px;
     transform: rotate(360deg); 
     }
    to{ top: 100%;
    animation-name: rotate360;
    }
}
.thaomminput{
    outline: 0;
    border: 1px solid rgba(255, 255, 255, 0.4);
    background-color: rgba(255, 255, 255, 0.2);
    width: 250px;
    border-radius: 3px;
    padding: 10px 15px;
    margin: 0 auto 10px auto;
    display: block;
    text-align: center;
    font-family: 'Cabin', sans-serif;
    font-size: 22px;
    color: white;
    -webkit-transition-duration: 0.25s;
    transition-duration: 0.25s;
    font-weight: 300;
}
.thaomminput::placeholder {
    color: white;
    opacity: 0.5; /* Firefox */
}
.thaommsubmit{
    outline: 0;
    background-color: white;
    font-family: 'Cabin', sans-serif;
    border: 0;
    padding: 10px 15px;
    color: #f879a7;
    border-radius: 3px;
    width: 250px;
    cursor: pointer;
    font-size: 22px;
    -webkit-transition-duration: 0.25s;
    transition-duration: 0.25s;
}
/* * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-weight: 300;
} */
</style>
