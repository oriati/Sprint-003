<template>
  <div id="app">
    <header>
      <h1>My App</h1>
      <nav>
        <!--For using bootstrap nav add: tag="li"-->
        <router-link to="/email" active-class="active" exact>Emails</router-link> |
        <router-link to="/event" active-class="active">Events</router-link> |
        <router-link to="/place" active-class="active">Places</router-link>
      </nav>
    </header>

    <router-view></router-view>

    <footer>
      coffeerights &copy; 2016
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
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  h1,
  h2 {
    font-weight: normal;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
</style>