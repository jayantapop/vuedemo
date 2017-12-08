<template>
 <section>
      <div class="col-lg-12 o-no-padding">
         <ul class="portf-list">
             <li v-for="item in portfolioList">
                 <a href="#" class="portfolio-list">
                  <img :src="item.portfolioImage" />
                   <div class="portfolio-overlay-area">
                       <div class="portfolio-overlay">
                            <h5>{{ item.overlayTitle }}</h5>
                            <h2>{{ item.overlayDetail }}</h2>
                        </div>
                   </div>
                </a>
             </li>
         </ul>
      </div>
    </section>
</template>

<script>
export default {
  name: 'portfolio',
  data () {
    return {
        portfolioList:[
            {
                portfolioImage:'../../src/assets/portfolio1.jpg',
                overlayTitle:'Category Name 1',
                overlayDetail:'Project Name 1'
                
            },
            {
                portfolioImage:'../../src/assets/portfolio2.jpg',
                overlayTitle:'Category Name 2',
                overlayDetail:'Project Name 2'
                
            },
            {
                portfolioImage:'../../src/assets/portfolio1.jpg',
                overlayTitle:'Category Name 3',
                overlayDetail:'Project Name 3'
                
            },
            {
                portfolioImage:'../../src/assets/portfolio2.jpg',
                overlayTitle:'Category Name 4',
                overlayDetail:'Project Name 4'
                
            },
            {
                portfolioImage:'../../src/assets/portfolio1.jpg',
                overlayTitle:'Category Name 5',
                overlayDetail:'Project Name 5'
                
            },
            {
                portfolioImage:'../../src/assets/portfolio2.jpg',
                overlayTitle:'Category Name 6',
                overlayDetail:'Project Name 6'
                
            }
            
        ]
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
