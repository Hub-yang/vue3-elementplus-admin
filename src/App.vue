<script setup lang="ts">
import { computed, reactive } from 'vue'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { useTheme } from '@/hooks/useTheme'
import { useGlobalStore } from '@/stores/modules/global'

const globalStore = useGlobalStore()

// init theme
const { initTheme } = useTheme()
initTheme()

// element assemblySize
const assemblySize = computed(() => globalStore.assemblySize)

// element button config
const buttonConfig = reactive({ autoInsertSpace: false })
</script>

<template>
  <ElConfigProvider :locale="zhCn" :size="assemblySize" :button="buttonConfig">
    <router-view />
  </ElConfigProvider>
</template>
