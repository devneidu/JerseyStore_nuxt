<template>
    <div>
        <section class="bg-gray-100 py-5">
        <div class="container">
            <h3 class="b-6">Similar Products</h3>
            <div class="row mt-4">
                <div class="col-lg-3 col-md-6 col-6 mb-3" v-for="product in products" :key="product.id">
                    <div class="card border-0 shadow-sm store_card">
                        <img src="/crystal_palace_home_jersey.png" alt="" class="img-fluid">
                        <div class="card-body pb-1">
                            <nuxt-link :to="'/'+product.slug" class="card-link text-gray-800 "><h6 class="b-6 t-1">{{ product.title }}</h6></nuxt-link>
                            <div class="d-flex justify-content-between">
                                <p class="text-red-600 t-1 b-9 align-item-center">${{ product.price }}</p>
                                <p class="t-1 b-6" :class="'text-'+product.statusCode">{{ product.status }}</p>
                            </div>
                        </div>
                        <!-- <span class="py-1 px-2 t-1 bg-green-500 text-white br-0 po__btn">Add to cart</span> -->
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    </div>
</template>

<script>
export default {
    props: {
        products:{
            type: Array,
            required: true
        }
    }
}
</script>

<style>

</style>
