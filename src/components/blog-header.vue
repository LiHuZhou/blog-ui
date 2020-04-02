<template>
  <div class="header">
    <div class="header-center">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <span class="blogName">故事汇</span>
          </div>
        </el-col>
        <el-col :span="12" v-if="identify">
          <div class="grid-content bg-purple">
            <el-col :span="6">
              <span class="blogOpt">
                <svg class="icon">
                  <use xlink:href="#shouye" />
                </svg>首页
              </span>
            </el-col>
            <el-col :span="6">
              <span class="blogOpt">
                <svg class="icon">
                  <use xlink:href="#gushi" />
                </svg>故事
              </span>
            </el-col>
            <el-col :span="6">
              <span class="blogOpt">
                <svg class="icon">
                  <use xlink:href="#fankui" />
                </svg>反馈
              </span>
            </el-col>
            <el-col :span="6">
              <span class="blogOpt">
                <svg class="icon">
                  <use xlink:href="#denglu" />
                </svg>登录
              </span>
            </el-col>
          </div>
        </el-col>
        <el-col :span="12" v-else>
          <div class="grid-content bg-purple">
            <el-col :span="20">
              <span class="userName">欢迎您,张三三</span>
            </el-col>
          </div>
        </el-col>
      </el-row>
    </div>
    <Login></Login>
    <Logon></Logon>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Login from "@/views/login.vue";
import Logon from "@/views/logon.vue";
@Component({
  components: {
    Login,
    Logon
  }
})
export default class blogHeader extends Vue {
  identify: boolean = true;
  loginBool: boolean = false;
  logonBool: boolean = false;

  //登录
  loginClick() {}
  //注册
  logonClick() {}
}
</script>
<style lang="scss" scoped>
.header {
  background-color: #fff;
  overflow: hidden;
  height: 60px;
  border-bottom: 1px solid #eee;
  font-size: 75px;
  line-height: 20px;
  position: fixed;
  width: 100%;
  z-index: 999;
  .header-center {
    max-width: 1500px;
    margin: 0 auto;
    position: relative;
    
  }
  .icon {
    width: 25px;
    height: 25px;
    vertical-align: middle;
    padding: 0px 7px 7px 7px;
  }
  .blogName {
    color: #1890ff;
    font-size: 30px;
    cursor: pointer;
    background-color: transparent;
  }
  .blogOpt,
  .userName {
    font-size: 22px;
    color: #999;
    cursor: pointer;
  }
}
</style>