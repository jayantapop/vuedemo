<template>
 <div>
     <!-- Main Header start -->
   <mainheader></mainheader>
   <!-- Main Header end -->
   
   <div class="about">
   <p>{{ id }}</p>
    <h1>What is a Crypto-Currency?</h1>
    <p>
      It's a digital currency in which encryption techniques are used to regulate the generation of units of currency 
      and verify the transfer of funds, operating independently of a central bank.
    </p>
  </div>
 </div>
  
</template>

<script>
    import mainheader from './header.vue';
export default {
   name: 'Images',
   components: {
     mainheader,
   },
   data(){
    return{
        id : parseInt(this.$route.params.id),
        item : {},
        quantity : "0"
        }
    },
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
