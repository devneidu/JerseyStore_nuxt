<template>
    <div class="col-lg-7 ml-lg-auto">
        <div class="card shadow-sm border-0 mb-3" v-for="(item, index) in cartInstance" :key="index">
            <div class="card-header justify-content-between d-flex">
                <span class="b-7 t-1">Quantity: {{item.quantity}}</span>
                <span class="b-7 t-1">Subtotal: ${{item.quantity * item.price | money}}</span>
            </div>
            <div class="row mt-3">
                <div class="col-lg-2 col-sm-2 col-3 mb-3">
                    <img src="/crystal_palace_home_jersey.png" alt="" class="img-fluid">
                </div>
                <div class="col-lg-9 col-8">
                    <div>
                        <h6 class="text-gray-700 t-2 b-8">{{item.title}}</h6>
                        <p class="text-red-700 b-7 t-1 mb-0">${{item.price}}</p>
                    </div>
                </div>
            </div>
        </div>
        <table class="table-bordered table">
            <tbody>
                <tr>
                    <th>Total</th>
                    <td class="text-right text-red-600 b-9">${{totalAmount}}</td>
                </tr>
            </tbody>
        </table>
        <button class="btn br-0 btn-danger b-6 btn-block mt-4">Cancel</button>
        <button class="btn br-0 btn-success b-6 btn-block mb-lg-0 mb-4 text-white" @click="pay">Pay</button>
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
        }),
        total_quantity() {
            let qty = this.cartInstance.reduce((zero, item) => {
                return zero + parseInt(item.quantity)
            }, 0)

            return qty
        },
        total_amount() {
            let amount = this.cartInstance.reduce((zero, item) => {
                return zero + parseInt(item.price)
            }, 0)

            return amount
        },
        cart_object() {
            let result = []
            let cart = this.cartInstance.reduce((array, item) => {
                let items = {
                    id: item.id,
                    price: item.price,
                    quantity: item.quantity,
                }
                result.push(items)

            }, [])

            return result;
        }
    },
    methods: {
        async pay() {
            let payload = {
                total_amount: this.total_amount,
                quantity: this.total_quantity,
                cart : this.cart_object
            }
            try {
                let {data} = await this.$axios.post('checkout', payload)
                this.paystack(this.total_amount, data.reference)

                alert(9)
            } catch (err) {
                
            }
        }
    }
}
</script>