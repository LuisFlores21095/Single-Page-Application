<template>
  <div id="storeView">
    <Header />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <StoreBanner />
    <StoreFilter />
    <Store />
    <Footer />
    <Login />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import StoreBanner from "@/components/StoreBanner.vue";
import Store from "@/components/Store.vue";
import StoreFilter from "@/components/StoreFilter.vue";
import Login from "@/components/Login.vue";

export default {
  name: "store",
  components: {
    Header,
    Footer,
    StoreBanner,
    Store,
    StoreFilter,
    Login
  }
};
</script>

<style lang="scss">
#storeView {
  background-color: #f7f7f7;

  .card {
    // border: 1px solid rgba(32, 172, 69, 0.96);
    box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.05);
  }
}
</style>
