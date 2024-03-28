<template>
  <el-tabs type="border-card">
    <!--    <el-tab-pane label="相关度排序">-->
    <!--      <list-item :list="related"/>-->
    <!--    </el-tab-pane>-->
    <el-tab-pane label="推荐排序">
      <list-item :list="data.list0"/>
    </el-tab-pane>
    <el-tab-pane label="最近开场">
      <list-item :list="data.list1"/>
    </el-tab-pane>
    <el-tab-pane label="最新上架">
      <list-item :list="data.list2"/>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
/* eslint-disable */
import listItem from './listItem'
import api from '@/api/getData.js'

export default {
  props: ['data'],
  components: {
    listItem
  },
  data() {
    return {
      related: [],
      recommend: [],
      recent: [],
      newsList: []
    }
  },
  created() {
    console.log(666)
    console.log(this.data)
    // api.getSearch().then(res => {
    //   console.log(res.data)
    //   this.related = res.data.related
    //   this.recommend = res.data.recommend
    //   this.recent = res.data.recent
    //   this.newsList = res.data.newsList
    // })
  }
}
</script>
