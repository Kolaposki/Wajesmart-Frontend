<template>

<div>

  <div id="header-wrap" >
    <header id="header">
      <div class="container">
        <div class="inner-content">
          <div class="grid">
            <div class="main-logo">
              <a href="#"><img src="./assets/images/main-logo.png" alt="logo" /></a>
            </div>

            <nav id="navbar">
              <div class="main-menu">
                <ul class="menu-list">
                  <li class="menu-item active">
                    <a href="#home" data-effect="Home">Home</a>
                  </li>
                  <li class="menu-item">
                    <a href="#about" class="nav-link" data-effect="About"
                      >Books</a
                    >
                  </li>
                  <li class="menu-item">
                    <a href="#pages" class="nav-link" data-effect="Pages"
                      >Authors</a
                    >
                  </li>
                  <li class="menu-item">
                    <div class="search-bar">
                      <a
                        href="#"
                        class="search-button search-toggle"
                        data-selector="#header-wrap"
                      >
                        <i class="icon icon-search"></i>
                        <span>Search</span>
                      </a>
                      <form role="search" method="get" class="search-box">
                        <input
                          class="search-field text search-input"
                          placeholder="Search"
                          type="search"
                        />
                      </form>
                    </div>
                  </li>
                </ul>

                <div class="hamburger">
                  <span class="bar"></span>
                  <span class="bar"></span>
                  <span class="bar"></span>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  </div>
  <!--header-wrap-->

  <section id="billboard" class="pattern-overlay">
 
 
    <div class="main-slider">
      <div class="slider-item">
        <div class="banner-content">
          <h2 class="banner-title">Life of the wild</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut
            magna velit eleifend. Amet, quis urna, a eu.
          </p>
          <div class="btn-wrap">
            <a href="#" class="btn-outline-accent btn-accent-arrow"
              >Read More<i class="icon icon-ns-arrow-right"></i
            ></a>
          </div>
        </div>
        <!--banner-content-->
        <img src="./assets/images/main-banner1.jpg" alt="banner" class="banner-image" />
      </div>
      <!--slider-item-->
    </div>
  </section>

  <Authors/>

  <Books/>
  </div>
</template>

<script>
import Authors from "@/components/Authors";
import Books from "@/components/Books";

export default {
  
  name: "App",
  components: {Authors,Books},
};
</script>

<style>
@import "assets/css/normalize.css";
@import "assets/css/vendor.css";
@import "assets/css/style.css";
</style>
