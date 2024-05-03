<!-- piano.vue -->
<template>
    <view class="mUserPianoBox">
        <view class="info">本次使用{{ dUse }}次，剩余{{ dOver }}次</view>
        <view class="detail">
            <image class="detail_img" :src="dImgUrl" :lazyLoad="true" />
            <view class="detail_item">{{ dTime }} {{ dAdmin }}上传</view>
        </view>
    </view>
</template>

<script>
export default {
    name: 'UserPiano',
    props: {
        dUse: {
            dUse: Number,
            default: 0
        },
        dOver: {
            dOver: Number,
            default: 0
        },
        dImgUrl: {
            uImg: String,
            default: ''
        },
        dTime: {
            dTime: String,
            default: '0000.0.0 0:0'
        },
        dAdmin: {
            uImg: String,
            default: 'XXX'
        }
    }
}
</script>

<style lang="less">
.mUserPianoBox {
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
        padding-left: 50px;
        padding-bottom: 1.3em;

        .detail_img {
            display: block;
            width: 460px;
            height: 240px;
            margin: 30px 0;
            background: #b2bec3;
            border-radius: 10px;
        }

        .detail_item {
            display: block;
            color: #b2bec3;
            font-weight: bold;
            position: absolute;
            right: 30px;
        }
    }
}
</style>