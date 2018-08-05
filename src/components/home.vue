<template>
  <div class="hello">
     <div id="demo">
      <transition class="show2" name="slide-fade-out">
        <img style="float: left; height:200px; width: 150px; padding-left: 100px;" v-if="show1" src="http://media.bilutv.com/uploads/2017/06/240/phuong-dai-tru-2017-201706356.jpg">
      </transition>
      <transition class="show2" name="slide-fade">
        <img style="float: right; height:200px; width: 150px; padding-right: 100px;" v-if="show1" src="http://media.bilutv.com/uploads/2017/06/240/phuong-dai-tru-2017-201706356.jpg">
      </transition>

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
export default {
  name: "home",
  data() {
    return {
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
</style>
