<template>
    <div>
        <product></product>
        <similar-products></similar-products>
    </div>
</template>

<script>
import SimilarProducts from '@/components/Similar'
import Product from '@/components/Product'
export default {
    components: {
        SimilarProducts,
        Product
    }
}
</script>

<style>

</style>
