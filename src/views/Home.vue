<template>
  <div>
    <!-- slider section -->
    <section class="slider_section ">
      <div class="container ">
        <div class="row">
          <div class="col-md-6 col-lg-5">
            <div class="detail-box">
              <h1>
               Life of a bookworm
              </h1>
              <p>
                Get free books and find mates. </p>
           
            </div>
          </div>
            <!-- <div class="col-md-6 col-lg-7">
                    <div class="img-box">
                        <img src="../assets/images/post-img3.jpg" alt="">
                    </div>
                </div> -->
        </div>
      </div>

    </section>
    <!-- end slider section -->


    <Authors :authors="recentAuthors" />
    <Books :books="recentBooks" :isHomeCall=isHomeCall />
  </div>
</template>

<script>
import Authors from "@/components/Authors";
import Books from "@/components/Books";
import { apiService } from "@/common/api.service.js";

export default {
  name: "Home",
  components: { Authors, Books},
  data() {
    return {
      recentBooks: [],
      recentAuthors: [],
      isHomeCall: true,
    };
  },
  methods: {
    getAuthors() {
      try {
        // get recent 3 authors
        let url = "/authors/?recent=true";
        apiService(url).then((data) => {
          if (data == null) {
            return;
          }
          this.recentAuthors = data.authors;
          console.log("fetchAuthors data: ", data);
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
    getBooks() {
      try {
        // get recent 5 books
        let url = "/books/?recent=true";
        apiService(url).then((data) => {
          if (data == null) {
            return;
          }
          this.recentBooks = data.books;
          console.log("fetchBooks data: ", data);
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
    this.getBooks() 
    this.getAuthors() 
  }
};
</script>

<style scoped>
.img-box{
  max-width:50%;
}
</style>