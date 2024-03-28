<template>
  <div>
    <div class="factor-item">
      <span class="factor-title">城 市：</span>
      <div class="factor-content">
        <div class="factor-selected">
          当前选中城市
          <!--          <span class="factor-selected-city">全国</span>-->
        </div>
        <div class="factor-content-main">
          <!--          <span class="factor-content-item default">全部</span>-->
          <div class="factor-content">
            <span
              class="factor-content-item"
              v-for="(item,index) in cityList"
              :key="index"
              :data-type="item.district"
              :class="{'active':type===item.district}"
              @click="handle"
            >{{ item.district }}</span>
          </div>
          <!---->
        </div>
      </div>
    </div>

    <div class="factor-item">
      <span class="factor-title">分 类：</span>
      <div class="factor-content">
        <div class="factor-content-main">
          <!--          <span class="factor-content-item default">全部</span>-->
          <div class="factor-content">
            <span
              class="factor-content-item"
              v-for="(item,index) in typeList"
              :key="index"
              :class="{'active':tab==item.id}"
              :data-tab="item.id"
              @click="handleClick"
            >{{ item.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import request from "../../util/axios";

export default {
  props: ['categoryId'],
  data() {
    return {
      cityList: [],
      typeList: [],
      tab: 0,
      type: '全部',
      seleteddata: '',
    }
  },
  methods: {
    handleClick(e) {
      this.tab = e.target.getAttribute('data-tab')
      console.log(this.tab)
      this.selectData()
      // alert('暂不支持此功能！')
    },
    handle(e) {
      this.type = e.target.getAttribute('data-type')
      // alert('暂不支持此功能！')
      this.selectData()
    },
    selectData() {
      request.get('/ticket/listTicketByCondition', {
        params: {
          district: this.type,
          categoryId: this.tab,
        }
      }).then(res => {
        console.log(res.data)
        this.seleteddata = res.data
        this.$emit('data-selected', this.seleteddata);
      })
    },
  },
  created() {
    if (this.categoryId != null && this.categoryId != undefined) this.tab = this.categoryId
    request.get('/ticket/listAllDisctinct').then(res => {
      this.cityList = res.data
      this.cityList.unshift({district: '全部'})
    })
    request.get('/category/listAllCategory').then(res => {
      console.log(this.typeList)
      this.typeList = res.data
      this.typeList.unshift({id: 0, name: '全部'})
    })
    this.selectData()
  }
}
</script>
<style lang="scss" scoped>
.factor-item {
  display: flex;
  padding: 10px 0;
  font-size: 14px;
  border-bottom: 1px dotted #dfdfdf;

  .factor-title {
    width: 80px;
    color: #968788;
    text-align: right;
    margin-right: 18px;
    line-height: 26px;
  }

  .factor-content {
    flex: 1;

    .factor-selected {
      color: #9b9b9b;
      margin-bottom: 6px;

      .factor-selected-city {
        display: inline-block;
        height: 26px;
        padding: 0 8px;
        margin-left: 6px;
        text-align: center;
        line-height: 26px;
        color: #fff;
        background-color: #ed0b75;
      }
    }

    .factor-content-main {
      display: flex;

      .factor-content-item {
        &.default {
          background-color: #ed0b75;
          color: #fff;
          margin-right: 6px;
          height: 26px;
          line-height: 26px;
          padding: 0 6px;
        }

        &.active {
          background-color: #ed0b75;
          color: #fff;
        }
      }

      .factor-content {
        span {
          display: inline-block;
          height: 26px;
          line-height: 26px;
          padding: 0 8px;
          margin-right: 24px;
          color: #333;
          white-space: nowrap;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
