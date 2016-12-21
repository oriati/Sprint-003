<template>
  <div class="events">
    <div v-for="event in events" class="event" @click="$emit('selectEvent', event.id)">
      <event-preview :event="event"></event-preview>
    </div>
  </ul>
</template>

<script>

import EventPreview from './event-preview.vue';

export default {
  props: {
    events: {
      type: Array
    }
  },
  data () {
    return {      
    }
  },
  components: {
    EventPreview
  }
}
</script>

<style scoped>

</style>
