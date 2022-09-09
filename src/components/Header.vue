<template>
  <div id="header-wrap">
    <!-- header section strats -->
    <header class="header_section">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container">
          <router-link class="navbar-brand" :to="{ name: 'Home' }">
            <span>Bookclub</span>
          </router-link>

          <button
            @click="isCollapsed = !isCollapsed"
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class=""> </span>
          </button>

          <div
            :class="{ collapse: isCollapsed }"
            class="navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <router-link class="nav-link" :to="{ name: 'Home' }">
                  Home <span class="sr-only">(current)</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'Books' }">
                  Books
                </router-link>
              </li>

              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'Authors' }">
                  Authors
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'CreateBook' }">
                  New Book
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'CreateAuthor' }">
                  New Author
                </router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    <!-- end header section -->
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isCollapsed: true,
    };
  },
  watch: {
    $route() {
      this.isCollapsed = true;
    },
  },
};
</script>

<style>
</style>