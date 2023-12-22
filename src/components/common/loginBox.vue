<template>
    <div class="inputBox">
        <!-- <form name="form" action="" method="post" :model="form">
            <div class="inputText">
                <label>用户名：</label>
                <input v-model="form.username" class="In" type="text" name="username" autocomplete="off" placeholder="请输入用户名">
            </div>
            <div class="inputText">
                <label>&nbsp;密码：&nbsp;&nbsp;</label>
                <input v-model="form.password" class="In" type="password" name="password" autocomplete="off" placeholder="请输入密码">
            </div>
            <div class="recode">
                <input class="In" type="checkbox">
                <span>Remember me</span>
            </div>
            <div class="sub">
                <input class="In" type="submit" value="Sign in">
            </div>
        </form> -->
        <el-form ref="loginformref" :model="loginform" :rules="loginformrules" class="login_form">
            <!-- 用户名 -->
            <el-form-item prop="username">
                <el-input v-model="loginform.username" prefix-icon="el-icon-s-custom"></el-input>
            </el-form-item>
            <!-- 密码 -->
            <el-form-item prop="password">
                <el-input type="password" v-model="loginform.password" prefix-icon="el-icon-edit"></el-input>
            </el-form-item>
            <!-- 提交 -->
            <el-form-item class="btns">
                <el-button type="primary" @click="login">登录</el-button>
                <el-button type="info" @click="reset">重置</el-button>
            </el-form-item>
        </el-form>
        <!-- <div>{{ loginform.username }}{{ loginform.password }}</div> -->
    </div>
</template>

<script>
// import Cookie from 'js-cookie'
export default {
    name: 'loginBox',
    data() {
        return {
            name: 'loginBox',
            loginform: {
                username: '',
                password: '',
            },
            // 绑定验证规则
            loginformrules: {
                username: [
                    {
                        required: true,
                        message: "请输入用户名",
                        trigger: "blur"
                    },
                    { min: 3, max: 10, message: "长度为3-10个字符", trigger: "blur" }
                ],
                password: [
                    {
                        required: true,
                        message: "请输入密码",
                        trigger: "blur"
                    },
                    { min: 6, max: 20, message: "长度为6-20个字符", trigger: "blur" }
                ]
            }
        }
    },
    methods: {
        reset() {
            // console.log(this);
            this.$refs.loginformref.resetFields();
        },
        // 登陆前预验证
        login() {
            this.$refs.loginformref.validate(async valid => {
                // 登陆前预验证
                // console.log(valid)
                if (!valid) return;
                // 发起登录请求（地址：login）
                const { data: result } = await this.$http.post('login', this.loginform)
                console.log(result)
                // 登陆成功的状态码
                if (result.code !== 200) return this.$message.error("用户名或密码错误！")
                this.$message.success("登陆成功！")
                // 将登陆成功的token保存到客户端sessionStorage中
                window.sessionStorage.setItem("token",result.token)
                // 页面跳转
                this.$router.push('/system')
            })
        }
    }
}
</script>

<style scoped>
.inputBox {
    width: 400px;
    height: 270px;
    border: 1px black solid;
    text-align: center;
    background-color: rgba(255, 255, 255,.4);
    border-radius: 15px;
}

/* .inputBox div {
    margin-top: 25px;
}

.In {
    background-color: rgba(235, 226, 226, 0.2);
} */
/* elment-ui */
.login_form {
    width: 80%;
    margin: 0 auto;
    margin: 30px;
}
</style>