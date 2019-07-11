<template>
  <div>
    <div class="row m-0 pb-5">
            <div class="col-lg-3 col-md-4" id="cat_section">
                <div class="shadow-sm bg-gray-100 text-center b-7 text-dark py-1">
                    Categories
                </div>
                <div class="list-group my-3 border-0 list-group-flush t-1">
                    <a href="" class="text-gray-500 list-group-item-action list-group-item text-red-500">Cras justo odio</a>
                    <a href="" class="text-gray-500 list-group-item-action list-group-item">Dapibus ac facilisis in</a>
                    <a href="" class="text-gray-500 list-group-item-action list-group-item">Morbi leo risus</a>
                    <a href="" class="text-gray-500 list-group-item-action list-group-item">Porta ac consectetur ac</a>
                </div>
            </div>
            <div class="col-lg-9 col-md-8 pl-lg-4">
                <jersey-items :list="products"></jersey-items>
                <no-ssr>
                    <infinite-loading spinner="bubbles" @infinite="infiniteHandler">
                        <div slot="no-results"></div>
                    </infinite-loading>

                </no-ssr>
            </div>
        </div>
  </div>
</template>

<script>
import JerseyItems from '@/components/JerseyItems'
import { mapGetters, mapState, mapActions } from 'vuex'
import InfiniteLoading from 'vue-infinite-loading';
export default {
    components: {
        JerseyItems,
        InfiniteLoading,
    },
    async fetch({$axios, store, error}) {
        try{
            await store.dispatch('products/fetchProducts')
        } catch (err) {
            error({statusCode: 500, message: 'Could not fetch data from server!!'})
        }
    },
    computed: {
        ...mapGetters({
            products: 'products/products'
        })
    },
    data() {
        return {
            list: [],
        }
    },
    methods: {
        infiniteHandler($state) {
            this.$axios.get('/products', {
                params: {
                    page: this.list.length / 10 + 1,
                },
            }).then(({ data }) => {
               setTimeout(() => {
                    if (this.products.length < data.data.total) {
                        this.list = this.list.concat(data.data.data);
                        this.$store.dispatch('products/queryProducts', this.list)
                        $state.loaded();
                        if (this.products.length > data.data.total) {
                            $state.complete();
                        }
                    } else {
                        $state.complete();
                    }
               }, 2000);
            });
        },
    }
}
</script>

<style>

</style>
