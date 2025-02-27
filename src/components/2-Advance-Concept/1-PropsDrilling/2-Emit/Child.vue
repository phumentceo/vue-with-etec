<template>
    <button @click="sendToParent" class="btn btn-success">sent to parent</button>
</template>

<script setup>
import { defineEmits } from "vue";

const emit = defineEmits();

const sendToParent = () => {
    emit('message', 'Hello from child component');
};

</script>
