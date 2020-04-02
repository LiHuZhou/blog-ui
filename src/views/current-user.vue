<template>
  <div class="current-user">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>当前用户(110人)</span>
      </div>
      <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
    </el-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.current-user{
    margin-top:10px
}
</style>