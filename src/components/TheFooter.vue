<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'TheFooter'
})
</script>

<template>
    <footer>
        <div class="main-div">
            <p>Podpora</p>
            <p>Kontakt</p>
            <p>FAQ</p>
            <p>Reklamácie</p>
            <p>Doprava</p>
        </div>
    </footer>
</template>

<style scoped>
.main-div {
    display: grid;
    grid-template-columns:  1fr 1fr 1fr 1fr 1fr;
    justify-content: space-evenly;
    margin-top: 8%;
    margin-right: auto;
    margin-left: auto;
    background-color: black;
    color: white;
    padding-top: 2%;
    padding-left: 2%;
    padding-right: 2%;
    padding-bottom: 4%;
}
p {
    text-align: center;
}
</style>