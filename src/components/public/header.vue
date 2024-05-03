<!-- MyHeader.vue -->
<template>
    <view class="mHeaderBox">
        <!-- <image class="image" src="" mode="aspectFill" round /> -->
        <nut-avatar class="image" size="large" bg-color="#fde3cf">
            <img :src="uImg" />
            <!-- <My /> -->
        </nut-avatar>
        <p class="name">{{ uType }}: {{ uName }}</p>
        <nut-button class="exit" type="warning" @click="exit">登出</nut-button>
    </view>
</template>

<script>
import Taro from '@tarojs/taro'
export default {
    name: 'MyHeader',
    props: {
        uName: String,
        uType: {
            uType: String,
            default: '会员名'
        },
        uImg: {
            uImg: String,
            default: ''
        }
    },
    methods: {
        exit() {
            Taro.redirectTo({
                url: '/pages/login/login'
            });
        }
    }
}
</script>

<style lang="less">
.mHeaderBox {
    height: 150px;
    width: 90%;
    background: #fff;
    display: flex;
    justify-content: flex-start;
    flex-direction: initial;

    .image {
        box-shadow: 1px 1px 3px #8d807780;
    }

    .name {
        font-size: 1.4em;
        align-self: flex-end;
        font-weight: bold;
        margin-bottom: 25px;
        margin-left: 40px;
    }

    .exit {
        align-self: flex-end;
        margin-bottom: 25rpx;
        margin-left: auto;
    }
}
</style>