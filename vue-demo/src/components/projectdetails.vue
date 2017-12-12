<template>
    <section>
        <div class="container">
          <!-- Page Heading -->
          <h1 class="my-4">Page Heading
            <small>Secondary Text</small>
          </h1>
          <div class="row">
              <paginate
                  name="languages"
                  :list="projectDetails"
                  :per="4"
                >
                <div class="col-lg-3 col-sm-6 portfolio-item" v-for="item in paginated('languages')">
                  <div class="card h-100">
                   <div class="product-img-area">
                       <router-link :to="'images/' + item.id"><img class="card-img-top" :src="item.projectimage" alt=""></router-link>
                   </div>
                    <div class="card-body project-title">
                      <h4 class="card-title">
                       <router-link :to="'images/' + item.id">{{ item.projectname }}</router-link>
                      </h4>
                      <p class="card-text">{{ item.projectdetail }}</p>
                    </div>
                  </div>
                </div>
              </paginate>
          </div>
          <div class="project-pagination">
              <paginate-links 
              for="languages"
              
          ></paginate-links>
          </div>
          
        </div>
    </section>
</template>

<script>
export default {
  name: 'projectdetails',
  data () {
    return {
        paginate: ['languages'],
        projectDetails: [
            {
                id: 1,
                projectimage:'../../src/assets/portfolio1.jpg',
                projectname: 'Lorem ipsum dolor',
                projectdetail:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem'
            },
            {
                id: 2,
                projectimage:'http://placehold.it/700x400',
                projectname: 'Sit amet, consectetur',
                projectdetail:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem'
            },
            {
                id: 3,
                projectimage:'../../src/assets/portfolio2.jpg',
                projectname: 'Adipisicing elit',
                projectdetail:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem'
            },
            {
                id: 4,
                projectimage:'http://placehold.it/700x400',
                projectname: 'Amet numquam aspernatur',
                projectdetail:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem'
            },
            {
                id: 5,
                projectimage:'../../src/assets/portfolio1.jpg',
                projectname: 'Eum quasi sapiente',
                projectdetail:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem'
            },
            {
                id: 6,
                projectimage:'http://placehold.it/700x400',
                projectname: 'Nesciunt? Voluptatibus sit',
                projectdetail:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem'
            },
            {
                id: 7,
                projectimage:'../../src/assets/portfolio2.jpg',
                projectname: 'Repellat sequi itaque deserunt',
                projectdetail:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem'
            },
            {
                id: 8,
                projectimage:'http://placehold.it/700x400',
                projectname: 'Dolores in, nesciunt',
                projectdetail:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem'
            },
            {
                id: 9,
                projectimage:'../../src/assets/portfolio1.jpg',
                projectname: 'Illum tempora ex quae',
                projectdetail:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem'
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
