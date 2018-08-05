<template>
  <div class="hello">
    <!-- <img src="https://media.giphy.com/media/YFF3cm2cgnDtm/giphy.gif" alt=""> -->
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
      <li>
        <router-link to="/news">News</router-link>
      </li>
    </ul>
    <h2>Form</h2>
    <ul>
      <li>
        <router-link to="/form">Form</router-link>
      </li>
      <li>
        <router-link to="/user">FormUser</router-link>
      </li>
    </ul>
    <div id="demo">
    <transition class="show2" name="slide-fade">
      <img v-if="show1" src="http://media.bilutv.com/uploads/2017/06/240/phuong-dai-tru-2017-201706356.jpg">
    </transition>
    <transition name="fade">
      <img v-if="show" src="http://genknews.genkcdn.vn/thumb_w/660/2018/8/3/6-iphone-7-lightning-headphone-jack-adapter-15333136410591221054151.jpg" alt="">
    </transition>
    <transition class="show2" name="slide-fade">
      <img v-if="show1" src="http://media.bilutv.com/uploads/2017/06/240/phuong-dai-tru-2017-201706356.jpg">
    </transition>

  </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      show: false,
      show1: false
    };
  },
  mounted() {
    this.show = true;
    this.show1 = true;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

/* */
.slide-fade-enter-active {
  transition: all 3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(300px);
  opacity: 0。2;
}
</style>
