<template>
    <view class="demo">
        <view>
            琴房管理
        </view>
        <view>{{ count }}</view>
        <view>
            <nut-button type="primary" @click="handleClick">
                Count++
            </nut-button>
        </view>
    </view>
</template>

<script setup>
// import Taro from '@tarojs/taro'
import { ref } from 'vue';
// import { useDidShow, useLoad } from '@tarojs/taro'

const count = ref(0);

const handleClick = () => {
    count.value++;
};
</script>

<style>
.demo {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>