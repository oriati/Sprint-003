<template>
  <div class="main-nav">
    <router-link to="/email" class="main-nav__link main-nav__link-emails" active-class="active"><span>Emails</span></router-link>
    <router-link to="/event" class="main-nav__link main-nav__link-events" active-class="active"><span>Events</span></router-link>
    <router-link to="/place" class="main-nav__link main-nav__link-places" active-class="active"><span>Places</span></router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
  
  .active {
    color: #7ba963;
  }
</style>
