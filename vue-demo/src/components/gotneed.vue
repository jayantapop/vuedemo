<template>
 <section class="o-got-section">
       <div class="container">
           <div class="row">
               <div class="col-lg-12">
                   <h1>
                       {{ haveGot.name }}
                   </h1>
                   <div class="o-devider-white"><span></span></div>
                    <p>
                        {{ haveGot.details }}
                    </p>
                    <div class="o-banner-button-inverse">
                        <router-link to="services">Get in touch</router-link>
                    </div>
               </div>
           </div>
       </div>
    </section>
</template>

<script>
export default {
  name: 'gotneed',
  data () {
    return {
        haveGot: {
            name:'We have got what you need!',
            details: 'Start Bootstrap can help you build better websites using the Bootstrap CSS framework! Just download your template and start going, no strings attached! Start Bootstrap can help you build better websites using the Bootstrap! Just download your template and start going, no strings attached!'
        },
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
