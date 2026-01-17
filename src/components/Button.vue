<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Button',
    data() {
        return {
            message: this.text,
            class: null,
            product: this.productId
        }
    }, 
    props: {
        text: {
            type: String,
            required: true
        },
        productId: {
            type: Number,
            required: false
        }
    },
    methods: {
        updateCart() {
            if (this.class == 'green') {
                this.$emit('clicked', true)
            }
            else {
                this.$emit('clicked', this.product)
            }
            
        }
    },
    computed: {
        changeClass() {
            if (this.message === 'Pridať do košíka') {
                this.class = 'green'
                return this.class
            }
            else {
                this.class = 'red'
                return this.class
            }
        }
    }
})
</script>

<template>
<button :class="changeClass" @click="updateCart" :id="product">{{ message }}</button>
</template>

<style scoped>
.green, .red {
    color: white;
    padding: 8px 15px;
    border-radius: 4px;
    border: none;
    font-size: 70%;
    cursor: pointer;
}
.green {
    background-color: rgb(2, 147, 2);
}
.red {
    background-color: red;
}
</style>