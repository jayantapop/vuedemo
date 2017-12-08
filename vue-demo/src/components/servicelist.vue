<template>
 <section class="service-section">
        <div class="container">
           <div class="row">
              <div class="col-lg-12 ">
                   <h1 class="common-heading">
                       At Your Service
                   </h1>
                   <div class="o-devider"><span></span></div>
              </div>
               <div class="col-lg-3 service-list" v-for="item in serviceList">
                  <div><i :class="item.serviceIcon" aria-hidden="true"></i></div>
                   
                   <div class="o-devider"><span></span></div>
                   <h5>{{ item.serviceTitle }}</h5>
                   <p>
                       {{ item.serviceDetails }}
                   </p>
               </div>
           </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'servicelist',
  data () {
    return {
        serviceList:[
            {
                serviceIcon:'fa fa-handshake-o',
                serviceTitle:'Sturdy Templates',
                serviceDetails:'Our templates are updated regularly so they dont break.'
            },
            {
                serviceIcon:'fa fa-balance-scale',
                serviceTitle:'Ready to Ship',
                serviceDetails:'You can use this theme as is, or you can make changes!'
            },
            {
                serviceIcon:'fa fa-thumbs-up',
                serviceTitle:'Up to Date',
                serviceDetails:'We update dependencies to keep things fresh.'
            },
            {
                serviceIcon:'fa fa-bicycle',
                serviceTitle:'Made with Love',
                serviceDetails:'You have to make your websites with love these days!'
            }
        ],
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
