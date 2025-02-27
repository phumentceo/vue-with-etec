<template>
    <input type="text" v-model="firstName"  placeholder="Enter your first name">
    <br><br>
    <input type="text" v-model="lastName" placeholder="Enter your last name">

    <p>Full Name : {{ fullName }} </p>

</template>

<script setup>

   import { computed, ref } from 'vue';

   const firstName = ref('');

   const lastName = ref('');
   
    const fullName = computed(() =>{
        return firstName.value +' '+ lastName.value;
    });


</script>
