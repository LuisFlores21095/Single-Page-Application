<template>
  <div id="StoreBanner">
    <img id="vueStoreImg" alt="logo" src="../assets/VUE_Store.png" />
    <h3>Vue Shopping Cart</h3>
    <p>
      Created using Vue.js, Vuetify, Node.js (Only a mock store, and can't be
      used to buy actual items)
    </p>
  </div>
</template>

<style lang="scss">
#StoreBanner {
  height: 250px;
  background-color: #f2f3f3;
  padding: 1rem 0;

  h3 {
    text-align: center;
    padding-top: 4px;
    color: #41b883;
  }
  p {
    text-align: center;
  }
}

#vueStoreImg {
  height: 140px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
@media (min-width: 200px) {
  #StoreBanner {
    height: 300px;
  }
}
@media (min-width: 461px) {
  #StoreBanner {
    height: 270px;
  }
}

@media (min-width: 1600px) {
  #StoreBanner {
    max-width: 1600px;
    margin: 0px auto;
  }
}
</style>
<script>
export default {
  name: "StoreBanner"
};
</script>
