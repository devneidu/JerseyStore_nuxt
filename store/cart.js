export const state = () => ({
    cart: []
})

export const getters = {
    cartInstance(state) {
        return state.cart
    },
    countCart(state) {
        return state.cart.length
    },
    cartTotalAmount(state) {
        let amount = state.cart.reduce((zero, item) => {
            return zero + parseFloat(item.price * item.quantity)
        }, 0)
        return amount;
    }
}

export const mutations = {
    NEW_ITEM(state, payload) {
        state.cart.push(payload)
    },
    ITEM_EXISTS(state, payload) {
        return state.cart.filter(item => {
            if(item.id == payload.id) {
                item.quantity = parseInt(item.quantity) + parseInt(payload.quantity)
            }
        })
    },
    UPDATE_CART(state, payload) {
        return state.cart.filter(item => {
            if(item.id == payload.id) {
                item.quantity = payload.quantity
            }
        })
    },
    REMOVE_ITEM(state, id) {
        state.cart = state.cart.filter(item => item.id !== id);
        return state.cart
    },
    CLEAR_CART(state, payload){
        state.cart = payload
    }
}

export const actions = {
    newCartItem({commit}, payload) {
        commit('NEW_ITEM', payload)
    },
    itemExists({commit}, payload) {
        commit('ITEM_EXISTS', payload)
    },
    updateCart({commit}, payload) {
        commit('UPDATE_CART', payload)
    },
    remove({commit}, id){
        commit('REMOVE_ITEM', id)
    },
    async cancel({commit}, reference){
        await this.$axios.post('order/cancel', {reference: reference})
        this.$router.push('/account/history')
    },
    async clearCart({commit}){
        await commit('CLEAR_CART', [])
        this.$router.push('/account/history')
    }
}