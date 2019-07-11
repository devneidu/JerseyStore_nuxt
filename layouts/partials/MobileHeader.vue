<template>
    <nav class="justify-content-between flex-row bg-red-500 b-red-700">
        <span class="hamburger" @click="toggleNav"><i class="fa fa-bars t-4 text-white t-8"></i></span>
        <span class=" text-white">
            <i class="fa fa-shopping-cart"></i>
            <span class="t-1">({{ countCart }})</span>
        </span>
    </nav>
</template>

<script>
export default {
    props: {
        countCart: {
            required: true
        },
    },
    methods: {
        toggleNav() {
            this.$parent.$emit('toggleSidebar')
        }
    }
}
</script>

