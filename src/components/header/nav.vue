<template>
  <div class="m-nav">
    <dl>
      <dd>
        <i class="el-icon-user-solid"></i>
        <span>
          <router-link :to="{name:'login'}" v-if="$store.getters.getUserInfo.username==''">登录</router-link>
          <router-link :to="{name:'/'}" v-else>欢迎：{{ $store.getters.getUserInfo.username }}</router-link>
        </span>
      </dd>
      <dd>
        <i class="el-icon-user"></i>
        <span>
            <router-link :to="{name:'register'}" v-if="$store.getters.getUserInfo.username==''">注册</router-link>
          <span @click="logout" v-else style="    cursor: pointer;">注销</span>
        </span>
      </dd>
      <dd>
        <i class="el-icon-download"></i>
        <el-popover placement="top-start" title width="200" trigger="hover" content="抱歉，暂不支持此功能">
          <el-button slot="reference">下载</el-button>
        </el-popover>
      </dd>
    </dl>

  </div>
</template>

<script>
/* eslint-disable */

export default {
  data() {
    return {
      userInfo: ''
    }
  },
  methods: {
    logout() {
      let userInfo={
        username: '',
        id: '',
        age: '',
        sex: "",
        createTime: '',
        email: '',
      }
      this.$store.commit("setUserInfo", userInfo)
      alert("注销成功")
      this.$router.push({name: 'login'})
    }
  },
  created() {
    let userInfo = this.$store.getters.getUserInfo
    console.log("user:")
    console.log(userInfo)
    // console.log(this.$store.getters.getUserInfo)
  }
}
</script>

<style lang="scss" scoped>
.m-nav {
  width: 320px;
  margin-top: 32px;
  margin-left: -8px;

  dl {
    width: 100%;

    dd {
      display: inline-block;
      margin-inline-start: 10px;
      font-size: 16px;
      color: #111;
      vertical-align: middle;

      i {
        width: 26px;
        height: 26px;
        font-size: 21px;
        text-align: center;
        line-height: 26px;
        vertical-align: middle;
      }

      > span {
        a {
          color: #606266;
          text-decoration: none;
        }
      }

      .el-button {
        border: none;
        outline: none;
        font-size: 16px;
        padding: 4px;
        margin-left: -9px;
      }
    }
  }
}
</style>
