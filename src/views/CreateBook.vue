<template>
  <section class="new-book">
    <h1 class="title">Create book</h1>
    <form class="book-form row">
      <div class="form-field col-lg-6">
        <input
          id="name"
          class="input-text js-input"
          type="text"
          required
          v-model="bookName"
        />
        <label class="label" for="name">Title</label>
      </div>
      <div class="form-field col-lg-6">
        <input
          id="ISBN"
          class="input-text js-input"
          type="text"
          required
          v-model="bookIsbn"
        />
        <label class="label" for="ISBN">ISBN</label>
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
        <router-link class="mt-3" :to="{ name: 'CreateAuthor' }"
          >Create Author</router-link
        >
      </div>
      <div class="form-field col-lg-12">
        <p style="color: red" v-show="duplicate">
          This book already exists with another author.
        </p>

        <input
          class="submit-btn"
          type="button"
          value="Submit"
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
      duplicate: false,
      allAuthors: null,
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

    async submitData() {
      let Data = {
        name: this.bookName.trim(),
        isbn: this.bookIsbn.trim(),
        author_id: this.bookAuthor,
      };
      console.log("Submiting data: ", Data);

      let endpoint = "/books/";
      apiService(endpoint, "POST", Data)
        .then((data) => {
          console.log("data: ", data);

          if (data.status === "success") {
            // toast.success("Created new folder!");
            this.$router.push({
              name: "BookDetail",
              params: { book_id: data.result.id },
            }); // push to FolderDetail page
          } else {
            if (data.result === "Duplicate Book") {
              this.duplicate = true;
            }
            console.log("Status is error => ", data.result);
            // toast.error("An error occured!");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  async created() {
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
};
</script>


<style scoped>
  @import "../assets/css/form-style.css";
</style>
