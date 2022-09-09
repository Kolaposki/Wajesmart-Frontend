<template>
   
      <section id="quotation" class="align-center">
        <div class="inner-content">
            <h2 class="section-title divider">Quote of the day</h2>
            <blockquote >
                <q>“The more that you read, the more things you will know. The more that you learn, the more places you’ll go.”</q>
                <div class="author-name">Dr. Seuss</div>
            </blockquote>
        </div>
    </section>

</template>

<script>
export default {
  name: "Quote",
}
</script>

<style>
@import "../assets/css/new-style.css";

/*----- Quotation Section
--------------------------------------------------------------*/

#quotation .section-title.divider,
#quotation .section-title.divider:after {
    margin: 0 auto;
}

#quotation blockquote {
    width: 40%;
    margin: 0 auto;
    margin-bottom: 180px;
}

#quotation q {
    display: block;
    font-size: 1.6em;
    padding: 40px 0;
}

#quotation .author-name {
    font-family: "Prata", Georgia, serif;
    font-size: 1.4em;
}

@media screen and (max-width: 1320px) {
    #quotation blockquote {
        width: 60%;
    }
}


</style>