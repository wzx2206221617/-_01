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
const carousel = ref()
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

console.log(route.query);
getInfo()
</script>
<template>
    <div>
        <HeaderVue />
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
                <el-image :class="[ActionImage === item.id ? 'showImgAction' : 'showImg']" :src="item.img" fit="fill" />
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
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
    border: 1px solid red;
    width: 100%;

    .productImg {
        width: 100%;
        height: 100%;
    }

}

.imageLi {
    border: 1px solid red;
    width: 100%;
    display: grid;
    padding: 10px 0;
    grid-template-columns: repeat(auto-fill, 175px);
    column-gap: 10px;
    row-gap: 5px;
    justify-content:center;
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
</style>