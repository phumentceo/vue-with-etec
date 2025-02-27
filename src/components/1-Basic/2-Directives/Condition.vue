<template>
    <div>
        <h1>Vue.js</h1>
        <button @click="handleClick()">Click me</button>
        <h1 v-if="isCheck">{{ message }}</h1>
        <br><br>
        <!-- <input @input="handleInput" type="text" width="500"> -->
        <input v-model="text" type="text" width="500">
        <p>{{ text }}</p>

    </div>
    <!-- Vue Template syntax -->
</template>

<script setup>

   import { ref } from 'vue';

   const isCheck = ref(false);
   const message = ref('Learn vue.js with ETEC CENTER');

   const text = ref('');

   const handleClick = () => {
      
      isCheck.value = !isCheck.value;
      console.log(isCheck.value);
   }

//    const handleInput = (e) => {
//      text.value = e.target.value;
//    }
</script>
