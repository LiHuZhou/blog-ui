<template>
  <div class="advert">
    <el-card class="box-card">
      <svg class="icon">
        <use xlink:href="#tuijian" />
      </svg>
      <span class="text">美文推荐</span>
      <p>
        <a href="http://www.baidu.com" target="_blank">热爱生命(汪国真)</a>
      </p>
      <p>
        <a href="http://www.baidu.com" target="_blank">年味记忆(何龙飞)</a>
      </p>
      <p>
        <a href="http://www.baidu.com" target="_blank">柳树湾的梦幻记忆(姚建清)</a>
      </p>
      <p>
        <a href="http://www.baidu.com" target="_blank">找寻一棵树(燕茈)</a>
      </p>
      <p>
        <a href="http://www.baidu.com" target="_blank">春之恋(熊荟蓉)</a>
      </p>
    </el-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.advert {
  margin: 10px 0px 0px 10px;
  .text {
    font-size: 22px;
    color: #409EFF;
    display: block;
    text-align: center;
    margin-bottom: 10px;
  }
  .icon {
    width: 35px;
    height: 35px;
  }
  p {
    font-size: 22px;
    white-space: nowrap;
    line-height: 45px;
    border-bottom: 1px solid #e9e9e9;
    a {
      text-decoration: none;
      color: #999;
    }
  }
}
</style>