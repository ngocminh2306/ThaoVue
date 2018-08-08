<template>
  <div class="hello">
    <Snowf
  :amount="100"
  :size="8"
  :speed="2.5"
  :wind="0"
  :opacity="1"
  :swing="1"
  :image="null"
  :zIndex="null"
  :resize="true"
  color="#fff"
/>
     <div id="thao">
      <!-- <transition class="show2" name="slide-fade-out">
        <img style="float: left; height:250px; width: 200px; margin-left: 100px;" v-if="show1" src="../assets/thao1.png">
      </transition>
      <transition class="show2" name="slide-fade">
        <img style="float: right; height:250px; width: 200px; margin-right: 100px;" v-if="show1" src="../assets/thao3.png">
      </transition> -->
        <img id="imgthao1" style="left:0px; height:250px; width: 200px; margin-right: 100px;" src="../assets/thao3.png">
        <img id="imgthao2" style="left:20%; height:100px; width: 100px;" src="../assets/thao3.png">
        <img id="imgthao3" style="left:30%; height:100px; width: 100px;" src="../assets/thao3.png">
        <img id="imgthao4" style="left:50%; height:100px; width: 100px;" src="../assets/thao3.png">
        <img id="imgthao5" style="left:60%; height:100px; width: 100px;" src="../assets/thao3.png">
        <img id="imgthao6" style="left:40%; height:100px; width: 100px;" src="../assets/thao3.png">
        <img id="imgthao7" style="left:500px; height:100px; width: 100px;" src="../assets/thao3.png">
        <img id="imgthao8" style="left:95%; height:100px; width: 100px;" src="../assets/thao3.png">
        <img id="imgthao9" style="left:80%; height:100px; width: 100px;" src="../assets/thao3.png">
        <img id="imgthao10" style="left:70%; height:100px; width: 100px;" src="../assets/thao3.png">
      <ul>
        <h2>Thích trang web này không em?</h2>
        <li>
          <router-link to="/like">
            <button class="btn-primary">Thích</button>
          </router-link>
        </li>
        <li>
          <router-link to="/unlike">
            <button class="btn-primary">Không thích</button>
          </router-link>
        </li>
      </ul>
      <div>
        <h2>15/08/2018</h2>
      </div>
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
  animation: flow1 10s infinite;
  animation-direction: normal ;
  position: absolute; 
}
#imgthao2 {
  animation: flow1 7s infinite;
  animation-direction: normal ;
  position: absolute; 
}
#imgthao3 {
  animation: flow1 5s infinite;
  animation-direction: normal ;
  position: absolute; 
}
#imgthao3 {
  animation: flow2 10s infinite;
  animation-direction: normal ;
  position: absolute; 
}
#imgthao4 {
  animation: flow1 5s infinite;
  animation-direction: normal ;
  position: absolute; 
}
#imgthao5 {
  animation: flow1 10s infinite;
  animation-direction: normal ;
  position: absolute; 
}
#imgthao6 {
  animation: flow1 10s infinite;
  animation-direction: normal ;
  position: absolute; 
}
#imgthao7 {
  animation: flow3 3s infinite;
  animation-direction: normal ;
  position: absolute; 
}
#imgthao8 {
  animation: flow2 20s infinite;
  animation-direction: normal ;
  position: absolute; 
}
#imgthao9 {
  animation: flow1 5s infinite;
  animation-direction: normal ;
  position: absolute; 
}#imgthao10 {
  animation: flow1 9s infinite;
  animation-direction: normal ;
  position: absolute; 
}
@keyframes flow1 {
    from{ top: -50px;
     transform: rotate(-90deg);
     }
    to{ top: 100%;
    transform: rotate(270deg)
    }
}
@keyframes flow2 {
    from{ top: -50px;
     transform: rotate(90deg);
     }
    to{ top: 100%;
    transform: rotate(-360deg)
    }
}
@keyframes flow3 {
    from{ top: -50px;
     transform: rotate(-80deg);
     }
    to{ top: 100%;
    transform: rotate(200deg)
    }
}
</style>
