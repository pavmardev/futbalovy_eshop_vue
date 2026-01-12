<script>
import { defineComponent } from 'vue';
import data from '../data.json'
import Button from '@/components/Button.vue';

export default defineComponent({
    name: 'ProductItemView',
    components: {
        Button
    },
    data() {
        return {
            products: Object.values(data.products),
        }
    },
    props: {
        itemId: {
            type: String,
            required: true
        }
    },
    methods: {
        isArray(spec) {
            return Array.isArray(spec)
        }
    },
    computed: {
        object() {
            return this.products.flat().find(
            item => item.id === Number(this.itemId))
        }
    }
})
</script>
<template>
    <div class="product-view" v-if="object">
        <img :src="'/' + object.image" alt="Obrázok produktu">
        <h3>{{ object.name }}</h3>
        <p>{{ object.price + ' €' }}</p><br>
        <p>
            <strong>Popis: </strong>{{ object.description }}
        </p>
        <div v-for="(spec, name) in object.specs">
            <p class="strong">{{ name }}: </p>
            <form v-if="isArray(spec)">
                <select name="sel">
                    <option v-for="val in spec" :value="val">{{ val }}</option>
                </select>
            </form>
            <p v-else>{{ spec }}</p>
        </div>
        <Button :text="'Pridať do košíka'"></Button>
    </div>
</template>

<style scoped>
    h3 {
        font-weight: 600;
        text-align: center;
    }
    .product-view {
        width: 60%;
        margin: auto;
        margin-bottom: 3%;
        border-radius: 10px;
        border: 2px solid rgb(83, 83, 83);
        padding: 2%;
        transition: all 0.2s;
    }
    img {
        display: block;
        object-fit: contain;
        width: 70%;
        margin-left: auto;
        margin-right: auto;
        height: auto;
    }
    p,ul,select {
        font-size: 70%;
    }
    p {
        display: inline;
    }
    .strong {
        font-weight: 600;
    }
    form {
        display: inline;
        vertical-align: top;
    }
    .product-view:hover {
        box-shadow: 8px 8px 15px gray;
        cursor: pointer;
    }
</style>