<script setup>
import { ref } from 'vue'
import Layout from '@/layout/MainLayout.vue';
import { useToCNPJ } from '@/composables/cnpj.js'
import {useRemoveMask} from '@/composables/utils'

let respCnpj = ref('');
let isChecked = ref('')

const generateCNPJFinal = async (cnpj) => {

    
    respCnpj.value = cnpj
    isChecked.value = useRemoveMask(cnpj)
    isChecked.value = useToCNPJ(cnpj)
    console.log(isChecked.value);

}

</script>

<template>
    <Layout>
        <div class="cont-princ">
            <div class="mb-3">
                <p>Aproveite nosso gerador de CNPJ: clique em "Gerar CNPJ" e pronto! Um novo número de CNPJ válido será
                    gerado instantaneamente. Além disso, você tem a opção de incluir ou não os pontos entre os números.
                </p>
            </div>
            <div class="input-group mb-3 me-1 w-75">

                <button class="btn btn-outline-secondary" type="button" @click="generateCNPJFinal"
                    id="button-addon1">Gerar</button>
                <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon"
                    aria-describedby="button-addon1" >
            </div>
            <h2>{{isChecked}}</h2>

        </div>
    </Layout>
</template>

<style lang="scss" scoped>
@import url(../assets/base.css);

.cont-princ {
    width: 100%;
    height: 50vh;
    margin: 0.5em 0.2em;
    background-color: #6076731c;
    border-radius: 1em;
    padding: 2em;
    /*-webkit-box-shadow: 1px 10px 19px -9px rgba(0,0,0,0.75);
-moz-box-shadow: 1px 10px 19px -9px rgba(0,0,0,0.75);
box-shadow: 1px 10px 19px -9px rgba(0,0,0,0.75);*/
}
</style>
