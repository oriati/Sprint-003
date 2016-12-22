<template>
  <div class="events">
    <div v-for="date in events">
      {{date}}
    </div>
    <!--<div v-for="event in events" class="event" @click="$emit('selectEvent', event.id)">
      <event-preview :event="event"></event-preview>
    </div>-->
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
  .events {
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
  }
  .event {
    width: calc(25% - 10px);
    padding: 10px;
    margin: 5px;
    border: solid 1px #999;
  }
</style>
