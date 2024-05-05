<!-- pianoUpdate.vue -->
<template>
    <view class="mPianoUpdateBox">
        <view>会员</view>
        <view class="pianoUpdate_item">
            练琴 <span class="span" />
            <nut-checkbox v-model="updateData.practice" icon-size="20" />
        </view>
        <view class="pianoUpdate_item">
            奖励 <span class="span" />
            <nut-input-number v-model="updateData.add" :min="0" :button-size="30" :input-width="50" />
        </view>
        <view class="pianoUpdate_item">
            使用 <span class="span" />
            <nut-input-number v-model="updateData.use" :min="0" :button-size="30" :input-width="50" />
        </view>
    </view>
</template>

<script>
import { ref, reactive } from 'vue';

export default {
    name: 'PianoUpdate',
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
.mPianoUpdateBox {
    height: auto;
    width: 100%;
    background: #fff;
    padding-top: 20px;
    padding-bottom: 20px;

    .pianoUpdate_item {
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
}
</style>