<template>
    <div id="store">
    <StoreItem v-for="(book, index) in books" :key="index" :book="book" />
  
  

    </div>
</template>
<style lang="scss">

#store{
    margin: 0 25px 25px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
}

@media (min-width: 1600px) {
  #store {
    max-width: 1600px;
    margin: 0 auto 25px;
  
  }
  
}
</style>
<script>
import StoreItem from "@/components/StoreItem.vue";


export default {
  name: "Store",
  components: {
    StoreItem
  },
  data(){
    return{
      books:[
      {title: "Jhon Wilson"},
      {title: "John Wayne"},
      {title: "Libery Valance"},
      {title: "Poo Pee"}
      ]
    }
  }
};
</script>
