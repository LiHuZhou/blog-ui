<template>
  <div id="app">
    <el-scrollbar style="height: 100vh;">
    <blogHeader></blogHeader>
    <blogContent></blogContent>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import blogHeader from "./components/blog-header.vue";
import blogContent from "./components/blog-content.vue";
@Component({
  components: {
    blogHeader,
    blogContent
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
</style>
