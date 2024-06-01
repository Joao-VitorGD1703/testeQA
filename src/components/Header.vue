<script setup>
import { useGoTo } from '@/composables/utils';
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import dados from '../db.json';

let searchTerm = ref('');
let isFocus = ref(false);

const filteredItems = computed(() => {
  return searchTerm.value.trim() === '' ? dados : dados.filter(item => {
    return item.nome.toLowerCase().includes(searchTerm.value.toLowerCase());
  });
});

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

const toggleFocus = () => {
  isFocus.value = searchTerm.value.trim() !== '';
};
</script>

<template>
  <header class="cont-princ">
    <nav class="navbar navbar-expand-lg navbar-dark" aria-label="Fifth navbar example">
      <div class="container-fluid">
        <a class="navbar-brand title"  @click="useGoTo('/cnpj')" >TesteQA</a>
        <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="navbar-collapse collapse" id="navbarsExample05">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item esconder">
              <button class="nav-link active" @click="useGoTo('/cnpj')">CNPJ</button>
            </li>
            <li class="nav-item esconder">
              <button class="nav-link active" @click="useGoTo('/cpf')">CPF</button>
            </li>
            <li class="nav-item esconder">
              <button class="nav-link active" @click="useGoTo('/cnh')">CNH</button>
            </li>
          </ul>

          <form role="search">
            <div class="position-relative">
              <input class="form-control" v-model="searchTerm" @input="toggleFocus" type="search" placeholder="Search" aria-label="Pesquisar">
              <div v-if="isFocus" class="card">
                <ul>
                  <li v-for="item in filteredItems.reverse()" :key="item.id" data-bs-popper="static">
                    <a :href="item.url">{{ item.nome }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@import url(../assets/base.css);

.cont-princ {
  width: 100%;
  padding: 0em 20em;
  position: absolute;
  top: 0;
  background-color: var(--thirdy);
  color: #fff;

  .title {
    font-size: 2.3em !important;
  }

  .esconder {
    display: none !important;
  }
  .card {
    width: 19%;
    position: fixed;
    ul {
      list-style: none;
      padding: 0.5em 0em 0em 0px;
      height: auto;
      cursor: pointer;
  
      li {
        margin: 0px;
        border-bottom: 1px solid rgb(218, 218, 218); /* Adiciona o border-bottom */
  
        a {
          color: black;
          text-decoration: none;
          margin: 0em 0.2em;

        }
      }
    }
  }
  
}

@media (max-width: 800px) {
  .cont-princ {
    padding: 0em;
.card{
    margin: 0em auto;
    width: 95%;
}
    .esconder {
      display: flex !important;
    }
  }
}
</style>
