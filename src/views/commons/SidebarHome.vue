<script setup>
// eslint-disable-next-line no-unused-vars
import InboxIcon from '@/components/ui/atoms/icons/InboxIcon.vue'
// eslint-disable-next-line no-unused-vars
import { RouterLink } from 'vue-router'
</script>
<template lang="pug">
div
  ul.sidebar__ul
    RouterLink.sidebar__router(:to="{path:'/'}")
      li.sidebar__li
        //- .sidebar__Cuantos 12
        .sidebar__liIcon
          InboxIcon
        .sidebar__liTexto Por Atender
    RouterLink(:to="{path:'/otra'}")
      li.sidebar__li
        //- .sidebar__Cuantos 12
        .sidebar__liIcon
          InboxIcon
        .sidebar__liTexto Por Validar
  .sidebar__cuenta
    p.sidebar__version Versión: 0.0.0
  </template>

<style lang="postcss">
.sidebar {
  background-color: grey;
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
      /* fill: variables.$btn-default-color; */
      fill: red;
    }
  }
  &__Cuantos {
    grid-area: 'cuantos';
    font-weight: bold;
    right: 0px;
    top: 0px;
    background: #4d65df;
    height: 24px;
    width: 24px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
  }
  &__liTexto {
    grid-area: texto;
    font-size: 18px;
  }
  &__version {
    text-align: center;
    /* color: variables.$text-medium; */
    padding-bottom: 1rem;
    font-size: 12px;
    margin-top: 6px;
  }
  &__nombre {
    font-size: 12px;
    padding: 0 5px;
    line-height: 1em;
    margin-bottom: 4px;
  }
  &__cargo {
    font-size: 10px;
    padding: 0 5px;
    line-height: 1em;
    margin-bottom: 4px;
  }
  &__dep {
    font-size: 12px;
    padding: 0 5px;
    line-height: 1em;
  }
  &__subdep {
    font-size: 11px;
    padding: 0 5px;
    line-height: 1em;
  }
}
a.router-link-exact-active li.sidebar__li {
  /* border-right: 6px solid variables.$sidebar-active; */
  width: 250px;
}
a.active li.sidebar__li {
  /* border-right: 6px solid variables.$sidebar-active; */
  width: 100%;
}
</style>
