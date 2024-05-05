<!-- pianoAdded.vue -->
<template>
    <view class="mPianoAddedBox">
        <view class="info">{{ dTime }} 会员积分：{{ dIntegral }}</view>
        <view class="detail">
            <view class="detail_item">练习 +{{ dPractise }}</view>
            <view class="detail_item">奖励 +{{ dAward }}</view>
            <view class="detail_item">兑换 -{{ dExchange }}</view>
        </view>
    </view>
</template>

<script>
export default {
    name: 'PianoAdded',
    props: {
        dTime: {
            dTime: String,
            default: 'xxxx.xx.xx'
        },
        dIntegral: {
            dIntegral: Number,
            default: 0
        },
        dPractise: {
            dPractise: Number,
            default: 0
        },
        dAward: {
            dAward: Number,
            default: 0
        },
        dExchange: {
            dExchange: Number,
            default: 0
        }
    }
}
</script>

<style lang="less">
.mPianoAddedBox {
    height: auto;
    width: 100%;
    background: #fff;
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: 2px solid #b2bec3;

    &::before {
        content: "";
        position: absolute;
        margin-top: 8px;
        width: 30px;
        height: 30px;
        background-color: #fab1a0;
        border-radius: 50%;
    }

    .info {
        color: #000;
        font-weight: bold;
        display: block;
        padding-left: 50px;
    }

    .detail {
        padding-top: 30px;
        padding-left: 50px;

        .detail_item {
            display: block;
            color: #b2bec3;
        }
    }
}
</style>