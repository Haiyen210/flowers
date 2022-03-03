<template>
    <div class="check_out">
        <div class="insta">
            <div class="container">
                <div class="ista text-center">
                    <h3>CheckOut</h3>
                    <p>Trang chủ > Giỏ Hàng > CheckOut</p>
                </div>
                <div class="title-corde text-center">
                    <img src="../assets/images/title-decor.png" />
                </div>
            </div>
        </div>
        <div class="container">
            <div class="container" style="padding-top: 4rem; padding-bottom: 7rem">
                <div class="row">
                    <div class="col-lg-12">
                        <form method="post" @submit.prevent="onOders">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="heading_s1">
                                        <h4>Chi tiết thanh toán</h4>
                                    </div>
                                    <div class="form-group">
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="name"
                                            placeholder="Name *"
                                            v-model="orders.name"
                                        />
                                    </div>
                                    <div class="form-group">
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="email"
                                            placeholder="Email*"
                                            v-model="orders.email"
                                        />
                                    </div>
                                    <div class="form-group">
                                        <input
                                            class="form-control"
                                            type="text"
                                            name="phone"
                                            placeholder="Phone *"
                                            v-model="orders.phone"
                                        />
                                    </div>
                                    <div class="form-group">
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="address"
                                            placeholder="Address *"
                                            v-model="orders.address"
                                        />
                                    </div>
                                    <div class="heading_s1">
                                        <h4>More information</h4>
                                    </div>
                                    <div class="form-group mb-0">
                                        <textarea
                                            rows="5"
                                            class="form-control"
                                            placeholder="More information"
                                            name="order_note"
                                            v-model="orders.content"
                                        ></textarea>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="order_review">
                                        <div class="heading_s1">
                                            <h4>Danh sách đơn hàng của bạn</h4>
                                        </div>
                                        <div class="table-responsive order_table">
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th>Product</th>
                                                        <th>Total</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    <tr v-for="item in cart " :key="item.id">
                                                        <td>
                                                            {{ item.name }}
                                                            <span
                                                                class="product-qty"
                                                            >x {{ item.quantity }}</span>
                                                        </td>
                                                        <td>${{ item.quantity * item.price }}</td>
                                                    </tr>
                                                </tbody>

                                                <tfoot>
                                                    <tr>
                                                        <th>Total payment</th>
                                                        <td class="product-subtotal">${{ sum }}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Transport fee</th>
                                                        <td>Free shipping</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Total</th>
                                                        <td class="product-subtotal">${{ sum }}</td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                        <button class=" btn-fill-out btn-block " v-on:click="onOders()">Order</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import router from '../router';
import { store } from "../store";
import { ref } from 'vue'
export default {
    setup() {
        const cart = store.state.cart;
        let user = JSON.parse(localStorage.getItem("users"));
        const orders = ref({
            name: user.name,
            email: user.email,
            phone: "",
            address: "",
            content:"",
            order: cart
        })
        let sum = 0
        if (cart) {
            cart.map(x => {
                sum = sum + (x.price * x.quantity)
            });
        }
        function onOders(){
           localStorage.setItem('order', JSON.stringify(orders.value));
           localStorage.removeItem('cart')
           router.push('/checkout_success')
        }
        return { cart, sum,user,orders,onOders }
    }
}
</script>