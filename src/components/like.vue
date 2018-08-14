<template>
  <div style="  margin-top: 0px !important;">
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
 <!-- Slider main container -->
  <div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide"><img style="height:100%;" src="../assets/timg.gif"></div>
          <div class="swiper-slide"><img style="height:100%;" src="../assets/thao55.jpg"></div>
        <div class="swiper-slide"><img style="height:100%;" src="../assets/thao99.png"></div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar"></div>
</div>
    <router-link class="thaonextbtn" to="/content">
        <button>Đi tiếp &nbsp;&nbsp;&nbsp; >></button>
    </router-link>
  </div>
</template>

<script>
import Snowf from "vue-snowf";
import Swiper from "swiper";
export default {
  components: {
    Swiper,
    Snowf
  },
  name: "hello",
  data() {
    return {};
  },
  computed: {},
  mounted() {
    let mySwiper = new Swiper(".swiper-container", {
      // Optional parameters
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      // If we need pagination
      pagination: {
        el: ".swiper-pagination"
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }

      // And if we need scrollbar
      // scrollbar: {
      //   el: ".swiper-scrollbar"
      // }
    });
  }
};
</script>

<style>
.thaonextbtn {
  position: absolute;
  top: 47%;
  right: 30px;
}
.thaonextbtn button {
  outline: 0;
  background-color: white;
  font-family: "Cabin", sans-serif;
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
.swiper-container {
  width: 1028px;
  height: 100vh;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
</style>
