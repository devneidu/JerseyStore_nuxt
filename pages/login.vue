<template>
    <div>
        <p class="t-13 bg-gray-100 text-center b-7 shadow-inner p-2">LOGIN TO YOUR ACCOUNT</p>
        <auth-form></auth-form>
    </div>
</template>

<script>
import AuthForm from '@/components/AuthForm'
export default {
    middleware: 'Guest',
    layout: 'auth',
    components: {
        AuthForm
    },
    async fetch({store, app}) {
        
    },
}
</script>

<style>

</style>
