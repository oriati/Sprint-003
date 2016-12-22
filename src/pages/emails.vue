<template>
  <section>

    <h1>EMAILS</h1>
    <div>
      <email-center></email-center>
    </div>

  </section>
</template>

<script>
import emailCenter from '../emails/email-center.vue'
export default {
  name: 'name',
  data () {
    return {
      
    }
  },
  components: {
    emailCenter
    },
  mounted() {
      bus.$emit('toggleNav', true);
  }
}
</script>

<style>
</style>
