<template>
  <div class="notice-nav">
    <el-tabs type="border-card" class="nav-item active">
      <el-tab-pane>
        <span slot="label" class="nav-item active">项目详情</span>
        <div class="list">
          <div class="title">演出介绍</div>
          <div class="words">
            {{this.detail}}
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  props: ['detail'],
  data () {
    return {
    }
  },
  created () {

  }
}
</script>
<style lang="scss" scoped>
.notice-nav {
  height: 54px;
  line-height: 54px;
  padding-left: 30px;
  border-top: 1px solid #e2e2e2;
  border-bottom: 1px solid #e2e2e2;
  .nav-item {
    position: relative;
    font-size: 16px;
    color: #000;
    margin-right: 60px;
    cursor: pointer;
    &.active {
      font-size: 22px;
    }
  }
  .list {
    padding: 60px 30px 0;
    // border: 1px solid blue;
    .title {
      padding-bottom: 14px;
      margin-bottom: 23px;
      font-size: 20px;
      color: #000;
      border-bottom: 1px solid #e2e2e2;
    }
    .words {
      margin: 0;
      padding: 0;
      word-break: break-word;
      span {
        font-size: 16px;
        color: #4a4a4a;
      }
      img {
        padding: 30px 0;
        max-width: 100%;
        height: auto;
      }
      .item-title {
        color: #999;
        font-size: 13px;
        margin-bottom: -32px;
      }
      span {
        padding-bottom: 15px;
        font-size: 16px;
        color: #4a4a4a;
      }
    }
  }
}
</style>
