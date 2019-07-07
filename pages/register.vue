<template>
    <div>
        <p class="t-13 bg-gray-100 text-center b-7 shadow-inner p-2">CREATE AN ACCOUNT</p>
        <auth-form></auth-form>
    </div>
</template>

<script>
import AuthForm from '@/components/AuthForm'
export default {
    layout: 'auth',
    components: {
        AuthForm
    },
}
</script>

<style>

</style>
