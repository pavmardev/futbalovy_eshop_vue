<script>
    import {defineComponent} from 'vue'
    import navigation from '../data.json'
    import { useCartStore } from '@/stores/cart';
    export default defineComponent({
        name: 'TheNavigation',
        data() {
            return {
                navigation: navigation.navigation,
                cartStore: useCartStore()
            }
        },
        computed: {
            cartLength() {
                return this.cartStore.getListLength
            }
        }
    })
</script>

<template>
    <header>
        <nav>
            <ul>
                <li v-for="nav in navigation">
                <RouterLink :to="nav.path">
                    {{ nav.name }}
                </RouterLink>
                </li>
            </ul>
            <div class="cart-icon">
                <RouterLink :to="{name: 'cartList'}"></RouterLink>
                <span>{{ cartLength }}</span>
            </div>
        </nav>
    </header>
</template>

<style scoped>
.cart-icon {
    background-image: url(/images/cart_icon.jpg);
    background-size: cover;
    position: absolute;
    right: 5%;
    top: 1%;
    width: 70px;
    height: 70px;
    z-index: 10;
}
.cart-icon > a {
    display: block;
    width: 100%;
    height: 100%;
}
.cart-icon > span {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    height: 50%;
    width: 50%;
    font-size: 60%;
    background-color: green;
    color: white;
    border-radius: 10px;
}
ul {
  display: flex;
  list-style: none;
  width: 70%;
}
li {
    padding: 1% 2%;
}
a {
    font-size: 70%;
    color: black;
}
</style>