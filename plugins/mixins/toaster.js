import Vue from 'vue'

const toaster = { 
    install(Vue, options){
        Vue.mixin({
            methods: {
                toaster(type, msg){
                    this.$toast.show(msg, {
                        type: type
                    })
                }
            }
        })
    }
}

Vue.use(toaster)