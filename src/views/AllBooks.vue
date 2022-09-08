<template>
  <section id="featured-books" class="bookshelf">
    <div class="container">
      <div class="row">
        <div class="inner-content">
          <div class="section-header align-center">
            <div class="title">
              <span>Some quality items</span>
            </div>
            <h2 class="section-title">All Books</h2>
          </div>

          <div class="product-list" v-if="books.length">
            <div class="product-grid d-inline-flex">
              <figure
                class="product-style"
                v-for="book of books"
                :key="book.id"
              >
                <img
                  src="../assets/images/product-item1.jpg"
                  alt="Books"
                  class="product-item"
                />
                <!-- <button type="button" class="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button> -->
                <figcaption>
                  <h3>
                    <router-link
                      :to="{ name: 'BookDetail', params: { book_id: book.id } }"
                      >{{ book.name }}</router-link
                    >
                  </h3>
                  <p>{{ book.author.full_name }}</p>
                  <div class="item-price">ISBN: {{ book.isbn }}</div>
                  <div class="item-price">$ 40.00</div>
                </figcaption>
              </figure>
            </div>
            <!--ft-books-slider-->
          </div>
          <!--grid-->

          <div v-else>
            <p>No books yet! Check back later.</p>
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
  name: "AllBooks",
data() {
    return {
        books:[]
    }
},
 async created() {
    let endpoint = "/books/";

    apiService(endpoint)
      .then((data) => {
        console.log("books data: ", data);
        this.books = data.books
      })
      .catch((error) => {
        console.log(error);
      });
  },
}
</script>

<style>

</style>