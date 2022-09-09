<template>
  <section class="new-book">
    <h1 class="title">Update book</h1>
    <form class="book-form row">
      <div class="form-field col-lg-6">
        <input
          id="name"
          class="input-text js-input"
          type="text"
          required
          v-model="bookName"
        />
        <label class="label mb-3" for="name">Title</label>
      </div>
      <div class="form-field col-lg-6">
        <input
          id="ISBN"
          class="input-text js-input"
          type="text"
          required
          v-model="bookIsbn"
        />
        <label class="label mb-3" for="ISBN">ISBN</label>
      </div>
      <div class="form-field col-lg-12">
        <label class="label mb-5" for="bookAuthor">Author's Name</label>

        <select
          class="custom-select mt-3"
          name="bookAuthor"
          id="bookAuthor"
          v-model="bookAuthor"
        >
          <option
            :value="author.id"
            v-for="author in allAuthors"
            :key="author.id"
          >
            {{ author.full_name }}
          </option>
        </select>
        <a href="#" class="mt-3">Create Author</a>
      </div>


      <div class="form-field col-lg-12">
      <p style="color:red;" v-show="duplicate">This book already exists with another author.</p>

        <input
          class="submit-btn"
          type="button"
          value="Update"
          @click="submitForm"
        />
      </div>
    </form>
  </section>
</template>

<script>
import { apiService } from "@/common/api.service.js";

export default {
  name: "CreateBook",
  data() {
    return {
      bookName: "",
      bookIsbn: "",
      bookAuthor: "",
      allAuthors: null,
      duplicate: false,
    };
  },

  methods: {
    submitForm() {
      console.log("submitForm clicked");
      // check empty string
      if (
        this.bookName.replace(/^\s+|\s+$/gm, "").length < 1 ||
        this.bookIsbn.replace(/^\s+|\s+$/gm, "").length < 1
      ) {
        console.log("Please fill in the name");
        return;
      }

      this.submitData();
    },

    getAuthors() {
      let endpoint = "/authors/";

      apiService(endpoint)
        .then((data) => {
          console.log("book detial data: ", data);
          this.allAuthors = data.authors;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async submitData() {
      let Data = {
        name: this.bookName.trim(),
        isbn: this.bookIsbn.trim(),
        author_id: this.bookAuthor,
      };
      console.log("Submiting data: ", Data);

      let endpoint = "/book/" + this.$route.params.book_id;
      apiService(endpoint, "PUT", Data)
        .then((data) => {
          console.log("data: ", data);

          if (data.status === "success") {
            this.$router.push({
              name: "BookDetail",
              params: { book_id: data.result.id },
            }); // push to BookDetail page
          } else {
            if(data.result === 'Duplicate Book'){
              this.duplicate = true
            }
            console.log("Status is error => ", data.result);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  async created() {
    let endpoint =
      "/book/" + this.$route.params.book_id;

    apiService(endpoint)
      .then((data) => {
        console.log("book detial data: ", data);
        this.bookName = data.book.name;
        this.bookIsbn = data.book.isbn;
        this.bookAuthor = data.book.author.id;
      })
      .catch((error) => {
        console.log(error);
      });

    this.getAuthors();
  },
};
</script>

<style scoped>
@import "../assets/css/form-style.css";
</style>