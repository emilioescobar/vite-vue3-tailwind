<template lang="pug">
div
  .header__items 
    .header__identificador 
      .header__logo
        img( alt="Vue logo" class="logo" src="@/assets/logo.svg" width="30" height="30")
      .header__titulos 
        .header__titulo Dashboard
        .header__subtitulo Vite + Vue3 + Tailwind + pinia + Router + pug 
  .header__items
    .header__caja-links
      .header__links
        RouterLink(:to="{path:'/'}")
          span Hola
      .header__links.header__links--salir
        RouterLink(:to="{path:'/otra'}") Salir
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
<style lang="postcss">
.header {
  color: var(--color-heading);
  background-color: lightblue;
  box-shadow: 0px 0px 10px 0px rgba(1, 1, 1, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid grey;

  &__items {
    flex-grow: 1;
  }
  &__identificador {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  &__logo {
    color: grey;
    margin-left: 0.5rem;
  }
  &__titulos {
    font-size: 18px;
    color: #777;
  }
  &__titulo {
    font-weight: bold;
    border-bottom: 1px solid #777;
    line-height: 1.3em;
  }
  &__subtitulo {
    line-height: 1.3em;
    font-weight: normal;
  }
  &__caja-links {
    display: flex;
    justify-content: flex-end;
  }
  &__links {
    margin-right: 1rem;
    cursor: pointer;
    transition: all 0.2s ease;

    &--salir {
      display: flex;
      align-items: center;
      gap: 5px;
    }
    &--salir > i {
      color: green;
    }
  }
  &__links:hover {
    opacity: 0.4;
  }
}
</style>
