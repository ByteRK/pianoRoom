<!-- integralStatistics.vue -->
<template>
    <view class="mIntegralStatisticsBox">
        <nut-table :columns="columns" :data="data" />
    </view>
</template>

<script>
import { ref, reactive } from 'vue';

export default {
    name: 'IntegralStatistics',
    props: {
    },
    setup() {
        const columns = reactive([
            {
                title: '会员名字', key: 'name', align: 'center',
                stylehead: 'color:#303952;background:#F2F4F7;font-weight: bold;'
            },
            {
                title: '剩余积分', key: 'exchange', align: 'center',
                stylehead: 'color:#303952;background:#F2F4F7;font-weight: bold;'
            },
            {
                title: '所属分店', key: 'from', align: 'center',
                stylehead: 'color:#303952;background:#F2F4F7;font-weight: bold;'
            }
        ]);
        const data = ref([
            { name: 'Tom', exchange: 0, from: '清新店' },
            { name: 'Tom', exchange: 0, from: '清新店' },
            { name: 'Tom', exchange: 0, from: '清新店' },
            { name: 'Tom', exchange: 0, from: '清新店' },
            { name: 'Tom', exchange: 0, from: '清新店' },
            { name: 'Tom', exchange: 0, from: '清新店' },
            { name: 'Tom', exchange: 0, from: '清新店' },
            { name: 'Tom', exchange: 0, from: '清新店' },
            { name: 'Tom', exchange: 0, from: '清新店' },
            { name: 'Tom', exchange: 0, from: '清新店' },
            { name: 'Tom', exchange: 0, from: '清新店' },
            { name: 'Tom', exchange: 0, from: '清新店' },
            { name: 'Tom', exchange: 0, from: '清新店' },
            { name: 'Tom', exchange: 0, from: '清新店' },
            { name: 'Tom', exchange: 0, from: '清新店' },
            { name: 'Tom', exchange: 0, from: '清新店' },
            { name: 'Tom', exchange: 0, from: '清新店' },
            { name: 'Tom', exchange: 0, from: '清新店' },
            { name: 'Tom', exchange: 0, from: '清新店' },
            { name: 'Tom', exchange: 0, from: '清新店' },
            { name: 'Tom', exchange: 0, from: '清新店' },
            { name: 'Tom', exchange: 0, from: '清新店' },
            { name: 'Tom', exchange: 0, from: '清新店' },
            { name: 'Tom', exchange: 0, from: '清新店' },
        ])
        return {
            columns,
            data
        };
    }
}
</script>

<style lang="less">
.mIntegralStatisticsBox {
    height: auto;
    width: 100%;
    background: #fff;
    padding-top: 20px;
    padding-bottom: 20px;

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