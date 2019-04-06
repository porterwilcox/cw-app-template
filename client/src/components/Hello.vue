<template>
  <div class="text-white d-flex align-items-center justify-content-center" style="height: 100vh">
    <div class="text-center">
      <img src="../assets/logo.png" height="200">
      <h3 class="mt-3 title">CodeWorks Academy</h3>
      <span>Hello {{user.name ? user.name : 'World'}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "hello",
  computed:{
    user(){
      return this.$store.state.user
    }
  }
};
</script>

<style>
.title{
  padding-bottom: .35em;
  border-bottom: 1px solid var(--primary);
}
</style>