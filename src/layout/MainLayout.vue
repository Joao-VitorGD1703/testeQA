<script setup>
import  Header  from "../components/Header.vue";
import  SideBar  from "../components/SideBar.vue";
</script>

<template>
    <main class="public">
        <Header />
        <div class="content row">
            <div class="col-3">
                <SideBar/>
            </div>
            <div class="col-9">
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
    height: 100%;
    display: flex;
    margin: 0em auto auto auto;
    justify-content: center;
    flex-direction: column;
    padding: 5em 0em 2em 0em;
    background-color: var(--backGround);

    .content {
        width: 60%;
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


</style>