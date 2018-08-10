<template>
  <div id="app" >
    <router-view/>
    <audio id="audio" volume="0.1">
      <source src="./assets/1.mp3" type="audio/mp3">
    </audio>
  </div>
</template>

<script>

export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background-size: cover;
  background-image: url("./assets/bg/bg1.png");
  background-repeat: no-repeat;
  height: 100%;
  overflow: hidden;
}
</style>
