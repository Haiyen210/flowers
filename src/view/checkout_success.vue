<template>
    <div class="checkout_success">
        <div class="insta">
            <div class="container">
                <div class="ista text-center">
                    <h3>CheckOut</h3>
                </div>
                <div class="title-corde text-center">
                    <img src="../assets/images/title-decor.png" />
                </div>
            </div>
        </div>
        <div class="section" style="padding-top: 4rem; padding-bottom: 7rem">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <div class="text-center order_complete">
                            <i class="fas fa-check-circle" style="font-size: 44px;color: green;"></i>
                            <div class="heading_s1">
                                <h3>Đặt Hàng Thành Công!</h3>
                            </div>
                            <p>Cảm ơn bạn đã đặt hàng của bạn! Đơn đặt hàng của bạn đang được xử lý và sẽ được hoàn thành trong vòng 3-6 giờ. Bạn sẽ nhận được một email xác nhận khi đơn đặt hàng của bạn được hoàn thành.</p>
                            <router-link
                                :to="{ name: 'Product' }"
                                class="btn btn-fill-out"
                            >Tiếp Tục Mua Hàng</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>