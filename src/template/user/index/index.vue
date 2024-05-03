<template>
  <view class="demo">
    <MyHeader uName="123" />
    <nut-tabs v-model="tabvalue" class="nut-tabs" background="#eef5ff" :swipeable="false">

      <nut-tab-pane title="琴房记录" pane-key="1">
        <scroll-view class="scrollview" @scrolltoupper="upper" @scrolltolower="lower" :scroll-y="true"
          :enableBackToTop="true" :refresherEnabled="true">
          <UserPiano />
          <UserPiano />
          <UserPiano />
          <UserPiano />
          <UserPiano />
          <UserPiano />
          <UserPiano />
          <UserPiano />
          <UserPiano />
          <UserPiano />
          <UserPiano />
          <UserPiano />
          <UserPiano />
          <UserPiano />
        </scroll-view>
      </nut-tab-pane>

      <nut-tab-pane title="会员积分" pane-key="2">
        <scroll-view class="scrollview" @scrolltoupper="upper" @scrolltolower="lower" :scroll-y="true"
          :enableBackToTop="true" :refresherEnabled="true">
          <UserIntegral />
          <UserIntegral />
          <UserIntegral />
          <UserIntegral />
          <UserIntegral />
          <UserIntegral />
          <UserIntegral />
          <UserIntegral />
          <UserIntegral />
          <UserIntegral />
          <UserIntegral />
          <UserIntegral />
          <UserIntegral />
          <UserIntegral />
        </scroll-view>
      </nut-tab-pane>

    </nut-tabs>
  </view>
</template>

<script setup>
import Taro from '@tarojs/taro';
import { ScrollView } from '@tarojs/components';
import { ref, reactive } from 'vue';
import MyHeader from '../../../components/public/header.vue'
import UserIntegral from '../../../components/user/integral.vue'
import UserPiano from '../../../components/user/piano.vue'

const tabvalue = ref('1');

function upper(e) {
  console.log('upper:', e)
};

function lower(e) {
  console.log('lower:', e)
};

Taro.hideHomeButton()
</script>

<style lang="less">
.demo {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .nut-tabs {
    width: 90%;
    border-top: 4px solid #4c81f3;
  }

  .nut-tab-pane {
    padding: 0;
  }

  .scrollview {
    height: calc(100vh - 150px - 92px - env(safe-area-inset-bottom));
  }
}
</style>