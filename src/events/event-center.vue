<template>
  <section>

      <event-list :events="events"></event-list>

  </section>
</template>

<script>
import EventList from './event-list.vue';
import eventsData from '../eventsData';

export default {
  name: 'app',
  data () {
    return {
      events: eventsData.events
    }
  },
  computed: {
    
  },
  methods: {
    
  },
  components: {
    EventList
  }
}
</script>

<style>

</style>