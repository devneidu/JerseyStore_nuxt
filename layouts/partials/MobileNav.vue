<template>
    <div id="sidebar" :class="[toggleSideBar ? 'sidebar-slide' : '']">
        <div class="side__Bar__logo text-center">
            <img src="/logo_white.png" alt="Jersey store logo" class="pt-4" width="160">
        </div>
        <div class="side__bar__menu pt-4">
            <ul class="d-flex flex-column">
                <li  @click="home" class="mobile_link"><span class="text-gray-700 b-6"><i class="fa fa-home"></i>Home</span></li>
                <li @click="cart" class="mobile_link"><span class="text-gray-700 b-6"><i class="fa fa-shopping-cart"></i>Shopping Cart <span class="float-right badge badge-dark t-nu/span">20</span></span></li>
                <li @click="login" class="mobile_link"><span class="text-gray-700 b-6"><i class="fa fa-user"></i>Login</span></li>
                <li @click="register" class="mobile_link"><span class="text-gray-700 b-6"><i class="fa fa-user"></i>Register</span></li>
                <li @click="details" class="mobile_link"><span class="text-gray-700 b-6"><i class="fa fa-user"></i>My Account</span></li>
                <li @click="history" class="mobile_link"><span class="text-gray-700 b-6"><i class="fa fa-history"></i>Order History</span></li>
                <li @click="logout" class="mobile_link"><span class="text-gray-700 b-6"><i class="fa fa-sign-out-alt"></i>Logout</span></li>
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
    },
    methods: {
        home(){
            this.$parent.$emit('toggleSidebar')
            this.$router.push('/')
        },
        login(){
            this.$parent.$emit('toggleSidebar')
            this.$router.push('/login')
        },
        register(){
            this.$parent.$emit('toggleSidebar')
            this.$router.push('/register')
        },
        details(){
            this.$parent.$emit('toggleSidebar')
            this.$router.push('/account/details')
        },
        history(){
            this.$parent.$emit('toggleSidebar')
            this.$router.push('/account/history')
        },
        logout(){
            this.$parent.$emit('toggleSidebar')
            this.$auth.logout()
            this.toaster('success', 'Successfully logged out')
        },
        cart(){
            this.$parent.$emit('toggleSidebar')
            this.$router.push('/cart')
        },
    }
}
</script>

<style>

</style>
