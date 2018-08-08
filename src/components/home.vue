<template>
  <div class="hello">
     <div id="demo">
      <transition class="show2" name="slide-fade-out">
        <img style="float: left; height:250px; width: 200px; margin-left: 100px;" v-if="show1" src="../assets/thao1.png">
      </transition>
      <transition class="show2" name="slide-fade">
        <img style="float: right; height:250px; width: 200px; margin-right: 100px;" v-if="show1" src="../assets/thao3.png">
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
</style>
