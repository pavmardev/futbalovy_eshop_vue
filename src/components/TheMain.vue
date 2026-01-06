<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name:'TheMain',
    data() {
        return {
            categories: ['Kopačky', 'Dresy', 'Lopty', 'Vybavenie']

        }
    }
})
</script>

<template>
<div class="hero"></div>
<h2>Kupujte podľa kategórií</h2>
<h5>Nájdite presne čo potrebujeme pre svoju hru</h5>
<div class="categories">
    <div v-for="cat in categories">
        <p>{{ cat }}</p>
    </div>
</div>
</template>

<style scoped>
.hero{
    background-image: url(/images/hero_image.jpg);
    height: 80vh;
    background-size: cover;
    background-position: center;
}
.categories {
    display: flex;
    justify-content: space-between;
    width: 80%;
    height: 50vh;
    margin: auto;
}
.categories > div {
    display: flex;
    align-items: center;
    height: 80%;
}
h2, h5 {
    text-align: center;
}
h2 {
    padding-top: 1%;
}
</style>