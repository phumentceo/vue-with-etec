<template>
    <h1>Hello Vue.js</h1>
    <h1>Learn Vue with {{ name }}</h1>
    <h1>Address : {{  address  }}</h1>
    <h1>Phone Number : {{ phone }}</h1>

    <h3>Student List</h3>
    <ul>
        <li>{{ students[0] }}</li>
        <li>{{ students[1] }}</li>
        <li>{{ students[2] }}</li>
    </ul>

    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <p>Count : {{ count }}</p>
    
</template>

<script>
export default {
    data() {
        return {
            name : 'Phument',
            address : "Kompong Thom",
            phone : "0978759989",
            students : ["Sophea","Fi","Vutha"],
            count: 0
        }
    },
    methods: {
        increment(){
            this.count++
        },
        decrement(){
            this.count--
        }
    }
}
</script>

<style>

</style>