
export default function({$axios, store, app}) {
    
    $axios.onRequest(response => {
        store.dispatch('validation/clearErrors')
        
    })

    $axios.onResponse(response => {
        console.log("object");
        return Promise.resolve(response)
    })

    $axios.onError(err => {
        if(typeof(err.response) == 'undefined') {
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
