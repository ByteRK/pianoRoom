<template>
    <view class="demo">
        <view>
            会员管理
            <Dongdong />
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
import { ref } from 'vue';
import { Dongdong } from '@nutui/icons-vue-taro';

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