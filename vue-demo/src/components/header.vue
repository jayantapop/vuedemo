<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="/">Start Bootstrap</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li v-for="item in menu" v-bind:class="{ active: isActive, 'nav-item': true }">
              <a class="nav-link" :href="item.navURL">{{ item.navName }}
<!--                <span class="sr-only">(current)</span>-->
              </a>
            </li>
            <li>
                <a href="javascript:void(0)" class="nav-link logout-link" v-on:click="logout">
                    Logout
                </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
    
export default {
  name: 'header',
  data () {
    return {
        isActive:true,
        //menu: ['Home','About','Services','Contact']
        menu:[
            {
                navURL:'#/',
                navName:'Home',   
            },
            {
                navURL:'#/about',
                navName:'About',   
            },
            {
                navURL:'#/services',
                navName:'Services',   
            },
            {
                navURL:'#/contact',
                navName:'Contact',   
            },
           
        ]
    }
  },
    methods:{
        logout(){
            //alert('logout')
            this.$session.destroy();
            this.$router.push('/login')
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
