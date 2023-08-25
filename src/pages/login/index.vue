<template>
  <div>login页面</div>
  <p>{{ store.getName }}</p>
  <p>{{ sex }}</p>
  <p>{{ attr }}</p>
  <a-button @click="onChange">
    change
  </a-button>
  <a-button @click="onReset">
    reset
  </a-button>
</template>

<script setup lang="ts">
import { storeToRefs, createPinia, PiniaPluginContext } from 'pinia'
import { useUsersStore } from '@/store/user'
const store = useUsersStore()
const { account, name, sex, attr } = storeToRefs(store)

const onChange = () => {
  // store.name = 'emperor'
  store.changeName('zfw')
  console.log(store.attr, store.attr.length)
}
const onReset = () => {
  store.$reset()
}

createPinia().use((context: PiniaPluginContext) => {
  console.log(11111)
  context.store.name = 'test'
  if (process.env.NODE_ENV === 'developer') {
    context.store._customProperties.add('test')
  }
})

</script>

<style lang="less" scoped></style>
