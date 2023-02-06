<script lang="ts" setup>
import { ref, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import type { ITable, IGoodItem, ITableItem } from './interface';
import HeaderVue from '@/components/mobile/header.vue';
import xiezi from '@/assets/image/xiezi.jpg'
import kuzi from '@/assets/image/kuzi.jpg'
import image1 from '@/assets/image/1.jpg'
const route = useRoute()
const bannerList = ref<IGoodItem>([])
const ActionImage = ref<number>()
const goodSizeIndex = ref<number>()
const SizeNumber = ref<number>()

const carousel = ref()
const goodSize = ref([
    { label: 39, value: 1, disabled: false, num: 10 },
    { label: 40, value: 2, disabled: true, num: 11 },
    { label: 41, value: 3, disabled: false, num: 21 },
    { label: 42, value: 4, disabled: true, num: 134 },
    { label: 43, value: 5, disabled: true, num: 10 },
    { label: 44, value: 6, disabled: false, num: 10 },
])
const getInfo = (): void => {
    bannerList.value = [
        { id: 22, img: kuzi, good_name: 'Nike Solo Swoosh', title: "男子加绒套头连帽衫", variety: 12, reality_price: 500, discounts_price: 199 },
        { id: 11, img: xiezi, good_name: 'Nike Solo Swoosh', title: "男子加绒套头连帽衫", variety: 1, reality_price: 500, discounts_price: 199 },
        { id: 33, img: image1, good_name: 'Nike Solo Swoosh', title: "男子加绒套头连帽衫", variety: 31, reality_price: 500 },
        { id: 1, img: image1, good_name: 'Nike Solo Swoosh', title: "男子加绒套头连帽衫", variety: 31, reality_price: 500 },
        { id: 2, img: image1, good_name: 'Nike Solo Swoosh', title: "男子加绒套头连帽衫", variety: 31, reality_price: 500 },
        { id: 3, img: image1, good_name: 'Nike Solo Swoosh', title: "男子加绒套头连帽衫", variety: 31, reality_price: 500 },
        { id: 4, img: image1, good_name: 'Nike Solo Swoosh', title: "男子加绒套头连帽衫", variety: 31, reality_price: 500 },

    ]
}
const changeImage = (v: number) => {
    ActionImage.value = v
    nextTick(() => {
        carousel.value.setActiveItem('i' + v)
    })
}
const changeSizeItem = (item: any, index: number) => {
    console.log(item);
    goodSizeIndex.value = index
    SizeNumber.value = item.num
}
console.log(route.query);
getInfo()
</script>
<template>
    <div class="common-layout">
        <HeaderVue />
        <el-scrollbar height="95vh">
            <div class="headBox">
                <div class="headline">Nike Waffle Debut</div>
                <div class="headTitle">女子时尚华夫运动鞋</div>
                <div class="headMony">¥599</div>
            </div>
            <div class="block text-center">
                <el-carousel :autoplay="false" ref="carousel">
                    <el-carousel-item v-for="item in bannerList" :key="item.id" :name="'i' + item.id">
                        <el-image class="productImg" :src="item.img" fit="fill" />
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="imageLi">
                <div v-for="(item, index) in bannerList" :key="index" @click="changeImage(item.id)">
                    <el-image :class="[ActionImage === item.id ? 'showImgAction' : 'showImg']" :src="item.img"
                        fit="fill" />
                </div>
            </div>
            <div>
                <div class="transparent">
                    <p>选择尺码<span v-if="SizeNumber" style="margin-left: 10px;">库存:{{ SizeNumber }}</span></p>
                    <p>尺码表</p>
                </div>
                <div class="hzulvp">
                    <div v-for="(item, index) in goodSize" :key="index">
                        <div :class="[item.disabled ? 'disabledButGod' : goodSizeIndex === index ? 'activeButGod' : 'butGod']"
                            @click="changeSizeItem(item, index)">{{
    item.label
                            }}</div>
                    </div>
                </div>
            </div>
            <div class="titleName">产品介绍</div>
            <div class="textMain">
                穿上温暖多绒的 Jordan Essential Winter 男子加绒连帽衫，让你轻松应对冷天。刺绣 AIR JORDAN 字样，打造舒适穿着体验，又不失潮酷感。
            </div>
        </el-scrollbar>
    </div>
</template>
<style lang="less" scoped>
.common-layout {
    height: 100%;
}
.headBox {
    padding: 40px;

    .headline {
        font-weight: 500;
        font-size: 20px;
    }

    .headTitle {

        margin: 10px 0;
    }
}

.block {
    width: 100%;
    .productImg {
        width: 100%;
        height: 100%;
    }

}

.imageLi {
    width: 100%;
    display: grid;
    padding: 10px 0;
    grid-template-columns: repeat(auto-fill, 175px);
    column-gap: 10px;
    row-gap: 5px;
    justify-content: center;

    .showImg {
        border-radius: 5px;
        width: 175px;
        height: 175px;
    }

    .showImgAction {
        border: 2px solid black;
        border-radius: 5px;
        width: 175px;
        height: 175px;
    }
}

.transparent {
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
}

:deep(.hzulvp) {
    display: grid;
    grid-template-columns: repeat(auto-fill, 140px);
    column-gap: 5px;
    row-gap: 5px;
    justify-content: center;

    .butGod {
        width: 140px;
        height: 80px;
        border: 1px solid #E5E5E5;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #FFFFFF;
    }

    .disabledButGod {
        width: 140px;
        height: 80px;
        pointer-events: none;
        cursor: default;
        color: rgb(221, 221, 221);
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #FFFFFF;
        border: none;
    }

    .activeButGod {
        width: 140px;
        height: 80px;
        border: 1px solid black;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #FFFFFF;
    }


}

.titleName {
    font-size: 20px;
    font-weight: 500;
    padding: 20px;
}

.textMain {
    padding: 20px;
}
</style>