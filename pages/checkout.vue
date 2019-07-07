<template>
    <div class="row m-0">
        <div class="col-12">
            <h2 class="mb-5 b-7">CHECKOUT</h2>
            <div class="row">
                <account-details></account-details>
                <checkout-product></checkout-product>
            </div>
            
        </div>
    </div>
</template>

<script>
import AccountDetails from '@/components/AccountDetails'
import CheckoutProduct from '@/components/CheckoutProduct'
export default {
    components: {
        AccountDetails,
        CheckoutProduct
    }
}
</script>

<style>

</style>
