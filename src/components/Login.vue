<template>
  <div class="login">
    <el-form ref="form" :rules='rules' :model="form" label-width="80px">
      <img src="../assets/IMG_2134.jpg" alt="">
      <el-form-item label="用户名" prop='username'>
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop='password'>
        <el-input type='password' v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="btnlogin" type="primary" @click='submitlogin'>登录</el-button>
        <el-button  @click='reset'>重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'

export default {

  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: ['blur', 'change'] },
          { min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: ['blur', 'change'] },
          { min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  methods: {
    reset () {
      this.$refs.form.resetFields()
    },
    submitlogin () {
      axios({
        method: 'post',
        url: 'http://localhost:8888/api/private/v1/login',
        data: {
          username: this.form.username,
          password: this.form.password
        }
      }).then(res => {
        const { meta, data } = res.data
        if (meta.status === 400) {
          this.$message({
            message: meta.msg,
            type: 'error',
            duration: 1000
          })
        } else {
          localStorage.setItem('token', data.token)
          this.$message({
            message: meta.msg,
            type: 'success',
            duration: 1000
          })
          this.$router.push('/index')
        }
      })
    }
  }
}

</script>

<style lang='scss'>
  .login{
    width: 100%;
    height: 100%;
    background-color: #2d434c;
    overflow: hidden;

    .el-form{
      width: 400px;
      padding: 20px;
      padding-top: 75px;
      margin: 0 auto;
      margin-top: 200px;
      background-color: #fff;
      border-radius: 20px;
      position: relative;

      img{
        width: 140px;
        border-radius: 50%;
        position: absolute;
        top: -75px;
        left: 50%;
        transform:translateX(-50%);
        background-color: pink;
        border: 5px solid #fff;
      }

      .btnlogin{
        margin-right: 80px;
      }
    }
  }
</style>
