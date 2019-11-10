<template>
  <div class="store">
    <Header />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <StoreBanner />
    <Store />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import StoreBanner from "@/components/StoreBanner.vue";
import Store from "@/components/Store.vue";

export default {
  name: "store",
  components: {
    Header,
    Footer,
    StoreBanner,
    Store
  }
};
</script>

