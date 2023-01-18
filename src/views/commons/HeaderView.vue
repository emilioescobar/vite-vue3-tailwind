<template>
  <div class="header">
    <h1 class="text-3xl font-bold">Header</h1>
  </div>
</template>

<script setup></script>

<style lang="postcss" scoped>
.header {
  background-color: lightblue;
  box-shadow: 0px 0px 10px 0px rgba(1, 1, 1, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid variables.$secondary-color;

  &__items {
    flex-grow: 1;
  }
  &__identificador {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  &__logo {
    color: variables.$text-color;
    margin-left: 0.5rem;
  }
  &__logo img {
    max-height: 2.4rem;
    width: auto;
  }
  &__titulos {
    font-size: variables.$fs-header-titulos;
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
    font-size: variables.$fs-header-salir;

    &--salir {
      display: flex;
      align-items: center;
      gap: 5px;
    }
    &--salir > i {
      font-size: variables.$fs-header-salir;
      color: variables.$text-medium;
    }
  }
  &__links:hover {
    opacity: 0.4;
  }
}
</style>
