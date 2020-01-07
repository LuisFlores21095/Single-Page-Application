<template>
  <div id="StoreBookDisplay">
    <div class="BookDisplay_div_image">
      <img
        class="BookDisplay_image"
        src="http://covers.openlibrary.org/b/isbn/9780385533225-L.jpg"
      />
    </div>
    <b-card-body>
      <b-card-title style="padding-left: 10px;"
        ><strong>Book Details</strong></b-card-title
      >
      <table cellspacing="0" class="table" style="max-height: 28px;">
        <tbody>
          <tr>
            <th>Book Name:</th>
            <td>
              The Thing
            </td>
          </tr>
          <tr>
            <th>Author:</th>
            <td>
              John smith
            </td>
          </tr>
          <tr>
            <th>Description:</th>
            <td>
              dfasdfasd fa sdf asdfasdfasdf asdfasdfasdfasfa sdfasdfasdfasd asdf
            </td>
          </tr>
          <tr>
            <th>Category:</th>
            <td>
              Horror
            </td>
          </tr>
        </tbody>
      </table>
    </b-card-body>
  </div>
</template>

<style lang="scss">
.table {
  width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;
}
#StoreBookDisplay {
  th {
    padding-right: 10px;
  }
}

.BookDisplay_div_image {
  height: 250px;
  width: 190px;
  margin: 5% auto;

  .v-chip:before {
    background-color: inherit;
  }
}
.BookDisplay_image {
  height: 100%;
  width: 100%;
}
</style>

<script>
export default {
  name: "StoreBookDisplay",
  data() {
    return {
      bookInfo: null,
      activeBtn: 0

    };
  }
};
</script>
>
