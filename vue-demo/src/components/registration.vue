<template>
 <div class="login-bg">
   <!-- container -->
    <div class="container">
       <!-- login-container -->
        <div class="card card-container">
           <h2 class="login-header">Registration</h2>
<!--            <img id="profile-img" class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />-->
           <div class="login-error already-exist" v-if="errorlog">User already exists</div>
            <h5 class="registration-display">Welcome: <span>{{ registrationFullname }}</span></h5>
            <!-- login form -->
            <form class="form-signin" @submit.prevent="registration()"> 
                <span id="reauth-email" class="reauth-email"></span>
                
                <label class="label">First Name <span v-show="errors.has('regfirstname')" class="help is-danger">{{ errors.first('regfirstname') }}</span></label>
                <input name="regfirstname" v-model="regfirstname" v-validate.initial="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('regfirstname'),'form-control' : true}" type="text" placeholder="First Name">
                
                <label class="label">Last Name <span v-show="errors.has('reglastname')" class="help is-danger">{{ errors.first('reglastname') }}</span></label>
                <input name="reglastname" v-model="reglastname" v-validate.initial="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('reglastname'),'form-control' : true}" type="text" placeholder="Last Name">

                <label class="label">Email ID <span v-show="errors.has('regemail')" class="help is-danger">{{ errors.first('regemail') }}</span></label>
                <input name="regemail" v-model="regemail" v-validate.initial="'required|email'" :class="{'input': true, 'is-danger': errors.has('regemail'), 'form-control' : true}" type="email" placeholder="Email address" />
                
                <label class="label">Password <span v-show="errors.has('regpass')" class="help is-danger">{{ errors.first('regpass') }}</span></label>
                <input name="regpass" v-model="regpass" v-validate.initial="'required|min:5'" :class="{'input': true, 'is-danger': errors.has('regpass'), 'form-control': true}" type="password" placeholder="Password" />
                
                <label class="label">Confirm Password <span v-show="errors.has('regconfpass')" class="help is-danger">{{ errors.first('regconfpass') }}</span></label>
                <input name="regconfpass" v-model="regconfpass" v-validate="'required|confirmed:regpass'" :class="{'input': true, 'is-danger': errors.has(regconfpass), 'form-control': true}" type="password" placeholder="Confirm Password" />

               
                <button class="btn btn-lg btn-primary btn-block btn-signin" type="submit">Sign Up</button>
            </form>
            <!-- /login form -->
            <p class="register-link">Already have login ID 
                <router-link class="forgot-password" to="login">Login</router-link>
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
    name: 'RegistrationPage',
    components: {
    
    },
    data () {
     return {
        regfirstname:'',
         reglastname:'',
         regemail:'',
         regpass:'',
         regconfpass:'',
         errorlog:false
     }
    },
    methods:{
        registration(){
            //console.log(this.regfirstname,this.reglastname);
            
            //Get database for exsisting login email iD
            axios.get('https://vue-demo-6ee09.firebaseio.com/user.json')
            .then((response) => {
                let flag = 0;
                for(let key in response.data){
                    if(response.data[key].useremail === this.regemail){
                        flag = 1;
                        console.log('user matched');
                        this.errorlog = true;
                        return;
                    }
                }
                if(!flag){
                    // post user details if there will be new user
                    axios.post('https://vue-demo-6ee09.firebaseio.com/user.json', { userfirstname:this.regfirstname , userlastname:  this.reglastname, useremail:this.regemail,userpassword:this.regpass})
                    .then((response) => {
                        alert('Registration Successfull');
                        this.errorlog = false;
                        this.regfirstname = this.reglastname = this.regemail = this.regpass = this.regconfpass = '';

                    })
                    .catch((error) => {
                        console.log(error.message);
                    });
                }  
                       
            })
            
            // POST 
            /*axios.post('https://vue-demo-6ee09.firebaseio.com/user.json', { userfirstname:this.regfirstname , userlastname:      this.reglastname, useremail:this.regemail,userpassword:this.regpass})
             .then((response) => {
               alert('Registration Successfull');
               this.regfirstname = this.reglastname = this.regemail = this.regpass = this.regconfpass = '';

             })
             .catch((error) => {
               console.log(error.message);
             });*/
        }
        
    },
    computed:{
        registrationFullname(){
            return `${this.regfirstname} ${this.reglastname}`;
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
