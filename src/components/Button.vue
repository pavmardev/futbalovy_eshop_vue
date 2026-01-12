<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Button',
    data() {
        return {
            message: this.text,
            class: null
        }
    }, 
    props: {
        text: {
            type: String,
            required: true
        }
    },
    methods: {
        updateCart() {
            if (this.class == 'green') {
                this.$emit('clicked', 'push')
            }
            else {
                this.$emit('clicked', 'remove')
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
<button :class="changeClass" @click="">{{ message }}</button>
</template>

<style scoped>
.green, .red {
    color: white;
    padding: 4% 10%;
    border-radius: 4px;
    border: none;
    margin-left: 20%;
    font-size: 60%;
}
.green {
    background-color: rgb(2, 147, 2);
}
.red {
    background-color: red;
}
</style>