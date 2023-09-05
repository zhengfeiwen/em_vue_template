<template>
  <a-row class="home-container">
    <a-col :span="3">
      <!-- <a-menu
        v-model:value="activeKey"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        mode="vertical"
        :options="myMenuOptions"
        @click="onNavClick"
      >
      </a-menu> -->

      <Nav
        v-model:activeKey="activeKey" :menu="myMenuOptions" @set-active-key="setActiveKey"
        @nav-handle="onNavClick"
      >
        <template #footer="footer">
          <div>{{ footer.name }}</div>
        </template>
      </Nav>
      {{ activeKey }}
    </a-col>
    <a-col :span="17">
      col-8
    </a-col>
    <a-col :span="4">
      col-8
    </a-col>
  </a-row>
</template>

<script setup lang="tsx" name="home">
import { ref } from 'vue'
import Nav from '@/components/nav/index'
import { MenuOptionItem } from '@/type/index'
import { GithubFilled } from '@ant-design/icons-vue'

let activeKey = ref('following')
const myMenuOptions = ref<MenuOptionItem[]>([
  { label: '关注', key: 'following', path: '/following', icon: <GithubFilled /> },
  { label: '综合', key: 'recommended', path: '/recommended', icon: 'GithubFilled' },
  { label: '项目1', key: 'project1', path: '/project1', icon: 'GithubFilled' },
  { label: '项目2', key: 'project2', path: '/project2', icon: 'GithubFilled' },
  { label: 'Vue', key: 'vue', path: '/vue', icon: 'GithubFilled' },
  { label: 'PHP', key: 'php', path: '/php', icon: 'GithubFilled' },
  { label: 'MySQL', key: 'mysql', path: '/mysql', icon: 'GithubFilled' },
  { label: '排行榜', key: 'hot', path: '/hot', icon: 'GithubFilled' }
])

const setActiveKey = function() {
  activeKey.value = 'test'
}

const onNavClick = function() {

}

</script>

<style>
  @import './index.scss';
</style>@/components/nav/nav