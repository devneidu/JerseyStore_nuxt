export const state = () => ({
    products : [],

})

export const getters = {
    products(state) {
        return state.products
    }
}

export const mutations = {
    populateProducts(state, payload) {
        state.products = payload.data
    },
    concatenateProducts(state, payload) {
        state.products = payload
    }
}

export const actions = {
    async fetchProducts({commit}) {
        let { data } = await this.$axios.get('/products')
        commit('populateProducts', data.data)
    },
    async queryProducts({rootState, commit}, list) {
        commit('concatenateProducts', list)
    }
}