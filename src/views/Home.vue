<template>
  <div>
    <section id="billboard" class="pattern-overlay">
      <div class="main-slider">
        <div class="slider-item">
          <div class="banner-content">
            <h2 class="banner-title">Life of the wild</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
              feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus
              ut magna velit eleifend. Amet, quis urna, a eu.
            </p>
            <div class="btn-wrap">
              <a href="#" class="btn-outline-accent btn-accent-arrow"
                >Read More<i class="icon icon-ns-arrow-right"></i
              ></a>
            </div>
          </div>
          <!--banner-content-->
          <img
            src="../assets/images/main-banner1.jpg"
            alt="banner"
            class="banner-image"
          />
        </div>
        <!--slider-item-->
      </div>
    </section>

    <Authors :authors="recentAuthors" />
    <Books :books="recentBooks" />
    <BestSellingBook />
    <Quote />
  </div>
</template>

<script>
import Authors from "@/components/Authors";
import Books from "@/components/Books";
import BestSellingBook from "@/components/BestSellingBook";
import Quote from "@/components/Quote";
import { apiService } from "@/common/api.service.js";

export default {
  name: "Home",
  components: { Authors, Books, BestSellingBook, Quote },
  data() {
    return {
      recentBooks: [],
      recentAuthors: [],
    };
  },
  methods: {
    getAuthors() {
      try {
        // get recent 3 authors
        let url = "http://127.0.0.1:8000/api/authors/?recent=true";
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
        let url = "http://127.0.0.1:8000/api/books/?recent=true";
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
  beforeCreate() {
    
  },
  async created() {
    this.getBooks() 
    this.getAuthors() 
  }
};
</script>

<style>
</style>