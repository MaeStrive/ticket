<template>
  <div class="dm-content-wrapper">
    <div class="dm-content" v-for="(item,index) in content" :key="index">
      <div class="head">
        <span class="head-title">{{ item.title }}</span>
        <span class="head-more">查看全部</span>
      </div>
      <div class="box">
        <div class="box-left" @click="toDetails(item.leftTicket.id)" style="cursor: pointer;">
          <!--            <router-link :to="{name: 'details', params: {id: item.leftTicket.id}}">-->
          <div>
            <img class="box-left-bg" :src="item.leftTicket.imgPath">
          </div>
          <div class="box-left-info">
            <div class="title">{{ item.leftTicket.name }}</div>
            <div class="details">
              ¥{{ item.leftTicket.price.split(',')[0] }}
              <span>起</span>
            </div>
          </div>
        </div>
        <div class="box-right">
          <div class="box-right-item" v-for="(v,i) in item.rightList" :key="i" style="cursor: pointer"  @click="toDetails(v.id)">
            <div class="item-img">
                <img :src="v.imgPath">
            </div>
            <div class="item-info">
              <div class="title">
             {{ v.name }}
              </div>
              <div class="venue">
                {{ v.address }}
              </div>
              <div class="showtime">{{ formatDate(v.showtime) }}
              </div>

              <div class="price">
                  ¥{{ v.price.split(",")[0] }}
                  <span>起</span>
              </div>
            </div>
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
  props: ['content'],
  data() {
    return {}
  },
  methods: {
    toDetails(id) {
      request.get('/ticket/getTicketById', {params: {id: id}}).then(res => {
        console.log(res.data)
        this.$router.push({name: 'details', params: {ticketDetailVO: res.data}})
      })
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

<style lang="scss">
.dm-content-wrapper {
  .dm-content {
    width: 1200px;
    margin: 20px auto 30px auto;
    position: relative;
    font-size: 0;
    height: 457px;
    border: 1px solid #ebebeb;

    .head {
      width: 100%;
      height: 40px;
      line-height: 40px;
      margin-top: 10px;

      .head-title {
        font-size: 24px;
        display: inline-block;
        vertical-align: middle;
        margin-left: 35px;
        color: #111;
        width: 500px;
        height: 40px;
        overflow: hidden;
      }

      .head-more {
        display: inline-block;
        vertical-align: middle;
        float: right;
        margin-right: 23px;
        font-size: 14px;
        color: #9b9b9b;
        max-width: 450px;
        height: 100%;
        overflow: hidden;

        &:hover {
          color: #ff1268;
          cursor: pointer;
        }
      }
    }

    .box {
      width: 1160px;
      height: 360px;
      margin: 10px auto;

      .box-left {
        display: inline-block;
        width: 270px;
        height: 360px;
        position: relative;
        overflow: hidden;

        .box-left-bg {
          width: 100%;
          position: absolute;
          left: 0;
          top: 0;
          border: 1px solid #efefef;
        }

        .box-left-info {
          width: 250px;
          height: 84px;
          position: absolute;
          bottom: 0;
          left: 0;
          padding: 17px 10px;
          background-color: rgba(0, 0, 0, 0.5);

          .title {
            height: 45px;
            font-size: 16px;
            color: #fff;
            overflow: hidden;
          }

          .details {
            margin-top: 12px;
            font-size: 20px;
            color: #fff;

            span {
              font-size: 14px;
            }
          }
        }
      }

      .box-right {
        display: inline-block;
        width: 870px;
        margin-left: 20px;
        height: 360px;
        vertical-align: top;
        overflow: hidden;

        .box-right-item {
          width: 273px;
          height: 160px;
          display: block;
          margin-right: 16px;
          display: inline-block;
          margin-bottom: 40px;
          color: #000;
          overflow: hidden;

          .item-img {
            width: 118px;
            height: 158px;
            overflow: hidden;
            position: relative;
            display: inline-block;
            border: 1px solid #efefef;

            img {
              width: 100%;
            }
          }

          .item-info {
            width: 138px;
            height: 100%;
            position: relative;
            padding-left: 15px;
            display: inline-block;
            vertical-align: top;

            a {
              text-decoration: none;
            }

            .title {
              line-height: 20px;
              font-size: 14px;

              > a {
                color: #4a4a4a;

                &:hover {
                  color: #ff1268;
                }
              }
            }

            .venue {
              font-size: 12px;
              margin-top: 14px;
              overflow: hidden;

              > a {
                color: #9b9b9b;

                &:hover {
                  color: #ff1268;
                }
              }
            }

            .showtime {
              font-size: 12px;
              margin-top: 7px;
              overflow: hidden;

              > a {
                color: #9b9b9b;

                &:hover {
                  color: #ff1268;
                }
              }
            }

            .price {
              width: 138px;
              position: absolute;
              left: 15px;
              bottom: 0;
              font-size: 16px;
              white-space: nowrap;

              > a {
                color: #ff1268;
              }

              span {
                font-size: 12px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
