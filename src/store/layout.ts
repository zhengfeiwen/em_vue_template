import { defineStore } from 'pinia'


export const useLayoutStore = defineStore('layout', {
  state: () => {
    return {
      activeNav: 'home',
      searchValue: ''
    }
  },
  getters: {
    getActiveNav: (state) => {
      return state.activeNav
    },
    getSearchValue: (state) => {
      return state.searchValue
    }
  },
  actions: {
    changeActiveNav(activeNav: string) {
      this.activeNav = activeNav
    },
    changeSearchValue(searchValue: string) {
      this.searchValue = searchValue
    }
  }
})