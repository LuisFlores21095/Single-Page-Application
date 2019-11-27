<template>
  <div id="home">
    <Header/>
    <LayoutSM/>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import LayoutSM from '@/components/Layout-SM.vue'
import Footer from '@/components/Footer.vue'



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
#home{
  background-color: #f7f7f7;
}
</style>>

