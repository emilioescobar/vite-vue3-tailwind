<script setup>
import { RouterView } from 'vue-router'
import SidebarHome from '@/views/commons/SidebarHome.vue'
import HeaderView from '@/views/commons/HeaderView.vue'
</script>
<template>
  <div id="app">
    <div class="contenedor">
      <HeaderView class="header" />
      <div class="main">
        <RouterView />
      </div>
      <SidebarHome class="sidebar" />
    </div>
  </div>
</template>
<style lang="postcss">
html,
body {
  overflow: hidden;
  min-height: 100vh;
  height: 100%;
}
.contenedor {
  margin: 0;
  display: grid;
  height: 100vh;
  grid-template-columns: 250px auto;
  grid-template-rows: 50px auto;
  grid-template-areas:
    'header header'
    'sidebar main';
  overflow: hidden;
}
.header {
  grid-area: header;
}
.sidebar {
  grid-area: sidebar;
}
.main {
  grid-area: main;
  height: initial;
  overflow-y: auto !important;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
@media print {
  html,
  body {
    overflow: initial !important;
    height: initial !important;
    background-color: #fff !important;
  }
  .contenedor {
    display: block;
    height: initial !important;
  }
  .main {
    width: 100%;
    display: block !important;
  }
  .sidebar {
    display: none !important;
  }
}
</style>
