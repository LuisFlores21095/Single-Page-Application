<template>
  <div>
    <b-card no-body>
      <v-img
        class="book_image"
        src="https://d188rgcu4zozwl.cloudfront.net/content/B07Y8HKVGJ/resources/1969954156"
      ></v-img>
      <b-card-body>
        <b-card-title>{{ book.title }}</b-card-title>
        <b-card-sub-title class="mb-2">by Sub Title</b-card-sub-title>
        <b-card-text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </b-card-text>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ["book"],
  name: "StoreItem",
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.book_image {
  margin: 20px auto;
  height: 300px;
  width: 200px;
}
</style>
