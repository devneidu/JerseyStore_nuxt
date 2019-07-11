<template>
  <div>
    <MobileNav :countCart="countCart" :toggleSideBar="isSideBarToggled"></MobileNav>
    <MobileHeader :countCart="countCart"></MobileHeader>
    <AppHeader :countCart="countCart"></AppHeader>
    <main @click="action">
      <nuxt/>
    </main>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppFooter from './partials/Footer'
import AppHeader from './partials/Header'
import MobileNav from './partials/MobileNav'
import MobileHeader from './partials/MobileHeader'
import { mapGetters } from "vuex";
export default {
  components: {
    AppFooter,
    AppHeader,
    MobileNav,
    MobileHeader
  },
  data(){
    return {
      isSideBarToggled: false
    }
  },
  created() {
    this.$on('toggleSidebar', () => {
      this.isSideBarToggled = !this.isSideBarToggled
    })
  },
  methods: {
    action() {
      if(this.isSideBarToggled == true) {
        this.isSideBarToggled = false
      }
    }
  },
  computed: {
    ...mapGetters({
      countCart: 'cart/countCart'
    })
  }
}
</script>

<style>

</style>
