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
@import "assets/icomoon/icomoon.css";
@import "assets/css/normalize.css";
@import "assets/css/vendor.css";
@import "assets/css/style.css";
</style>
