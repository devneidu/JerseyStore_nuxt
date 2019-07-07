<template>
    <form>
        <div class="form-group" v-if="$route.path == '/register'">
            <input type="text" class="form-control br-0 t-14" placeholder="Your Name" autocomplete="nope">
        </div>
        <div class="form-group">
            <input type="email" class="form-control br-0 t-14" placeholder="Your Email" autocomplete="nope">
        </div>
        <div class="form-group" v-if="$route.path == '/register'">
            <input type="text" class="form-control br-0 t-14" placeholder="Your Address" autocomplete="nope">
        </div>
        <div class="form-group" v-if="$route.path == '/register'">
            <input type="text" class="form-control br-0 t-14" placeholder="Phone Number" autocomplete="nope">
        </div>
        <div class="form-group">
            <input type="password" class="form-control br-0 t-14" placeholder="Your Password" autocomplete="nope">
        </div>
        <div class="form-group">
            <input type="submit" value="Login" class="btn btn-large bg-red-400 text-white hover-bg-red btn-block text-center br-0">
        </div>
        <hr>
        <div class="text-center">
            <p><strong>OR</strong></p>
            <p  v-if="$route.path == '/login'"><nuxt-link to="/register" class="text-gray-500 nav-link">Don't have an account?</nuxt-link></p>
            <p  v-if="$route.path == '/register'"><nuxt-link to="/login" class="text-gray-500 nav-link">Already have an account?</nuxt-link></p>
        </div>
    </form>
</template>

<script>
export default {

}
</script>

<style>

</style>
