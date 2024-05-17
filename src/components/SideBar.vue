<script setup>
import {useGoTo} from '@/composables/utils'
</script>

<template>
   <div class="cont-princ">
       <h3 class="">Geradores</h3>
    <ul class="list">
        <li><button @click="useGoTo('/cnpj')">CNPJ</button></li>
        <li><button @click="useGoTo('/cpf')">CPF</button></li>
        <li><button @click="useGoTo('/cnh')">CNH</button></li>
    </ul>
    <!-- <h3 class="">Validações</h3>
      <ul class="list">
        <li><button @click="useGoTo('/cnpj-validar')">Valida CNPJ</button></li>
        <li><button @click="useGoTo('/cpf')">Valida CPF</button></li>
        <li><button @click="useGoTo('/cnh')">Valida CNH</button></li>
    </ul> -->
   </div>
</template>

<style lang="scss" scoped>
@import url(../assets/base.css);

.cont-princ{
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 0.2em;
    margin: auto;
    background-color: var(--thirdy);
    padding-top: 2em ;
    text-align: left;
    h3{
      font-size: 1.5em;
      margin: 0.2em 0.3em;
    }

    ul{
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1em 0.0em;

        li{
            width: 100%;
          button{
            width: 100%;
            height: 2.5em;

            // margin: 0.1em auto;
            border: none;
            border-bottom: 1px solid var(--fifthy);
            background-color: var(--forthy);
            color: #fff;
            display: flex;
            justify-content: left;
            align-items: center;
            padding: 0.2em 0.5em;


          /*  -webkit-box-shadow: 1px 10px 19px -9px rgba(0,0,0,0.75);
            -moz-box-shadow: 1px 10px 19px -9px rgba(0,0,0,0.75);
            box-shadow: 1px 10px 19px -9px rgba(0,0,0,0.75);*/
            &:hover{
                background-color: var(--fifthy);

            }

          }

            

        }
    }

   
}


</style>