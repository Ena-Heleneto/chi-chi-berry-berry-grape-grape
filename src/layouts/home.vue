<script setup lang="ts">
import { useRouter } from '@uni-helper/uni-use'

const { tarbar, active } = useMyRoute()
const router = useRouter()

onMounted(() => {
  consola.info('home layout', router)
  consola.info('home layout', router.current.value)
})

function handleBack() {
  uni.navigateBack({})
}

function handleBackHome() {
  uni.reLaunch({ url: '/pages/index/Index' })
}

function handleChange({ value }: { value: number }) {
  // consola.info('handle change', e)
  const temp = tarbar.value[value]
  consola.info('handle change', temp)
}
</script>

<template>
  <view class="size-screen">
    <wd-navbar title="标题" left-text="返回" right-text="设置" left-arrow placeholder>
      <template #capsule>
        <wd-navbar-capsule @back="handleBack" @back-home="handleBackHome" />
      </template>
    </wd-navbar>

    <view class="box-border min-h-0 w-full">
      <slot />
    </view>

    <wd-tabbar v-model="active" placeholder fixed @change="handleChange">
      <wd-tabbar-item v-for="(item, index) in tarbar" :key="index" :title="item.name" :icon="item.icon" />
    </wd-tabbar>
  </view>
</template>
