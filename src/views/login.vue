<template>
  <div>
    <el-dialog title="提示" :visible.sync="showBool" width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showBool = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script  lang='ts'>
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
@Component
export default class Login extends Vue {
  
}
</script>

<style lang="scss" scoped>
</style>