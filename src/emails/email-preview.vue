<template>
  <span>
    {{email.subject}}
  </span>
</template>

<script>

export default {
  props: {
    email: {
      required: true,
      type: Object
    }
  },
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>

</style>
