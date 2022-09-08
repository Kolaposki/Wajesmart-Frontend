<template>
  <div>
    <Authors :authors="allAuthors" />
  </div>
</template>

<script>
import Authors from "@/components/Authors";
import { apiService } from "@/common/api.service.js";

export default {
  name: "AllAuthors",
  components: { Authors },

  data() {
    return {
      allAuthors: [],
    };
  },

  methods: {
    getAuthors() {
      try {
        // get recent 3 authors
        let url = "http://127.0.0.1:8000/api/authors/";
        apiService(url).then((data) => {
          if (data == null) {
            return;
          }
          this.allAuthors = data.authors;
          console.log("allAuthors data: ", data);
        });
      } catch (err) {
        if (err.response) {
          // client received an error response (5xx, 4xx)
          console.log("Server Error:", err);
        } else if (err.request) {
          // client never received a response, or request never left
          console.log("Network Error:", err);
        } else {
          console.log("Client Error:", err);
        }
      }
    },
  },
  async created() {
    this.getAuthors();
  },
};
</script>

<style>
</style>