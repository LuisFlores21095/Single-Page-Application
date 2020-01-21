<template>
  <div id="StoreItem">
    <b-card no-body>
      <div class="book_div_image">
        <img class="book_image" :src="getLink(this.book.b_ISBN)" />
        <v-card-title class="justify-center">
          <v-chip :color="colorFunc(this.book.bt_Name)" label>
            {{ this.book.bt_Name }}
          </v-chip>
        </v-card-title>
      </div>
      <b-card-body>
        <b-card-title>{{ book.b_Name }}</b-card-title>
        <b-card-sub-title class="mb-2">by {{ book.a_Name }}</b-card-sub-title>
        <div class="book_contain">
          <b-card-text>
            <div>{{ book.b_description }}</div>
          </b-card-text>
        </div>
        <div class="book_price">Price: ${{ this.book.Price }}</div>
      </b-card-body>
      <div class="book_button_div">
        <v-row>
          <v-col class="d-flex" cols="12" sm="5" xsm="12">
            <v-btn
              tile
              depressed
              block
              color="orange lighten-1
"
              class="white--text"
              @click="$router.push('/store/book/' + book_isbn)"
              >Details</v-btn
            >
          </v-col>

          <v-spacer></v-spacer>
          <v-col class="d-flex" cols="12" sm="7" xsm="12">
            <v-btn
              depressed
              tile
              block
              color="vueGreen"
              class="mr-4 white--text"
            >
              Add to cart
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </b-card>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  props: ["book"],
  name: "StoreItem",
  data() {
    return {
      bookLink: "",
      book_isbn: this.book.b_ISBN
    };
  },
  watch: {
    book: function() {
      this.setBookID();
    }
  },

  methods: {
    setBookID() {
      this.book_ISBN = this.book.b_ISBN;
    },
    colorFunc(val) {
      switch (val) {
        case "Hard-Cover":
          return "orange lighten-4";
        case "Paper-Back":
          return "green lighten-4";
        case "E-book":
          return "cyan lighten-4";
        default:
          return "";
      }
    },

    getLink(val) {
      let temp = "http://covers.openlibrary.org/b/isbn/" + val + "-L.jpg";
      return temp;
    }
  }
};
</script>

<style lang="scss">
.book_button_div {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 10px;
}
.book_price {
  margin-top: 15px;
  margin-bottom: 35px;
}
.book_image {
  height: 100%;
  width: 100%;
}
.book_div_image {
  height: 240px;
  width: 150px;
  margin: 10% auto;

  .v-chip:before {
    background-color: inherit;
  }
}

#StoreItem {
  // height: 700px;
  .card-title {
    margin-top: 15px;
  }
  .h4,
  h4 {
    font-size: 1em;
  }
  .card {
    height: 670px;
  }
}
.book_contain {
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  max-height: 9em;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 12px;

  p {
    font-size: 0.8em;
  }
}
.StoreItem_tag {
  position: absolute;
  top: 0px;
  right: 0px;
  font-size: 18px;
  background: lightskyblue;
  padding: 0.2em;
  font-size: 0.8em;
  border-style: solid;
  border-color: black;
  border-width: 1px;
}
.StoreItem_container {
  justify-content: center;
}
@media screen and (min-width: 1000px) {
  #StoreItem {
    .card {
      height: 610px;
    }
  }
}
@media screen and (min-width: 1400px) {
  #StoreItem {
    .card {
      height: 590px;
    }
  }
}
</style>
