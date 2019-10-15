<template>
    <div class="post-card">
        <div class="card">
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4 has-text-centered">{{ title }}</p>
                    </div>
                </div>
                <div class="content">
                    <p class="has-text-centered"><span class="tag">RAM:</span> {{ ram }}</p>
                    <p class="has-text-centered"><span class="tag">CPU:</span> {{ cpu }}</p>
                    <p class="has-text-centered"><span class="tag">Storage:</span> {{ storage }}</p>
                    <p class="has-text-centered"><span class="tag">Network:</span> {{ networkOut }}</p>
                    <p class="has-text-centered is-2"><span class="tag">Price:</span> {{ priceText }}</p>
                    <router-link :to="'/product/'+slug" class="button is-fullwidth is-info">View Product</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: String,
        slug: String,
        ram: String,
        storage: String,
        transfer: String,
        cpu: String,
        networkOut: String,
        priceText: String
    }
    
}
</script>