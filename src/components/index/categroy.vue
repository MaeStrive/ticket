<template>
  <div class="categroy">
    <a class="category-list" v-for="(item,index) in category" :key="index" @click="toSort(item.id)" style="cursor: pointer">
      <span class="category-icon" :class="item.iconPath"></span>
      <p>{{ item.name }}</p>
    </a>
  </div>
</template>
<script>
/* eslint-disable */
import request from "../../util/axios";

export default {
  data() {
    return {
      category: []
    }
  },
  methods: {
    toSort(id) {
      this.$router.push({name: 'sort', params: {categoryId: id}})
    }
  },
  created() {
    request.get('/category/listAllCategory').then(res => {
      this.category = res.data
    })

  }
}
</script>
<style lang="scss" scoped>
.categroy {
  margin-top: 15px !important;
  padding: 8px 0;
  width: 1200px;
  height: 118px;
  margin: 0 auto;
  border: 1px solid #ebebeb;

  .category-list {
    color: #000;
    float: left;
    display: block;
    width: 120px;
    text-align: center;
    text-decoration: none;

    .category-icon {
      display: block;
      width: 48px;
      height: 48px;
      margin: 0 auto;
      background: url(//img.alicdn.com/tfs/TB1U9R8GY9YBuNjy0FgXXcxcXXa-146-1822.png) no-repeat;
      background-size: 100% auto;

      &.category-icon-ych {
        background-position: 0 0;
      }

      &.category-icon-hjgj {
        background-position: 0 -64px;
      }

      &.category-icon-ty {
        background-position: 0 -120px;
      }

      &.category-icon-etqz {
        background-position: 0 -180px;
      }

      &.category-icon-zlxx {
        background-position: 0 -240px;
      }

      &.category-icon-yyh {
        background-position: 0 -297px;
      }

      &.category-icon-qyzt {
        background-position: 0 -360px;
      }

      &.category-icon-wdbl {
        background-position: 0 -420px;
      }

      &.category-icon-ecy {
        background-position: 0 -480px;
      }

      &.category-icon-lyzl {
        background-position: 0 -540px;
      }
    }
  }
}
</style>
