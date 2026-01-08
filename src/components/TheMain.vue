<script>
import { defineComponent } from 'vue';
import data from '../data.json'

export default defineComponent({
    name:'TheMain',
    data() {
        return {
            categories: data.categories

        }
    }
})
</script>

<template>
<div class="hero"></div>
<h2>Kupujte podľa kategórií</h2>
<h5>Nájdite presne čo potrebujeme pre svoju hru</h5>
<div class="categories">
    <div v-for="(cat, index) in categories" :key="cat.name">
        <RouterLink :to="{name: 'productFilter', params: {category: index}}">
            <p>{{ cat.name }}</p>
            <img :src="cat.img" alt="Ilustračný obrázok" loading="lazy">
        </RouterLink>
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
    width: 80%;
    column-gap: 2%;
    height: 50vh;
    margin: auto;
}
.categories > div {
    width: 25%;
    height: 250px;
    text-align: center;
    position: relative;
    overflow: hidden;
    transition: all 0.2s;
    border-radius: 20px;
}

.categories > div img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.categories > div p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
    text-shadow: 2px 2px 4px black;  
    margin: 0;
    z-index: 10;
    font-size: 50%;
}
h2, h5 {
    text-align: center;
}
h2 {
    padding-top: 1%;
}
.categories > div:hover {
    box-shadow: 5px 5px 20px black;
    cursor: pointer;
}
</style>