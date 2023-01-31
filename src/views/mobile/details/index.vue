<script lang="ts" setup>
import router from '@/router';
import { watch } from 'vue';
import { useRoute } from 'vue-router'
const route = useRoute()
watch(()=>route,()=>{
    console.log(route.query);
},{immediate:true})

</script>
<template>
    <div>
        12312312312
    </div>
</template>
<style lang="less" scoped>

</style>