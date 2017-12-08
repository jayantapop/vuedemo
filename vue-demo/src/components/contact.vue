<template>
    <div>
        <section class="service-section">
          <div class="container">
            <div class="row">
             <div class="col-lg-12 ">
                   <h1 class="common-heading">
                       Contact Us
                   </h1>
                   <div class="o-devider"><span></span></div>
                   <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>  
        </div>
     
            <div class="row">
          <div class="col-lg-12">
            <form id="" class="contact-form" name="sentMessage" novalidate="">
              <div class="row">
                <div class="col-md-6">
                 
                  <div class="form-group contact-input">
                  <label class="label">First Name <span v-show="errors.has('contactname')" class="help is-danger">{{ errors.first('contactname') }}</span></label>
                   <p class="control has-icon has-icon-right">
                        <input name="contactname" v-model="contactname" v-validate.initial="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('contactname'),'form-control' : true}" type="text" placeholder="First Name">
                    </p>
                  </div>
                  
                  <div class="form-group contact-input">
                  <label class="label">Last Name <span v-show="errors.has('contactlastname')" class="help is-danger">{{ errors.first('contactlastname') }}</span></label>
                    <p class="control has-icon has-icon-right">
                        <input name="contactlastname" v-model="contactlastname" v-validate.initial="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('contactlastname'),'form-control' : true }" type="text" placeholder="Last Name">   
                    </p>
                  </div>
                  
                  <div class="form-group contact-input">
                  <label class="label">Email <span v-show="errors.has('contactemail')" class="help is-danger">{{ errors.first('contactemail') }}</span></label>
                    <p class="control has-icon has-icon-right">
                        <input name="contactemail" v-model="contactemail" v-validate.initial="'required|email'" :class="{'input': true, 'is-danger': errors.has('contactemail'),'form-control' : true }" type="text" placeholder="Email">  
                    </p>   
                  </div>

                </div>
                <div class="col-md-6">
                 <div class="form-group contact-input">
                  <label class="label">Full Name</label>
                    <p class="control has-icon has-icon-right">
                        <input :value="contactfullname" name="contactfullname" :class="{'form-control' : true }" type="text" placeholder="Full Name" readonly>
                    </p>
                  </div>
                  
                  <div class="form-group contact-input">
                   <label class="label">Your Message (optional)</label>
                    <textarea class="form-control" id="message" rows="4" placeholder="Your Message" required="" v-model="contactmsg"></textarea>
                  </div>
                </div>
                <div class="clearfix"></div>
                <div class="col-lg-12 text-center">
                  <button id="sendMessageButton" class="btn submit-btn" type="button" v-on:click="formSubmit" data-toggle="modal">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
          </div>
        </section>
        <!-- Contact Modal -->
        <div class="modal fade" id="myModal" role="dialog">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                  <h4 class="modal-title">Modal Header</h4>
                </div>
                <div class="modal-body">
                 <ul class="contact-modal-detail">
                     <li><strong>Name:</strong> {{contactname}}</li>
                     <li><strong>Email:</strong> {{contactemail}}</li>
                     <li><strong>Full Name:</strong> {{contactfullname}}</li>
                     <li><strong>Description:</strong> {{contactmsg}}</li>
                 </ul>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'contactform',
  data () {
    return {
        contactname: '',
        contactlastname:'',
        contactemail:'',
        contactmsg:'',
    }
  },
    methods: {
        formSubmit: function (event) {
            //alert('Hello ' + this.contactname + '!')
       
              this.$validator.validateAll().then((result) => {
                if (result) {
                  // eslint-disable-next-line
                  alert('From Submitted!');
                  $('#myModal').modal('show');
                  return;
                }

                alert('Correct them errors!');
              });

        }
    },
    computed: {
    contactfullname() {
      return `${this.contactname} ${this.contactlastname}`;
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
