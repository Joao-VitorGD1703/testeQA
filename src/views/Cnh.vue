<script setup>
import { ref } from 'vue'
import Layout from '@/layout/MainLayout.vue';
import { gerarCNH } from '@/composables/cnh.js'

let respCnh= ref('');
let isChecked = ref(false)
let verificar = ref(true)

const generateCNHFinal = async () => {

    respCnh.value = gerarCNH()
}

const getCheckedValue = () => {
    isChecked.value = !isChecked.value
}
</script>

<template>
    <Layout>
        <div class="card-apresentacao">
            <h2 class="mb-2">CNH</h2>
            <div class="mt-2 mb-5">
                <p>Aproveite nosso gerador de CNH: clique em "Gerar CNH" e pronto! Um novo número de CNH válido será
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
            <div class="input-group my-4 me-1 w-75">

                <button class="btn btn-outline-secondary" type="button" @click="generateCNHFinal"
                    id="button-addon1">Gerar</button>
                <input type="text" class="form-control " placeholder="" aria-label="Example text with button addon"
                    aria-describedby="button-addon1" v-model="respCnh">
            </div>
        </div>
    
    </Layout>
</template>

<style lang="scss" scoped>
@import url(../assets/base.css);


</style>
