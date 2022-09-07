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
                            <figure class="product-style">
                                <img src="../assets/images/product-item1.jpg" alt="Books" class="product-item">
                                <button type="button" class="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                                <figcaption>
                                    <h3>Simple way of piece life</h3>
                                    <p>Armor Ramsey</p>
                                    <div class="item-price">$ 40.00</div>
                                </figcaption>
                            </figure>

                            <figure class="product-style">
                                <img src="../assets/images/product-item2.jpg" alt="Books" class="product-item">
                                <button type="button" class="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                                <figcaption>
                                    <h3>Great travel at desert</h3>
                                    <p>Sanchit Howdy</p>
                                    <div class="item-price">$ 38.00</div>
                                </figcaption>
                            </figure>

                            <figure class="product-style">
                                <img src="../assets/images/product-item3.jpg" alt="Books" class="product-item">
                                <button type="button" class="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                                <figcaption>
                                    <h3>The lady beauty Scarlett</h3>
                                    <p>Arthur Doyle</p>
                                    <div class="item-price">$ 45.00</div>
                                </figcaption>
                            </figure>

                            <figure class="product-style">
                                <img src="../assets/images/product-item4.jpg" alt="Books" class="product-item">
                                <button type="button" class="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                                <figcaption>
                                    <h3>Once upon a time</h3>
                                    <p>Klien Marry</p>
                                    <div class="item-price">$ 35.00</div>
                                </figcaption>
                            </figure>

                            <figure class="product-style">
                                <img src="../assets/images/product-item6.jpg" alt="Books" class="product-item">
                                <button type="button" class="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
                                <figcaption>
                                    <h3>Once upon a time</h3>
                                    <p>Klien Marry</p>
                                    <div class="item-price">$ 35.00</div>
                                </figcaption>
                            </figure>

                        </div>
                        <!--ft-books-slider-->
                    </div>
                    <!--grid-->

                    <div class="btn-wrap align-right">
                        <a href="#" class="btn-accent-arrow">View all products <i class="icon icon-ns-arrow-right"></i></a>
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

}
</script>

<style>
.d-inline-flex {
    display: inline-flex !important;
}
</style>