export const state = () => ({
    strategies: 'local',
    loggedIn: false,
    busy: false,
    user: false
})

export const getters = {
    user(state) {
        return state.user.data
    },
    authenticated(state) {
        return state.loggedIn
    }
}