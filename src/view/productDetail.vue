<template>
    <div class="product-Detail">
        <div class="insta">
            <div class="container">
                <div class="ista text-center" v-if="Prod">
                    <h3>CHI TIẾT SẢN PHẨM</h3>
                     <p>Trang chủ > Sản Phẩm > {{Prod.name}}</p>
                </div>
                <div class="title-corde text-center">
                    <img src="../assets/images/title-decor.png" alt />
                </div>
            </div>
        </div>
        <div class="pro-detail mt-5">
            <div class="container">
                <div class="row" v-if="Prod">
                    <div class="col-md-6 prodetail">
                        <img :src="require('../assets/images/' + Prod.images)" alt />
                    </div>
                    <div class="col-md-6">
                        <div class="text" style="width: 100%; padding-top: 51px;">
                            <h3>{{ Prod.name }}</h3>
                            <div class="prod-star">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <div class="d-flex mt-4" style="font-size: 20px;">
                                Price:
                                <p
                                    v-if="Prod.sale_price == 0"
                                    style="font-size: 20px; color:#fa869b; margin-left:10px"
                                >${{ Prod.price }}</p>
                                <p v-else style="font-size: 20px;color:#fa869b;margin-left:10px">
                                    ${{ Prod.sale_price }}
                                    <del
                                        style="font-size:15px;color:#656565;"
                                    >${{ Prod.price }}</del>
                                </p>
                            </div>

                            <p style="width: 93%;">{{ Prod.description }}</p>
                            <div class="color d-flex">
                                <p>Màu:</p>
                                <a href>
                                    <img src="../assets/images/red.png" alt />
                                </a>
                                <a href>
                                    <img src="../assets/images/blue.png" alt />
                                </a>
                                <a href>
                                    <img src="../assets/images/black.png" alt />
                                </a>
                                <a href>
                                    <img src="../assets/images/yellow.png" alt />
                                </a>
                            </div>
                            <div class="size d-flex">
                                <p>Size:</p>
                                <div class="size-flower">
                                    <a href>S</a>
                                    <a href>M</a>
                                    <a href>L</a>
                                </div>
                            </div>
                            <div class="d-flex">
                                <div class="pt-3">
                                    <p class="d-flex pt-1">
                                        <button
                                            type="submit"
                                            style=" width: 40px; margin-right: 25px; background:#fa869b; border-color: #fa869b; color: #ffff;font-size: 23px;height: 40px;"
                                            v-on:click="onCountMinus()"
                                        >-</button>
                                        <input
                                            type="text"
                                            v-bind:value="`${count}`"
                                            style="width: 40px; text-align: center;"
                                        />

                                        <button
                                            type="submit"
                                            style=" width: 40px;margin-left: 25px; background:#fa869b; border-color: #fa869b;color: #ffff;font-size: 23px;height: 40px;"
                                            v-on:click="onCount()"
                                        >+</button>
                                    </p>
                                </div>
                                <div
                                    class="flex-action"
                                    style="margin-left: 44px;margin-top: 16px;"
                                >
                                    <a class="btn">
                                        <i class="fas fa-shopping-cart"></i> Mua Ngay
                                    </a>
                                </div>
                                <div
                                    class="flex-action"
                                    style="margin-left: 44px;margin-top: 16px;"
                                >
                                    <a class="btn">
                                        <i class="fas fa-heart"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mt-5" v-if="Prod">
                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item">
                        <a
                            class="nav-link active"
                            data-toggle="tab"
                            href="#home"
                            style="font-size:20px"
                        >Mô tả sản phẩm</a>
                    </li>
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            data-toggle="tab"
                            href="#menu1"
                            style="font-size:20px"
                        >Nhận xét</a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div id="home" class="container tab-pane active mt-5">
                        <h4 style="color:darkmagenta">Mô Tả Sản Phẩm</h4>
                        <p>{{ Prod.description }}</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti voluptatem eligendi minus, voluptatum at officia cum dolore iste numquam voluptate nisi consequatur ullam nihil omnis accusamus aliquam esse laboriosam nulla.</p>
                    </div>
                    <div id="menu1" class="container tab-pane fade mt-5">
                        <h5>Địa chỉ email của bạn sẽ không được công bố. Các trường bắt buộc được đánh dấu *</h5>
                        <form @submit.prevent="onSubmit">
                            <div class="form-group">
                                <label for="review">Nhận xét của bạn*</label>
                                <textarea
                                    cols="30"
                                    rows="6"
                                    style="width: 100%"
                                    v-model="quiz.review"
                                    :class="{ error: errorReview.status, success: successReview.status }"
                                ></textarea>
                                <p
                                    class="text-error"
                                    v-if="errorReview.status"
                                >{{ errorReview.text }}</p>
                                <p
                                    class="success-text"
                                    v-if="successReview.status"
                                >{{ successReview.text }}</p>
                            </div>
                            <div class="form-group">
                                <label for="name">Tên*</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="name"
                                    placeholder
                                    name="name"
                                    :class="{ error: nameError.status, success: successName.status }"
                                    v-model="quiz.name"
                                />
                                <p class="text-error" v-if="nameError.status">{{ nameError.text }}</p>
                                <p
                                    class="success-text"
                                    v-if="successName.status"
                                >{{ successName.text }}</p>
                            </div>
                            <div class="form-group">
                                <label for="email">Email*</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="pwd"
                                    :class="{ error: error.status, success: successEmail.status }"
                                    placeholder
                                    name="pswd"
                                    v-model="quiz.email"
                                />
                                <p class="text-error" v-if="error.status">{{ error.text }}</p>
                                <p
                                    class="success-text"
                                    v-if="successEmail.status"
                                >{{ successEmail.text }}</p>
                            </div>
                            <button
                                type="submit"
                                class="btn btn-primary"
                                style="background: #8b1367;font-size: 14px;font-weight: 600;padding: 12px 45px; border: orange;"
                            >Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="insta">
                    <div class="container">
                        <div class="ista text-center">
                            <h3>Sản Phẩm nổi bật</h3>
                        </div>
                        <div class="title-corde text-center">
                            <img src="../assets/images/title-decor.png" alt />
                        </div>
                    </div>
                </div>
                <Carousel v-if="Product"  :itemsToShow="3.9" :wrapAround="true">
                    <Slide v-for="pros in Product" :key="pros.id">
                        <div class="carousel__item product prod">
                            <img :src="require('../assets/images/' + pros.img)" />
                            <img
                                :src="require('../assets/images/' + pros.images)"
                                class="change-image"
                            />
                            <div class="pro-buy d-flex">
                                <a href class="buy-now">
                                    <i class="fas fa-shopping-cart"></i> Mua Ngay
                                </a>
                                <div class="pro-eyes">
                                    <router-link :to="{ name: 'Detail', params: { id: pros.id } }">
                                        <i class="fas fa-eye"></i>
                                    </router-link>
                                    <a href>
                                        <i class="fas fa-heart"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="prod-money">
                                <div class="price-prod" v-if="pros.sale_price == 0">
                                    <span>${{ pros.price }}</span>
                                </div>
                                <div class="price-sale-pro" v-else>
                                    <span class="sale-price">${{ pros.sale_price }}</span>
                                    <span class="price">
                                        <del>${{ pros.price }}</del>
                                    </span>
                                </div>
                            </div>
                             <div class="prod-text text-center">
                                <a>{{ pros.name }}</a>
                                <div class="prod-star">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                            </div>
                        </div>   
                    </Slide>
                    <template #addons>
                        <Navigation />
                    </template>
                </Carousel>
            </div>
        </div>
    </div>
</template>
<script>
import { store } from "../store";
import { computed } from 'vue'
import axios from 'axios';
import { Carousel, Navigation, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
export default {
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    data() {
        return {
            Prod: null,
            count: 1,
            quiz: {
                name: "",
                email: "",
                review: "",
            },
            nameError: {
                text: "",
                status: false,
            },
            error: {
                text: "",
                status: false,
            },
            successName: {
                text: "",
                status: false,
            },
            successEmail: {
                text: "",
                status: false,
            },
            errorReview: {
                text: "",
                status: false,
            },
            successReview: {
                text: "",
                status: false,
            },
        }
    },
    methods: {
        onCount() {
            this.count += 1
        },
        onCountMinus() {
            if (this.count > 0) {
                this.count -= 1
            }
        },
        onSubmit() {
            console.log(this.quiz)
            if (this.quiz.name.length == 0) {
                this.nameError = {
                    text: "Tên không được để trống",
                    status: true
                }
            }
            else if (this.quiz.name.length < 6 || this.quiz.name.length > 18) {
                this.nameError = {
                    text: "Tên phải từ 6 đến 18 kí tự.",
                    status: true
                }


            } else if (this.quiz.name.length > 5 && this.quiz.name.length < 19) {
                this.successName = {
                    text: "Thành công!",
                    status: true
                }
            } else {
                this.nameError = {
                    text: "",
                    status: false
                }
            }
            const regex = /^\w+([.-]?\w+)*@[a-z]+([.-]?\w+)*(.\w{2,3})+$/;
            if (this.quiz.email.length == 0) {
                this.error = {
                    text: "Email không được để trống",
                    status: true
                }
            } else if (!regex.test(this.quiz.email)) {
                this.error = {
                    text: "Email không đúng định dạng",
                    status: true
                }
            } else if (regex.test(this.quiz.email)) {
                this.successEmail = {
                    text: "Thành công!",
                    status: true,
                }
            } else {
                this.error = {
                    text: "",
                    status: false
                }
            }

            if (this.quiz.review.length == 0) {
                this.errorReview = {
                    text: "Review không được để trống",
                    status: true,
                }
            } else if (this.quiz.review.length > 0) {
                this.successReview = {
                    text: "Thành công!",
                    status: true,
                }
            } else {
                this.errorReview = {
                    text: "",
                    status: false,
                }
            }
        },
    },
    mounted() {
        axios.get("https://620341d84d21c200170b9bff.mockapi.io/Product?id=" + this.$route.params.id)
            .then((response) => {
                this.Prod = response.data[0];
                console.log(this.Prod.name)
            })
            .catch((errors) => {
                console.log(errors);
            });

    },
    setup() {
        store.dispatch('fetchAll');
        const Product = computed(() => store.state.prod);
        return { Product }
    },
}
</script>
<style>
.carousel__prev--in-active,
.carousel__next--in-active {
    display: none;
}
</style>