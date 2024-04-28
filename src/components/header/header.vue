<!-- MyHeader.vue -->
<template>
    <view class="mHeaderBox">
        <!-- <image class="image" src="" mode="aspectFill" round /> -->
        <nut-avatar class="image" size="large" bg-color="#fde3cf">
            <img :src="uImg" />
            <!-- <My /> -->
        </nut-avatar>
        <p class="name">会员名: {{ uName }}</p>
    </view>
</template>

<script>
export default {
    name: 'MyHeader',
    props: {
        uName: String,
        uImg: {
            uImg: String,
            default: ''
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
    border-bottom: 4px solid #4c81f3;

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
}
</style>