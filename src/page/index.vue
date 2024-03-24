<template>
  <div class="page-index">
    <el-row>
      <swiper/>
    </el-row>
    <el-row>
      <categroy/>
    </el-row>
    <el-row>
      <m-content :content="contentList"/>
    </el-row>
    <el-row>
      <sidebar/>
    </el-row>
  </div>
</template>

<script>
/* eslint-disable */
import Swiper from '@/components/index/swiper'
import Categroy from '@/components/index/categroy'
import MContent from '@/components/index/content'
import Sidebar from '@/components/index/sidebar'
import api from '@/api/getData'
import request from "../util/axios";

export default {
  data() {
    return {
      contentList: []
    }
  },
  components: {
    Swiper,
    Categroy,
    MContent,
    Sidebar
  },
  created() {
    // api.getContent().then(res => {
    //   // console.log(res.data.contentList)
    //   this.contentList = res.data.contentList
    // })
    request.get('/ticket/listTicketIndex').then(res => {
      this.contentList = res.data
    })
  }
}
</script>
