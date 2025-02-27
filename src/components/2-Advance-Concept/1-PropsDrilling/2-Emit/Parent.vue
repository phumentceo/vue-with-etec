<template>
    <div class=" container">
        <Child @message="getMessage" />
        <p>Message from child: {{ parentMessage }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Child from './Child.vue';

const parentMessage = ref('');

const getMessage = (ms) => {
    parentMessage.value = ms;
};
</script>
