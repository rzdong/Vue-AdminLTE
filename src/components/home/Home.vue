<template>
    <div class="wrapper">
        <Header />
        <SideBar />
        <router-view/>
        <Footer />
        
        <SideBarRight />
        <div class="control-sidebar-bg"></div>
    </div>
</template>
<script>
import Header from '../common/Header.vue'
import SideBar from '../common/SideBar.vue'
import Footer from '../common/Footer.vue'
import SideBarRight from '../common/SideBarRight.vue'

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
.wrapper {
  height: 100%;
  background: #e9ecef !important;
}
</style>
