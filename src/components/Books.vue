<template>
   <section id="featured-books" class="bookshelf">
        <div class="container">
            <div class="row">
                <div class="inner-content">

                    <div class="section-header align-center">
                        <div class="title">
                            <span>Some quality items</span>
                        </div>
                        <h2 class="section-title">Featured Books</h2>
                    </div>

                    <div class="product-list" >
                        <div class="product-grid d-inline-flex">

                            <figure class="product-style" v-for="book of books"
      :key="book.id">
                                <img src="../assets/images/product-item1.jpg" alt="Books" class="product-item">
                                <!-- <button type="button" class="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button> -->
                                <figcaption>
                                    <h3>{{ book.name }}</h3>
                                    <p>{{ book.author.full_name }}</p>
                                    <div class="item-price">$ 40.00</div>
                                </figcaption>
                            </figure>

                        </div>
                        <!--ft-books-slider-->
                    </div>
                    <!--grid-->

                    <div class="btn-wrap align-right">
    
            <router-link
               class="btn-accent-arrow"
              :to="{ name: 'Books' }"
            >
             View all books <i class="icon icon-ns-arrow-right"></i>
            </router-link>


                        <!-- <a href="#" class="btn-accent-arrow">View all books <i class="icon icon-ns-arrow-right"></i></a> -->
                    </div>

                </div>
                <!--inner-content-->
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: "Books",
  props: {'books':Array},
  data() {
    return {
      container: "container sm:px-10",
    };
  },
  mounted() {
      
  },
  created() {
      
  },
}
</script>

<style>
.d-inline-flex {
    display: inline-flex !important;
}
</style>