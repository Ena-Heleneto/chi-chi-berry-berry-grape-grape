<script setup lang="ts">
const { tarbar, active } = useMyRoute()
</script>

<template>
  <view class="size-screen">
    <slot />

    <wd-tabbar v-model="active" placeholder fixed>
      <wd-tabbar-item v-for="(item, index) in tarbar" :key="index" :title="item.name" :icon="item.icon" />
    </wd-tabbar>
  </view>
</template>
