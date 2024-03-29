<template>
  <div class="right-item">
    <div class="item" v-for="(item,index) in info" :key="index" style="cursor: pointer" @click="toDetails(item.id)">
      <img
        :src="item.imgPath"
        alt
        class="item-img"
      >
      <div class="item-info">
        <div class="item-info-main">
          <div class="item-info-name">{{ item.name }}</div>
          <div class="item-info-address">{{ item.address }}</div>
          <div class="item-info-date">{{ formatDate(item.showtime) }}</div>
        </div>
        <div class="item-info-price">
            <span class="price-number">
                ￥{{ item.price.split(",")[0] }}
            </span>
          起
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
  import request from '../../util/axios'

  export default {
    props: [
      'info'
    ],
    methods: {
      formatDate(str) {
        const date = new Date(str);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');

        return `${year}-${month}-${day} ${hours}:${minutes}`;
      },
      toDetails(id) {
        request.get('/ticket/getTicketById', {params: {id: id}}).then(res => {
          console.log(res.data)
          if (this.$route.name == "sort")
            this.$router.push({name: 'details', params: {ticketDetailVO: res.data}})
          else if (this.$route.name == "details"){
            this.$emit('recom', res.data);
          }
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  .item {
    display: flex;
    height: 160px;
    margin-bottom: 30px;
    cursor: pointer;
    .item-img {
      float: left;
      width: 120px;
      height: 100%;
    }
    .item-info {
      font-size: 12px;
      margin-left: 15px;
      font-family: '微软雅黑';
      .item-info-main {
        .item-info-name {
          overflow: hidden;
          font-size: 14px;
          color: #4a4a4a;
        }
        .item-info-address {
          margin-top: 12px;
          color: #9b9b9b;
        }
        .item-info-date {
          margin-top: 3px;
          color: #9b9b9b;
        }
      }
      .item-info-price {
        color: #ff1268;
        margin-top: 2px;
        .price-number {
          font-size: 16px;
        }
      }
    }
  }
</style>
