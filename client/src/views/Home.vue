<template>
  <div id="homeView">
    <Header/>
    <LayoutSM/>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/General/Header.vue'
import LayoutSM from '@/components/Main/Layout-SM.vue'
import Footer from '@/components/General/Footer.vue'



export default {
  name: 'home',
  components: {
    Header, 
    LayoutSM,
    Footer
  }
}
</script>

<style lang="scss">
#homeView{
  background-color: #f7f7f7;
}
</style>



