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
                  :per="3"
                >
                <div class="col-lg-4 col-sm-6 portfolio-item" v-for="item in paginated('languages')">
                  <div class="card h-100">
                    <router-link :to="'images/' + item.id"><img class="card-img-top" :src="item.projectimage" alt=""></router-link>
                    <div class="card-body">
                      <h4 class="card-title">
                        <a href="#">{{ item.projectname }}</a>
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
                projectimage:'http://placehold.it/700x400',
                projectname: 'Project One',
                projectdetail:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem'
            },
            {
                id: 2,
                projectimage:'http://placehold.it/700x400',
                projectname: 'Project Two',
                projectdetail:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem'
            },
            {
                id: 3,
                projectimage:'http://placehold.it/700x400',
                projectname: 'Project Three',
                projectdetail:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem'
            },
            {
                id: 4,
                projectimage:'http://placehold.it/700x400',
                projectname: 'Project Four',
                projectdetail:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem'
            },
            {
                id: 5,
                projectimage:'http://placehold.it/700x400',
                projectname: 'Project Five',
                projectdetail:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem'
            },
            {
                id: 6,
                projectimage:'http://placehold.it/700x400',
                projectname: 'Project Six',
                projectdetail:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem'
            },
            {
                id: 7,
                projectimage:'http://placehold.it/700x400',
                projectname: 'Project Seven',
                projectdetail:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem'
            },
            {
                id: 8,
                projectimage:'http://placehold.it/700x400',
                projectname: 'Project Eight',
                projectdetail:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem'
            },
            {
                id: 9,
                projectimage:'http://placehold.it/700x400',
                projectname: 'Project Nine',
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
