<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AboutView',
})
</script>

<template>
  <div class="about">
    <h1>O nás</h1>
    <article>
      <p>
        Futbal je pre nás viac než len hra – je to vášeň, emócia a životný štýl. Náš e-shop vznikol
        z lásky k futbalu a s cieľom prinášať hráčom, fanúšikom aj klubom kvalitné futbalové
        vybavenie, na ktoré sa môžu spoľahnúť na každom tréningu aj zápase.
      </p>
      <br />
      <p>
        Ponúkame starostlivo vybraný sortiment futbalovej obuvi, oblečenia, lôpt a doplnkov od
        overených značiek, ktoré spĺňajú nároky amatérov aj profesionálov. Dbáme na kvalitu,
        funkčnosť a moderný dizajn, aby si sa na ihrisku cítil sebavedomo a pripravený podať
        maximálny výkon.
      </p>
      <br />
      <p>
        Zakladáme si na férovom prístupe, rýchlom doručení a ochotnej zákazníckej podpore. Radi
        poradíme s výberom a neustále sledujeme novinky zo sveta futbalu, aby sme ti prinášali to
        najlepšie.
      </p>
      <br />
      <p>
        Či už hráš pre radosť, súťažne alebo fandíš z tribúny – sme tu pre všetkých, ktorí milujú
        futbal rovnako ako my.
      </p>
    </article>
  </div>
</template>

<style scoped>
h1 {
  font-size: 90%;
  text-align: center;
}
article {
  width: 70%;
  margin: auto;
}
p {
  font-size: 60%;
}
</style>
