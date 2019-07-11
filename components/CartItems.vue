<template>
    <div class="my-lg-5 my-3">
        <table id="cart" class="table table-hover table-responsive hidden-xs">
            <thead>
                <tr>
                    <th style="width:50%">Product</th>
                    <th style="width:10%">Price</th>
                    <th style="width:8%">Quantity</th>
                    <th style="width:22%" class="text-center">Subtotal</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in cartInstance" :key="item.id">
                    <td data-th="Product">
                        <div class="row">
                            <div class="col-md-2 col-5"><img src="/crystal_palace_home_jersey.png" :alt="item.title +' image'" class="img-fluid"/></div>
                            <div class="col-md-8 col-7 d-flex flex-column justify-content-center">
                                <h6 class="b-6">{{ item.title }}</h6>
                                <div><button class="t-1 btn btn-danger br-0 btn-sm" @click="remove(item.id, index)"><i v-if="activeDelete == index ? isRemoving : !isRemoving" class="fa fa-trash"></i><i v-else class="fa fa-spinner fa-spin"></i> Remove</button>	</div>
                            </div>
                        </div>
                    </td>
                    <td data-th="Price">${{item.price}}</td>
                    <td data-th="Quantity">
                        <input type="number" min="1" :max="item.stock" class="form-control text-center border-0 br-0" :value="item.quantity" @keyup="check({$event},item.id, item.stock)" @change="updateQuantity({$event},item.id)">
                    </td>
                    <td data-th="Subtotal" class="text-center">${{ item.quantity * item.price | money }}</td>
                </tr>
            </tbody>
        </table>
        <div class="card shadow-sm border-0 mb-3 visible-xs" v-for="item in cartInstance" :key="item.id">
            <div class="card-header justify-content-between cart-top">
                <span class="b-7 t-1">Quantity: {{ item.quantity }}</span>
                <span class="b-7 t-1">Subtotal: ${{(item.quantity * item.price) | approximate}}</span>
            </div>
            <div class="row mt-3">
                <div class="col-lg-1 col-sm-2 col-3 mb-3">
                    <img src="/crystal_palace_home_jersey.png" alt="" class="img-fluid">
                </div>
                <div class="col-lg-9 col-8">
                    <div>
                        <h6 class="text-gray-700 t-2 b-8">{{ item.title }}</h6>
                        <p class="text-red-700 b-7 t-1 mb-0">${{item.price}}</p>
                        <i class="fa fa-trash t-1 text-danger"></i>
                    </div>
                </div>
            </div>
        </div>
        <table class="table-bordered table">
            <tbody>
                <tr>
                    <th>Total</th>
                    <td class="text-right text-red-600 b-9">${{ totalAmount | money}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            isRemoving: false,
            activeDelete: null
        }
    },
    computed: {
        ...mapGetters({
            cartInstance: 'cart/cartInstance',
            totalAmount: 'cart/cartTotalAmount'
        })
    },
    methods: {
        remove(id, index) {

            this.activeDelete = index
            setTimeout(() => {
                this.$store.dispatch('cart/remove', id)
                this.activeDelete = null
            }, 1000);
        },
        updateQuantity({$event}, id) {
            let quantity = $event.target.value
            let cart  = {
                id: id,
                quantity: quantity
            }
            this.$store.dispatch('cart/updateCart', cart)
        },
        check(event, id, stock) {
            let {$event} = event
            if($event.target.value > stock){
                $event.target.value = stock
            } else if ($event.target.value == '' || $event.target.value == 0) {
                $event.target.value = 1
            }
            this.updateQuantity(event, id)
        }
    }
}
</script>
