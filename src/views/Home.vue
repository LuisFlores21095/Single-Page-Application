<template>
  <div class="home">
    <Header/>
    <SM/>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import SM from '@/components/SM.vue'
import Footer from '@/components/Footer.vue'



export default {
  name: 'home',
  components: {
    Header, 
    SM,
    Footer
  }
}
</script>

