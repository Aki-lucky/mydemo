<template>
<el-container class="index">
  <!-- 头部 -->
  <el-header>
    <div class="logo">
      <img src="../assets/logo.png" alt="">
    </div>
    <div class="title">
      <h1>电商后台管理系统</h1>
    </div>
    <div class="logout">
      <span>欢迎光临~ </span>
      <a href="javascript:;">退出</a>
    </div>
  </el-header>

  <el-container>
    <el-aside width="200px">
    <!-- 左边的导航栏 -->
      <el-menu
        unique-opened
        router
        default-active="users"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">

        <el-submenu index="1">
          <template v-slot:title>
            <i class="el-icon-location"></i>
            <span>用户管理</span>
          </template>
            <el-menu-item index="users">
              <i class="el-icon-menu"></i>
              用户列表
            </el-menu-item>
        </el-submenu>

        <el-submenu index="2">
          <template v-slot:title>
            <i class="el-icon-location"></i>
            <span>权限管理</span>
          </template>
            <el-menu-item index="roles">
              <i class="el-icon-menu"></i>
              角色列表
            </el-menu-item>
            <el-menu-item index="rights">
              <i class="el-icon-menu"></i>
              权限列表
            </el-menu-item>
        </el-submenu>

      </el-menu>
    </el-aside>
    <!-- 主体部分 -->
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
.index{
  width: 100%;
  height: 100%;
  .el-header{
    background-color: #d8d8d8;
    display: flex;
    .logo{
      width: 180px;
      img{
        height: 40px;
        margin: 10px;
      }
    }
    .title{
      text-align: center;
      line-height: 60px;
      height: 60px;
      flex: 1;
    }
    .logout{
    line-height: 60px;
    text-align: right;
    a{
      color: orange
    }
    }
  }
  .el-aside{
    background-color: #545c64;
  }
  .el-main{
    background-color:#ecf0f1 ;
  }
}

</style>
