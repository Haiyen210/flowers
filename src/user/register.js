import { ref } from 'vue'
import router from "../router";
export default function() {

    const register = ref({
        name: "",
        email: "",
        password: "",
    })
    const errorName = ref({
        text: "",
        status: false
    })
    const successName = ref({
        text: "",
        status: false,
    })
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

    function onRegister() {
        if (register.value.name.length == 0) {
            errorName.value.text = "Tên không được để trống";
            errorName.value.status = true;
        } else if (register.value.name.length < 6 || register.value.name.length > 18) {
            errorName.value.text = "Tên phải từ 6 đến 18 kí tự";
            errorName.value.status = true;
        } else if (register.value.name.length > 5 || register.value.name.length < 19) {
            successName.value.text = "Thành công!!";
            successName.value.status = true;
            errorName.value.status = false;

        } else {
            errorName.value.text = "";
            errorName.value.status = false;
        }
        const regex = /^\w+([.-]?\w+)*@[a-z]+([.-]?\w+)*(.\w{2,3})+$/;
        if (register.value.email.length == 0) {

            errorEmail.value.text = "Email không được để trống",
                errorEmail.value.status = true
        } else if (!regex.test(register.value.email)) {

            errorEmail.value.text = "Email Không đúng",
                errorEmail.value.status = true
        } else if (regex.test(register.value.email)) {
            successEmail.value.text = "Thành công!!";
            successEmail.value.status = true;
            errorEmail.value.status = false
        } else {
            errorEmail.value.text = "",
                errorEmail.value.status = false
        }

        if (register.value.password.length == 0) {
            errorPassword.value.text = "Mật khẩu không được để trống";
            errorPassword.value.status = true;
        } else if (register.value.password.length < 6) {
            errorPassword.value.text = "Mật khẩu phải đủ 6 kí tự";
            errorPassword.value.status = true;
        } else if (register.value.password.length >= 6) {
            successPassword.value.text = "Thành công!!";
            successPassword.value.status = true;
            errorPassword.value.status = false;

        } else {
            errorPassword.value.text = "";
            errorPassword.value.status = false;
        }

        if (errorPassword.value.status == false && errorEmail.value.status == false && errorName.value.status == false) {

            let regs = JSON.parse(localStorage.getItem('registers'));
            let arr = [];
            arr.push(register.value);
            if (regs == null) {
                localStorage.setItem('registers', JSON.stringify(arr));
            } else if (regs != null) {
                regs.push(register.value);
                localStorage.setItem('registers', JSON.stringify(regs));
            }
            router.push('/login');
        }
    }
    return { register, onRegister, errorName, successName, errorEmail, successEmail, errorPassword, successPassword }
}