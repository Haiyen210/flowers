<template>
    <header>
        <div class="hd">
            <div class="h-one">
                <div class="container">
                    <ul class="nav">
                        <li class="nav-item logbox" v-if="user_login">
                            <a class="nav-link" href="#">
                                <i class="fas fa-user"></i>
                                {{ user_name }}
                            </a>
                            <ul>
                                <li class="logout">
                                    <a class="nav-link" @click="logout">
                                        <i class="fas fa-sign-out-alt"></i>
                                        Đăng Xuất
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item logbox" v-else>
                            <a class="nav-link" href="#">
                                <i class="fas fa-user"></i> Đăng nhập
                            </a>
                            <ul>
                                <li>
                                    <div id="loginBox" class="login">
                                        <form
                                            method="post"
                                            action="/account/login"
                                            id="customer_login"
                                            accept-charset="UTF-8"
                                        >
                                            <input
                                                type="hidden"
                                                name="form_type"
                                                value="customer_login"
                                            />
                                            <div id="bodyBox">
                                                <ul
                                                    class="control-container customer-accounts list-unstyled"
                                                >
                                                    <li class="clearfix">
                                                        <input
                                                            type="email"
                                                            value
                                                            placeholder="Địa chỉ email"
                                                            name="email"
                                                            :class="{ error: errorEmail.status, success: successEmail.status }"
                                                            v-model="login.email"
                                                            id="customer_email_box"
                                                            class="form-control"
                                                        />
                                                        <p
                                                            class="text-error"
                                                            v-if="errorEmail.status"
                                                        >{{ errorEmail.text }}</p>
                                                        <p
                                                            class="success-text"
                                                            v-if="successEmail.status"
                                                        >{{ successEmail.text }}</p>
                                                    </li>

                                                    <li class="clearfix">
                                                        <input
                                                            type="password"
                                                            value
                                                            placeholder="Mật Khẩu"
                                                            name="password"
                                                            :class="{ error: errorPassword.status, success: successPassword.status }"
                                                            v-model="login.password"
                                                            id="customer_password_box"
                                                            class="form-control password"
                                                        />
                                                        <p
                                                            class="text-error"
                                                            v-if="errorPassword.status"
                                                        >{{ errorPassword.text }}</p>
                                                        <p
                                                            class="success-text"
                                                            v-if="successPassword.status"
                                                        >{{ successPassword.text }}</p>
                                                    </li>

                                                    <li class="clearfix">
                                                        <button class="btn btn-1" type="submit" v-on:click="onLogin()">
                                                            <router-link
                                                                :to="{ name: 'Login', params: {} }"
                                                            >Đăng Nhập</router-link>
                                                        </button>
                                                    </li>
                                                    <li class="clearfix">
                                                        <a href>
                                                            <span>&gt; Quên mật khẩu ?</span>
                                                        </a>
                                                        <router-link
                                                            :to="{ name: 'Register', params: {} }"
                                                        >
                                                            <span>&gt; Tạo tài khoản mới</span>
                                                        </router-link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </form>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <i class="fas fa-heart"></i> Yêu Thích
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">USD</a>
                        </li>
                    </ul>
                    <ul class="nav justify-content-end" style="margin-top: -38px;">
                        <li class="nav-item">
                            <div class="nav-search">
                                <form class="search" action="/search">
                                    <input
                                        type="text"
                                        name="q"
                                        class="search-box"
                                        placeholder="Tìm kiếm ..."
                                        value
                                    />
                                    <button class="search-submit" type="submit">
                                        <i class="fas fa-search"></i>
                                    </button>
                                </form>
                            </div>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'Cart', params: {} }">
                                <img src="../assets/images/bg-cart.png" /><span class="">{{total}}</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="h-two">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="pagane-left">
                            <ul class="nav justify-content-start">
                                <li class="nav-item text-center">
                                    <img src="../assets/images/flowers.png" />
                                    <router-link
                                        class="nav-link"
                                        :to="{ name: 'Product', params: {} }"
                                    >NHỮNG BÔNG HOA</router-link>
                                </li>
                                <li class="nav-item text-center">
                                    <img src="../assets/images/support.png" />
                                   <router-link class="nav-link" :to="{name: 'Contact', params:{}}"> HỖ TRỢ</router-link>
                                </li>
                                <li class="nav-item text-center">
                                    <img src="../assets/images/blog.png" />
                                    <a class="nav-link" href="#">BLOG</a>
                                </li>
                            </ul>
                        </div>
                        <div class="pagane-center">
                            <ul class="nav justify-content-center">
                                <li class="nav-item text-start">
                                    <router-link :to="{ name: 'Home', params: {} }">
                                        <img src="../assets/images/logo.png" />
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                        <div class="pagane-right">
                            <ul class="nav justify-content-start">
                                <li class="nav-item text-center">
                                    <img src="../assets/images/about-us.png" />
                                    <a class="nav-link" href="#">ABOUT US</a>
                                </li>
                                <li class="nav-item text-center">
                                    <img src="../assets/images/contact-us.png" />
                                    <a class="nav-link" href="#">LIÊN HỆ</a>
                                </li>
                                <li class="nav-item text-center" style="margin-top: 10px">
                                    <img src="../assets/images/faq.png" />
                                    <a class="nav-link" href="#">CÂU HỎI</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
import useLogin from "../user/login"
import { ref } from '@vue/reactivity';
import store from "../store";
export default {
    setup() {
        const { onLogin, login, errorEmail, successEmail, errorPassword, successPassword } = useLogin();
        let user_login = JSON.parse(localStorage.getItem('users'));
        const user_name = ref("");
        if (user_login) {
            user_name.value = user_login.name;
        } else {
            user_name.value = "";
        }
        function logout() {
            localStorage.removeItem("users");
            document.location.href = "/login";
        }
        let total = 0;
        if(user_login && user_name.value){
             total = store.state.cart.length;
        }else{
            total = 0;
        }
       
        console.log(total);

        return { user_login, user_name, logout, onLogin, login, errorEmail, successEmail, errorPassword, successPassword,total }
    }
}

</script>