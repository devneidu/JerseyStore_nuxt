
export default function({$axios, store, app, redirect, error}) {
    
    $axios.onRequest(response => {
        store.dispatch('validation/clearErrors')
        
        if(store.getters['auth/authenticated']){
            $axios.setToken(store.$auth.$storage._state['_token.local'])
        }
    })

    $axios.onResponse(response => {
        return Promise.resolve(response)
    })

    $axios.onError(err => {
        if(typeof(err.response) == 'undefined') {
            error({ statusCode: 500, message: 'Could not fetch data from server' })
            toast('error', "No network available");
        }

        if(err.response.status == 422) {
            store.dispatch('validation/setErrors', err.response.data.errors)
            toast('error', 'Couldn\'t process form' );
        }

        if(err.response.status >= 500) {
            toast('error', "Server error");
        }

        return Promise.reject(err)
    })

    function toast(type, msg) {
        app.$toast.show(msg, {
            type: type,
        })
    }
}
