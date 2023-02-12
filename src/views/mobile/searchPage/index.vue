<script lang="ts" setup>
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";
import { onMounted } from "vue";
import router from "@/router";
const show = ref(false);
const inputSearch = ref("");
const goBack = () => {
  router.push({
    name: "goodShow",
  });
};
onMounted(() => {
  show.value = true;
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
</style>
