<template>
  <div id="app">
    <header>
      <div class="container">
        <router-link to="/" active-class="active" exact>
        <h1>Lighthouse</h1>
        <h2> - showing you the way</h2>
        </router-link>
        <main-nav v-if="showNav"></main-nav>
      </div>
    </header>
    <main class="container">
      <router-view @hideNav="showNav=false"></router-view>
    </main>

    <footer>
        coffeerights &copy; 2016 Asi & Ori
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


/*----------  Open Source Font  ----------*/

  html, body {
    height: 100%;
  }

  body {
    margin: 0;
    margin-bottom: 40px;
    background: url('./assets/bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
  }

  #app {
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #525d4c;
  }

  h1, h2 {
    font-weight: normal;
  }
  h2 {
    font-size: 1.2em;
  }

  a {
    color: #7ba963;
    text-decoration: none;
  }
  
  header {
    background: #1d211b;
    height: 80px;
    line-height: 80px;
    color: #fff;
  }

  header a {
    color: #fff;
  }

  header a:hover {
    color: #de8b28;
  }

  header .container {
    display: flex;
    justify-content: space-between;
  }

  header .main-nav__link:after {
    content: " | ";
    color: #fff;
  }

  header .main-nav__link:last-child:after {
    content: "";
  }

  header .main-nav__link:hover {
    color: #7ba963;
  }

  header h1, header h2 {
    display: inline;
  }

  main header {
    height: 40px;
    line-height: 40px;
    font-size: 0.7em;
    padding: 0 24px;
  }
  
  main.container {
    padding: 60px 24px 24px;
  }
  
  footer {
    background: #3e453a;
    position: fixed;
    width: 100%;
    bottom: 0;
    height: 40px;
    line-height: 40px;
    color: #fff;
    font-size: 0.7em;
    padding: 0 24px;
  }
  
  h1 {
    margin: 0;
  }
  
  .container {
    max-width: 972px;
    margin: 0 auto;
    padding: 0 24px;
  }
</style>