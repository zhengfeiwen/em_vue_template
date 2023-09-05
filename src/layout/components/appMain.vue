<template>
  <section class="app-main-admin">
    <router-view v-slot="{ Component }">
      <transition name="fade-transform" mode="out-in">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </section>
</template>

<script lang="ts" setup name="layout-main">

</script>

<style>
  @import './index.scss';
</style>