<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import type { TabPaneName } from 'element-plus'
import type { ITable, IGoodItem, ITableItem } from './interface';
import HeaderVue from '@/components/mobile/header.vue';
import { DCaret } from '@element-plus/icons-vue'
import xiezi from '@/assets/image/xiezi.jpg'
import kuzi from '@/assets/image/kuzi.jpg'
const activeName = ref('1')
const tabList = ref<ITable>([])
const tableList = ref<IGoodItem>([])
const activeData = ref('')
const goodNum = ref(500)
const router = useRouter()
const drawer = ref<boolean>(false)
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
const getGoodItem = (): void => {
    tableList.value = [
        { id: 1, img: xiezi, good_name: 'Nike Solo Swoosh', title: "男子加绒套头连帽衫", variety: 1, reality_price: 500, discounts_price: 199 },
        { id: 2, img: kuzi, good_name: 'Nike Solo Swoosh', title: "男子加绒套头连帽衫", variety: 12, reality_price: 500, discounts_price: 199 },
        { id: 3, img: xiezi, good_name: 'Nike Solo Swoosh', title: "男子加绒套头连帽衫", variety: 31, reality_price: 500 },
        { id: 3, img: xiezi, good_name: 'Nike Solo Swoosh', title: "男子加绒套头连帽衫", variety: 31, reality_price: 500 },
        { id: 3, img: xiezi, good_name: 'Nike Solo Swoosh', title: "男子加绒套头连帽衫", variety: 31, reality_price: 500 },
        { id: 3, img: xiezi, good_name: 'Nike Solo Swoosh', title: "男子加绒套头连帽衫", variety: 31, reality_price: 500 },
        { id: 3, img: xiezi, good_name: 'Nike Solo Swoosh', title: "男子加绒套头连帽衫", variety: 31, reality_price: 500 },
        { id: 3, img: xiezi, good_name: 'Nike Solo Swoosh', title: "男子加绒套头连帽衫", variety: 31, reality_price: 500 },
        { id: 3, img: xiezi, good_name: 'Nike Solo Swoosh', title: "男子加绒套头连帽衫", variety: 31, reality_price: 500 },

    ]
}
const changeGoodItem = (item: ITableItem): void => {
    router.push({
        name: 'details',
        query: { ...item }
    })
}
const openDrawer = () => {
    drawer.value = true
}
const handleClose = () => {
    drawer.value = false
}
getList()
getGoodItem()
</script>
<template>
    <div class="common-layout">
        <HeaderVue />
        <div class="jabberers">
            <el-tabs v-model="activeName" class="demo-tabs" @tab-change="handleClick" :stretch=true>
                <el-tab-pane :label="item.label" :name="item.name" :key="index" v-for="(item, index) in tabList">
                    <div class="screenCond">
                        <p>{{ goodNum }}个结果</p>
                        <el-button round @click="openDrawer()">
                            筛选条件
                            <el-icon class="el-icon--right">
                                <DCaret />
                            </el-icon>
                        </el-button>
                    </div>
                    <el-scrollbar height="83.5vh">
                        <div class="product">
                            <div class="productBox" :key="index" v-for="(item, index) in tableList"
                                @click="changeGoodItem(item)">
                                <el-image class="productImg" :src="item.img" fit="cover" />
                                <div class="productMain">
                                    <div class="productName">{{ item.good_name }}</div>
                                    <div :class="['cardColor']">{{ item.title }}</div>
                                    <div :class="['cardColor']">{{ item.variety }}种颜色</div>
                                    <div class="productPrice">
                                        <p class="PriceD">¥{{
                                            item.discounts_price ? item.discounts_price : item.reality_price
                                        }}</p>
                                        <p class="PriceR">{{
                                            item.discounts_price ? `原价:${item.reality_price}` : ''
                                        }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-scrollbar>
                </el-tab-pane>
            </el-tabs>
        </div>
        <el-drawer title="筛选条件" v-model="drawer" size="100%" direction="btt" :before-close="handleClose">
            <span>Hi there!</span>
        </el-drawer>
    </div>
</template>
<style lang="less" scoped>
.common-layout {
    height: 100%;
}
:deep(.jabberers) {
    height: 95vh;
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

.product {
    margin-top: 20px;
    display: grid;
    /* 宽度平均分成4份 */
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
    row-gap: 20px;

    .productBox {
        .productImg {
            width: 100%;
            height: 365px;
        }
    }

    .productMain {
        padding: 10px;

        .cardColor {
            color: #757575;
        }

        .productName {
            color: #111111;
            font-weight: 500;
        }

        .productPrice {
            display: flex;
            align-items: flex-end;

            .PriceD {
                font-size: 20px;
                font-weight: 500;

            }

            .PriceR {
                margin-left: 6px;
                color: #757575;
                text-decoration: line-through;
            }
        }
    }
}
</style>