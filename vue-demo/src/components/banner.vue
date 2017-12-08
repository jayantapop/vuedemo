<template>
 <section class="o-main-banner">
       <div class="o-banner-text">
            <h1>{{ bannerText.name }}</h1>
            <div class="o-devider"><span></span></div>
            <p>
                {{ bannerText.details }}
            </p>
            <div class="o-banner-button">
                <a href="#">Find out more</a>
            </div>
       </div>
    </section>
</template>

<script>
export default {
  name: 'banner',
  data () {
    return {
        bannerText: {
            name:'YOUR FAVORITE SOURCE OF FREE BOOTSTRAP THEMES',
            details: 'Start Bootstrap can help you build better websites using the Bootstrap CSS framework! Just download your template and start going, no strings attached!'
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

</style>
