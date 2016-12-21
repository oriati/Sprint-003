<template>
  <section class="email__details">
    <h1>{{email.subject}}</h1>
    <div class="email__body"> 
        {{email.body}}
    </div>
    <button @click="$emit('deleteEmail', email.id)">Delete</button>

  </section>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  props: {
    email: {
      type: Object
    }
  }
}
</script>

<style scoped>
  .email__details {
    padding: 10px;
  }
  h1{
    padding:10px;
  }
</style>
