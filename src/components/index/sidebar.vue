<template>
  <div class="sidebar">
    <el-dialog
      style="overflow: auto"
      title="公告"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <el-card class="box-card" style="margin-top: 10px;overflow: auto" v-for="notice in noticeList" :key="notice.id">
        <div class="text item">
          <div style="">
           <span
            style="font-size: 14px;color: rgba(255,0,0,0.62)">发布时间:{{ formatDate(notice.createTime) }}</span>
            &emsp;
          <div v-html="notice.content" style="height: 50%" ></div>
            <span>发布人:{{notice.managerId}}</span>
          </div>
        </div>
      </el-card>

      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>
    <div class="item" @click="dialogVisible=true">
      <div class="icon service"></div>
      <p>公告</p>
    </div>
    <!--    <div class="item">-->
    <!--      <a href="#">-->
    <!--        <div class="icon damai"></div>-->
    <!--        <p>APP下载</p>-->
    <!--      </a>-->
    <!--    </div>-->
    <div class="item goTop" v-show="isTop">
      <a href="#" @click="goTop">
        <div class="icon totop"></div>
        <p>回到顶部</p>
      </a>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import fa from "element-ui/src/locale/lang/fa";
import request from "../../util/axios";

export default {
  data() {
    return {
      isTop: false,
      dialogVisible: false,
      noticeList: '',
    }
  },
  created() {
    request.get("/notice/listAllNormalNotices").then(res => {
      this.noticeList = res.data
    })
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  methods: {
    handleScroll() {
      let scrolltop =
        document.documentElement.scrollTop || document.body.scrollTop
      scrolltop > 30 ? (this.isTop = true) : (this.isTop = false)
    },
    goTop(e) {
      console.log(window.pageYOffset)
      let top = document.documentElement.scrollTop || document.body.scrollTop
      const timer = setInterval(() => {
        top -= 20
        if (top <= 0) {
          clearInterval(timer)
        }
      }, 30)
    },
    formatDate(str) {
      const date = new Date(str);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');

      return `${year}-${month}-${day} ${hours}:${minutes}`;
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  background: #fff;
  border: 1px solid #ebebeb;
  width: 80px;
  position: fixed;
  right: 10px;
  top: 72.5%;
  margin-top: -105px;
  z-index: 9999;

  .item {
    height: 60px;
    border-bottom: 1px solid #ebebeb;
    text-align: center;
    padding-top: 10px;
    color: #111;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    box-sizing: content-box;


    .icon {
      background-image: url(https://img.alicdn.com/tfs/TB1u1U9xmzqK1RjSZFHXXb3CpXa-64-180.png);
      background-position: 3px -30px;
      margin: 0 auto;
      width: 32px;
      height: 29px;
      background-size: 100%;

      &.service {
        background-position: 3px -30px;
      }

      &.damai {
        background-position: 0 0px;
      }

      &.totop {
        background-position: 4px -63px;
      }
    }

    p:hover {
      color: #ff1268;
    }

  }
}
</style>
