<script>
import { defineComponent } from 'vue';
import Button from '@/components/Button.vue';
import { useCartStore } from '@/stores/cart';

export default defineComponent({
    name: 'CartView',
    components: {
        Button
    },
    data() {
        return {
            cartStore: useCartStore(),
            product: null
        }
    },
    methods: {
        clicked(payload) {
            this.product = payload
            console.log(this.product)
        }
    },
    computed: {
        totalCost() {
            let cost = 0
            for (let i = 0; i < this.cartStore.productList.length; i++) {
                cost += (Number(this.cartStore.productList[i].price) * Number(this.cartStore.productList[i].amount))
            }
            return cost
        },
    },
    watch: {
        product() {
           this.cartStore.removeProduct(this.product)

        }
    },
    mounted() {
       this.cartStore.loadProducts() 
    }
})
</script>
<template>
    <ul>
        <li>Názov:</li>
        <li>Cena:</li>
        <li>Špecifikácie:</li>
        <li>Počet ks</li>
        <li></li>
    </ul>
    <h3 v-if="totalCost === 0">
        Váš košík je prázdny :&#40;
    </h3>
    <div v-else>
        <ul v-for="product in cartStore.productList" :key="product.id">
            <li>{{ product.name }}</li>
            <li>{{ product.price + ' €'}}</li>
            <li>{{ product.specs }}</li>
            <li>{{ product.amount }}</li>
            <li>
                <Button :text="'Odstrániť z košíka'" @clicked="clicked" :productId="product.id"></Button>
            </li>
        </ul>
        <p>Celková suma: {{ totalCost }} €</p>
    </div>
</template>
<style scoped>
ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  font-size: 60%;
  border: 1px black solid;
  padding: 1%;
  width: 80%;
  margin: auto;
  margin-bottom: 1%;
}
li {
  padding: 1% 2%;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
}
p {
    text-align: center;
    color: red;
    margin-top: 2%;
}
h3 {
    text-align: center;
}
</style>