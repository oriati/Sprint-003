<template>
  <section>
    <div class="events__controls"><button @click="editEvent">Add Event</button></div>
    <event-list :events="eventsGroupedDisplay" @selectEvent="readEvent"></event-list>
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
      events: {events:[]},
    }
  },
  computed: {

    eventsGroupedDisplay() {
      return this.events.events.reduce((obj , event) => {
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
    reloadEvents() {
      this.$http.get('events')
        .then(res=> res.json())
        .then(eventsFromServer => this.events = eventsFromServer)
    },
    readEvent(eventId) {
      this.$router.push(`/event/${eventId}`);
    },
    editEvent() {
      this.$router.push(`/event/edit`);
    }
  },
  created() {
    this.reloadEvents();
  },
  components: {
    EventList
  }
}
</script>

<style>

</style>