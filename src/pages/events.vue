<template>
  <section>

    <h1>EVENTS</h1>

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
      bus.$emit('toggleNav', true);
  }
}
</script>

<style>
</style>
