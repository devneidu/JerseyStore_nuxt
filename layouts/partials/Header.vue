<template>
    <header class="justify-content-between flex-row bg-white">
        <div class="store_logo">
            <nuxt-link to="/"><img src="/logo_black.png" alt="Jersey store logo" class="i" height="100" width="100"></nuxt-link>
        </div>
        <div class="store_link d-flex flex-row">
            <ul class="d-flex">
                <li><nuxt-link class="store-link" to="/">Home</nuxt-link></li>
                <li v-if="!authenticated"><nuxt-link class="store-link" to="/login">Login</nuxt-link></li>
                <li v-if="!authenticated"><nuxt-link class="store-link" to="/register">Register</nuxt-link></li>
                <li v-if="authenticated"><nuxt-link class="store-link" to="/account/details">Account</nuxt-link></li>
                <li v-if="authenticated"><nuxt-link class="store-link" to="/account/history">History</nuxt-link></li>
                <li v-if="authenticated"><nuxt-link class="store-link" to="/logout">Logout</nuxt-link></li>
            </ul>
            <ul>
                <li><nuxt-link to="/cart" class="store-link text-red-500 m-0"><i class="fa fa-shopping-cart text-green-800"></i> <span class="t-1">({{ countCart }})</span></nuxt-link></li>
            </ul>
        </div>
    </header>
</template>

<script>
export default {
    props: {
        countCart: {
            required: true
        }
    },
}
</script>

<style>

</style>
