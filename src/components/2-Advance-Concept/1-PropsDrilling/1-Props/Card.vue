<template>
    <div class="card ">
        <img :src="image" alt=""  class="w-100">
    </div>
</template>

<script setup>
    defineProps(['image']);
</script>

<style scoped>
    .card {
        border-radius: 30px;
        overflow: hidden;
    }

    img {
        height: 360px;
    }
</style>