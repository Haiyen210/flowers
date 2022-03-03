<template>
    <div class="container">
        <div class="insta">
            <div class="container">
                <div class="ista text-center">
                    <h3>ĐĂNG NHẬP</h3>
                    <p>Trang chủ > Đăng Nhập</p>
                </div>
                <div class="title-corde text-center">
                    <img src="../assets/images/title-decor.png" />
                </div>
            </div>
        </div>
        <form method="post" @submit.prevent="onLogin" style="width:400px; margin: 0 auto;">
            <div class="form-group" style="margin-bottom: 20px;">
                <label for="uname" style="font-weight: bold;">Địa chỉ Email</label>
                <input
                    type="text"
                    class="form-control"
                    id="email"
                    name="email"
                    :class="{ error: errorEmail.status, success: successEmail.status }"
                    v-model="login.email"
                />
                <p class="text-error" v-if="errorEmail.status">{{ errorEmail.text }}</p>
                <p class="success-text" v-if="successEmail.status">{{ successEmail.text }}</p>
            </div>
            <div class="form-group" style="margin-bottom: 20px;">
                <label for="uname" style="font-weight: bold;">Mật Khẩu</label>
                <input
                    type="text"
                    class="form-control"
                    id="password"
                    name="password"
                    :class="{ error: errorPassword.status, success: successPassword.status }"
                    v-model="login.password"
                />
                <p class="text-error" v-if="errorPassword.status">{{ errorPassword.text }}</p>
                <p class="success-text" v-if="successPassword.status">{{ successPassword.text }}</p>
            </div>
            <div class="flex-action">
                 <button type="submit" name="register" class="btn">Đăng Nhập</button>
            </div>
        </form>
    </div>
</template>
<script>
import useLogin from "../user/login"
export default {
    setup() {
        const { onLogin, login, errorEmail, successEmail, errorPassword, successPassword } = useLogin();
        return { onLogin, login, errorEmail, successEmail, errorPassword, successPassword }
    }
}
</script>