<template>
    <div class="user">
        <div class="myinfo">
            <div class="title">基本信息</div>

            <el-container>
                <el-aside width="200px">
                    <el-avatar :size=140 :src="info.avatar"></el-avatar>
                </el-aside>
                <el-container>
                    <el-header>
                        <el-button @click="showEditDialog()"><i class="el-icon-setting"></i>&nbsp;&nbsp;编辑资料</el-button>
                        <el-button @click="showChangeDialog()"><i class="el-icon-edit"></i>&nbsp;&nbsp;修改密码</el-button>
                    </el-header>

                    <!-- 编辑资料对话框 -->
                    <el-dialog title="编辑资料" :visible.sync="editDialogVisible" width="50%" @close="editDialogClosed">
                        <el-form :model="editForm" label-width="70px" :rules="editFormRules" ref="editFormRef">
                            <el-form-item label="头像">
                                <el-input v-model="editForm.avatar" prop="avatar"></el-input>
                            </el-form-item>
                            <el-form-item label="姓名">
                                <el-input v-model="editForm.name" disabled></el-input>
                            </el-form-item>
                            <el-form-item label="学院">
                                <el-input v-model="editForm.faculty" disabled></el-input>
                            </el-form-item>
                            <el-form-item label="学号">
                                <el-input v-model="editForm.userId" disabled></el-input>
                            </el-form-item>
                            <el-form-item label="用户名">
                                <el-input v-model="editForm.userName"></el-input>
                            </el-form-item>
                            <el-form-item label="电话">
                                <el-input v-model="editForm.phonenumber" prop="mobile"></el-input>
                            </el-form-item>
                        </el-form>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="editDialogVisible = false">取 消</el-button>
                            <el-button type="primary" @click="editUserInfo">确 定</el-button>
                        </span>
                    </el-dialog>
                    <!-- 修改密码对话框 -->
                    <el-dialog title="修改密码" :visible.sync="changepwdDialogVisible" width="50%" @close="pwdDialogClosed">
                        <el-form :model="editForm" label-width="70px" :rules="pwdFormRules" ref="pwdFormRef">
                            <el-form-item label="用户名">
                                <el-input v-model="editForm.userName" disabled></el-input>
                            </el-form-item>
                            <el-form-item label="旧密码">
                                <el-input v-model="oldPassword" prop="op"></el-input>
                            </el-form-item>
                            <el-form-item label="新密码">
                                <el-input v-model="newPassword" prop="np"></el-input>
                            </el-form-item>
                        </el-form>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="changepwdDialogVisible = false">取 消</el-button>
                            <el-button type="primary" @click="pwdInfo">确 定</el-button>
                        </span>
                    </el-dialog>

                    <el-main>
                        <el-descriptions :column="3" border>
                            <el-descriptions-item label="用户名">{{ info.userName }}</el-descriptions-item>
                            <el-descriptions-item label="姓名：">{{ info.name }}</el-descriptions-item>
                            <el-descriptions-item label="学院：">{{ info.faculty }}</el-descriptions-item>
                            <el-descriptions-item label="学号：">{{ info.userId }}</el-descriptions-item>
                            <el-descriptions-item label="电话：">{{ info.phonenumber }}</el-descriptions-item>
                        </el-descriptions>
                    </el-main>
                </el-container>
            </el-container>
        </div>
        <div class="myactivity">
            <div class="title">我的活动</div>
            <div>
                <button class="more" @click="btnClick">点击查看更多</button>
            </div>
            <div class="myActivity" id="myActivity">
                <div v-for="item in myActivity" class="info">
                    <div class="name">{{ item.userImg2 }}</div>
                    <div class="status">
                        <el-button v-if="item.isEnd === 2" type="info">已结束</el-button>
                        <el-button v-else type="success">进行中</el-button>
                    </div>
                    <div class="college"><i class="el-icon-office-building">&nbsp;&nbsp;</i>发起学院：{{ item.hbKeyword }}</div>
                    <div class="time"><i class="el-icon-time">&nbsp;&nbsp;</i>举办时间：{{ item.lat }}</div>
                    <div class="place"><i class="el-icon-location">&nbsp;&nbsp;</i>举办地点：{{ item.address }}</div>
                    <div class="number"><i class="el-icon-s-custom">&nbsp;&nbsp;</i>{{ item.hot }}&nbsp;/&nbsp;{{ item.hbNum}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'user',
    created() {
        this.getuser()
    },
    data() {
        return {
            info: {},
            myActivity: [],
            editForm: {},
            // 控制编辑资料对话框的显示与隐藏
            editDialogVisible: false,
            // 修改表单验证规则对象
            editFormRules: {
                avatar: [
                    { required: true, message: '请输入图片的链接', trigger: 'blur' },
                ],
                mobile: [
                    { required: true, message: '请输入手机号码', trigger: 'blur' },
                    // {validator:checkMobile,trigger:'blur'}
                ]
            },
            // 控制修改密码对话框的显示与隐藏
            changepwdDialogVisible: false,
            oldPassword: '',
            newPassword: '',
            pwdFormRules: {
                op: [
                    { required: true, message: "请输入旧密码", trigger: 'blur' }
                ],
                np: [
                    { required: true, message: "请输入旧密码", trigger: 'blur' }
                ],
            }
        }
    },
    methods: {
        // 获取信息
        async getuser() {
            const { data: res1 } = await this.$http.get('/user')
            if (res1.code !== 200) return this.$message.error('用户信息请求失败')
            this.info = res1.data;
            this.editForm = this.info;
            console.log(this.info)
            const { data: res2 } = await this.$http.get('/system/useractivity/myactivity')
            if (res2.code !== 200) return this.$message.error('我的活动信息请求失败')
            this.myActivity = res2.data;
            console.log(this.myActivity)

        },
        // 显示全部活动
        btnClick() {
            const element = document.getElementById('myActivity')
            element.style.overflow = 'visible'
        },
        // 编辑资料
        // 展示编辑资料的对话框
        showEditDialog() {
            console.log(this.info.name)
            this.editDialogVisible = true;
        },
        // 监听修改用户对话框的关闭事件
        editDialogClosed() {
            this.$refs.editFormRef.resetFields()
        },
        // 修改用户信息并提交
        editUserInfo() {
            this.$refs.editFormRef.validate(async valid => {
                console.log(valid)
                if (!valid) return
                const { data: res } = await this.$http.put('/user', {
                    avatar: this.editForm.avatar,
                    userName: this.editForm.userName,
                    phonenumber: this.editForm.phonenumber
                })
                if (res.code !== 200) {
                    return this.$message.error("更新个人信息失败")
                }
                // 关闭对话框
                this.editDialogVisible = false
                // 提示修改成功
                this.$message.success("更新个人信息成功")
            })
        },
        // 修改密码
        // 展示修改密码的对话框
        showChangeDialog() {
            this.changepwdDialogVisible = true
        },
        pwdDialogClosed() {
            this.$refs.pwdFormRef.resetFields()
        },
        pwdInfo() {
            this.$refs.pwdFormRef.validate(async valid => {
                console.log(valid)
                if (!valid) return
                const { data: res } = await this.$http.put('/user/resetPwd', {
                    userName: this.editForm.userName,
                    password: this.newPassword,
                    oldpassword: this.oldPassword,
                })
                if (res.code !== 200) {
                    return this.$message.error("修改密码失败")
                }
                if (res.msg === "密码错误") {
                    return this.$message.error("旧密码输入错误")
                }
                // 关闭对话框
                this.changepwdDialogVisible = false
                // 提示修改成功
                this.$message.success("修改密码成功")
                console.log(res.msg)
                window.sessionStorage.clear();
                this.$router.push("/login")
            })
        }
    },
}
</script>

<style scoped>
.user {
    width: 1200px;
    margin: 0 auto;
    padding-top: 20px;
}

.el-aside {
    text-align: center;
    line-height: 20px;
}

.el-header {
    line-height: 60px;
}

.el-main {
    text-align: center;
    line-height: 16px;
}

/* 我的活动 */
.title {
    font-size: 25px;
    font-weight: 700;
    /* display: inline-block; */
}

.myActivity {
    margin-left: 30px;
    height: 195px;
    overflow: hidden;
    margin-top: 20px;
    margin-bottom: 20px;
    line-height: 150%;
}

.myactivity .more {
    background-color: rgb(227, 237, 237);
    margin-top: 10px;
    padding: 7px;
    border: 1px solid black;
    cursor: pointer;
    /* 鼠标指针样式为手型 */
}

.myactivity .info {
    width: 350px;
    height: 190px;
    border-radius: 20px;
    padding: 9px;
    margin: 3px;
    display: inline-block;
    background-color: rgb(225, 222, 244);
    color: black;
    overflow: hidden;
}

.myActivity .info .name {
    font-size: 18px;
    font-weight: bold;
}
</style>

  