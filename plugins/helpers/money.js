import Vue from 'vue'

Vue.filter('money', (val) => {
    return val.toLocaleString(2, {minimumFractionDigits: 1, maximumFractionDigits: 2})
})
