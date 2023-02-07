<script lang="ts" setup>
import { ref } from "vue";
import { Operation, Search } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
const router = useRouter();
const rightDrawer = ref<boolean>(false);
const openRightDrawer = () => {
  rightDrawer.value = true;
};
const handleClose = () => {
  rightDrawer.value = false;
};
const goBack = () => {
  router.push({
    name: "goodShow",
  });
};
</script>
<template>
  <div>
    <div class="navbar">
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/logo.svg"
        @click="goBack()"
      />
      <div class="iconBut">
        <Search class="iconImg" style="margin-right: 20px" />
        <Operation class="iconImg" @click="openRightDrawer()" />
      </div>
    </div>
    <el-drawer v-model="rightDrawer" :before-close="handleClose" size="50%">
      <span>Hi there!</span>
    </el-drawer>
  </div>
</template>
<style lang="less" scoped>
.navbar {
  width: 100%;
  height: 5vh;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  .logo {
    width: 40px;
    height: 100%;
  }

  .iconBut {
    display: flex;
    align-items: center;

    .iconImg {
      width: 25px;
      height: 25px;
    }
  }
}
</style>
