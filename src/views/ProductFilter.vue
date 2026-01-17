<script>
import { defineComponent } from 'vue';
import ProductItemView from './ProductItemView.vue';
import data from '../data.json'

export default defineComponent({
    name: 'ProductFilter',
    components: {
        ProductItemView
    },
    data() {
        return {
            cat: Object.entries(data.products).map(([key, value]) => ({key, value}))
        }
    },
    props: {
        category: {
            type: String,
            required: true
        },
        itemId: {
            type: String,
            required: false
        }
    },
    computed: {
        objectFind() {
            return this.cat[Number(this.category)]
        }
    }
})
</script>

<template>
<RouterView />
<div v-if="objectFind" class="products">
    <div v-for="product in objectFind.value" :id="product.id">
        <RouterLink :to="{name: 'productFilterItem',params:{itemId: product.id}}" :key="product.id" class="product-link">
            <img :src="'/' + product.image" alt="Obrázok produktu">
            <p class="product-name">{{ product.name }}</p>
            <p class="product-price">{{ product.price + ' €'}}</p>
        </RouterLink>
    </div>
</div>
    
</template>

<style scoped>
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
img {
    width: 100%;
    height: auto;
    max-height: 60%;
    object-fit: cover;
    display: block;
    margin-bottom: 5px;
    border-radius: 5px;
}
.product-name {
    font-size: 60%;
    font-weight: 500;
    text-align: center;
    margin: 2px 0 0 0;
}
.product-price {
    font-size: 55%;
    text-align: center;
    margin: 0;
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
.products > div:hover {
    background-color: rgb(2, 147, 2);
    color: white;
    border-color: rgb(2, 168, 2);
    cursor: pointer;
}
</style>