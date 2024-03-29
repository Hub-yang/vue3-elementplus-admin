<script setup lang="ts" name="tabs">
import { inject, nextTick, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { CircleClose, FolderDelete, FullScreen, Promotion, Refresh, Remove } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { HOME_URL } from '@/config'
import { useTabsStore } from '@/stores/modules/tabs'
import { useGlobalStore } from '@/stores/modules/global'
import { useKeepAliveStore } from '@/stores/modules/keepAlive'

const route = useRoute()
const router = useRouter()
const tabStore = useTabsStore()
const globalStore = useGlobalStore()
const keepAliveStore = useKeepAliveStore()

// 刷新当前页
const refreshCurrentPage: Function = inject('refresh') as Function
function refresh() {
  setTimeout(() => {
    route.meta.isKeepAlive && keepAliveStore.removeKeepAliveName(route.fullPath as string)
    refreshCurrentPage(false)
    nextTick(() => {
      route.meta.isKeepAlive && keepAliveStore.addKeepAliveName(route.fullPath as string)
      refreshCurrentPage(true)
    })
  }, 0)
}

// 设置 Tab 标题
const tabsTitle = ref('')
function editTabsTitle() {
  if (!tabsTitle.value)
    return ElMessage.warning('请输入标题')
  tabStore.setTabsTitle(tabsTitle.value)
}

// 当前页全屏
function maximize() {
  globalStore.setGlobalState('maximize', !globalStore.maximize)
}

// 关闭当前页
function closeCurrentTab() {
  if (route.meta.isAffix)
    return
  tabStore.removeTabs(route.fullPath)
}

// 关闭其他
function closeOtherTab() {
  tabStore.closeMultipleTab(route.fullPath)
}

// 关闭两侧
function closeOnSide(direction: 'left' | 'right') {
  tabStore.closeTabsOnSide(route.fullPath, direction)
}

// 全部关闭
function closeAllTab() {
  tabStore.closeMultipleTab()
  router.push(HOME_URL)
}

// 打开详情页
function handleToDetail(id: string) {
  router.push(`/assembly/tabs/detail/${id}`)
}
</script>

<template>
  <div class="card content-box">
    <span class="text"> 标签页操作 🍓🍇🍈🍉</span>
    <div class="mb30">
      <el-input v-model="tabsTitle" placeholder="请输入内容" style="width: 500px">
        <template #append>
          <el-button type="primary" @click="editTabsTitle">
            设置 Tab 标题
          </el-button>
        </template>
      </el-input>
    </div>
    <el-space class="mb30">
      <el-button type="primary" :icon="Refresh" @click="refresh">
        刷新当前页
      </el-button>
      <el-button type="primary" :icon="FullScreen" @click="maximize">
        当前页全屏切换
      </el-button>
      <el-button type="primary" :icon="FullScreen" @click="closeOnSide('left')">
        关闭左侧标签页
      </el-button>
      <el-button type="primary" :icon="FullScreen" @click="closeOnSide('right')">
        关闭右侧标签页
      </el-button>
      <el-button type="primary" :icon="Remove" @click="closeCurrentTab">
        关闭当前页
      </el-button>
      <el-button type="primary" :icon="CircleClose" @click="closeOtherTab">
        关闭其他
      </el-button>
      <el-button type="primary" :icon="FolderDelete" @click="closeAllTab">
        全部关闭
      </el-button>
    </el-space>
    <el-space class="mb30">
      <el-button type="info" :icon="Promotion" @click="handleToDetail('1')">
        打开详情页1
      </el-button>
      <el-button type="info" :icon="Promotion" @click="handleToDetail('2')">
        打开详情页2
      </el-button>
      <el-button type="info" :icon="Promotion" @click="handleToDetail('3')">
        打开详情页3
      </el-button>
      <el-button type="info" :icon="Promotion" @click="handleToDetail('4')">
        打开详情页4
      </el-button>
      <el-button type="info" :icon="Promotion" @click="handleToDetail('5')">
        打开详情页5
      </el-button>
    </el-space>
  </div>
</template>
