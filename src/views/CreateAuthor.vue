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