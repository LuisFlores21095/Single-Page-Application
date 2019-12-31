<template>
  <div id="StoreItem">
    <b-card no-body style="max-height: 600px;">
      <div class="book_div_image">
        <img class="book_image" :src="getLink(this.book.b_ISBN)" />
        <v-card-title class="justify-center">
          <v-chip :color="colorFunc(this.book.bt_Name)" label>
            {{ this.book.bt_Name }}
          </v-chip>
        </v-card-title>
      </div>
      <b-card-body>
        <div class="book_contain">
          <b-card-title>{{ book.b_Name }}</b-card-title>
          <b-card-sub-title class="mb-2">by {{ book.a_Name }}</b-card-sub-title>
          <b-card-text>
            <div>{{ book.b_description }}</div>
          </b-card-text>
        </div>
      </b-card-body>
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
      bookLink: ""
    };
  },
  methods: {
 colorFunc(val){
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
      // axios
      //   .get("https://www.googleapis.com/books/v1/volumes?q=isbn:" + val)
      //   .then(response => {
      //     let link = response.data.items[0].volumeInfo.imageLinks.thumbnail;
      //     this.bookLink = link.replace("zoom=1", "zoom=2");
      //   })
      //   .catch(error => {
      //     console.log(error);
      //     console.log("fail");
      //   });

      let temp = "http://covers.openlibrary.org/b/isbn/" + val + "-L.jpg";
      return temp;
    }
  }
};
</script>

<style lang="scss">
.book_image {
  height: 100%;
  width: 100%;
}
.book_div_image {
  height: 240px;
  width: 150px;
  margin: 10% auto;

  .v-chip:before{
    background-color: inherit;
  }
}

#StoreItem {
  .h4,
  h4 {
    font-size: 1em;
  }
  .card {
    height: 600px;
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
</style>
