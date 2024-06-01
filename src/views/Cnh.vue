<script setup>
import { ref,  onMounted, onBeforeUnmount } from 'vue'
import Layout from '@/layout/MainLayout.vue';
import { gerarCNH } from '@/composables/cnh.js'
import { useToast } from '@/composables/utils'

let respCnh = ref('');
let isChecked = ref(false)
let verificar = ref(true)


const isMobile = ref(window.innerWidth <= 800);

const handleResize = () => {
  isMobile.value = window.innerWidth <= 800;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});

const copyText = () => {
    const text = respCnh.value;
    if (text) {
        navigator.clipboard.writeText(text)
            .then(() => {
                useToast().success("CNH copiada com sucesso!")
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
                <p>Aproveite nosso gerador de CNH: clique em "Gerar CNH" e pronto! Um novo número de CNH válido será gerado instantaneamente. Além disso, você tem a opção de incluir ou não os pontos entre os números.</p>
            </div>
            <div :class="isMobile ? 'input-group w-100' : 'w-75'" class="input-group me-1 ">

                <button class="btn btn-outline-secondary" type="button" @click="generateCNHFinal" id="button-addon1">Gerar</button>
                <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" v-model="respCnh">
                <button style="border: none; background-color: transparent;" @click="copyText" type="button">
                    <i class="fa-regular fa-copy" style="color: #74C0FC; width: 2.2em; height: 2.2em;"></i>
                </button>
            </div>
        </div>
    </Layout>
</template>

<style lang="scss" scoped>
@import url(../assets/base.css);

h2 {
    text-align: left;
}

.form-check {
    display: flex;
    justify-content: left;
    align-items: left;
}

@media screen and (max-width: 800px) {

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
