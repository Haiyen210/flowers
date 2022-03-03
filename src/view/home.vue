<template>
    <main>
        <div class="banner mt-5">
            <div class="container">
                <Carousel :autoplay="2000" :wrap-around="true" v-if="banner">
                    <Slide v-for="ban in banner" :key="ban.id">
                        <img :src="require('../assets/images/' + ban.images)" alt />
                        <div class="carousel__item">
                            <h3>{{ ban.title }}</h3>
                            <p>{{ ban.sale }}</p>
                            <h4>{{ ban.description }}</h4>
                            <div class="flex-action">
                                <a class="btn" href>Buy Now</a>
                            </div>
                        </div>
                    </Slide>

                    <template #addons>
                        <Pagination />
                    </template>
                </Carousel>
            </div>
        </div>
        <div class="Product-body mt-5">
            <div class="container">
                <!-- Nav tabs -->
                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" data-toggle="tab" href="#home">PHỔ BIẾN NHẤT</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#menu1">HÀNG MỚI VỀ</a>
                    </li>
                </ul>
                <div class="title-corde text-center">
                    <img src="../assets/images/title-decor.png" alt />
                </div>
                <!-- Tab panes -->
                <div class="tab-content">
                    <div id="home" class="container tab-pane active">
                        <div class="row" v-if="Prod">
                            <div class="col-md-3 product" v-for="product in Prod" :key="product.id">
                                <div class="prod">
                                    <img :src="require('../assets/images/' + product.img)" alt />
                                    <img
                                        :src="require('../assets/images/' + product.images)"
                                        alt
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
                                    <a href>{{ product.name }}</a>
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
                    <div id="menu1" class="container tab-pane fade">
                        <div class="row" v-if="Prod">
                            <div class="col-md-3 product" v-for="product in Prod" :key="product.id">
                                <div class="prod">
                                    <img :src="require('../assets/images/' + product.img)" alt />
                                    <img
                                        :src="require('../assets/images/' + product.images)"
                                        alt
                                        class="change-image"
                                    />
                                    <div class="pro-buy d-flex">
                                        <a href class="buy-now" v-on:click.stop.prevent="onCart(product.id)">
                                            <i class="fas fa-shopping-cart"></i> Mua ngay
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
                                    <a href>{{ product.name }}</a>
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
            </div>
        </div>
        <div class="banner-body">
            <div class="container" v-if="banner_Body">
                <div class="banner-imgs" v-for="bans in banner_Body" :key="bans.id">
                    <img :src="require('../assets/images/' + bans.images)" alt >
                    <div class="banner-text">
                        <h3>{{bans.name}}</h3>
                        <span>{{bans.description}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="insta">
            <div class="container">
                <div class="ista text-center">
                    <h3>INSTAGRAM</h3>
                </div>
                 <div class="title-cordes text-center">
                    <img src="../assets/images/title-decor.png" alt />
                </div>
            </div>
        </div>
    </main>
</template>
<script>
import router from '../router';
import { ref, computed } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel';
import { store } from "../store";
export default ({
    components: {
        Carousel,
        Slide,
        Pagination,
    },
    setup() {
        const banner = ref([]);
        const error = ref(null);
        const banner_Body = ref([]);
        const fetchAlls = async () => {
            try {
                const responses = await fetch("https://620341d84d21c200170b9bff.mockapi.io/banner");
                const respon = await fetch("https://620341d84d21c200170b9bff.mockapi.io/banner-body");
                if (!responses.ok) throw new Error("Error, Please check again!!");
                if (!respon.ok) throw new Error("Error, Please check again!!");
                banner.value = await responses.json();
                banner_Body.value = await respon.json();
            } catch (err) {
                error.value = err;
            }
        }

        fetchAlls();
        store.dispatch('fetchAll');
        const Prod = computed(() => store.state.prod);
        let user = JSON.parse(localStorage.getItem("users"));
        function onCart(itemId) {
            if(user == null){
                router.replace({ name: "Login" });
            }
            store.commit('onCart', itemId);
        }
        return { banner, Prod, banner_Body,onCart }
    }
})

</script>