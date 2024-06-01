<script setup>
import { ref } from 'vue'
import Layout from '@/layout/MainLayout.vue';
import { gerarCPF } from '@/composables/cpf.js'
import { useRemoveMask } from '@/composables/utils'
import { useToast } from '@/composables/utils'

let respCpf = ref('');
let isChecked = ref(false)

const generateCPFFinal = async () => {
    if (isChecked.value) {
        let teste = gerarCPF()
        respCpf.value = await useRemoveMask(teste)
    } else {
        respCpf.value = gerarCPF()
    }
}

const getCheckedValue = () => {
    isChecked.value = !isChecked.value
}

const copyText = () => {
    const text = respCpf.value;
    if (text) {
        navigator.clipboard.writeText(text)
            .then(() => {
                useToast().success("CPF copiado com sucesso!")
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
            <h2 class="mb-2">CPF</h2>
            <div class="mt-2 mb-5">
                <p>Aproveite nosso gerador de CPF: clique em "Gerar CPF" e pronto! Um novo número de CPF válido será gerado instantaneamente. Além disso, você tem a opção de incluir ou não os pontos entre os números.</p>
            </div>
            <div class="form-check my-4">
                <input class="form-check-input" type="checkbox" id="toggleButton" v-model="isChecked">
                <label class="form-check-label ms-2" for="toggleButton">
                    {{ isChecked ? 'Com caracter especial' : 'Sem caracter especial' }}
                </label>
            </div>
            <div class="input-group my-4 w-100">
                <button class="btn btn-outline-secondary" type="button" @click="generateCPFFinal" id="button-addon1">Gerar</button>
                <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" v-model="respCpf">
                <button style="border: none; background-color: transparent;" @click="copyText" type="button">
                    <i class="fa-regular fa-copy" style="color: #74C0FC; width: 2.2em; height: 2.2em;"></i>
                </button>
            </div>
        </div>
    </Layout>
</template>

<style lang="scss" scoped>
@import url(../assets/base.css);

@media (max-width: 768px) {

.card-apresentacao {
    max-width: 600px;
    margin: 0 auto;
    padding: 1.5rem;
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        padding: 1rem;
    }
}

h2 {
    text-align: center;
}

.form-check {
    display: flex;
    justify-content: center;
    align-items: center;
}

.input-group {
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: stretch;

        button,
        input {
            width: 100%;
            margin: 0.25rem 0;
        }
    }
}

.input-group .btn {
    flex: 1;
}

.input-group .form-control {
    flex: 3;
}

.input-group button[type="button"] {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
}
}
</style>
