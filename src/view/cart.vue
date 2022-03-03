<template>
    <div class="Cart-shop">
        <div class="insta">
            <div class="container">
                <div class="ista text-center">
                    <h3>GIỎ HÀNG</h3>
                    <p>Trang chủ > Giỏ Hàng</p>
                </div>
                <div class="title-corde text-center">
                    <img src="../assets/images/title-decor.png" />
                </div>
            </div>
        </div>
        <div
            class="container"
            style="padding-top: 7rem; padding-bottom: 7rem"
            v-if="cart && user && names == user.name"
        >
            <div class="row">
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th class="text-center">Xóa</th>
                                <th class="text-center">Ảnh</th>
                                <th class="text-center">Sản Phẩm</th>
                                <th class="text-center">Giá Tiền</th>
                                <th class="text-center">Số Lượng</th>
                                <th class="text-center">Thành Tiền</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="item in cart" :key="item.id">
                                <td>
                                    <button
                                        @click.prevent="removeFromCart(item.id)"
                                        style="border-radius: 50%;padding: 7px;margin-top: 19px;padding-left: 12px;
                        text-align: center;padding-right: 14px;background: #fa869b;color: white;"
                                    >X</button>
                                </td>
                                <td class="td-images">
                                    <img
                                        class="ing"
                                        :src="require('../assets/images/' + item.images)"
                                        style="width: 80px;"
                                    />
                                </td>
                                <td style="padding-top: 41px;">{{ item.name }}</td>
                                <td
                                    style="padding-top: 41px;"
                                >{{ item.sale_price == 0 ? item.price : item.sale_price }}</td>
                                <td>
                                    <p
                                        class="d-flex pt-1 quantity"
                                        style="margin-right: -129px; margin-top: 14px;margin-left: 47px;"
                                    >
                                        <button
                                            type="submit"
                                            style="width: 40px; margin-right: 25px; background:#fa869b; border-color: #fa869b; color: #ffff;font-size: 23px;height: 40px;"
                                            v-on:click="onCountMinus(item.id)"
                                        >-</button>
                                        <input
                                            type="text"
                                            v-bind:value="`${item.quantity}`"
                                            style="width: 40px; text-align: center;"
                                        />

                                        <button
                                            type="submit"
                                            style="width: 40px; margin-right: 25px; background:#fa869b; border-color: #fa869b; color: #ffff;font-size: 23px;height: 40px;margin-left: 27px;"
                                            v-on:click="onCount(item.id)"
                                        >+</button>
                                    </p>
                                </td>
                                <td style="padding-top: 41px;">{{ item.quantity * item.price }}</td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="clear cart-page-total" style=" margin-left: 81%;">
                        <a v-on:click="onClear">Clear</a>
                    </div>
                </div>
            </div>
            <div class="row pt-5">
                <div class="col-md-6">
                    <div class="cart-page-total" style="padding-bottom: 2rem">
                        <h3 style="color: rgb(216, 91, 8);">Cart totals</h3>
                        <ul v-if="cart">
                            <li>
                                Subtotal
                                <span>${{ sum }}</span>
                            </li>
                            <li>
                                Total
                                <span>${{ sum }}</span>
                            </li>
                        </ul>
                        <ul v-else>
                            <li>
                                Subtotal
                                <span>$0</span>
                            </li>
                            <li>
                                Total
                                <span>$0</span>
                            </li>
                        </ul>
                        <a v-on:click="onCheckOut()">CheckOut</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container" v-else>
           <div class="icon_hand">
                <i class=" fas fa-hand-point-down "></i>
           </div>
            <div class="alert alert-danger">
                <strong>
                    <router-link :to="{ name: 'Login', params: {} }">Đăng Nhập Ngay!</router-link>
                </strong> Hãy đăng nhập để tiếp tục mua hàng.
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from '@vue/reactivity';
import router from '../router';
import { store } from "../store";
// import { computed } from 'vue'
export default {
    setup() {
        const cart = store.state.cart;
        console.log(cart);
        function onCount(proId) {
            store.commit('onCount', proId);
        }
        function onCountMinus(proId) {
            store.commit('onCountMinus', proId);
        }
        function removeFromCart(itemId) {
            store.commit('removeFromCart', itemId);
        };
        function onClear() {
            if (confirm("Do you really want to delete?")) {
                localStorage.removeItem('cart');
                location.reload();
            }
        }
        let sum = 0;
        if (cart) {
            cart.map(x => {
                sum = sum + (x.price * x.quantity)

            });
        }
        function onCheckOut() {
            if (cart) {
                 router.replace({ name: "CheckOut" });
            } else {
                alert("Hãy Thêm Sản Phẩm Vào Giỏ Hàng")
            }
        }

        let user = JSON.parse(localStorage.getItem("users"));
        let names = ref("");
        if (cart != null && cart.length > 0) {
            for (let i = 0; i < cart.length; i++) {
                names.value = cart[i].name_user

            }
        }

        return { cart, onCount, onCountMinus, removeFromCart, onClear, sum, onCheckOut, user, names }
    },
}
</script>