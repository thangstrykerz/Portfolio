<template>
    <div>
        <section class="hero is-medium is-primary is-bold">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title is-2">
                        Our Prodducts
                    </h1>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container is-fluid">
                <div v-if="!loading" class="columns is-multiline">
                    <div class="column is-one-third" v-bind:key="product.id" v-for="product in products">
                        <product-card v-bind="product.fields"></product-card>
                    </div>
                </div>
                <div v-if="loading" class="fas fa-spinner fa-pulse"></div>
                <div v-if="error" class="is-warning">{{ error.message.message }}</div>
            </div>
        </section>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import ProductCard from '@/components/ProductCard'
export default {
    components: {
        ProductCard
    },
    computed: {
        ...mapState({
            products: state => state.items,
            loading: state => state.loading,
            error: state => state.error
        })
    },
    methods: {
        ...mapActions(['getItems'])
    },
    mounted() {
        this.getItems('/Hosting')
    }
}
</script>