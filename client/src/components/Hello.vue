<template>
  <div class="hello">
    <div class="text-center">
      <img src="../assets/logo.png" alt="">
    </div>
    <h3>{{name}}</h3>
    <span>{{msg}}</span>
  </div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      msg: "Hello World"
    };
  }
};
</script>
