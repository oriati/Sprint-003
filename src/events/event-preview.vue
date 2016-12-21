<template>
    <div class="event">
        <time datetime="2012-12-08">{{event.time}}</time>
        <h2 class="event__title"> {{event.name}} </h2>
        <div class="event__description" v-html="event.description">
        </div>
    </div>
</template>

<script>

export default {
  props: {
    event: {
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