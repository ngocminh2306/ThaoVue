<template>
  <div class="hello">
    <h2>
      like page
    </h2>
    <input placeholder="Mã đăng nhập"/>
    <router-link class="btn-primary" to="/content">
        <button>Đăng nhập</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {};
  }
};
</script>

<style>
h1,
h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
