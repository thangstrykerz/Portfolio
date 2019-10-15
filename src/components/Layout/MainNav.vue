<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          
        </router-link>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" :class="{ 'is-active': showNav }" @click="showNav = !showNav">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-start">

        </div>

        <div class="navbar-end">
          <router-link :to="{name: 'home'}" class="navbar-item">
            Home
          </router-link>
          <router-link :to="{name: 'about'}" class="navbar-item">
           About
          </router-link>
          <router-link :to="{name: 'products'}" class="navbar-item">
           Products
          </router-link>
          <router-link :to="{name: 'contact'}" class="navbar-item">
           Contact
          </router-link>
       </div>
     </div>
   </nav>
</template>
<script>
export default {
    data() {
      return{
        showNav: false
      }
    },
}
</script>