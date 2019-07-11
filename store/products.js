export const state = () => ({
    products : [],
    showProduct: null,
})

export const getters = {
    products(state) {
        return state.products
    },
    showProduct(state) {
        return state.showProduct
    }
}

export const mutations = {
    POPULATE_PRODUCTS(state, payload) {
        state.products = payload.data
    },
    CONCATENATE_PRODUCTS(state, payload) {
        state.products = payload
    },
    SHOW_PRODUCT(state, payload) {
        state.showProduct = payload
    },
}

export const actions = {
    async fetchProducts({commit}) {
        let { data } = await this.$axios.get('/products')
        commit('POPULATE_PRODUCTS', data.data)
    },
    async queryProducts({commit}, list) {
        commit('CONCATENATE_PRODUCTS', list)
    },
    async showProduct({commit}, slug){
        let { data } = await this.$axios.get('/products/' + slug)
        commit('SHOW_PRODUCT', data.data)
    }
}