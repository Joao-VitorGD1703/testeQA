<script setup>
import  Header  from "../components/Header.vue";
import  SideBar  from "../components/SideBar.vue";
import { ref, onMounted, onBeforeUnmount } from 'vue';

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
</script>

<template>
    <main class="public">
        <Header />
        <div class="content row">
            <div :class="isMobile ? 'esconder col-md-0' : 'col-3'">
                <SideBar/>
            </div>
            <div :class="isMobile ? 'col-12' : 'col-9'">
                <slot></slot>
              </div>
        </div>

    </main>
</template>

<style lang="scss">
@import url(../assets/base.css);
@import '../scss/config.scss';

.public {
    width: 100%;
    height: 100vh;
    display: flex;
    margin:  0em;
    justify-content: center;
    flex-direction: column;
    padding: 5em 0em 2em 0em;
    background-color: var(--backGround);

    .content {
        width: 60%;
        height: 100%;
        display: flex;
        margin: 2em auto auto auto;
        justify-content: center;
        flex-direction: row;
       
        // section {
        //     height: 100% !important;
        // }
    }
}

@media screen and (min-width: 1600px) {

    .public {
      .content {
      
        margin: 5em auto auto auto;
       
    }
}
}
@media screen and (max-width: 800px) {

    .public {

        .esconder {
            display: none !important;
        }
      .content {
      
        width: 100%;
        height: auto;
        display: flex;
        margin: 2em auto;
        justify-content: center;
        flex-direction: row;
    }
}
}


</style>