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
        <div v-if="verificar.value == true" class="cont-princ">
            <div class="mb-3">
                <p>Aproveite nosso gerador de CNH: clique em "Gerar CNH" e pronto! Um novo número de CNH válido será
                    gerado instantaneamente. Além disso, você tem a opção de incluir ou não os pontos entre os números.
                </p>
            </div>
            <div class="form-check mb-3">
                <input class="form-check-input" type="radio" name="flexRadioDefault" @click="getCheckedValue"
                    id="flexRadioDefault1" v-model="isChecked">
                <label class="form-check-label" for="flexRadioDefault1">
                    Sem caracter especial
                </label>
            </div>
            <div class="input-group me-1 w-75">

                <button class="btn btn-outline-secondary" type="button" @click="generateCNHFinal"
                    id="button-addon1">Gerar</button>
                <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon"
                    aria-describedby="button-addon1" v-model="respCnh">
            </div>
        </div>
        <div v-else class="cont-princ">
            <h1>Página em manutenção...</h1>

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
