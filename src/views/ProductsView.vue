<script>
import { defineComponent } from 'vue';
import ProductItemView from './ProductItemView.vue';
import data from '../data.json'

export default defineComponent({
    name: 'Products',
    components: {
        ProductItemView
    },
    data() {
        return {
            products: Object.values(data.products).flat(),
        }
    }
})


</script>

<template>
<img src="/images/products_hero.jpg">
<h2>Pre malých aj veľkých futbalistov</h2>
<h4>Vyber si výbavu, na ktorú sa môžeš spoľahnúť</h4>
<RouterView />
<div class="products">
    <div v-for="product in products" :key="product.id">
        <RouterLink :to="{name: 'productItem',params:{itemId: product.id}}" :key="product.id" class="product-link">
            <img :src="product.image" alt="Obrázok produktu">
            <p class="product-name">{{ product.name }}</p>
            <p class="product-price">{{ product.price + ' €'}}</p>
        </RouterLink>
    </div>
</div>
</template>

<style scoped>
img {
    display: block;
    width: 100vw;
    height: auto;
    margin: 0 auto;
    border-radius: 5px;
}
h2, h4 {
    text-align: center;
}
h4 {
    margin-bottom: 3%;
}
.products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 300px;
    gap: 10px;
    width: 80vw;
    margin: auto;
    min-width: 0;
}
.products > div {
    border: 2px solid black;
    transition: all 0.2s;
    min-width: 0;
}
.product-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: inherit;
    box-sizing: border-box;
}
.product-link > img {
    width: 100%;
    height: auto;
    max-height: 60%;
    object-fit: cover;
    display: block;
    margin-bottom: 5px;
    border-radius: 5px;
}
.product-name {
    font-size: 55%;
    font-weight: 500;
    text-align: center;
    margin: 2px 0 0 0;
}
.product-price {
    font-size: 55%;
    text-align: center;
    margin: 0;
}
.products > div:hover {
    background-color: rgb(2, 147, 2);
    color: white;
    border-color: rgb(2, 168, 2);
    cursor: pointer;
}
</style>