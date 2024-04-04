<script setup>
import { ref } from 'vue'
import Layout from '@/layout/MainLayout.vue';
import { gerarCPF } from '@/composables/cpf.js'
import {useRemoveMask} from '@/composables/utils'

let respCpf = ref('');
let isChecked = ref(false)

const generateCPFFinal = async () => {
    if (isChecked.value == true) {
        let teste = gerarCPF()
        respCpf.value = await useRemoveMask(teste)
        // console.log("teste " + useRemoveMask(teste));

        
    }
    if (isChecked.value == false) {
        respCpf.value = gerarCPF()
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
            <h2 class="mb-2">CPF</h2>
            <div class="mt-2 mb-5">

                <p>Aproveite nosso gerador de CPF: clique em "Gerar CPF" e pronto! Um novo número de CPF válido será
                    gerado instantaneamente. Além disso, você tem a opção de incluir ou não os pontos entre os números.
                </p>
            </div>
           
            <div class="form-check my-4">
                <input class="form-check-input" type="checkbox" id="toggleButton" v-model="isChecked">
                <label class="form-check-label" for="toggleButton">
                  {{ isChecked ? 'Com caracter especial' : 'Sem caracter especial' }}
                </label>
              </div>            <div class="input-group my-4 me-1 w-75">

                <button class="btn btn-outline-secondary " type="button" @click="generateCPFFinal"
                    id="button-addon1">Gerar</button>
                <input type="text" class="form-control " placeholder="" aria-label="Example text with button addon"
                    aria-describedby="button-addon1" v-model="respCpf">
            </div>
        </div>
    </Layout>
</template>

<style lang="scss" scoped>
@import url(../assets/base.css);


</style>
