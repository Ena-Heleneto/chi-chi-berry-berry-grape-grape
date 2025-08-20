<script setup lang="ts">
import a from '@/static/images/a.jpg'
import b from '@/static/images/b.jpg'
</script>

<template>
  <view>
    <wd-img :width="100" :height="100" :src="a" />
    <wd-img :width="100" :height="100" :src="b" />
  </view>
</template>

<route type="home" lang="json">
{
  "layout": "home",
  "meta": {
    "showNarBar": false
  }
}
</route>
