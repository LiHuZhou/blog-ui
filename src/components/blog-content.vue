<template>
  <div class="content">
    <el-row>
      <el-col :span="18">
        <Top></Top>
        <!-- <currentUser></currentUser> -->
        <newContent></newContent>
      </el-col>
      <el-col :span="6">
        <div ref="distanceBottomBox">
          <Developer></Developer>
          <Advert></Advert>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Top from "@/views/top.vue";
import currentUser from "@/views/current-user.vue";
import newContent from "@/views/new-content.vue";
import Developer from "@/views/developer.vue";
import Advert from "@/views/advert.vue";

$refs!:{
  distanceBottomBox:HTMLElement
}

@Component({
  components: {
    Top,
    currentUser,
    newContent,
    Developer,
    Advert
  }
})
export default class blogContent extends Vue {
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  }
  handleScroll(event:Event) {
    let clientHeight = document.documentElement.clientHeight;
    let domHeight = this.$refs.distanceBottomBox.offsetHeight;
    let value=clientHeight-domHeight-80;
      console.log(event.target);
  }
}
</script>

<style lang="scss" scoped>
.content {
  max-width: 1500px;
  margin: 0px auto;
  position: relative;
  top: 80px;
}
</style>