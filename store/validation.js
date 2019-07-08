export const state = () => ({
    errors  : {},
})

export const getters = {
    errors(state) {
        return state.errors
    }
}

export const mutations = {
    SET_ERRORS(state, payload) {
        state.errors = payload
    }
}

export const actions = {
    setErrors({commit}, payload) {
        commit('SET_ERRORS', payload);
    },
    clearErrors({commit}) {
        commit('SET_ERRORS', {});
    }
}