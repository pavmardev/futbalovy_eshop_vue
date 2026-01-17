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
<div class="hero">
    <h1 class="hero-title">Zaži futbal naplno</h1>
</div>
<h3>Všetko potrebné pre Vašu hru</h3>
<div class="categories">
    <div v-for="(cat, index) in categories" :key="cat.name">
        <RouterLink :to="{name: 'productFilter', params: {category: index}}">
            <p>{{ cat.name }}</p>
            <img :src="cat.img" alt="Ilustračný obrázok">
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
    display: flex;
    align-items: center;
    justify-content: center;
}
.hero-title {
    color: white;
    font-size: 6rem;
    font-weight: bold;
    text-shadow: 3px 3px 8px black;
    animation: slideIn 1.2s ease-out forwards;
    opacity: 0;
}

@keyframes slideIn {
    from {
        transform: translateX(-100px);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}
.categories {
    display: flex;
    width: 80%;
    column-gap: 2%;
    height: 50vh;
    margin: auto;
}
.categories > div {
    display: block;
    width: 25%;
    height: 250px;
    text-align: center;
    position: relative;
    overflow: hidden;
    transition: all 0.2s;
    border-radius: 20px;
}
.categories > div img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
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
.categories > div RouterLink {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
}
.categories > div img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}
h3 {
    text-align: center;
    padding-top: 1%;
    margin-bottom: 2%;
}
.categories > div:hover {
    box-shadow: 5px 5px 20px black;
    cursor: pointer;
}
</style>