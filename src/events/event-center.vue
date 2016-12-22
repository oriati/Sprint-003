<template>
  <section>
    <event-list :events="">{{eventsGroupedDisplay}}</event-list>
  </section>
</template>

<script>
import moment from "moment";
import EventList from './event-list.vue';
import eventsData from '../eventsData';

// var eventsGroupedDisplay = eventsData.events.reduce((obj , event) => {
//     let date = moment(event.time).format('DD-MM-YYYY');
    
//     if (obj[date]) {
//       obj[date].push(event);
//       console.log('pushing event ' , date, event);
//     } else {
//       obj[date] = [event];
//     } 
//     return obj;
// } , {});

// console.log(eventsGroupedDisplay);

export default {
  name: 'app',
  data () {
    return {
      events: eventsData.events,
      // eventsGroupedDisplay: eventsGroupedDisplay()
    }
  },
  computed: {

    eventsGroupedDisplay() {
      this.events.reduce((obj , event) => {
        let date = moment(event.time).format('DD-MM-YYYY');
        if (obj[date]) {
          obj[date].push(event);
        } else {
          obj[date] = [event];
        }
        return obj;
      } , {});
      console.log(eventsGroupedDisplay);
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