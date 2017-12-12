<template>
 <div class="login-bg">
   <!-- container -->
    <div class="container">
       <!-- login-container -->
        <div class="card card-container">
           <h2 class="login-header">Login</h2>
            <img id="profile-img" class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
            <div class="login-error" v-if="errorlog">Login Failed</div>
            <p id="" class="profile-name-card">** Use email 'admin@gmail.com' and password 'admin' or register your own</p>
            <!-- login form -->
            <form @submit.prevent="LoginPage()" class="form-signin">
                <span id="reauth-email" class="reauth-email"></span>
               
                <label class="label">Email ID</label>
                <input type="email" placeholder="Email address" v-model="loguser" name="loguser" v-validate.initial="'required|email'" :class="{'input': true, 'is-danger': errors.has('loguser'),'form-control' : true}">
                
                <label class="label">Password</label>
                <input type="password" placeholder="Password" v-model="logpass" name="logpass" v-validate.initial="'required|min:5'" :class="{'input': true, 'is-danger': errors.has('logpass'),'form-control': true}">
                
<!--
                <div id="remember" class="checkbox">
                    <label>
                        <input type="checkbox" value="remember-me"> Remember me
                    </label>
                </div>
-->
                
                <button class="btn btn-lg btn-primary btn-block btn-signin" type="submit">Sign in</button>
            </form>
            <!-- /login form -->
            <p class="register-link">Don't have login ID 
                <router-link class="forgot-password" to="registration">Register</router-link>
            </p>
        </div>
        <!-- /login-container -->
    </div>
    <!-- /container -->
 </div>
  
</template>

<script>
    import axios from 'axios';
export default {
    name: 'LoginPage',
    components: {
    
    },
    data () {
     return {
        loguser:'',
        logpass:'',
        errorlog:false
      //msg: 'Welcome to Your Vue.js App'
     }
    },
    methods:{
        LoginPage(){
            //console.log(this.loguser,this.logpass);
            axios.get('https://vue-demo-6ee09.firebaseio.com/user.json')
            .then((response) => {
                let flag = 0;
                for(let key in response.data){
                    if(response.data[key].useremail === this.loguser && response.data[key].userpassword === this.logpass){
                        flag = 1;
                        this.$session.start();
                        this.$session.set('user', {useremail : this.loguser});
                        this.$router.push('/');                    
                    }
                }
                if(!flag){                          
                    this.errorlog = true;
                    this.loguser = this.logpass = '';
                }           
            })
            .catch((error) => {
                alert('something went wrong.please try again.');
            }); 
            
            /*if(this.loguser === "admin@gmail.com" && this.logpass === "admin"){
                this.$session.start();
                this.$session.set('user', {username : this.loguser});
                this.$router.push('/');                    
            }
            else{
                $('.login-error').show();
            }*/
         
        }
    },
    mounted(){
        if(this.$session.has('user')){
            this.$router.push('/');
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
