<script lang="ts" setup>
import { ref } from 'vue'
import type { TabPaneName } from 'element-plus'
import type { ITable } from './interface';
import HeaderVue from '@/components/mobile/header.vue';
import { DCaret } from '@element-plus/icons-vue'
const activeName = ref('1')
const tabList = ref<ITable>([])
const activeData = ref('')
const goodNum = ref(500)
//事件
const handleClick = (name: TabPaneName) => {
    console.log(name);
    let value = tabList.value.filter((v) => v.name === name)
    console.log(value[0].label)
    activeData.value = value[0].label
}
const getList = (): void => {
    tabList.value = [
        { label: "休闲鞋", name: "1" },
        { label: "运动鞋", name: "2" },
        { label: "长筒鞋", name: "3" },
        { label: "高跟鞋", name: "4" },
        { label: "拖鞋", name: "5" },
    ]
}
getList()
console.log(tabList.value[0].label);

</script>
<template>
    <div>
        <HeaderVue />
        <div class="jabberers">
            <el-tabs v-model="activeName" class="demo-tabs" @tab-change="handleClick" :stretch=true>
                <el-tab-pane :label="item.label" :name="item.name" :key="index" v-for="(item, index) in tabList">
                    <div class="screenCond">
                        <p>{{ goodNum }}个结果</p>
                        <el-button round>
                            筛选条件
                            <el-icon class="el-icon--right">
                                <DCaret />
                            </el-icon>
                        </el-button>
                    </div>
                    {{ activeData }}
                    <div class="">
                        <div>12321</div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<style lang="less" scoped>
:deep(.jabberers) {
    margin-top: 20px;

    .el-tabs__nav-wrap.is-scrollable {
        padding: 0 40px;
        box-sizing: border-box;
    }

    .el-tabs__nav-next,
    .el-tabs__nav-prev {
        position: absolute;
        cursor: pointer;
        line-height: 44px;
        font-size: 16px;
        color: var(--el-text-color-secondary);
        width: 40px;
        text-align: center;
    }

    .el-tabs__item.is-active {
        color: black;
    }

    .el-tabs__item {
        color: #757575;
    }

    .el-tabs__active-bar {
        background-color: var(--el-color-black)
    }

    .screenCond {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
    }
}
</style>