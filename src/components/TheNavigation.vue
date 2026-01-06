<script>
    import {defineComponent} from 'vue'
    import navigation from '../data.json'
    export default defineComponent({
        name: 'TheNavigation',
        data() {
            return {
                navigation: navigation.navigation
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
        </nav>
    </header>
</template>

<style scoped>
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