<template>
  <section>
    <div class="email-container">
    <header><h1>my Mail</h1></header>
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
    }
}
</script>

<style scoped>
.email-container {
  background: rgba(224, 217, 207, 0.51);
}
</style>
