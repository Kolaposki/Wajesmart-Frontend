<template>
  <div class="team-boxed">
    <div class="container">
      <div class="intro">
        <h2 class="text-center">Featured Authors</h2>
        <p class="text-center">
          Here are the most popular authors
        </p>
      </div>
      <div class="row people">
        <div
          class="col-md-6 col-lg-4 item"
          v-for="author of authors"
          :key="author.id"
        >
          <div class="box">
            <img class="rounded-circle" :src="getImgUrl(author.id)" />
            <h3 class="name">
              <router-link
                :to="{ name: 'UpdateAuthor', params: { author_id: author.id } }"
                >{{ author.full_name }}</router-link
              >
            </h3>
            <p class="title">Author</p>
            <div class="social">
              <a href="#"><i class="fa fa-facebook-official"></i></a
              ><a href="#"><i class="fa fa-twitter"></i></a
              ><a href="#"><i class="fa fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Authors",
  props: { authors: Array },
  methods: {
    getImgUrl(auhtor_id) {
      return 'https://i.pravatar.cc/150?img='+auhtor_id
    },
  },
};
</script>

<style scoped>

.team-boxed {
  color: #313437;
  background-color: #eef4f7;
}

.team-boxed p {
  color: #7d8285;
}

.team-boxed h2 {
  font-weight: bold;
  margin-bottom: 40px;
  padding-top: 40px;
  color: inherit;
}

@media (max-width: 767px) {
  .team-boxed h2 {
    margin-bottom: 25px;
    padding-top: 25px;
    font-size: 24px;
  }
}

.team-boxed .intro {
  font-size: 16px;
  max-width: 500px;
  margin: 0 auto;
}

.team-boxed .intro p {
  margin-bottom: 0;
}

.team-boxed .people {
  padding: 50px 0;
}

.team-boxed .item {
  text-align: center;
}

.team-boxed .item .box {
  text-align: center;
  padding: 30px;
  background-color: #fff;
  margin-bottom: 30px;
}

.team-boxed .item .name {
  font-weight: bold;
  margin-top: 28px;
  margin-bottom: 8px;
  color: inherit;
}

.team-boxed .item .title {
  text-transform: uppercase;
  font-weight: bold;
  color: #d0d0d0;
  letter-spacing: 2px;
  font-size: 13px;
}

.team-boxed .item .description {
  font-size: 15px;
  margin-top: 15px;
  margin-bottom: 20px;
}

.team-boxed .item img {
  max-width: 160px;
    border: 1px solid #ff6f3d;
    padding: 2px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.3s;
    font-size: 0.9rem;
}

h3.name > a{
  color:#ff6f3d !important;
}

.team-boxed .social {
  font-size: 18px;
  color: #a2a8ae;
}

.team-boxed .social a {
  color: inherit;
  margin: 0 10px;
  display: inline-block;
  opacity: 0.7;
}

.team-boxed .social a:hover {
  opacity: 1;
}
</style>
