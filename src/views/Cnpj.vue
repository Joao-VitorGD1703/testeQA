<script setup>
import { ref } from 'vue'
import Layout from '@/layout/MainLayout.vue';
import { generateCNPJ } from '@/composables/cnpj.js'
import {useRemoveMask} from '@/composables/utils'

let respCnpj = ref('');
let isChecked = ref(false)

const generateCNPJFinal = async () => {
    if (isChecked.value == true) {
        let teste = generateCNPJ()
        respCnpj.value = await useRemoveMask(teste)
        // console.log("teste " + useRemoveMask(teste));

        
    }
    if (isChecked.value == false) {
        respCnpj.value = generateCNPJ()
        // console.log("teste 2 " + respCnpj.value);


    }
}

const getCheckedValue = () => {
    isChecked.value = !isChecked.value
}
</script>

<template>
    <Layout>
        <div class="card-apresentacao">
            <div class="mb-3">
                <p>Aproveite nosso gerador de CNPJ: clique em "Gerar CNPJ" e pronto! Um novo número de CNPJ válido será
                    gerado instantaneamente. Além disso, você tem a opção de incluir ou não os pontos entre os números.
                </p>
            </div>
            <div class="form-check my-4">
                <input class="form-check-input " type="radio" name="flexRadioDefault" @click="getCheckedValue"
                    id="flexRadioDefault1" v-model="isChecked">
                <label class="form-check-label" for="flexRadioDefault1">
                    Sem caracter especial
                </label>
            </div>
            <div class="input-group me-1 w-75">

                <button class="btn btn-outline-secondary rounded-start-4" type="button" @click="generateCNPJFinal"
                    id="button-addon1">Gerar</button>
                <input type="text" class="form-control rounded-end-4" placeholder="" aria-label="Example text with button addon"
                    aria-describedby="button-addon1" v-model="respCnpj">
            </div>
        </div>
    </Layout>
</template>

<style lang="scss" scoped>
@import url(../assets/base.css);


</style>
