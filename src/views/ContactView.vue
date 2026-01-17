<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Contact'
})
</script>

<template>
    <section class="contact">
        <h4>Kontakt</h4>
        <form>
            <input type="text" placeholder="Meno" required>
            <input type="email" placeholder="E-mail" required>
            <textarea rows="4" placeholder="Správa" required></textarea>
            <button type="submit">Odoslať</button>
        </form>
    </section>
</template>

<style scoped>
.contact {
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
}

form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

input, textarea {
    padding: 2%;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    padding: 8px;
    border: none;
    background: #2e7d32;
    color: white;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    opacity: 0.9;
}
</style>