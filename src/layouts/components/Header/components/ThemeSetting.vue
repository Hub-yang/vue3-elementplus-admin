<script setup lang="ts">
import mittBus from '@/utils/mittBus'

function openDrawer() {
  mittBus.emit('openThemeDrawer')
}
</script>

<template>
  <div class="theme-setting">
    <i class="iconfont icon-zhuti toolBar-icon" @click="openDrawer" />
  </div>
</template>
