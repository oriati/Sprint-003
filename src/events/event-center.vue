<template>
  <section>
    <event-list :events="eventsGroupedDisplay"></event-list>
  </section>
</template>

<script>
import moment from "moment";
import EventList from './event-list.vue';
import eventsData from '../eventsData';

export default {
  name: 'app',
  data () {
    return {
      events: eventsData.events,
    }
  },
  computed: {

    eventsGroupedDisplay() {
      return this.events.reduce((obj , event) => {
        let date = moment(event.time).format('DD/MM YYYY');
        if (obj[date]) {
          obj[date].push(event);
        } else {
          obj[date] = [event];
        }
        return obj;
      } , {});
    }
    
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