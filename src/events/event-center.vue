<template>
  <section>

      <h1>My Events</h1>

  </section>
</template>

<script>
import EmailList from './event-list.vue';
import { data } from '../eventData';

console.log(data);

export default {
  name: 'app',
  data () {
    return {
      events: []
    }
  },
  computed: {
    
  },
  methods: {
    
  },
  components: {
    EventsList
  }
}
</script>


<style>
  .email__wrapper {
    max-width: 960px;
    margin: 0 auto;
    border: solid 1px #999;
  }
  
  .email__container {
    display: flex;
  }
  
  .email__list {
    width: 150px;
    background: pink;
  }
  
  .email__details {
    width: calc(100% - 150px);
    background: red;
  }
  
  * {
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
  }
</style>