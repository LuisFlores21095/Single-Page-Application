<template>
  <div>
    <div id="store">
      <StoreItem
        v-for="(book, index) in bookByPage"
        :key="index"
        :book="book"
      />
    </div>
    <div id="pagination_div">
      <v-pagination
        depressed
        color="vueGreen"
        v-model="page"
        :length="lengthAmount"
      ></v-pagination>
    </div>
  </div>
</template>
<style lang="scss">
#pagination_div {
  margin-bottom: 15px;
}
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
  created() {
    axios
      .get("http://localhost:5000/book")
      .then(response => {
        this.books = response.data;
        this.lengthAmount = Math.ceil(response.data.length / 10);
        this.Bookrange();
      })
      .catch(error => {
        console.log(error);
      });
  },

  methods: {
    Bookrange() {
      this.bookByPage = this.books.slice((this.page - 1) * 10, this.page * 10);
    },
    getBooks() {
      axios
        .post("http://localhost:5000/book", this.filterData)
        .then(response => {
          this.books = response.data;
          this.lengthAmount = Math.ceil(response.data.length / 10);
          this.Bookrange();
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
      books: null,
      page: 1,
      lengthAmount: 0,
      bookByPage: null
    };
  },
  watch: {
    filterData: function() {
      this.getBooks();
    },
    page: function() {
      this.Bookrange();
    }
  }
};
</script>
