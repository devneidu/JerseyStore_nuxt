<template>
    <div class="row m-0">
        <div class="col-lg-9 mx-lg-auto">
            <div class="row">
                <div class="col-sm-6 mb-3">
                    <img src="/crystal_palace_home_jersey.png" alt="" class="img-fluid">
                </div>
                <div class="col-sm-6 d-flex justify-content-center flex-column">
                    <div class="pro__x3__o">
                    <h3 class="text-red-700 b-8 mb-3">{{product.title}}</h3>
                    <h2 class="my-4 text-gray-500 b-8">${{product.price}}</h2>
                    <p class="text-gray-600">{{ product.description}}</p>
                    <div class="mb-2">
                        <button class="btn p-1 px-2 br-0 bg-gray-300"  @click="quantity > 1 ? quantity-- : quantity = 1">-</button>
                        <span class="p-1 px-3">{{quantity}}</span>
                        <button class="btn p-1 px-2 br-0 bg-gray-300" @click="quantity < product.quantity ? quantity++ : product.quantity">+</button>
                    </div>
                    <button class="mt-4 btn btn-block bg-green-500 br-0 b-6 text-white" :disabled="isAdding" @click="addToCart"><span v-if="!isAdding">ADD TO CART</span><font-awesome-icon v-if="isAdding" icon="spinner" class="fa-spin" /></button>
                        <div v-if="authenticated" class="rate mt-4">
    <input type="radio" id="star5" name="rate" @change="rate(5)" />
    <label for="star5" title="5 stars">5 stars</label>
    <input type="radio" id="star4" name="rate" @change="rate(4)" />
    <label for="star4" title="4 stars">4 stars</label>
    <input type="radio" id="star3" name="rate" @change="rate(3)" />
    <label for="star3" title="3 stars">3 stars</label>
    <input type="radio" id="star2" name="rate" @change="rate(2)" />
    <label for="star2" title="2 stars">2 stars</label>
    <input type="radio" id="star1" name="rate" @change="rate(1)" />
    <label for="star1" title="1 star">1 star</label>
  </div>
                        <hr>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    props: {
        product: {
            required: true,
            type: Object
        }
    },
    data() {
        return {
            quantity: 1,
            isAdding: false,
            // star: ''
        }
    },
    computed: {
        ...mapGetters({
            'cartInstance': 'cart/cartInstance',
        }),
    },
    methods: {
        addToCart() {
            this.isAdding = true
            let cart = {
                quantity: this.quantity,
                id: this.product.uuid,
                price: this.product.price,
                title: this.product.title,
                image: this.product.image,
                stock: this.product.quantity
            }
            let exists = this.cartInstance.some(item => {
                return item.id === cart.id
            });
            setTimeout(() => {
                this.isAdding = false
                this.toaster('success', 'Item added to cart')

                if (!exists) {
                    // This will be a fresh add to cart
                    this.$store.dispatch('cart/newCartItem', cart)
                } else {
                    // This will iterate through the cart and add the quanitty
                    this.$store.dispatch('cart/itemExists', cart)
                }
            }, 1000);
        },
        async rate(val) {
            try {
                let {data} = await this.$axios.post('rate', {
                    id: this.product.uuid,
                    rating: val
                })
                this.toaster('success', data.msg)
            } catch (err) {
                
            }
        }
    },
    created() {
        
    }
}
</script>

<style>

</style>
