<template>
  <b-card id="StoreFilter" bg-variant="light">
    <v-form>
      <!-- <v-container> -->
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="LastName"
            :rules="rules"
            counter
            maxlength="25"
            hint="This field uses maxlength attribute"
            label="Arthur Last Name"
            color="vueGreen"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            v-model="BookName"
            label="Title of Book"
            color="vueGreen"
          ></v-text-field>
        </v-col>

        <v-col class="d-flex" cols="12" sm="4" md="3">
          <v-select
            v-model="selected_category"
            :items="Category"
            label="Category"
            item-color="vueGreen"
            dense
            solo
          ></v-select>
        </v-col>

        <v-col class="d-flex" cols="12" sm="4" md="3">
          <v-select
            v-model="selected_coverType"
            :items="Cover_Type"
            label="Cover-Type"
            item-color="vueGreen"
            dense
            solo
          ></v-select>
        </v-col>

        <v-col class="d-flex" cols="12" sm="4" md="3">
          <v-select
            v-model="selected_priceRange"
            :items="Price_Range"
            label="Price-Range"
            item-color="vueGreen"
            dense
            solo
          ></v-select>
        </v-col>

        <v-col class="d-flex" cols="12" sm="12" md="3">
          <v-btn v-on:click.native="Update_filter" block color="vueGreen" dark
            >Submit</v-btn
          >
        </v-col>
      </v-row>
      <!-- </v-container> -->
    </v-form>
  </b-card>
</template>

<style lang="scss">
#StoreFilter {
  margin: 30px 25px;
  padding: 0 10px;
}

@media (min-width: 1400px) {
  #StoreFilter {
    max-width: 1400px;
    margin: 30px auto;
  }
}
</style>

<script>
import { mapMutations } from "vuex";

export default {
  name: "StoreFilter",
  data() {
    return {
      BookName: "",
      LastName: "",
      selected_category: "",
      selected_coverType: "",
      selected_priceRange: "",
      rules: [v => v.length <= 25 || "Max 25 characters"],
      Category: ["Mystery", "Horror", "Drama", "Romance", "Science Fiction"],
      Cover_Type: ["Hard-Cover", "Paper-Back", "E-book"],
      Price_Range: ["$0-$5", "$5-$15", "$15-$30", "Above $30"],
      Search: {
        BookName: String,
        Author: String,
        Category: String,
        CoverType: String,
        PriceRange: String
      }
    };
  },

  methods: {
    ...mapMutations(["ADD_FILTER_DATA"]),

    Update_filter() {
      this.Search.BookName = this.BookName;
      this.Search.Author = this.LastName;
      this.Search.Category = this.selected_category;
      this.Search.CoverType = this.selected_coverType;
      this.Search.PriceRange = this.selected_priceRange;

      this.ADD_FILTER_DATA(this.Search);
    }
  }
};
</script>
