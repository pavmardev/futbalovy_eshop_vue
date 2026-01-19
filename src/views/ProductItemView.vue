<script>
import { defineComponent } from 'vue'
import data from '../data.json'
import Button from '@/components/Button.vue'
import { useCartStore } from '@/stores/cart'

export default defineComponent({
  name: 'ProductItemView',
  components: {
    Button,
  },
  data() {
    return {
      products: Object.values(data.products),
      message: null,
      value: null,
      product: null,
      amount: '1',
      cartList: useCartStore(),
    }
  },
  props: {
    itemId: {
      type: String,
      required: true,
    },
  },
  methods: {
    isArray(spec) {
      return Array.isArray(spec)
    },
    clicked(payload) {
      this.message = payload
      const hasSelect = Object.values(this.object.specs).some((spec) => Array.isArray(spec))
      console.log(hasSelect)
      if (this.value === null && hasSelect) {
        window.alert('Neboli zvolené špecifikácie produktu')
      } else if (this.value != null && hasSelect) {
        this.product = {
          id: this.object.id,
          name: this.object.name,
          price: this.object.price,
          image: this.object.image,
          description: this.object.description,
          specs: { size: this.value },
          amount: this.amount,
        }
      } else if (hasSelect != true) {
        this.product = { ...this.object, amount: this.amount }
      }

      console.log(this.product)
    },
  },
  computed: {
    object() {
      return this.products.flat().find((item) => item.id === Number(this.itemId))
    },
  },
  watch: {
    product() {
      this.value = null
      this.amount = '1'
      this.cartList.addProduct(this.product)
      console.log(sessionStorage)
    },
  },
})
</script>
<template>
  <div class="product-view" v-if="object">
    <img :src="'/' + object.image" alt="Obrázok produktu" />
    <h3>{{ object.name }}</h3>
    <p>{{ object.price + ' €' }}</p>
    <br />
    <p><strong>Popis: </strong>{{ object.description }}</p>
    <div v-for="(spec, name) in object.specs" :key="name">
      <p class="strong">{{ name }}:&nbsp;</p>
      <select name="sel" v-if="isArray(spec)" v-model="value">
        <option v-for="val in spec" :key="val" :value="val">{{ val }}</option>
      </select>
      <p v-else>{{ spec }}</p>
      <br />
    </div>
    <p>Počet kusov:&nbsp;</p>
    <select name="sel" v-model="amount">
      <option v-for="amount in 10" :key="amount" :value="amount">{{ amount }}</option></select
    ><br />
    <Button :text="'Pridať do košíka'" @clicked="clicked"></Button>
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
p,
ul,
select {
  font-size: 70%;
}
p {
  display: inline;
}
.strong {
  font-weight: 600;
}
.product-view:hover {
  box-shadow: 8px 8px 15px gray;
  cursor: pointer;
}
</style>
