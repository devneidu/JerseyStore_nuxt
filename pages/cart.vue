<template>
    <div>
        <div class="row m-0 mb-5">
            <div class="col-12">
                <h2 class="mb-5 b-7">YOUR CART</h2>
                <cart-items></cart-items>
                <div class="row">
                    <div class="col-lg-6 col-md-4 col-sm-2"></div>
                    <div class="col-lg-3 col-md-4 col-sm-5">
                        <button class="btn br-0 bg-gray-300  b-6 btn-block text-dark">Continue Shopping</button>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-5 mt-sm-0 mt-3">
                        <button class="btn br-0 bg-green-500 b-6 btn-block text-white">Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </div>
        <similar-products></similar-products>
    </div>
</template>

<script>
import CartItems from '@/components/CartItems'
import SimilarProducts from '@/components/Similar'
export default {
    components: {
        CartItems,
        SimilarProducts
    }
}
</script>

<style>

</style>
