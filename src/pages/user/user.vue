<template>
    <view class="demo">
        <MyHeader uName="123" uType="管理员" />
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
import MyHeader from '../../components/public/header.vue'

const count = ref(0);

const handleClick = () => {
    count.value++;
};
</script>

<style lang="less">
.demo {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>