<template>
  <div id="app">
    <header>
      <div class="container">
      <h1>My App</h1>
      <nav>
        <!--For using bootstrap nav add: tag="li"-->
        <router-link to="/email" active-class="active" exact>Emails</router-link> |
        <router-link to="/event" active-class="active">Events</router-link> |
        <router-link to="/place" active-class="active">Places</router-link>
      </nav>
      </div>
    </header>
    <main  class="container">
      <router-view></router-view>
    </main>

    <footer> 
      <div class="container">
      coffeerights &copy; 2016 Asi & Ori
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
body {
  margin: 0;
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
  .container  {
    max-width: 960px;
    margin: 0 auto;
  }
</style>