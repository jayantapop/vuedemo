<template>
 <section class="o-main-banner">
       <div class="o-banner-text">
           <h6>Welcome: <span>{{ loggedusername }}</span></h6>
            <h1>{{ bannerText.name }}</h1>
            <div class="o-devider"><span></span></div>
            <p>
                {{ bannerText.details }}
            </p>
            <div class="o-banner-button">
<!--                <a href="#">Find out more</a>-->
           <router-link to="about">Find out more</router-link>
            </div>
       </div>
    </section>
</template>

<script>
    import axios from 'axios';
export default {
  name: 'banner',
  data () {
    return {
        loggedusername:'',
        bannerText: {
            name:'YOUR FAVORITE SOURCE OF FREE BOOTSTRAP THEMES',
            details: 'Start Bootstrap can help you build better websites using the Bootstrap CSS framework! Just download your template and start going, no strings attached!'
        }
    }
  },
    methods:{
            
    },
    mounted() {
        //console.log('from home vue',this.$session.has('user'));
        const loggedUser = this.$session.get('user').useremail;
        //console.log(loggedUser.useremail);
        axios.get('https://vue-demo-6ee09.firebaseio.com/user.json')
            .then((response) => {
           //console.log(response.data);
            for(let key in response.data){
                // console.log(key, response.data[key].useremail, loggedUser)
                if(response.data[key].useremail === loggedUser){
                    //console.log(response.data[key].userfirstname)
                    this.loggedusername = response.data[key].userfirstname.charAt(0).toUpperCase() + response.data[key].userfirstname.slice(1);
                    
                }
                
            }
            
        })
            
        
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
