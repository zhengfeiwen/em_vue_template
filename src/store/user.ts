import { defineStore } from 'pinia'


export const useUsersStore = defineStore('users', {
  state: () => {
    return {
      account: '123456',
      name: '郑斐文',
      sex: '1',
      attr: ['attr1', 'attr2']
    }
  },
  getters: {
    getName: (state) => {
      return `name: ${state.name}`
    }
  },
  actions: {
    changeName(name: string) {
      this.name = name
    }
  }
})