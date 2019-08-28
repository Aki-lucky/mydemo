<template>
  <el-table class="users"
    :data="userlist"
    border
    style="width: 100%">

    <el-table-column
      prop="date"
      label="姓名">
    </el-table-column>

    <el-table-column
      prop="name"
      label="邮箱">
    </el-table-column>

    <el-table-column
      prop="address"
      label="电话">
    </el-table-column>

    <el-table-column
      prop="address"
      label="用户状态">
    </el-table-column>

    <el-table-column
      prop="address"
      label="操作">
    </el-table-column>
  </el-table>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      userlist: [],
      pagenum: 1,
      pagesize: 8,
      query: ''
    }
  },
  created () {
    axios.get('http://localhost:8888/api/private/v1/users', {
      params: {
        query: this.query,
        pagenum: this.pagenum,
        pagesize: this.pagesize
      }
    })
  }
}
</script>

<style>

</style>
