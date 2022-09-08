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
 
 
</template>

<script>
export default {
'name': 'Header'
}
</script>

<style>

</style>