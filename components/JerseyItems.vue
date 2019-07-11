<template>
<div>
    <!-- <div v-if="!list">Loading</div> -->
    
    <div class="row">
        <div class="col-xl-3 col-lg-4 col-md-6 col-6 mb-3" v-for="(product, key) in list" :key="key">
            <div class="card border-0 shadow store_card">
                <img src="/crystal_palace_home_jersey.png" alt="" class="img-fluid">
                <div class="card-body pb-1">
                    <nuxt-link :to="product.slug" class="card-link text-gray-800 "><h6 class="b-6">{{ product.title }}</h6></nuxt-link>
                    <div class="d-flex justify-content-between">
                        <p class="text-red-600 t-2 b-9 align-item-center">${{product.price}}</p>
                        <p class="t-2 b-6" :class="'text-'+product.statusCode">{{product.status}}</p>
                    </div>
                </div>
                <!-- <span class="btn t-1 bg-green-500 text-white br-0 po__btn hover-bg-green">Add to cart</span> -->
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        list: {
            required: true
        }
    },
}
</script>
