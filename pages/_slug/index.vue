<template>
    <div>
        <product :product="product"></product>
        <similar-products :products="product.similar"></similar-products>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import SimilarProducts from '@/components/Similar'
import Product from '@/components/Product'

export default {
    components: {
        SimilarProducts,
        Product
    },
    async fetch({params, store, error}) {
        // Call an action on the store
        try {
            await store.dispatch('products/showProduct', params.slug)
        } catch (err) {
            error({statusCode: 500, message: 'Could not fetch data from server'})
        }
    },
    computed: {
        ...mapGetters({
            'product': 'products/showProduct'
        })
    },
    created() {
        
    }
    
}
</script>

<style>

</style>
