<template>
  <div id="app">
    <div class="wrapper">
      <Header />
      <SideBar />
      <router-view/>
      <Footer />
      
      <SideBarRight />
      <div class="control-sidebar-bg"></div>
      <!-- <router-view/> -->
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import SideBar from './components/SideBar.vue'
import Footer from './components/Footer.vue'
import SideBarRight from './components/SideBarRight.vue'

export default {
  name: 'App',

  components: {
    Header,
    SideBar,
    Footer,
    SideBarRight
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>
