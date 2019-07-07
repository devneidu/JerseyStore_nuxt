<template>
    <div>
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
                <tr>
                    <td data-th="Product">
                        <div class="row">
                            <div class="col-md-2 col-5"><img src="/crystal_palace_home_jersey.png" alt="..." class="img-fluid"/></div>
                            <div class="col-md-8 col-7 d-flex flex-column justify-content-center">
                                <h6 class="b-6">Lorem ipsum dolor sit amet consectetur.</h6>
                                <div><button class="t-1 btn btn-danger br-0 btn-sm"><i class="fa fa-trash"></i> Remove</button>	</div>
                            </div>
                        </div>
                    </td>
                    <td data-th="Price">$1.99</td>
                    <td data-th="Quantity">
                        <input type="number" class="form-control text-center border-0 br-0" value="1">
                    </td>
                    <td data-th="Subtotal" class="text-center">1.99</td>
                </tr>
            </tbody>
        </table>
        <div class="card shadow-sm border-0 mb-3 visible-xs">
            <div class="card-header justify-content-between cart-top">
                <span class="b-7 t-1">Quantity: 3</span>
                <span class="b-7 t-1">Subtotal: $900.00</span>
            </div>
            <div class="row mt-3">
                <div class="col-lg-1 col-sm-2 col-3 mb-3">
                    <img src="/crystal_palace_home_jersey.png" alt="" class="img-fluid">
                </div>
                <div class="col-lg-9 col-8">
                    <div>
                        <h6 class="text-gray-700 t-2 b-8">Lorem ipsum dolor sit amet.</h6>
                        <p class="text-red-700 b-7 t-1 mb-0">$100</p>
                        <i class="fa fa-trash t-1 text-danger"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="card shadow-sm border-0 mb-3 visible-xs">
            <div class="card-header justify-content-between cart-top">
                <span class="b-7 t-1">Quantity: 3</span>
                <span class="b-7 t-1">Subtotal: $900.00</span>
            </div>
            <div class="row mt-3">
                <div class="col-lg-1 col-sm-2 col-3 mb-3">
                    <img src="/crystal_palace_home_jersey.png" alt="" class="img-fluid">
                </div>
                <div class="col-lg-9 col-8">
                    <div>
                        <h6 class="text-gray-700 t-2 b-8">Lorem ipsum dolor sit amet.</h6>
                        <p class="text-red-700 b-7 t-1 mb-0">$100</p>
                        <i class="fa fa-trash t-1 text-danger"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="card shadow-sm border-0 mb-3 visible-xs">
            <div class="card-header justify-content-between cart-top">
                <span class="b-7 t-1">Quantity: 3</span>
                <span class="b-7 t-1">Subtotal: $900.00</span>
            </div>
            <div class="row mt-3">
                <div class="col-lg-1 col-sm-2 col-3 mb-3">
                    <img src="/crystal_palace_home_jersey.png" alt="" class="img-fluid">
                </div>
                <div class="col-lg-9 col-8">
                    <div>
                        <h6 class="text-gray-700 t-2 b-8">Lorem ipsum dolor sit amet.</h6>
                        <p class="text-red-700 b-7 t-1 mb-0">$100</p>
                        <i class="fa fa-trash t-1 text-danger"></i>
                    </div>
                </div>
            </div>
        </div>
        <table class="table-bordered table">
            <tbody>
                <tr>
                    <th>Total</th>
                    <td class="text-right text-red-600 b-9">$89,900.00</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
