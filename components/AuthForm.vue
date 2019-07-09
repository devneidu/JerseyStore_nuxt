<template>
    <form @submit.prevent="[$route.path == '/login' ? login() : register()]">
        <div class="form-group" v-if="$route.path == '/register'">
            <input type="text" class="form-control br-0 t-14" :class="{'is-invalid': errors.name}" placeholder="Your Name"  autocomplete="nope" v-model="form.name">
            <span v-if="errors.name" class="invalid-feedback">{{errors.name[0] }}</span>
        </div>
        <div class="form-group">
            <input type="email" class="form-control br-0 t-14" :class="{'is-invalid': errors.email}" placeholder="Your Email" v-model="form.email">
            <span v-if="errors.email" class="invalid-feedback">{{errors.email[0] }}</span>
        </div>
        <div class="form-group" v-if="$route.path == '/register'">
            <input type="text" class="form-control br-0 t-14" :class="{'is-invalid': errors.address}" placeholder="Your Address" autocomplete="nope" v-model="form.address">
            <span v-if="errors.address" class="invalid-feedback">{{errors.address[0] }}</span>
        </div>
        <div class="form-group" v-if="$route.path == '/register'">
            <input type="text" class="form-control br-0 t-14" :class="{'is-invalid': errors.phone}" placeholder="Phone Number" autocomplete="nope" v-model="form.phone">
            <span v-if="errors.phone" class="invalid-feedback">{{errors.phone[0] }}</span>
        </div>
        <div class="form-group">
            <input type="password" class="form-control br-0 t-14" :class="{'is-invalid': errors.password}" placeholder="Your Password" autocomplete="nope" v-model="form.password">
            <span v-if="errors.password" class="invalid-feedback">{{errors.password[0] }}</span>
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-large bg-red-400 text-white hover-bg-red btn-block text-center br-0"><span v-if="!isSubmit">{{$route.path == '/login' ? 'Login' : 'Register'}}</span><font-awesome-icon v-if="isSubmit" icon="spinner" class="fa-spin" /></button>
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
    data() {
        return {
            form: {
                name: '',
                email: '',
                address: '',
                phone: '',
                password: ''
            },
            isSubmit: false
        }
    },
    methods: {
        async login() {
            this.isSubmit = true
            
            try {
                await this.$auth.login({data: this.form})
                setTimeout(() => {
                    this.$router.push('/') //Redirect
                }, 1000);
            } catch (error) {
                this.isSubmit = false
            }
            
        },
        async register() {
            this.isSubmit = true
            try {
                await this.$axios.post('/register', this.form)
               this.toaster('success', 'Registration successfull')

               this.$auth.login({data: this.form})

               setTimeout(() => {
                   this.$router.push('/') //Redirect
               }, 2000);

            } catch (error) {
                this.isSubmit = false
            }
        },
    },
    
}
</script>

<style>

</style>
