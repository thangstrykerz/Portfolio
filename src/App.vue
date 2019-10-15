<template>
  <div id="app" :class="$style.mainContent">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <main-nav />
    <router-view />
    <footer :class="$style.footer">
    <div class="content has-text-centered">
      <p>
        &copy; 2019.
      </p>
    </div>
  </footer>
  </div>
</template>

<script>
  import MainNav from '@/components/Layout/MainNav'
  export default {
    components: {
      MainNav
    },
    data() {
      return{
      }
    },
  };
</script>

<style module>

.mainContent {
  min-height: 100vh;
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 168px; /* height of your footer */
}
.footer {
 position: absolute;
 bottom: 0;
 width: 100%;
}
</style>
<style lang="sass">
  @import "~bulma/bulma.sass"
</style>
