<template>
    <div id="sidebar" :class="[toggleSideBar ? 'sidebar-slide' : '']">
        <div class="side__Bar__logo text-center">
            <img src="/logo_white.png" alt="Jersey store logo" class="pt-4" width="160">
        </div>
        <div class="side__bar__menu pt-4">
            <ul class="d-flex flex-column">
                <li class="mobile_link"><nuxt-link to="" class="text-gray-700 b-6"><i class="fa fa-home"></i>Home</nuxt-link></li>
                <li class="mobile_link"><nuxt-link to="" class="text-gray-700 b-6"><i class="fa fa-shopping-cart"></i>Shopping Cart <span class="float-right badge badge-dark t-nu/nuxt-link">20</span></nuxt-link></li>
                <li class="mobile_link"><nuxt-link to="login" class="text-gray-700 b-6"><i class="fa fa-user"></i>Login</nuxt-link></li>
                <li class="mobile_link"><nuxt-link to="register" class="text-gray-700 b-6"><i class="fa fa-user"></i>Register</nuxt-link></li>
                <li class="mobile_link"><nuxt-link to="" class="text-gray-700 b-6"><i class="fa fa-user"></i>My Account</nuxt-link></li>
                <li class="mobile_link"><nuxt-link to="" class="text-gray-700 b-6"><i class="fa fa-history"></i>Order History</nuxt-link></li>
                <li class="mobile_link"><nuxt-link to="" class="text-gray-700 b-6"><i class="fa fa-sign-out-alt"></i>Logout</nuxt-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        toggleSideBar: {
            required: true,
            type: Boolean
        }
    }
}
</script>

<style>

</style>
