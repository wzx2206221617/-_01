<script lang="ts" setup>
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";
import { onMounted } from "vue";
import router from "@/router";
import type { IGoodItem } from "@/interface/index";
import xiezi from "@/assets/image/xiezi.jpg";
import kuzi from "@/assets/image/kuzi.jpg";
const show = ref(false);
const inputSearch = ref("");
const goodsList = ref<IGoodItem>([]);
const goBack = () => {
  router.push({
    name: "goodShow",
  });
};
const getGoodItem = (): void => {
  goodsList.value = [
    {
      id: 1,
      img: xiezi,
      good_name: "Nike Solo Swoosh",
      title: "男子加绒套头连帽衫",
      variety: 1,
      reality_price: 500,
      discounts_price: 199,
    },
    {
      id: 2,
      img: kuzi,
      good_name: "Nike Solo Swoosh",
      title: "男子加绒套头连帽衫",
      variety: 12,
      reality_price: 500,
      discounts_price: 199,
    },
    {
      id: 3,
      img: xiezi,
      good_name: "Nike Solo Swoosh",
      title: "男子加绒套头连帽衫",
      variety: 31,
      reality_price: 500,
    },
    {
      id: 3,
      img: xiezi,
      good_name: "Nike Solo Swoosh",
      title: "男子加绒套头连帽衫",
      variety: 31,
      reality_price: 500,
    },
    {
      id: 3,
      img: xiezi,
      good_name: "Nike Solo Swoosh",
      title: "男子加绒套头连帽衫",
      variety: 31,
      reality_price: 500,
    },
    {
      id: 3,
      img: xiezi,
      good_name: "Nike Solo Swoosh",
      title: "男子加绒套头连帽衫",
      variety: 31,
      reality_price: 500,
    },
    {
      id: 3,
      img: xiezi,
      good_name: "Nike Solo Swoosh",
      title: "男子加绒套头连帽衫",
      variety: 31,
      reality_price: 500,
    },
    {
      id: 3,
      img: xiezi,
      good_name: "Nike Solo Swoosh",
      title: "男子加绒套头连帽衫",
      variety: 31,
      reality_price: 500,
    },
    {
      id: 3,
      img: xiezi,
      good_name: "Nike Solo Swoosh",
      title: "男子加绒套头连帽衫",
      variety: 31,
      reality_price: 500,
    },
  ];
};
onMounted(() => {
  show.value = true;
  getGoodItem();
});
</script>
<template>
  <div>
    <transition name="el-zoom-in-center">
      <div v-show="show" class="transition-box">
        <div>
          <el-input
            v-model="inputSearch"
            class="w-50 m-2"
            size="large"
            placeholder="搜索"
            :prefix-icon="Search"
            clearable
            style="width: 300px"
          />
        </div>
        <div class="butCancel" @click="goBack()">取消</div>
      </div>
    </transition>
    <div class="woodbox">111</div>
  </div>
</template>
<style lang="less" scoped>
.transition-box {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
}
.butCancel {
  margin: 0 30px;
}
.woodbox {
  border: 1px solid red;
}
</style>
