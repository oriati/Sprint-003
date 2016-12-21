<template>
  <section>

    <h1>HOME</h1>

  </section>
</template>

<script>
export default {
  name: 'name',
  data () {
    return {
      
    }
  },
  mounted() {
      console.log('Im here');
      bus.$emit('hideNav');
  }
}
</script>

<style>
</style>
