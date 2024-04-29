<script setup>
import { ref } from 'vue'
import Layout from '@/layout/MainLayout.vue';
import { generateCNPJ } from '@/composables/cnpj.js'
import { useRemoveMask } from '@/composables/utils'
import { useClipboard } from '@vueuse/core';

const clipboard = useClipboard();


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

const copyText = () => {
    const text = respCnpj.value;
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
</script>

<template>
    <Layout>
        <div class="card-apresentacao">
            <h2 class="mb-2">CNPJ</h2>
            <div class="mt-2 mb-5">
                <p>Aproveite nosso gerador de CNPJ: clique em "Gerar CNPJ" e pronto! Um novo número de CNPJ válido será
                    gerado instantaneamente. Além disso, você tem a opção de incluir ou não os pontos entre os números.
                </p>
            </div>
            <div class="form-check my-4">
                <input class="form-check-input" type="checkbox" id="toggleButton" v-model="isChecked">
                <label class="form-check-label" for="toggleButton">
                    {{ isChecked ? 'Com caracter especial' : 'Sem caracter especial' }}
                </label>
            </div>
            <div class="input-group me-1 w-75">

                <button class="btn btn-outline-secondary " type="button" @click="generateCNPJFinal"
                    id="button-addon1">Gerar</button>
                <input type="text" class="form-control " placeholder="" aria-label="Example text with button addon"
                    aria-describedby="button-addon1" v-model="respCnpj">
                </div>
                <button class=" rounded mt-4 fs-5 btn btn-outline-primary px-1" type="button"  @click="copyText">Copiar</button>

        </div>
    </Layout>
</template>

<style lang="scss" scoped>
@import url(../assets/base.css);
</style>
