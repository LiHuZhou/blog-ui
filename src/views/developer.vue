<template>
  <div class="developer">
    <el-card class="box-card">
      <img :src="imgSrc" class="userPhoto" />
      <p class="user">沉默的灰太狼</p>
      <p>职业 : 程序员</p>
      <div class="box">
        <span class="text">社交账号</span>
      </div>
      <p>
        <span>
          <el-tooltip class="item" effect="dark" content="QQ:1397881320" placement="top-start">
            <svg class="icon">
              <use xlink:href="#qq" fill="#999"/>
            </svg>
          </el-tooltip>
        </span>
        <span>
          <el-tooltip class="item" effect="dark" content="微信:zdd_19950304" placement="top-start">
            <svg class="icon">
              <use xlink:href="#wx" fill="#999"/>
            </svg>
          </el-tooltip>
        </span>
      </p>
      <div class="box">
        <span class="text">打赏</span>
      </div>
      <p>
        <img :src="wxSrc" class="pay" />
        <img :src="alipaySrc" class="pay" />
      </p>
    </el-card>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
export default class developer extends Vue {
  imgSrc: string = require("../assets/photo.jpg");
  wxSrc: string = require("../assets/wx.png");
  alipaySrc: string = require("../assets/alipay.png");
}
</script>

<style lang="scss" scoped>
.developer {
  margin-left: 10px;
  text-align: center;
  .userPhoto {
    border-radius: 120px;
    width: 120px;
    height: 120px;
    display: inline-block;
  }
  p {
    line-height: 40px;
    font-size: 20px;
    color: #999;
  }
  .box {
    margin-top: 10px;
    font-size: 22px;
    color: #999;
  }
  // .box::before {
  //   content: "";
  //   display: table-cell;
  //   width: 90px;
  //   border-top: 1px solid #e8e8e8;
  //   position: relative;
  //   top: 12px;
  // }

  // .box::after {
  //   content: "";
  //   display: table-cell;
  //   width: 90px;
  //   border-top: 1px solid #e8e8e8;
  //   position: relative;
  //   top: -10px;
  //   right: -210px;
  // }

  .item {
    margin: 20px;
  }
  .user {
    color: #1890ff;
  }
  .pay {
    width: 150px;
    height: 150px;
    display: inline-block;
    margin-top: 15px;
  }
  .icon {
    width: 64px;
    height: 64px;
  }
}
</style>