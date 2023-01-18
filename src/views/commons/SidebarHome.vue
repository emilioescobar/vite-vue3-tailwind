<script setup>
import InboxIcon from '@/components/ui/atoms/icons/InboxIcon.vue'
import { RouterLink } from 'vue-router'
</script>
<template lang="pug">
div
  ul.sidebar__ul
    RouterLink.sidebar__router(:to="{path:'/'}")
      li.sidebar__li
        .sidebar__liIcon
          InboxIcon
        .sidebar__liTexto Por Atender
    RouterLink(:to="{path:'/otra'}")
      li.sidebar__li
        .sidebar__liIcon
          InboxIcon
        .sidebar__liTexto Por Validar
  .sidebar__cuenta
    p.sidebar__version Versión: 0.0.0
  </template>

<style lang="postcss" scoped>
.sidebar {
  background-color: brown;
  box-shadow: -2px 0px 10px 3px rgba(1, 1, 1, 0.2);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &__cuenta {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  &__ul {
    list-style-type: none;
    padding: 0px;
    margin: 0;
  }
  &__li {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 30px auto 20px;
    padding: 10px;
    cursor: pointer;
    gap: 8px;
    transition: all 0.2s ease;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    grid-template-areas: 'icono texto cuantos';
    color: white;
  }
  &__li:hover {
    background: rgba(0, 0, 0, 0.3);
    opacity: 0.9;
  }
  &__li--active {
    border-right: 6px solid #819595;
  }
  &__liIcon {
    grid-area: icono;
    padding-left: 8px;
    display: flex;
    align-items: center;
    color: white;
    & svg {
      fill: white;
    }
  }
  &__liTexto {
    grid-area: texto;
    font-size: 18px;
  }
  &__version {
    text-align: center;
    color: white;
    padding-bottom: 1rem;
    font-size: 12px;
    margin-top: 6px;
  }
}
a.router-link-exact-active li.sidebar__li {
  border-right: 6px solid lightsalmon;
  width: 250px;
}
a.active li.sidebar__li {
  border-right: 6px solid lightsalmon;
  width: 100%;
}
</style>
