<script lang="ts" setup>
import router from '@/router';
import { watch } from 'vue';
import { useRoute } from 'vue-router'
import HeaderVue from '@/components/mobile/header.vue';
const route = useRoute()
watch(()=>route,()=>{
    console.log(route.query);
},{immediate:true})

</script>
<template>
    <div>
        <HeaderVue/>
        12312312312
    </div>
</template>
<style lang="less" scoped>

</style>