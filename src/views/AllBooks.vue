<template>
  <Books :books="books" :isHomeCall=isHomeCall />
</template>

<script>
import { apiService } from "@/common/api.service.js";
import Books from "@/components/Books";

export default {
  name: "AllBooks",
  components: { Books },

  data() {
    return {
      books: [],
      isHomeCall: false,

    };
  },
  async created() {
    let endpoint = "/books/";

    apiService(endpoint)
      .then((data) => {
        console.log("books data: ", data);
        this.books = data.books;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
</style>