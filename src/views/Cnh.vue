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
        <div v-if="verificar.value == true" class="card-apresentacao">
            <div class="mb-3">
                <p>Aproveite nosso gerador de CNH: clique em "Gerar CNH" e pronto! Um novo número de CNH válido será
                    gerado instantaneamente. Além disso, você tem a opção de incluir ou não os pontos entre os números.
                </p>
            </div>
            <div class="form-check my-4">
                <input class="form-check-input rounded-end-4" type="radio" name="flexRadioDefault" @click="getCheckedValue"
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
        <div v-else class="card-apresentacao ">
            <h1>Página em manutenção...</h1>

        </div>
    </Layout>
</template>

<style lang="scss" scoped>
@import url(../assets/base.css);


</style>
