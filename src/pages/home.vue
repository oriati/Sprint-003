<template>
  <section class="home-page">
    <main-nav></main-nav>
  </section>
</template>

<script>
import MainNav from '../components/main-nav.vue';
export default {
  name: 'name',
  data () {
    return {
      
    }
  },
  mounted() {
      bus.$emit('toggleNav', false);
  },
  components: {
    MainNav
  }
}
</script>

<style>
  .home-page .main-nav {
    display: flex;
    justify-content: space-between;
  }

  /*home-page .main-nav .main-nav__link {
    display: block;
    width: calc(33.333% - 12vw);
    height: calc(33.333% - 12vw);
    background: purple;
  }*/
  
  .home-page .main-nav .main-nav__link {
    display: block;
    position: relative;
    width: calc(33.333% - 12px);
    transform: scale(0.9, 0.9);
    transition: all 0.5s;
  }

  .home-page .main-nav .main-nav__link:hover {
    transform: scale(1, 1);
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.5)
  }

  .home-page .main-nav .main-nav__link-emails { background: #ffb85f }
  .home-page .main-nav .main-nav__link-events { background: #8ed2c9 }
  .home-page .main-nav .main-nav__link-places { background: #ff7a5a }

  .home-page .main-nav .main-nav__link span {
    position: absolute;
    line-height: 50px;
    width: 100%;
    top: 50%;
    left: 0;
    margin-top: -25px;
    color: #fff;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
  }

  .home-page .main-nav .main-nav__link span:before {
    content: "my ";
  }
  
  .home-page .main-nav .main-nav__link:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
</style>