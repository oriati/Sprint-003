<template>
  <section>

    <h1>HOME</h1>
    <main-nav></main-nav>


  </section>
</template>

<script>
import MainNav from '../components/main-nav.vue';
export default {
  name: 'name',
  data () {
    return {
      
    }
  },
  mounted() {
      bus.$emit('toggleNav', false);
  },
  components: {
    MainNav
  }
}
</script>

<style>
</style>
