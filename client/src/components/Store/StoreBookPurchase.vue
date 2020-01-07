<template>
  <div id="StoreBookPurchase">
    <div class="SBP_Types">
      <div v-for="(item, index) in bookInfo" :key="index"
        @click="activeBtn = 'btn'+index"
        :class="{ fee: activeBtn === 'btn' +index }"
        style="height: 100px;"
      >
        <v-btn
          style="height: 100%;"
          block
          :color="activeBtn === 'btn'+index ? 'blue lighten-4' : ''"
          >{{item.price}} <br /><br />{{item.bookType}}</v-btn
        >
      </div>
      
    </div>
      <b-card class="text-center" style="margin: 10px 25px;">
           <div class="SBP_text">
      <strong> Book:</strong> The Thing
    </div>
    <div class="SBP_text">
     <strong> Listed Price:</strong> $5:99 
    </div>

    <div class="text-center">

    <v-btn  style="width: 600px;" color="primary"  large>Add to Cart</v-btn>
  </div>
  </b-card>
  </div>
</template>

<style lang="scss">
.SBP_text{
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
  border-color: rgb(20, 20, 187);
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
