<template>
    <view class="demo">
        <MyHeader uName="123" uType="管理员" />
        <nut-tabs v-model="tabvalue" class="nut-tabs" background="#eef5ff" :swipeable="false">
            <nut-tab-pane title="积分上传" pane-key="1">
                <scroll-view class="scrollview" @scrolltoupper="upper" @scrolltolower="lower" :scroll-y="true"
                    :enableBackToTop="true" :refresherEnabled="true">
                </scroll-view>
            </nut-tab-pane>

            <nut-tab-pane title="积分统计" pane-key="2">
                <scroll-view class="scrollview" @scrolltoupper="upper" @scrolltolower="lower" :scroll-y="true"
                    :enableBackToTop="true" :refresherEnabled="true">
                </scroll-view>
            </nut-tab-pane>

            <nut-tab-pane title="会员增值" pane-key="3" v-if="adminLevel == 2">
                <scroll-view class="scrollview" @scrolltoupper="upper" @scrolltolower="lower" :scroll-y="true"
                    :enableBackToTop="true" :refresherEnabled="true">
                </scroll-view>
            </nut-tab-pane>

        </nut-tabs>
    </view>
</template>

<script setup>
import Taro from '@tarojs/taro'
import { useDidShow, useLoad } from '@tarojs/taro'
import { ref } from 'vue';
import { useStore } from 'vuex'
import MyHeader from '../../components/public/header.vue'

const store = useStore()

const tabvalue = ref('1');
const adminLevel = ref(0);

function logError() {
    console.log('获取管理员权限失败');
    Taro.redirectTo({
        url: '/pages/login/login'
    });
}

useLoad(() => {
})

useDidShow(() => {
    try {
        adminLevel.value = Taro.getStorageSync('adminLevel');
    } catch (e) {
        console.log(e);
        logError()
        return
    }
    if (adminLevel.value == null || adminLevel.value == '') {
        logError()
        return
    }
    console.log('adminLevel:', adminLevel.value);
    store.dispatch('setSelected', 1)
})

function upper(e) {
    console.log('upper:', e)
};

function lower(e) {
    console.log('lower:', e)
};

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