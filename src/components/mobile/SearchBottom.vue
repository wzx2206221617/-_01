<script lang="ts" setup>
import { ref, toRefs, defineEmits } from "vue";
import type { IFromItem, ITable } from "../interface";
const emit = defineEmits(["getCondition"]);
const fromList = ref<IFromItem>({});
const goodsRadio = ref<ITable>([
  { name: "精品推荐", label: "1" },
  { name: "最新", label: "2" },
  { name: "价格：由高到低", label: "3" },
  { name: "价格：由低到高", label: "4" },
]);
const goodsPrice = ref<ITable>([
  { name: "0-299元", label: "1" },
  { name: "300-499元", label: "2" },
  { name: "500元以上", label: "4" },
]);
const submit = () => {
  emit("getCondition", fromList.value);
};
</script>
<template>
  <div class="mainAll">
    <div class="BoxGroup">
      <div><h2>排序依据</h2></div>
      <div>
        <el-radio-group v-model="fromList.goodType">
          <div
            v-for="(item, index) in goodsRadio"
            :key="index"
            class="childrenContainer"
          >
            <el-radio :label="item.label">{{ item.name }}</el-radio>
          </div>
        </el-radio-group>
      </div>
    </div>
    <div class="BoxGroup">
      <div><h2>按价格选购</h2></div>
      <div>
        <el-checkbox-group v-model="fromList.goodPrice">
          <div
            v-for="(item, index) in goodsPrice"
            :key="index"
            class="childrenContainer"
          >
            <el-checkbox :label="item.label">{{ item.name }}</el-checkbox>
          </div>
        </el-checkbox-group>
      </div>
    </div>
    <div class="bott" @click="submit">确认</div>
  </div>
</template>
<style lang="less" scoped>
.childrenContainer {
  // border: 1px solid red;
  padding: 10px 0;
  width: 100%;
}
.mainAll {
  position: relative;
  height: 100%;
  .bott {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: black;
    color: #ffffff;
    text-align: center;
    height: 80px;
    line-height: 80px;
  }
}
</style>
