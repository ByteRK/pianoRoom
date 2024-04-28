<template>
    <cover-view class="tab-bar">
        <cover-view v-for="(item, index) in list" :key="index" class="tab-bar-item"
            @tap="switchTab(index, item.pagePath)">
            <!-- <cover-image :src="selected === index ? item.selectedIconPath : item.iconPath" /> -->
            <cover-view :style="{ color: selected === index ? selectedColor : color }">{{ item.text }}</cover-view>
        </cover-view>
    </cover-view>
</template>

<script setup>
import Taro from '@tarojs/taro'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const selected = computed(() => store.getters.getSelected)

const color = '#000000'
const selectedColor = '#DC143C'
const list = [
    {
        pagePath: "/pages/admin-room/admin-room",
        iconPath: "/image/icon_component.png",
        selectedIconPath: "/image/icon_component_HL.png",
        text: "琴房管理"
    },
    {
        pagePath: "/pages/admin-user/admin-user",
        iconPath: "/image/icon_API.png",
        selectedIconPath: "/image/icon_API_HL.png",
        text: "会员管理"
    }
]

function setSelected(index) {
    store.dispatch('setSelected', index)
}

function switchTab(index, url) {
    setSelected(index)
    Taro.switchTab({ url })
}

defineExpose({
    setSelected
});
</script>

<style lang="less">
.tab-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: white;
    display: flex;
    margin-top: 10px;
    padding-bottom: env(safe-area-inset-bottom);
    box-shadow: 0px -1px 10px 0px #22222288;
}

.tab-bar-item {
    flex: 1;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.tab-bar-item cover-image {
    width: 54px;
    height: 54px;
}

.tab-bar-item cover-view {
    font-size: 1.2em;
}
</style>