<template>
    <div class="contact">
        <div class="insta">
            <div class="container">
                <div class="ista text-center">
                    <h3>HỖ TRỢ</h3>
                    <p>Trang chủ > Hỗ trợ</p>
                </div>
                <div class="title-corde text-center">
                    <img src="../assets/images/title-decor.png" />
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="contact_1"></div>
                </div>
                <div class="col-md-6">
                    <form>
                        <div class="form-group">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Họ và Tên"
                                id="name"
                                style="height: calc(1.5em + 0.75rem + 13px)"
                            />
                        </div>
                        <div class="form-group">
                            <input
                                type="email"
                                class="form-control"
                                placeholder="Email"
                                id="email"
                                style="height: calc(1.5em + 0.75rem + 13px)"
                            />
                        </div>
                        <div class="form-group">
                            <input
                                type="password"
                                class="form-control"
                                placeholder="Số điện thoại"
                                id="phone"
                                style="height: calc(1.5em + 0.75rem + 13px)"
                            />
                        </div>
                        <div class="form-group form-check">
                            <textarea
                                cols="72"
                                rows="8"
                                style="margin-left: -15px;border-color: #d1d4d6 !important;"
                                placeholder="Tin nhắn của bạn"
                            ></textarea>
                        </div>
                        <div class="flex-action" style="text-align: inherit;">
                            <button type="submit" class="btn">Gửi</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>