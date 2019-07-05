<template>
    <div>
        <p class="t-13 bg-gray-100 text-center b-7 shadow-inner p-2">LOGIN TO YOUR ACCOUNT</p>
        <form>
            <div class="form-group">
                <input type="email" class="form-control br-0 t-14" placeholder="Your Email" autocomplete="nope">
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
                <p><span class="text-gray-500 nav-link">Don't have an account?</span></p>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    layout: 'auth'

}
</script>

<style>

</style>
