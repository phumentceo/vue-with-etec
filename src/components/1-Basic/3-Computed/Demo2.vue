<template lang="">
    <button class="increment" @click="increment">+</button>
    <input  type="text" :value="counter" readonly>
    <button class="decrement" @click="decrement">-</button>
</template>

<script setup>

    import { computed, ref } from 'vue';

    const count = ref(1);

    const increment = () => {
        count.value++;
    }

    const decrement = () => {
        if (count.value > 1) {
            count.value--;
        }
    }

    const counter = computed(() => count.value);

</script>

<style scoped>

    button {
        margin: 0 10px;
        padding : 5px 20px;
        border : none;
        cursor : pointer;
        color : white;
        border-radius : 5px;
    }

    .increment {
        background-color : green;
    }

    .decrement {
        background-color : red;
    }

    input {
        width: 50px;
        text-align: center;
    }
    
</style>