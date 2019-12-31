<template>
  <div id="store">
    <StoreItem v-for="(book, index) in books" :key="index" :book="book" />

    <p>{{ filterData }}</p>
  </div>
</template>
<style lang="scss">
#store {
  margin: 0 25px 25px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;

  

}
@media (min-width: 700px) {
  #store {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1000px) {
  #store {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1400px) {
  #store {
    grid-template-columns: repeat(5, 1fr);
  }
}
@media (min-width: 1400px) {
  #store {
    max-width: 1400px;
    margin: 0 auto 25px;
  }
}
</style>
<script>
import StoreItem from "@/components/StoreItem.vue";
import { mapState } from "vuex";
import axios from "axios";

export default {
  name: "Store",
  components: {
    StoreItem
  },
  methods: {
    getBooks() {
      axios
        .post("http://localhost:5000/book", this.filterData)
        .then(response => {
          this.books = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  computed: {
    ...mapState(["filterData"])
  },
  data() {
    return {
      books: null
    };
  },
  watch: {
    filterData: function() {
      this.getBooks();
    }
  }
};
</script>
