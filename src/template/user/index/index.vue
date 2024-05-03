<template>
  <view class="demo">
    <MyHeader uName="123" />
    <nut-tabs v-model="tabvalue" class="nut-tabs" background="#eef5ff" swipeable>

      <nut-tab-pane title="琴房记录" pane-key="1">
        Content 1
      </nut-tab-pane>

      <nut-tab-pane title="会员积分" pane-key="2">
        Content 2
      </nut-tab-pane>

    </nut-tabs>
  </view>
</template>

<script setup>
import Taro from '@tarojs/taro';
import { ref, reactive } from 'vue';
import MyHeader from '../../../components/public/header.vue'

const tabvalue = ref('1');

Taro.hideHomeButton()
</script>

<style lang="less">
.demo {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.nut-tabs {
  width: 90%;
  border-top: 4px solid #4c81f3;
}
</style>