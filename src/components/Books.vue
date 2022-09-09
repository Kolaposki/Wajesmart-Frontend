<template>
  <section class="wrapper">
    <div class="container">
      <div class="row">
        <div class="col text-center mb-5"  v-if="isHomeCall">
          <h1 class="display-4">Top recent books</h1>
          <p class="lead">Check out our top recent books</p>
        </div>

        <div class="col text-center mb-5"   v-else>
          <h1 class="display-4">All Books</h1>
          <p class="lead">Check out all our books</p>

        </div>

      </div>
      <div class="row">
        <div
          v-for="book of books"
          :key="book.id"
          class="col-sm-12 col-md-6 col-lg-4 mb-4"
        >
          <div
            class="card text-white card-has-bg click-col"
            style="
              background-image: url('https://images.unsplash.com/photo-1513001900722-370f803f498d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80');
            "
          >
            <div class="card-img-overlay d-flex flex-column">
              <div class="card-body">
                <small class="card-meta mb-2">Philosophy</small>
                <h4 class="card-title mt-0">
                  <router-link
                    class="text-white"
                    :to="{ name: 'BookDetail', params: { book_id: book.id } }"
                    >{{ book.name }}</router-link
                  >
                </h4>
                <small>ISBN: {{ book.isbn }}</small>
              </div>
              <div class="card-footer">
                <div class="media">
                  <img
                    :src="getImgUrl(book.author_id)"
                    class="mr-3 rounded-circle"
                    alt="Generic placeholder image"
                    style="max-width: 50px"
                  />
                  <div class="media-body">
                    <h6 class="my-0 text-white d-block">
                      <router-link
                        class="text-white"
                        :to="{
                          name: 'UpdateAuthor',
                          params: { author_id: book.author_id },
                        }"
                        >{{ book.author.full_name }}</router-link
                      >
                    </h6>
                    <small>Author</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container" v-if="isHomeCall">
        <router-link class="btn-accent-arrow" :to="{ name: 'Books' }">
          View all books <i class="fa fa-arrow-right"></i>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Books",
  props: { books: Array, isHomeCall: Boolean },
  data() {
    return {
      container: "container sm:px-10",
    };
  },
  methods: {
    getImgUrl(auhtor_id) {
      return "https://i.pravatar.cc/150?img=" + auhtor_id;
    },
  },
  mounted() {},
  created() {},
};
</script>

<style scoped>
.wrapper {
  margin: 10vh;
}
.card {
  border: none;
  transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
  overflow: hidden;
  border-radius: 20px;
  min-height: 450px;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.2);
}
@media (max-width: 768px) {
  .card {
    min-height: 350px;
  }
}
@media (max-width: 420px) {
  .card {
    min-height: 300px;
  }
}
.card.card-has-bg {
  transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
  background-size: 120%;
  background-repeat: no-repeat;
  background-position: center center;
}
.card.card-has-bg:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: inherit;
  -webkit-filter: grayscale(1);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);
}
.card.card-has-bg:hover {
  transform: scale(0.98);
  box-shadow: 0 0 5px -2px rgba(0, 0, 0, 0.3);
  background-size: 130%;
  transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
}
.card.card-has-bg:hover .card-img-overlay {
  transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
  background: #234f6d;
  background: linear-gradient(
    0deg,
    rgba(4, 69, 114, 0.5) 0%,
    rgba(4, 69, 114, 1) 100%
  );
}
.card .card-footer {
  background: none;
  border-top: none;
}
.card .card-footer .media img {
  border: solid 3px rgba(255, 255, 255, 0.3);
}
.card .card-meta {
  color: #26bd75;
}
.card .card-body {
  transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
}
.card:hover {
  cursor: pointer;
  transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
}
.card:hover .card-body {
  margin-top: 30px;
  transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
}
.card .card-img-overlay {
  transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
  background: #234f6d;
  background: linear-gradient(
    0deg,
    rgba(35, 79, 109, 0.3785889355742297) 0%,
    rgba(69, 95, 113, 1) 100%
  );
}
</style>