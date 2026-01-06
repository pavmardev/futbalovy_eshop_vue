<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'TheFooter'
})
</script>

<template>
<div class="main-div">
    <div>
        <h3>Obchod</h3>
        <p>Kopačky</p>
        <p>Dresy</p>
        <p>Lopty</p>
        <p>Vybavenie</p>
    </div>
    <div>
        <h3>Podpora</h3>
        <p>Kontakt</p>
        <p>FAQ</p>
        <p>Reklamácie</p>
        <p>Informácie o doprave</p>
    </div>
</div>
</template>

<style scoped>
.main-div {
    display: grid;
    grid-template-columns:  1fr 1fr;
}
</style>