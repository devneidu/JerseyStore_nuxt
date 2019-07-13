<template>
    <div>
        <div class="row m-0 mb-5">
            <div class="col-12">
                <h2 class="b-7">YOUR CART</h2>
                <div v-if="countCart == 0" class="text-center my-lg-5  ">
                    <img src="/cart-empty.png" alt="empty cart image" class="img-fluid">
                    <p class="py-4">Unfortunately, your cart is empty. You can start shopping right away :)</p>
                </div>
                <cart-items v-else></cart-items>
                <div class="row" v-if="countCart == 0">
                    <div class="col-lg-3 col-md-4 col-sm-5 mx-auto">
                        <nuxt-link to="/" class="btn br-0 bg-gray-300  b-6 btn-block text-dark">Start Shopping</nuxt-link>
                    </div>
                </div>
                <div class="row" v-else>
                    <div class="col-lg-6 col-md-4 col-sm-2"></div>
                    <div class="col-lg-3 col-md-4 col-sm-5">
                        <nuxt-link to="/" class="btn br-0 bg-gray-300  b-6 btn-block text-dark">Continue Shopping</nuxt-link>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-5 mt-sm-0 mt-3">
                        <button class="btn br-0 bg-green-500 b-6 btn-block text-white" @click="checkout">Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- <similar-products></similar-products> -->
    </div>
</template>

<script>
import CartItems from '@/components/CartItems'
import SimilarProducts from '@/components/Similar'
import { mapGetters } from "vuex";
export default {
    components: {
        CartItems,
        SimilarProducts
    },
    computed: {
        ...mapGetters({
        countCart: 'cart/countCart'
        })
    },
    methods: {
        checkout() {
            this.$nuxt.$loading.start()
            setTimeout(() => {
                this.$nuxt.$loading.finish()
                this.$router.push('/checkout')
            }, 2000)
        }
    }
}
</script>

<style>

</style>
