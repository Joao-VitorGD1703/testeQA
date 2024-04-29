<script setup>
import { ref } from 'vue'
import Layout from '@/layout/MainLayout.vue';
import { gerarCNH } from '@/composables/cnh.js'

let respCnh= ref('');
let isChecked = ref(false)
let verificar = ref(true)
const copyText = () => {
    const text = respCnh.value;
    if (text) {
        navigator.clipboard.writeText(text)
            .then(() => {
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
                    
                </div>
                <button class=" rounded  fs-5 btn btn-outline-primary px-1" type="button"  @click="copyText">Copiar</button>
        </div>
    
    </Layout>
</template>

<style lang="scss" scoped>
@import url(../assets/base.css);


</style>
