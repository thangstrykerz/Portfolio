<template>
	<div>
        <div v-if="!loading">
            <section class="hero is-medium is-primary is-bold">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title is-2">
                            {{ product ? product.description : null }}
                        </h1>
                    </div>
                </div>
            </section>
            <section class="section">
                <h2 class="title is-3 has-text-weight-medium has-text-centered">
                    {{ product ? product.title : null }}
                </h2>
                <div class="container">
                    <div class="columns">
                        <div class="column">
                            <div class="box">
                                <h3 class="title is-2 has-text-weight-medium">
                                    RAM
                                </h3>
                                <p>
                                    {{ product ? product.ram : null }}
                                </p>
                            </div>
                        </div>
                        <div class="column">
                            <div class="box">
                                <h3 class="title is-2 has-text-weight-medium">
                                    CPU
                                </h3>
                                <p>
                                    {{ product ? product.cpu : null }}
                                </p>
                            </div>
                        </div>
                        <div class="column">
                            <div class="box">
                                <h3 class="title is-2 has-text-weight-medium">
                                    Storate
                                </h3>
                                <p>
                                    {{ product ? product.storage : null }}
                                </p>
                            </div>
                        </div>
                        <div class="column">
                            <div class="box">
                                <h3 class="title is-2 has-text-weight-medium">
                                    Network
                                </h3>
                                <p>
                                    {{ product ? product.networkOut : null }}
                                </p>
                            </div>
                        </div>
                        <div class="column">
                            <div class="box">
                                <h3 class="title is-2 has-text-weight-medium">
                                    Price
                                </h3>
                                <p>
                                    {{ product ? product.priceText : null }}
                                </p>
                            </div>
                        </div>			
                    </div>
                </div>
            </section>
        </div>    
		<div v-if="loading" class="fas fa-spinner fa-pulse"></div>
        <div v-if="error" class="box is-warning">{{ error.message.message || error.message }}</div>
	</div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
   computed: {
        ...mapState({
            product: state => state.item,
            loading: state => state.loading,
            error: state => state.error
        })
    },
    methods: {
        ...mapActions(['getItem'])
    },
    mounted() {
        let slug = this.$route.params.slug
        this.getItem('/Hosting?filterByFormula={slug}="' + slug + '"')
    }
}
</script>