<template>
  <div class="sort-page">
    <el-col :span="22">
      <el-row class="m-crumbs">
        <crumbs/>
      </el-row>
      <el-row class="search-factory">
        <el-card class="box-card" style="margin: 10px">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="个人信息" name="first">
              <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" style="width: 500px">
                <el-form-item label="用户名">
                  <el-input v-model="formLabelAlign.username" disabled></el-input>
                </el-form-item>
                <el-form-item label="年龄">
                  <el-input v-model="formLabelAlign.age"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                  <el-input v-model="formLabelAlign.sex"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                  <el-input v-model="formLabelAlign.email"></el-input>
                </el-form-item>
              </el-form>
              <div style="margin-left: 200px">
                <el-button type="warning" @click="edit">编辑</el-button>
              </div>
            </el-tab-pane>
            <el-tab-pane label="修改密码" name="second">
              <el-form :label-position="labelPosition" label-width="80px" :model="pasd" style="width: 500px">
                <el-form-item label="旧密码">
                  <el-input v-model="pasd.oldpassword" type="password"></el-input>
                </el-form-item>
                <el-form-item label="新密码">
                  <el-input v-model="pasd.newpassword" type="password"></el-input>
                </el-form-item>
                <el-form-item label="新密码">
                  <el-input v-model="pasd.renewpassword" type="password"></el-input>
                </el-form-item>
              </el-form>
              <div style="margin-left: 200px">
                <el-button type="warning" @click="editpassword">修改密码</el-button>
              </div>
            </el-tab-pane>
            <el-tab-pane label="订单管理" name="three">
              <div v-for="order in orderlist" :key="order.id" class="text item"
                   style="border: 1px solid rgba(131,63,63,0.26);margin: 10px">
                <div style="margin: 10px">
                  <span>订单流水号:</span><span>{{ order.code }}</span>
                  &emsp;总价:<span style="font-weight: 700">￥{{ order.price }}</span>
                  &emsp;<span
                  style="font-size: 14px;color: rgba(255,0,0,0.62)">时间:{{ formatDate(order.createTime) }}</span>
                  &emsp;<el-tag v-if="order.status=='待支付'" type="danger">{{ order.status }}</el-tag>
                  <el-tag v-else-if="order.status=='已支付'" type="success">{{ order.status }}</el-tag>
                  <el-tag v-else-if="order.status=='取消支付'" type="info">{{ order.status }}</el-tag>
                  &emsp;<el-button size="small" @click="showInfo(order.id)">查看详情</el-button>
                  &emsp;<el-button size="small" type="info" v-if="order.status=='待支付'" @click="ljzf(order.id,'取消支付')">
                  取消支付
                </el-button>
                  &emsp;<el-button size="small" type="warning" v-if="order.status=='待支付'"
                                   @click="ljzf(order.id,'已支付')">
                  立即支付
                </el-button>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>

        </el-card>
      </el-row>
    </el-col>
  </div>
</template>

<script>
  /* eslint-disable */
  import request from "../util/axios";
  import crumbs from '@/components/sort/crumbs'

  export default {
    components: {
      crumbs,
    },
    data() {
      return {
        orderlist: [],
        dialogVisible: false,
        detailinfo: '',
        labelPosition: 'right',
        formLabelAlign: {
          username: '',
          age: '',
          sex: '',
          email: '',
        },
        pasd: {
          renewpassword: '',
          newpassword: '',
          oldpassword: '',
        },
        activeName: 'first'
      }
    },
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
      showInfo(id) {
        console.log(id)
        request.get('/orderDetail/getOrderDetail', {params: {id: id}}).then(res => {
          this.detailinfo = res.data
        })
        this.dialogVisible = true
      },
      ljzf(id, str) {
        if (confirm("您确定进行" + (str == '已支付' ? '支付' : str) + "吗?")) {
          let orderInfo = {
            id: id,
            status: str,
          }
          request.post("/orderInfo/updateOrderStatus", orderInfo).then(res => {
            alert("操作成功!")
            this.fetchData()
          })
        }

      },
      fetchData() {
        request.get('/orderInfo/listOrders', {
          params: {
            userId: this.$store.getters.getUserInfo.id
          }
        }).then(res => {
          this.orderlist = res.data
        })
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      edit() {

      },
      editpassword() {

      }
    },
    created() {
      this.fetchData()
    }
  }
</script>


<style lang="scss" scoped>
  .sort-page {
    width: 1200px;
    min-height: 600px;
    margin: 0 auto;
    color: #333;

    .m-crumbs {
      line-height: 50px;
      color: #666;
      font-size: 14px;
    }

    .search-factory {
      padding: 0 24px;
      border: 1px solid #e9e9e9;
      margin-top: 15px;
    }

    .search-sort {
      border: 1px solid #e9e9e9;
      margin-top: 10px;
    }

    .search-like {
      width: 258px;
      border: 1px solid #eaeaea;
      margin-left: 10px;
      max-height: 514px;
      margin-top: 29px;

      .title {
        height: 37px;
        line-height: 37px;
        background-color: #f5f5f5;
        font-size: 14px;
        font-family: Microsoft YaHei;
        color: #000;
        padding: 0 15px;
        margin-bottom: 20px;
      }
    }
  }
</style>
