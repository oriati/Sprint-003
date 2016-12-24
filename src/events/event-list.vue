<template>
  <section>
    <div v-for="(arr, date) in events">
      <h2>{{date}}</h2>
      <div class="events">
        <div v-for="event in arr" class="event" @click="$emit('selectEvent', event.id)">
          <event-preview :event="event"></event-preview>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>

<script>

import EventPreview from './event-preview.vue';

export default {
  props: {
    events: {
      type: Object
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
