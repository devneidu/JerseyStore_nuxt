<template>
    <div>
        <div class="row">
            <div class="col-md-6 mx-auto mt-5 py-5">
                <div id="paystackEmbedContainer"></div>
                <button class="btn btn-dark" @click="pay">Pay Now</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        pay() {
            var handler = PaystackPop.setup({ 
            key: process.env.PAYSTACK_PUBLIC, //put your public key here
            email: 'customer@email.com', //put your customer's email here
            amount: 370000, //amount the customer is supposed to pay
            metadata: {
                custom_fields: [
                    {
                        display_name: "Mobile Number",
                        variable_name: "mobile_number",
                        value: "+2348012345678" //customer's mobile number
                    }
                ]
            },
            callback: function (response) {
                //after the transaction have been completed
                //make post call  to the server with to verify payment 
                //using transaction reference as post data
                
                console.log(response);
                // $.post("verify.php", {reference:response.reference}, function(status){
                //     if(status == "success")
                //         //successful transaction
                //         alert('Transaction was successful');
                //     else
                //         //transaction failed
                //         alert(response);
                // });
            },
            onClose: function () {
                //when the user close the payment modal
                alert('Transaction cancelled');
            }
        });
        handler.openIframe(); //open the paystack's payment modal
        }
    }
}
</script>

<style>

</style>
