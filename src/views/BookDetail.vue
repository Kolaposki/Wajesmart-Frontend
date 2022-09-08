<template>
  <section id="best-selling" class="leaf-pattern-overlay" v-if="currentBook">
    <div class="corner-pattern-overlay"></div>
    <div class="container">
      <div class="row">
        <div class="inner-content">
          <div class="product-element">
            <div class="grid">
              <figure class="products-thumb">
                <img
                  src="../assets/images/single-image.jpg"
                  alt="book"
                  class="single-image"
                />
              </figure>
              <div class="product-entry">
                <h2 class="section-title divider">Best Selling Book</h2>

                <div class="products-content">
                  <div class="author-name">By {{ full_name }}</div>
                  <h3 class="item-title">{{ currentBook.name }}</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    eu feugiat amet, libero ipsum enim pharetra hac.
                  </p>
                  <div class="item-price">ISBN: {{ currentBook.isbn }}</div>
                  <div class="item-price">$ 45.00</div>

                  <div class="btn-wrap">
                    <a href="#" class="btn-accent-arrow"
                      >Edit Book <i class="icon icon-ns-arrow-right"></i
                    ></a>
                  </div>
                </div>
                <!--description-->
              </div>
            </div>
            <!--grid-->
          </div>
        </div>
        <!--inner-content-->
      </div>
    </div>
  </section>
</template>

<script>
import { apiService } from "@/common/api.service.js";

export default {
  name: "BookDetail",
  data() {
    return {
      currentBook: {},
      full_name: "",
    };
  },

  async created() {
    let endpoint =
      "http://127.0.0.1:8000/api/book/" + this.$route.params.book_id;

    apiService(endpoint)
      .then((data) => {
        console.log("book detial data: ", data);
        this.currentBook = data.book;
        this.full_name = data.book.author.full_name;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
</style>