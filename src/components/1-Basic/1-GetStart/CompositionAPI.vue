<template>
    <h1>Learn Vue.js with {{ name }}</h1>
    <p>You are learning : {{ course }}.</p>
    <p>Current Number: {{ number }}</p>
    <button @click="Show">Change Number</button>

    <h3>Student List</h3>
    <ul v-for="value in students" :key="value.id" >
        <li>Id     : {{ value.id }} </li>
        <li>Name   : {{ value.name }}</li>
        <li>Gender : {{ value.gender }}</li>
    </ul>

</template>

<script setup>

    import { reactive, ref } from 'vue';


    const name   = "Phument";
    const course =  "Vue.js Version 3";

    const number = ref(50);

    const students = reactive([
        { 
            id : 1,
            name : 'Sophea',
            gender : 'Female'
        },
        { 
            id : 2,
            name : 'Kunthea',
            gender : 'Female'
        },
        { 
            id : 3,
            name : 'Fi',
            gender : 'Male'
        },
        { 
            id : 4,
            name : 'Vutha',
            gender : 'Male'
        }
    ]);
   

    const Show = () => {
        number.value = 100;
    }
</script>
