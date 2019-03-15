<template>
  <div class="hello">
    <span>{{msg}}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  msg: string = "Hello World"
}
</script>
