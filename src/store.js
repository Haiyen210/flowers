import { createStore } from 'vuex';
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'
export const store = createStore({
    state: {
        cart: JSON.parse(localStorage.getItem("cart")),
        prod: null,
        prodDetail: null,
    },
    mutations: {
        setProduct(state, ProductPaload) {
            state.prod = ProductPaload;

        },
        setDetail(state, DetailPaload) {
            state.prodDetail = DetailPaload;
        },
        onCart(state, itemId) {
            let user = JSON.parse(localStorage.getItem("users"));
            let item = state.prod.find(({ id }) => id === itemId);
            let itemIS;
            if (state.cart) {
                itemIS = state.cart.find(({ id }) => id === itemId);
            }
            console.log(itemIS);
            if (state.cart == null) {
                state.cart = [];
            }
            if (item && !itemIS) {
                if (item['quantity'] == null) {
                    item['quantity'] = 1;
                    item['name_user'] = user['name'];
                    state.cart.push(item);
                }
            }
            if (itemIS) {
                if (itemIS['quantity']) {
                    itemIS['quantity'] += 1;
                    localStorage.setItem("cart", JSON.stringify(itemIS));
                }
            }

            if (state.cart != null) {

                localStorage.setItem("cart", JSON.stringify(state.cart));
                createToast({
                    title: 'Thành công',
                    description: 'Thêm sản phẩm vào giỏ hàng thành công',
                    type: 'success',
                    timeout: 1000,

                })
            }
        },
        onCount(state, ProId) {
            let indexs = state.cart.find(i => i.id === ProId);
            console.log(indexs);
            if (indexs) {
                indexs.quantity += 1;
            }
            console.log(indexs.quantity);
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        onCountMinus(state, proId) {
            let indexs = state.cart.find(({ id }) => id === proId);
            console.log(indexs);
            if (indexs) {
                indexs.quantity -= 1;
            }

            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        removeFromCart(state, itemId) {
            var indexs = state.cart.findIndex(({ id }) => id === itemId);
            console.log(indexs);
            if (confirm("Bạn có chắc chắn muốn xóa không?")) {
                state.cart.splice(indexs, 1);
                console.log(state.cart.splice(itemId, 1));
                const parsed = JSON.stringify(state.cart);
                localStorage.setItem('cart', parsed);
            }
        },
        onClear(state) {
            if (confirm("Bạn có chắc chắn muốn xóa không?")) {
                localStorage.removeItem(state.cart);
            }
        },

    },

    actions: {
        onCount({ commit }, proId) {
            commit('onCount', proId);
        },
        onCountMinus({ commit }, proId) {
            commit('onCountMinus', proId);
        },
        onCart({ commit }, itemId) {
            commit('onCart', itemId)
        },
        async fetchAll({ commit }) {
            const response = await fetch("https://620341d84d21c200170b9bff.mockapi.io/Product");
            const data = await response.json();
            commit('setProduct', data);
        },
        async fetchDetail({ commit }, { id }) {
            const response = await fetch("https://620341d84d21c200170b9bff.mockapi.io/Product?id=" + id);
            const data = await response.json();
            commit('setDetail', data);
        }

    },

    modules: {},
});
export default store;