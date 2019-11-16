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
    };
  }}
</script>
