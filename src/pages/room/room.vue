<template>
    <view class="demo">
        <MyHeader uName="123" uType="管理员" />
        <nut-tabs v-model="tabvalue" class="nut-tabs" background="#eef5ff" :swipeable="false">
            <nut-tab-pane title="租用上传" pane-key="1">
                <PianoUpdate />
            </nut-tab-pane>

            <nut-tab-pane title="租用统计" pane-key="2">
                <PianoStatistics />
            </nut-tab-pane>

            <nut-tab-pane title="增值" pane-key="3" v-if="adminLevel == 2">
                <PianoAdded />
            </nut-tab-pane>

            <nut-tab-pane title="导出" pane-key="4" v-if="adminLevel == 2">
                <PianoExport />
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
import PianoUpdate from '../../components/admin/pianoUpdate.vue'
import PianoStatistics from '../../components/admin/pianoStatistics.vue'
import PianoAdded from '../../components/admin/pianoAdded.vue'
import PianoExport from '../../components/admin/pianoExport.vue'

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
    store.dispatch('setSelected', 0)
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
        height: calc(100vh - 150px - 92px - env(safe-area-inset-bottom) - 100px);
    }
}
</style>