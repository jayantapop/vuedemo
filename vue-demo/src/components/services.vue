<template>
 <div>
   <!-- Main Header start -->
       <mainheader></mainheader>
   <!-- Main Header end -->
   
       <div class="services-area">
           <div class="container">
                <div class="row">
                     <div class="col-lg-12 ">
                      <h1>Services</h1>
                      <h1>What is a Crypto-Currency?</h1>
                      <p>
                          It's a digital currency in which encryption techniques are used to regulate the generation of units of currency 
                          and verify the transfer of funds, operating independently of a central bank.
                      </p>
                    </div>
                    <div class="col-lg-12 my-5">
                      <Vuelightbox id="mylightbox"
                        :images="images"
                        :image_class=" 'img-responsive img-rounded' "
                        :album_class=" 'my-album-class' "
                        :options="options">
                      </Vuelightbox>
                    </div>
                </div>
           </div>
      </div>
  
  <!-- Footer start -->
       <mainfooter></mainfooter>
   <!-- Footer end -->
 </div>
  
</template>

<script>
    import mainheader from './header.vue';
    import mainfooter from './footer.vue';
    import Vuelightbox from './service-image';
export default {
   name: 'ServicesPage',
   components: {
     mainheader,
       mainfooter,
       Vuelightbox
   },
   data () {
    return {
        images : [
          {
              src : '../../src/assets/lightbox-img1.jpg',
              title : 'Image 1'
          },
          {
              src : '../../src/assets/lightbox-img2.jpg',
              title : 'Image 2'
          },
          {
              src : '../../src/assets/lightbox-img3.jpg',
              title : 'Image 3'
          },
          {
              src : '../../src/assets/lightbox-img4.jpg',
              title : 'Image 4'
          },
        ],
        options : {
            closeText : 'X'
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
