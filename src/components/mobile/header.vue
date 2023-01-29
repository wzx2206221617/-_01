<script lang="ts" setup>
import {
    Operation,
    Search,
} from '@element-plus/icons-vue'
</script>
<template>
    <div>
        <div class="navbar">
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" />
            <div class="iconBut">
                <Search class="iconImg"  style="margin-right: 20px" />
                <Operation class="iconImg"/>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.navbar {
    width: 100%;
    height: 70px;
    background: #FFFFFF;
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