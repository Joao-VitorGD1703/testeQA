<script setup>

</script>

<template>
 <header class="cont-princ">
    <div class="title">
        <h1>TesteQA</h1>
    </div>
    <div>
        <div class="input-group b m-auto w-75">
            <input type="text" class="form-control rounded-start-4" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
            <button class="btn btn-outline-light rounded-end-4" type="button" id="button-addon1">Button</button>
          </div>
    </div>
 </header>   
</template>

<style lang="scss" scoped>
@import url(../assets/base.css);

.cont-princ{
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    //border-radius: 0.5em;
    margin: 0em auto 1.5em auto;
    position: absolute;
    top: 0;
    background-color: var(--thirdy);
    color: #fff;
    
    div{
        width: 29%;
        display: flex;
        align-items: center;
        justify-content: center;
        -webkit-box-shadow: 2px 200px 81px -35px rgba(0,0,0,0.75);
    -moz-box-shadow: 2px 200px 81px -35px rgba(0,0,0,0.75);
    box-shadow: 2px 200px 81px -35px rgba(0,0,0,0.75);

        &.title{
            padding-left: 1em;
            justify-content: left;
        }

    }
}


</style>