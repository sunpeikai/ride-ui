<template>
  <div>
    <el-container>
      <el-header>
        <!-- 头部菜单栏 -->
        <el-menu
          :default-active="activeIndex"
          class="el-menu"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="/main">首页</el-menu-item>
          <el-menu-item index="/myResources">我的资源</el-menu-item>
          <el-menu-item index="/upload">上传资源</el-menu-item>
          <el-menu-item index="/download">已下载</el-menu-item>
          <el-menu-item index="/gold">积分明细</el-menu-item>
          <el-menu-item v-if="!isLogin" style="float: right" index="/register">注册</el-menu-item>
          <el-menu-item v-if="!isLogin" style="float: right" index="/login">登录</el-menu-item>
          <el-submenu style="float: right" v-else-if="isLogin" index="/userInfo">
            <template slot="title">{{user.userName}}</template>
            <el-menu-item index="/modifyInfo">修改信息</el-menu-item>
            <el-menu-item index="/logout">退出</el-menu-item>
          </el-submenu>
          <div class="index-search">
            <el-input type="text" v-model="keyWord" placeholder="搜索资源关键词" clearable>
              <el-button slot="append" type="primary" @click="findBlogsByKeyWord" icon="el-icon-search"></el-button>
            </el-input>
          </div>
        </el-menu>
      </el-header>
    </el-container>
  </div>
</template>

<script>
export default {
  props: ['oneKeyWord', 'activeTopMenu'],
  methods: {
    handleSelect (key, keyPath) {
      if (key === '/modifyInfo') {
        this.$router.push('modifyInfo')
        return
      }
      if (key === '/logout') {
        this.$http.get('/api/blog/v1/user/logout')
        this.userName = ''
        this.isLogin = false
        this.$router.push('/main')
        return
      }
      if (!this.isLogin) { // 未登录
        if (key === '/writeBlog') {
          this.$router.push('/login')
          return
        }
      }
      this.activeIndex = key
      this.$router.push(key)
    },
    findBlogsByKeyWord () {
      this.$emit('getKeyWord', this.keyWord)
    },
    getUserInfo () {
      this.$http.get('/api/sandman/v1/user/getCurUserInfo').then((response) => {
        if (response.data.code === 200) {
          this.user = response.data.data
          this.$emit('getUserInfo', this.user)
          this.isLogin = true
        }
      })
    }
  },
  data () {
    return {
      activeIndex: '/main', // 初始化时menu的active
      isLogin: false,
      user: '',
      keyWord: ''
    }
  },
  mounted () {
    this.getUserInfo()
  }
}
</script>

<style scoped>
  .index-search{
    float: right;
    margin-top: 0.8em
  }
  .el-container{
    margin-top: -1em;
    margin-right: -2em;
    margin-left: -2em;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
  }
</style>
