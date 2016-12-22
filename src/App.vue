<template>
  <div id="app">
    <header>
      <div class="container">
        <router-link to="/" active-class="active" exact><h1>My App</h1></router-link>
                <!--<nav>
        <router-link to="/email" active-class="active" exact>Emails</router-link> |
        <router-link to="/event" active-class="active">Events</router-link> |
        <router-link to="/place" active-class="active">Places</router-link>
      </nav>-->
        <main-nav v-if="showNav"></main-nav>
      </div>
    </header>
    <main class="container">
      <router-view @hideNav="showNav=false"></router-view>
    </main>

    <footer>
      <div class="container">
        coffeerights &copy; 2016 Asi & Ori
      </div>
    </footer>
  </div>
</template>

<script>
import MainNav from './components/main-nav.vue';
export default {
  name: 'app',
  data () {
    return {
      showNav: true
    }
  },
  components: {
    MainNav
  },
  created() {
    bus.$on('toggleNav', bool=> this.showNav=bool);
  }
}
</script>

<style>
  body {
    margin: 0;
    margin-bottom: 60px;
  }
  
  header {
    background: lightcoral;
    padding: 20px;
  }
  
  main {
    padding: 20px;
  }
  
  footer {
    background: lightgreen;
    position: fixed;
    width: 100%;
    bottom: 0;
    padding: 20px;
    height: 60px;
    line-height: 60px;
  }
  
  h1 {
    margin: 0;
  }
  
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  .container {
    max-width: 960px;
    margin: 0 auto;
  }
</style>