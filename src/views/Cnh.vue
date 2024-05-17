<script setup>
import { ref } from 'vue'
import Layout from '@/layout/MainLayout.vue';
import { gerarCNH } from '@/composables/cnh.js'
import {useToast} from '@/composables/utils'

let respCnh = ref('');
let isChecked = ref(false)
let verificar = ref(true)
const copyText = () => {
    const text = respCnh.value;
    if (text) {
        navigator.clipboard.writeText(text)
            .then(() => {
                useToast().success(" CNH copiado com sucesso!")
                console.log('Texto copiado com sucesso!');
            })
            .catch((error) => {
                console.error('Falha ao copiar o texto:', error);
            });
    }
}
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

            <div class="input-group my-4 me-1 w-75">

                <button class="btn btn-outline-secondary" type="button" @click="generateCNHFinal"
                    id="button-addon1">Gerar</button>
                <input type="text" class="form-control " placeholder="" aria-label="Example text with button addon"
                    aria-describedby="button-addon1" v-model="respCnh">

                    <button style="border: none; background-color: transparent;" @click="copyText" type="button"><i 
                            class="fa-regular fa-copy" style="color: #74C0FC; width: 2.2em; height: 2.2em;"> <button></button></i>
                    </button>
                </div>
        </div>

    </Layout>
</template>

<style lang="scss" scoped>
@import url(../assets/base.css);
</style>
