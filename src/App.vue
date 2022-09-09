<template>
  <div id="mainApp">
    <Header />
    <router-view />

    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default {
  name: "App",
  components: { Footer, Header },
  data() {
    return {};
  },
  mounted() {},
  created() {
   
  },
  beforeCreate() {},
  computed: {},
};
</script>

<style>


/* @import "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.3.1/js/bootstrap.min.js"; */
@import "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.1/js/bootstrap.min.js";
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";

@import "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap";
@import "assets/css/style.css";
@import "assets/css/style2.css";
@import "assets/css/responsive.css";
</style>
