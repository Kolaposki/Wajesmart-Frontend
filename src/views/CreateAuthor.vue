<template>
  <section class="new-book">
    <h1 class="title">Create Author</h1>
    <form class="book-form row">
      <div class="form-field col-lg-6">
        <input
          id="firstName"
          class="input-text js-input"
          type="text"
          required
          v-model="firstName"
        />
        <label class="label" for="firstName">First Name</label>
      </div>
      <div class="form-field col-lg-6">
        <input
          id="lastName"
          class="input-text js-input"
          type="text"
          required
          v-model="lastName"
        />
        <label class="label" for="lastName">Last Name</label>
      </div>
     
     
      <div class="form-field col-lg-12">
        <p style="color: red" v-show="duplicate">
          This author name already exists.
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
  name: "CreateAuthor",
  data() {
    return {
      firstName: "",
      lastName: "",
      duplicate: false,
    };
  },

  methods: {
    submitForm() {
      console.log("submitForm clicked");
      // check empty string
      if (
        this.firstName.replace(/^\s+|\s+$/gm, "").length < 1 ||
        this.lastName.replace(/^\s+|\s+$/gm, "").length < 1
      ) {
        console.log("Please fill in the name");
        return;
      }

      this.submitData();
    },

    async submitData() {
      let Data = {
        first_name: this.firstName.trim(),
        last_name: this.lastName.trim(),
      };
      console.log("Submiting data: ", Data);

      let endpoint = "/author/";
      apiService(endpoint, "POST", Data)
        .then((data) => {
          console.log("data: ", data);

          if (data.status === "success") {
            this.$router.push({
              name: "Authors",
            }); // push to AllAuthors page
          } else {
            if (data.result === "Duplicate Author") {
              this.duplicate = true;
            }
            console.log("Status is error => ", data.result);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

};
</script>

<style scoped>
  @import "../assets/css/form-style.css";
</style>