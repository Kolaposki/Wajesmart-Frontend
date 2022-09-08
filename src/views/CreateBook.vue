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

        <select class="custom-select mt-3" name="bookAuthor" id="bookAuthor" v-model="bookAuthor">
          <option :value="author.id" v-for="author in allAuthors" :key="author.id">{{author.full_name}}</option>       
        </select>
        <a href="#" class="mt-3">Create Author</a>
      </div>
      <div class="form-field col-lg-12">
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

      let endpoint = "http://127.0.0.1:8000/api/books/";
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
              console.log("Status is error => ", data.result);
              // toast.error("An error occured!");
            }
        })
        .catch((error) => {
          console.log(error);
        });

      // reset values
    //   this.bookName = "";
    //   this.bookIsbn = "";
    //   this.bookAuthor = "";
    },
  },

  async created() {
    let endpoint = "http://127.0.0.1:8000/api/authors/"

    apiService(endpoint)
      .then((data) => {
        console.log("book detial data: ", data);
        this.allAuthors = data.authors
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css";

.new-book {
  max-width: 800px;
  margin: 50px auto;
  position: relative;
}
.new-book .title {
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 3.2em;
  line-height: 48px;
  padding-bottom: 48px;
  color: #5543ca;
  background: #5543ca;
  background: -moz-linear-gradient(left, #f4524d 0%, #5543ca 100%) !important;
  background: -webkit-linear-gradient(
    left,
    #f4524d 0%,
    #5543ca 100%
  ) !important;
  background: linear-gradient(to right, #f4524d 0%, #5543ca 100%) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
}

.book-form .form-field {
  position: relative;
  margin: 32px 0;
}
.book-form .input-text {
  display: block;
  width: 100%;
  height: 36px;
  border-width: 0 0 2px 0;
  border-color: #5543ca;
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
}
.book-form .input-text:focus {
  outline: none;
}
.book-form .input-text:focus + .label,
.book-form .input-text.not-empty + .label {
  -webkit-transform: translateY(-24px);
  transform: translateY(-24px);
}
.book-form .label {
  position: absolute;
  left: 20px;
  bottom: 11px;
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
  color: #5543ca;
  cursor: text;
  transition: -webkit-transform 0.2s ease-in-out;
  transition: transform 0.2s ease-in-out;
  transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;
}
.book-form .submit-btn {
  display: inline-block;
  background-color: #000;
  background-image: linear-gradient(125deg, #a72879, #064497);
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 16px;
  padding: 8px 16px;
  border: none;
  width: 200px;
  cursor: pointer;
}
</style>