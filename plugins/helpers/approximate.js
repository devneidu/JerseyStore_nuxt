import Vue from 'vue'

Vue.filter('approximate', (val) => val.toFixed(2))

