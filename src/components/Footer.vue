<template>
  
       <!-- info section -->

    <section class="info_section ">
      <div class="info_container ">
        <div class="container">
          <div class="row">
            <div class="col-lg-9">
              <div class="info_contact ">
                <div class="row">
                  <div class="col-md-3">
                    <a href="#" class="link-box">
                      <i class="fa fa-map-marker" aria-hidden="true"></i>
                      <span>
                        Location
                      </span>
                    </a>
                  </div>
                  <div class="col-md-5">
                    <a href="#" class="link-box">
                      <i class="fa fa-phone" aria-hidden="true"></i>
                      <span>
                        Call +01 1234567890
                      </span>
                    </a>
                  </div>
                  <div class="col-md-4">
                    <a href="#" class="link-box">
                      <i class="fa fa-envelope" aria-hidden="true"></i>
                      <span>
                        demo@gmail.com
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-5  col-lg-3 mx-auto">
              <div class="info_form ">
                <form action="#">
                  <input type="email" placeholder="Enter Your Email" />
                  <button type="button">
                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div class="info_logo">

              <router-link class="navbar-brand" :to="{ name: 'Home' }">
                      <span>
                Bookclub
              </span>
                    </router-link>

          </div>
          <div class="social-box">
            <a href="">
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a href="">
              <i class="fa fa-youtube" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- end info section -->

    <!-- footer section -->
    <footer class="footer_section">
      <div class="container">
        <p>
          &copy; <span id="displayYear"></span> All Rights Reserved
        </p>
      </div>
    </footer>
    <!-- footer section -->

</template>

<script>
export default {
'name': 'Footer'
}
</script>

<style>

</style>