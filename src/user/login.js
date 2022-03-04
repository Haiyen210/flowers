import { ref } from "vue";
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'
export default function() {
    const login = ref({
        name: "",
        email: "",
        password: "",
    });
    const errorEmail = ref({
        text: "",
        status: false
    })
    const successEmail = ref({
        text: "",
        status: false,
    })
    const errorPassword = ref({
        text: "",
        status: false
    })
    const successPassword = ref({
        text: "",
        status: false,
    })

    function onLogin() {
        const user = JSON.parse(localStorage.getItem("registers"));
        let emails = "";
        let passwords = "";
        let names = "";
        if (user) {
            for (let i = 0; i < user.length; i++) {
                if (login.value.email == user[i].email) {
                    emails = user[i].email;
                    passwords = user[i].password;
                    names = user[i].name;
                }


            }
        }
        const regex = /^\w+([.-]?\w+)*@[a-z]+([.-]?\w+)*(.\w{2,3})+$/;
        if (login.value.email.length == 0) {
            errorEmail.value.text = "Email không được bỏ trống",
                errorEmail.value.status = true
        } else if (!regex.test(login.value.email)) {
            errorEmail.value.text = "Email không đúng định dạng",
                errorEmail.value.status = true
        } else if (login.value.email != emails) {
            errorEmail.value.text = "Email không khớp với đăng ký",
                errorEmail.value.status = true
        } else if (regex.test(login.value.email)) {
            successEmail.value.text = "Thành công!!";
            successEmail.value.status = true;
            errorEmail.value.status = false
        } else {
            errorEmail.value.text = "",
                errorEmail.value.status = false
        }
        if (login.value.password.length == 0) {
            errorPassword.value.text = "Mật khẩu không được để trống";
            errorPassword.value.status = true;
        } else if (login.value.password.length < 6) {
            errorPassword.value.text = "Mật khẩu phải đủ 6 kí tự";
            errorPassword.value.status = true;
        } else if (login.value.password != passwords) {
            errorPassword.value.text = "Mật khẩu không đúng",
                errorPassword.value.status = true

        } else if (login.value.password.length >= 6) {
            successPassword.value.text = "Thành công!!";
            successPassword.value.status = true;
            errorPassword.value.status = false;
        } else {
            errorPassword.value.text = "";
            errorPassword.value.status = false;
        }
        if (errorPassword.value.status == false && errorEmail.value.status == false) {
            login.value.name = names;
            localStorage.setItem('users', JSON.stringify(login.value));
            createToast({
                title: 'Thành công',
                description: 'Đăng nhập thành công!!!!',
                type: 'success',
                timeout: 1000,

            })
            document.location.href = "/";

        }


    }

    return { onLogin, login, errorEmail, successEmail, errorPassword, successPassword }
}