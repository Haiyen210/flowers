<template>
    <div class="proj-prod mt-5 mb-5">
        <div class="insta">
            <div class="container">
                <div class="ista text-center">
                    <h3>SẢN PHẨM</h3>
                    <p>Trang chủ > Sản Phẩm</p>
                </div>
                <div class="title-corde text-center">
                    <img src="../assets/images/title-decor.png" alt />
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row" v-if="Prod">
                <div class="col-md-3 product" v-for="product in Prod" :key="product.id">
                    <div class="prod">
                        <img :src="require('../assets/images/' + product.img)" />
                        <img
                            :src="require('../assets/images/' + product.images)"
                            class="change-image"
                        />
                        <div class="pro-buy d-flex">
                            <a href class="buy-now" v-on:click.stop.prevent="onCart(product.id)">
                                <i class="fas fa-shopping-cart"></i> Mua Ngay
                            </a>
                            <div class="pro-eyes">
                                <router-link :to="{name:'Detail',params:{id:product.id}}"> <i class="fas fa-eye"></i></router-link>
                                <a href>
                                    <i class="fas fa-heart"></i>
                                </a>
                            </div>
                        </div>
                        <div class="prod-money">
                            <div class="price-prod" v-if="product.sale_price == 0">
                                <span>${{ product.price }}</span>
                            </div>
                            <div class="price-sale-pro" v-else>
                                <span class="sale-price">${{ product.sale_price }}</span>
                                <span class="price">
                                    <del>${{ product.price }}</del>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="prod-text text-center">
                        <a>{{ product.name }}</a>
                        <div class="prod-star">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { store } from "../store";
import { computed } from 'vue'
import router from '../router';
export default {
    setup() {
        store.dispatch('fetchAll');
        const Prod = computed(() => store.state.prod);
        let user = JSON.parse(localStorage.getItem("users"));
        function onCart(itemId) {
            if(user == null){
                router.replace({ name: "Login" });
            }
            store.commit('onCart', itemId);
        }
        return { Prod,onCart }
    },
}
</script>