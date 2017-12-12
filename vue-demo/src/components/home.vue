<template>
<div>
  <!-- Main Header start -->
   <mainheader></mainheader>
   <!-- Main Header end -->
   
   <!-- Main Banner start -->
   <mainbanner></mainbanner>
   <!-- Main Banner end -->
   
   <!-- Project Details start -->
   <projectdetail></projectdetail>
   <!-- Project Details end -->
   
   <!-- Got Need start -->
   <gotneedsection></gotneedsection>
   <!-- Got Need end -->
   
   <!-- Service List start -->
   <servicelists></servicelists>
   <!-- Service List end -->
   
   <!-- Portfolio start -->
   <portfolios></portfolios>
   <!-- Portfolio end -->
   
   <!-- Contact start -->
   <contactform></contactform>
   <!-- Contact end -->
   
   <!-- Footer start -->
   <mainfooter></mainfooter>
   <!-- Footer end -->
   
</div>
</template>

<script>
    import mainheader from './header.vue';
    import mainbanner from './banner.vue';
    import projectdetail from './projectdetails.vue';
    import gotneedsection from './gotneed.vue';
    import servicelists from './servicelist.vue';
    import portfolios from './portfolio.vue';
    import contactform from './contact.vue';
    import mainfooter from './footer.vue';
    
export default {
  name: 'home',
  components: {
    mainheader,
    mainbanner,
    projectdetail,
    gotneedsection,
    servicelists,
    portfolios,
    contactform,
    mainfooter,
  },
  data () {
    return {
      //msg: 'Welcome to Your Vue.js App'
    }
  },
    mounted() {
        //console.log('from home vue',this.$session.has('user'));
        if(!this.$session.has('user')){
            this.$router.push('/login');
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
