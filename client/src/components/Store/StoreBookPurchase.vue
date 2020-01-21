<template>
  <div id="StoreBookPurchase">
    <div class="BookDisplay_div_image">
      <img
        class="BookDisplay_image"
        src="http://covers.openlibrary.org/b/isbn/9780385533225-L.jpg"
      />
    </div>
    <div class="SBP_Types">
      <div
        v-for="(item, index) in bookInfo"
        :key="index"
        @click="activeBtn = 'btn' + index"
        :class="{ fee: activeBtn === 'btn' + index }"
        style="height: 70px;"
      >
        <v-btn
          style="height: 100%;"
          block
          :color="activeBtn === 'btn' + index ? 'green lighten-5' : ''"
          >{{ item.price }} <br /><br />{{ item.bookType }}</v-btn
        >
      </div>
    </div>

    <div class="text-center">
      <v-btn class="white--text" block color="vueGreen" large
        >Add to Cart</v-btn
      >
    </div>
  </div>
</template>

<style lang="scss">
.text-center {
  margin: 0 25px 25px;
}
.BookDisplay_div_image {
  height: 300px;
  width: 220px;
  margin: 0 auto 30px;

  .v-chip:before {
    background-color: inherit;
  }
}
.BookDisplay_image {
  height: 100%;
  width: 100%;
}
.SBP_text {
  font-size: 26px;
  margin: 20px 0;
}
.SBP_Types {
  margin: 0 25px 25px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  text-align: center;
}
.fee {
  border-style: solid;
  border-color: #41b883;
  border-width: 3px;
  border-radius: 7px;
}
</style>

<script>
export default {
  name: "StoreBookPurchase",
  data() {
    return {
      activeBtn: "",
      bookInfo: [
        { price: 3.99, bookType: "book" },
        { price: 5.99, bookType: "ssss" },
        { price: 4.99, bookType: "dddd" }
      ]
    };
  }
};
</script>
>
