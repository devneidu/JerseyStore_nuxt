import Vue from 'vue'

import { mapActions, mapGetters } from "vuex";
import axios from "@nuxtjs/axios";
const paystack = {
    install(Vue, options){
        Vue.mixin({
            computed: {
                ...mapGetters({
                    user: 'auth/user'
                })
            },
            methods: {
                paystack(amount, reference) {
                    this.axios.get('/test')
                    // var handler = PaystackPop.setup({ 
                    //     key: process.env.PAYSTACK_PUBLIC, //put your public key here
                    //     email: this.user.email, //put your customer's email here
                    //     amount: amount * 360 * 100, //amount the customer is supposed to pay
                    //     ref: reference,
                    //     metadata: {
                    //         custom_fields: [
                    //             {
                    //                 display_name: this.user.name,
                    //                 value: this.user.phone //customer's mobile number
                    //             }
                    //         ]
                    //     },
                    //     callback: function (response) {
                    //         //after the transaction have been completed
                    //         //make post call  to the server with to verify payment 
                    //         //using transaction reference as post data

                    //         try{
                    //             axios.post('/verify', {reference: response.reference})
                    //             .then((result) => {
                    //                 // if(result.success) {
                    //                 //     alert("Transaction Success")
                    //                 // }
                    //                 console.log(result);
                    //             }).catch((err) => {
                    //                 console.log(err.response)
                    //             });
                    //         } catch(err) {
                    //             console.log(err);
                    //         }
                    //     },
                    //     onClose: function () {
                    //         //when the user close the payment modal
                    //         alert('Transaction cancelled');
                    //     }
                    // });
                    // handler.openIframe(); //open the paystack's payment modal
                }
            }
        })
    }
}

Vue.use(paystack)