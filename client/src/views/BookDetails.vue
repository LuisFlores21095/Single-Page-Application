<template>
  <div id="BookDetails">
    <Header />
    <StoreBookDisplay/>
    <StoreBookPurchase/>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/General/Header.vue";
import Footer from "@/components/General/Footer.vue";
import StoreBookDisplay from "@/components/Store/StoreBookDisplay.vue";
import StoreBookPurchase from "@/components/Store/StoreBookPurchase.vue";

export default {
  name: "store",
  components: {
    Header,
    Footer,
    StoreBookDisplay,
    StoreBookPurchase
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