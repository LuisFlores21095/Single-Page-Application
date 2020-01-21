<template>
  <div id="StoreBookDisplay">
    <div>
      <div style="padding-left: 10px; font-size: 1.2em; ">Book Details</div>
      <table cellspacing="0" class="table" style="max-height: 28px;">
        <tbody>
          <tr>
            <th>Book Name:</th>
            <td>
              {{ bookInfo.b_Name }}
            </td>
          </tr>
          <tr>
            <th>Author:</th>
            <td>
              {{ bookInfo.a_Name}}
            </td>
          </tr>
          <tr>
            <th>Description:</th>
            <td>
{{bookInfo.b_description}}            </td>
          </tr>
          <tr>
            <th>Category:</th>
            <td>
              {{bookInfo.c_Name}}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
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
</style>

<script>
export default {
  props: ["bookInfo"],
  name: "StoreBookDisplay",
  data() {
    return {

      activeBtn: 0
    };
  }
};
</script>
>
