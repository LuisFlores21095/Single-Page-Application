<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="secondary">
        <div class="subheading"
          >Get connected with me on social networks!</div
        >

        <v-spacer></v-spacer>

        <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <!-- <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} &copy;
      </v-card-text> -->
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      icons: [
        "fab fa-facebook",
        "fab fa-google-plus",
        "fab fa-linkedin",
      ]
    };
  }
};
</script>
