<template>
  <div class="header-body">
    <div class="header-left">
      <svg-icon name="vue" class="icon" />
      <a-button
        v-for="(leftButton, index) in leftButtons" :key="index" :type="isActive(leftButton.prop)"
        @click="onchangeNav(leftButton)"
      >
        {{ leftButton.label }}
      </a-button>
    </div>
    <div class="header-right">
      <a-input-search
        v-model:value="searchValue"
        placeholder="搜索"
        size="large"
        @search="onSearch"
      />
      <a-badge count="5">
        <BellFilled style="font-size: 24px; color: #c6c6c6;" />
      </a-badge>
      <a-badge dot>
        <a-avatar size="large">
          <template #icon>
            <UserOutlined />
          </template>
        </a-avatar>
      </a-badge>
    </div>
  </div>
</template>
<script lang="ts" setup name="layout-header">
import { ButtonType } from 'ant-design-vue/es/button'
import { useLayoutStore } from '@/store/layout'
import { storeToRefs } from 'pinia'

const store = useLayoutStore()
const { activeNav, searchValue } = storeToRefs(store)

// 菜单
type LeftButton = {
  prop: string,
  label: string,
  type: ButtonType
}

const isActive = (prop:string) => {
  return prop === activeNav.value
    ? 'link'
    : 'text'
}

const leftButtons = ref<LeftButton[]>([
  { prop: 'home', label: '首页', type: 'link' },
  { prop: 'hot', label: '热点', type: 'text' },
  { prop: 'course', label: '课程', type: 'text' },
  { prop: 'activity', label: '活动', type: 'text' },
  { prop: 'train', label: '培训', type: 'text' }
])

const onchangeNav = function (nav: LeftButton) {
  store.changeActiveNav(nav.prop)
}

// 搜索
const onSearch = function() {

}
</script>

<style lang="scss" scoped>
.header-body{
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header-left{
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .icon{
      font-size: 30px;
    }
  }
  .header-right{
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .ant-input-search{
      width: 500px;
    }
    .ant-badge{
      margin-left: 30px;
      ::v-deep .ant-badge-dot{
        width: 8px;
        height: 8px;
        top: 6px;
        right: 6px;
      }
    }
  }
}
</style>