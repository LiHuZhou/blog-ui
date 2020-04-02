<template>
  <div class="top">
    <el-card class="box-card">
      <h1>给广大用户的一封信</h1>
      <div style="margin-top:10px">
        <span
          style="border:1px solid #ffa39e;color:#f5222d;padding:0px 10px;border-radius:3px;background: #fff1f0"
        >置顶</span>
        <span>
          <svg class="icon time">
            <use xlink:href="#time" fill="#999"/>
          </svg>
          <span style="padding:2px 6px">2020-03-23 17:10:23</span>
        </span>
        <span>
          <svg class="icon heat">
            <use xlink:href="#heat" fill="#f0732e"/>
          </svg>
          <span style="padding:2px 6px;color:#f0732e">9999</span>
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
              <use xlink:href="#text" fill="#999"/>
            </svg>
            <span style='padding-top:20px'>查看全文</span>
            <svg class="icon" style="padding-left:5px;width:12px;height:12px">
              <use xlink:href="#right" />
            </svg>
          </span>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.icon {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  display: inline-block;
  padding-left: 30px;
  padding-bottom: 4px;
}
.box-card {
  color: #999;
  font-size: 0.27rem;
  line-height: 30px;
}
.more {
  text-align: right;
  span {
    cursor: pointer;
  }
}
</style>