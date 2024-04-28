<template>
  <view class="demo">
    <view>
      <nut-button type="primary" @click="handleClick">
        Count++
      </nut-button>
    </view>
  </view>
</template>

<script setup>
import Taro from '@tarojs/taro';
import { ref } from 'vue';

const count = ref(0);

const handleClick = () => {
  count.value++;
};

Taro.hideHomeButton()
</script>

<style scoped lang="less">
.demo {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>