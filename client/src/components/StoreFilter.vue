<template>
   <b-card id="StoreFilter" bg-variant="light" >
  <v-form>
    <!-- <v-container> -->
      <v-row>

        <v-col cols="12" sm="6">
          <v-text-field
            v-model="title"
            :rules="rules"
            counter
            maxlength="25"
            hint="This field uses maxlength attribute"
            label="Arthur Last Name"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            v-model="description"
            :rules="rules"
            counter
            maxlength="25"
            label="Title of Book"
          ></v-text-field>
        </v-col>

        <v-col class="d-flex" cols="12" sm="4">
        <v-select
          :items="Category"
          label="Category"
          dense
          solo
        ></v-select>
      </v-col>

        <v-col class="d-flex" cols="12" sm="4">
        <v-select
          :items="Cover_Type"
          label="Cover-Type"
          dense
          solo
        ></v-select>
      </v-col>

        <v-col class="d-flex" cols="12" sm="4">
        <v-select
          :items="Price_Range"
          label="Price-Range"
          dense
          solo
        ></v-select>
      </v-col>

      <v-btn block color="primary" dark>Block Button</v-btn>


      </v-row>
    <!-- </v-container> -->
  </v-form>
</b-card>
</template>

<style lang="scss">
#StoreFilter{
    margin: 30px 4px;
    padding: 0 10px;;
}

@media (min-width: 1600px) {
  #StoreFilter {
    max-width: 1600px;
    margin: 30px auto;
  }
}
</style>

<script>
export default {
  name: "StoreFilter",
  data() {
    return {
        title: '',
        description: '',
        rules: [v => v.length <= 25 || 'Max 25 characters'],
        Category: ['Mystery','Horror','Drama','Romance','Science Fiction'],
        Cover_Type: ["Hard Cover", "PaperBack", "E-book"],
        Price_Range: ["$0-$5", '$5-$15', '$15-$30','Above $30']
    };
  }}
</script>
