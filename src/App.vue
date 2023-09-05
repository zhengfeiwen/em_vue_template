<template>
  <a-config-provider :csp="{ nonce: 'YourNonceCode' }" :locale="locale === 'en' ? enUS : zhCN">
    <router-view v-slot="{ Component }">
      <transition name="fade-transform" mode="out-in">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </a-config-provider>
</template>

<script setup lang='ts'>
import enUS from 'ant-design-vue/es/locale/en_US'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import { ref } from 'vue'

const locale = ref(zhCN.locale)
</script>

<style lang="less" scoped>

</style>
