<!-- 💥 这里是异步加载 LayoutComponents -->
<script setup lang="ts" name="layoutAsync">
import type { LayoutType } from '@/stores/interface'
import { useGlobalStore } from '@/stores/modules/global'

const LayoutComponents: Record<LayoutType, Component> = {
  vertical: defineAsyncComponent(() => import('./LayoutVertical/index.vue')),
  classic: defineAsyncComponent(() => import('./LayoutClassic/index.vue')),
  transverse: defineAsyncComponent(() => import('./LayoutTransverse/index.vue')),
  columns: defineAsyncComponent(() => import('./LayoutColumns/index.vue')),
}

const globalStore = useGlobalStore()
const layout = computed(() => globalStore.layout)
</script>

<template>
  <suspense>
    <template #default>
      <component :is="LayoutComponents[layout]" />
    </template>
    <template #fallback>
      <Loading />
    </template>
  </suspense>
  <ThemeDrawer />
</template>

<style scoped lang="scss">
.layout {
  min-width: 600px;
}
</style>
