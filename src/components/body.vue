<template>
  <div class="line">
  <h2>Quantidade de famílias diferentes: {{ resultado }}</h2>
  </div>

  <div class="line">

    <div class="block">
      <p>Quantidade de pessoas: {{ pessoas }}</p>
      <vue-number-input v-model="pessoas" :min="4" :max="16" inline controls/>
    </div>
    
    <div class="block">
      <p>Quantidade de relações: {{ relacoes }}</p>
      <vue-number-input v-model="relacoes" :min="0" :max="16" inline controls/> 
    </div>
  </div>

  <div class="line">

      <vue3-tags-input v-model:tags="nomes"
                   @on-select="handleSelectedTag"
                   @on-tags-changed="handleChangeTag"
                   placeholder="Digite os nomes"
                   />
  </div>

  <div class="line">
  <textarea v-model="teste" rows="10" cols="50" readonly></textarea>
    <textarea v-model="texto" rows="10" cols="50" readonly></textarea>
  </div>

  <div class="line">
    
    <form v-on:submit.prevent="getAllData" id="frm">
      <vue-select v-model="nome1" :options="nomes" placeholder="Nome"> </vue-select>
      <vue-select v-model="nome2" :options="parentesco" placeholder="Parentesco"> </vue-select>
      <vue-select v-model="nome3" :options="nomes" placeholder="Nome"> </vue-select>
      <button v-on:click="submit">Enviar</button>
    </form>
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
      pessoas: 8, //mudar
      contador: 0,
      resultado: 0,
      teste: "",
      texto: "",
      nome1: "",
      nome2: "",
      nome3: "",
      relacoes: 1,
      alxiliar: [0 , 0, 0, 0, 0, 0, 0, 0, 0, 0],
      grafico: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
      parentesco: ["filho", "irmao", "mae", "marido", "pai", "tio"],
      nomes: ["Pedro", "Maria", "Josias", "Mangojata",  "Samuel", "Paulo", "Marcos", "Ivane"] 
            
    };
  },
  methods: {
    handleSelectedTag(tag) {
      this.nomes.push(tag);
    },
    handleChangeTag(tags) {
      this.nomes = tags;
    },
    submit : function(){
          console.log(this.nomes);
          if(this.contador >= this.relacoes){
            alert("Você já adicionou todas as relações");
          }else if(!this.nome1 || !this.nome2 || !this.nome3){
            alert("Preencha todos os campos");
          }else if(this.nome1 == this.nome3){
            alert("Você não pode adicionar uma relação com a mesma pessoa");
          }else{
            this.grafico[this.nomes.indexOf(this.nome1)][this.nomes.indexOf(this.nome3)] = 1;
            this.grafico[this.nomes.indexOf(this.nome3)][this.nomes.indexOf(this.nome1)] = 1;
            this.contador = this.contador  + 1;
            let mgs = this.nome1 + " é " + this.nome2 + " de " + this.nome3 + "\n";
            this.nome1 = "";
            this.nome2 = "";
            this.nome3 = "";
            this.texto = this.texto + mgs;

            alert("Relação adicionada com sucesso");
            this.teste = "";
            for(let i = 0; i < this.pessoas; i++){
              for(let j = 0; j < this.pessoas; j++){
                let c = this.grafico[i][j] + " ";
                this.teste = this.teste + c;
              }
              this.teste = this.teste + "\n";
            }

            if(this.contador == this.relacoes){
              let f = 0;
              for (let j = 0; j < this.pessoas; j++){
                if(!this.alxiliar[j])
                  this.dfs(j, ++f);
              }
              this.resultado = f;
              alert("Você adicionou todas as relações");
            }

          
        }
    },
    gerarGrafico: function(){
      if(this.grafico == null){
        let line = new Array(this.pessoas).fill(0)
        this.grafico = new Array(15).fill(line)
      }    
    },
    dfs: function(i, f){
    console.log("dfs");
    if(this.alxiliar[i])
      return;

      
    this.alxiliar[i] = f;

    for(let j = 0; j < this.pessoas; j++)
      if(this.grafico[i][j])
        this.dfs(j, f); 
  }
  },
  
};
</script>