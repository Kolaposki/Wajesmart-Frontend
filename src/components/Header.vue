<template>
  <div id="header-wrap">
    <header id="header">
      <div class="container">
        <div class="inner-content">
          <div class="grid">
            <div class="main-logo">
              <a href="#"
                ><img src="../assets/images/main-logo.png" alt="logo"
              /></a>
            </div>

            <nav id="navbar">
              <div class="main-menu">
                <ul class="menu-list">
                  <li class="menu-item active">
                    <router-link
                      class="btn-accent-arrow"
                      :to="{ name: 'Home' }"
                    >
                      Home
                    </router-link>
                  </li>
                  <li class="menu-item">
                    <router-link class="nav-link" :to="{ name: 'Books' }">
                      Books
                    </router-link>
                  </li>
                  <li class="menu-item">
                    <router-link class="nav-link" :to="{ name: 'Authors' }">
                      Authors
                    </router-link>
                  </li>
                  <li class="menu-item">
                    <router-link class="nav-link" :to="{ name: 'CreateBook' }">
                      New Book
                    </router-link>
                  </li>

                  <li class="menu-item">
                    <router-link
                      class="nav-link"
                      :to="{ name: 'CreateAuthor' }"
                    >
                      New Author
                    </router-link>
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
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
</style>