<template>

  <div class="line">
    <textarea v-model="texto" rows="30" cols="80"></textarea>
  </div>

  <div class="line">
    
      <button v-on:click="encode">Encode</button>
      <button v-on:click="decode">Decode</button>

  </div>

</template>


<style scoped>
  .line{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
    flex-direction: row;
    color: #FFF;
  }

  form{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
    flex-direction: row;
  }

  .block{
    margin: 10px;
  }

  .vue-number-input{
    margin-top: 10px;
    justify-content: inline;
  }

  vue-select{
    margin: 10px;
  }

  button{
    background-color: white;
    width: 150px;
    height: 40px;
  }

  button:hover{
    background-color:#52b8ef;
    transition: 0.7s;
    text-align: center;
  }

  textarea{
    border-radius: 4px;
  }
  


</style>
<script>
export default {
  data() {
    return {
      texto: "dsdsd", 
    };
  },
  methods: {
    encode(){
      alert("Encode");
    },
    decode(){
      alert("Decode");
    }
  },
  
};
</script>