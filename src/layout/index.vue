<template>
  <div class="layout-container">
    <div class="layout-header">
      <layoutHeader />
    </div>
    <!-- <div class="layout-nav"></div> -->
    <div class="layout-main">
      <appMain />
      <a-float-button-group trigger="hover" type="primary" :style="{ right: '94px' }">
        <template #icon>
          <CustomerServiceOutlined />
        </template>
        <a-float-button />
        <a-float-button>
          <template #icon>
            <CommentOutlined />
          </template>
        </a-float-button>
      </a-float-button-group>
      <a-back-top />
    </div>
  </div>
</template>

<script lang="ts" setup name="layout">
import appMain from './components/appMain.vue'
import layoutHeader from './components/header.vue'
import { CustomerServiceOutlined, CommentOutlined } from '@ant-design/icons-vue'
</script>

<style>
  @import './index.scss';
</style>