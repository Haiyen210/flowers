<template>
    <div class="container">
        <div class="insta">
            <div class="container">
                <div class="ista text-center">
                    <h3>ĐĂNG KÝ</h3>
                    <p>Trang chủ > Đăng Ký</p>
                </div>
                <div class="title-corde text-center">
                    <img src="../assets/images/title-decor.png" />
                </div>
            </div>
        </div>
        <form method="post" @submit.prevent="onRegister" style="width:400px; margin: 0 auto;">
            <div class="form-group" style="margin-bottom: 20px;">
                <label for="uname" style="font-weight: bold;">Tên người dùng</label>
                <input
                    type="text"
                    class="form-control"
                    id="name"
                    name="name"
                    :class="{ error: errorName.status, success: successName.status }"
                    v-model="register.name"
                />
                <p class="text-error" v-if="errorName.status">{{ errorName.text }}</p>
                <p class="success-text" v-if="successName.status">{{ successName.text }}</p>
            </div>
            <div class="form-group" style="margin-bottom: 20px;">
                <label for="uname" style="font-weight: bold;">Địa chỉ Email</label>
                <input
                    type="text"
                    class="form-control"
                    id="email"
                    name="email"
                    :class="{ error: errorEmail.status, success: successEmail.status }"
                    v-model="register.email"
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
                    v-model="register.password"
                />
                <p class="text-error" v-if="errorPassword.status">{{ errorPassword.text }}</p>

                <p v-if="successPassword.status" class="success-text">{{ successPassword.text }}</p>
            </div>
            <div class="flex-action">
                <button type="submit" name="register" class="btn">Đăng ký</button>
            </div>
        </form>
    </div>
</template>
<script>
import useRegister from "../user/register"
export default {
    setup() {
        const { register, onRegister, errorName, successName, errorEmail, successEmail, errorPassword, successPassword } = useRegister();
        return { register, onRegister, errorName, successName, errorEmail, successEmail, errorPassword, successPassword }
    }
}
</script>