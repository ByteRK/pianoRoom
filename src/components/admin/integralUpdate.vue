<!-- integralUpdate.vue -->
<template>
    <view class="mIntegralUpdateBox">
        <view class="integralUpdate_item">会员</view>
        <view class="userGrid">
            <view class="userGrid_item">+</view>
            <view class="userGrid_item">+</view>
            <view class="userGrid_item">+</view>
            <view class="userGrid_item">+</view>
            <view class="userGrid_item">+</view>
            <view class="userGrid_item">+</view>
            <view class="userGrid_item">+</view>
            <view class="userGrid_item">+</view>
            <view class="userGrid_item">+</view>
        </view>
        <view class="integralUpdate_item">
            练琴 <span class="span" />
            <nut-checkbox v-model="updateData.practice" icon-size="20" />
        </view>
        <view class="integralUpdate_item">
            奖励 <span class="span" />
            <nut-input-number v-model="updateData.add" :min="0" :button-size="30" :input-width="50" />
        </view>
        <view class="integralUpdate_item">
            使用 <span class="span" />
            <nut-input-number v-model="updateData.use" :min="0" :button-size="30" :input-width="50" />
        </view>
    </view>
</template>

<script>
import { ref, reactive } from 'vue';

export default {
    name: 'IntegralUpdate',
    props: {
    },
    setup() {
        const updateData = reactive({
            user: [],
            practice: false,
            add: 0,
            use: 0,
        });

        return {
            updateData
        };
    }
}
</script>

<style lang="less">
.mIntegralUpdateBox {
    height: auto;
    width: 100%;
    background: #fff;
    padding-top: 20px;

    .integralUpdate_item {
        color: #000;
        font-weight: bold;
        height: 80px;
        display: flex;
        // justify-content: center;
        align-items: center;

        .span {
            margin-left: 1em;
        }
    }

    .userGrid {
        display: flex;
        flex-wrap: wrap;
        // display: grid;
        // grid-template-columns: repeat(3, 1fr);
        // grid-gap: 6px;
        // margin-top: 1em;
        // margin-bottom: 1em;
        // justify-content: center;

        .userGrid_item {
            width: 140px;
            height: 50px;
            border-radius: 8px;
            background: #778beb;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            // border: 1px solid #000;
            margin-right: 0.5em;
            margin-bottom: 0.5em;

            :active {
                background: #a5b3df;
            }
        }
    }
}
</style>