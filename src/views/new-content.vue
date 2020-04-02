<template>
  <div class="newContent">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <svg class="icon new">
          <use xlink:href="#zuixin" />
        </svg>
        <span style="vertical-align: middle;font-size:18px;">最新文章</span>
        <span style="float: right; padding: 3px 0;cursor:pointer;font-size:16px">
          查看全部
          <svg class="icon" style="padding-left:5px;width:12px;height:12px;padding-bottom:3px">
            <use xlink:href="#right" />
          </svg>
        </span>
      </div>
      <div v-for="o in 3" :key="o" class="text item">
        <h1>给广大用户的一封信</h1>
        <div style="margin-top:10px">
          <span>
            <svg class="icon time">
              <use xlink:href="#time" fill="#999" />
            </svg>
            <span style="padding:2px 6px">2020-03-23 17:10:23</span>
          </span>
          <span>
            <svg class="icon heat">
              <use xlink:href="#heat" fill="#f0732e" />
            </svg>
            <span style="padding:2px 6px">9999</span>
          </span>
        </div>
        <div>
          <div style="margin-top:10px">
            <img
              src="http://hichner.cn/hichner.cn/admin/uploadpic/image/20160603/20160603095912431243.jpg"
            />
          </div>
          <div
            style="margin-top:10px;"
          >详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情</div>
          <div class="more">
            <span style="margin-top:20px;display: inline-block;">
              <svg class="icon">
                <use xlink:href="#text" fill="#999" />
              </svg>
              <span style="padding-top:20px">查看全文</span>
              <svg class="icon" style="padding-left:5px;width:12px;height:12px">
                <use xlink:href="#right" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
.newContent {
  margin-top: 10px;
  .box-card {
    color: #999;
    font-size: 0.27rem;
    line-height: 30px;
    .more{
      text-align: right;
    }
    .icon {
      width: 24px;
      height: 24px;
      vertical-align: middle;
      display: inline-block;
      &.new {
        width: 32px;
        height: 32px;
      }
    }
    .item {
      border-bottom: 1px solid #ebeef5;
      box-sizing: border-box;
      padding: 20px 0px;
    }
  }
}
</style>