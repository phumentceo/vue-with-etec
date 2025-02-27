<template>
    
    <div class="row p-0 m-0">
        <div v-for="(value,index) in products"  :key="index"  class="col-lg-4 mb-4">
            <Card :data="value"/>
        </div>
    </div>
    
</template>

<script setup>
import { reactive } from 'vue';
import Card from './Card.vue';
const products = reactive(
    [
        {
            id: 1,
            title: 'Product 1',
            image : 'https://www.oregondairy.com/wp-content/uploads/2016/05/coffee-1-1024x683.jpg',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            price: 9.99,
            qty: 10
        },
        {
            id: 2,
            title: 'Product 1',
            image : 'https://www.oregondairy.com/wp-content/uploads/2016/05/coffee-1-1024x683.jpg',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            price: 9.99,
            qty: 10
        },
        {
            id: 3,
            title: 'Product 1',
            image : 'https://www.oregondairy.com/wp-content/uploads/2016/05/coffee-1-1024x683.jpg',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            price: 9.99,
            qty: 10
        },
        {
            id: 4,
            title: 'Product 1',
            image : 'https://www.oregondairy.com/wp-content/uploads/2016/05/coffee-1-1024x683.jpg',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            price: 9.99,
            qty: 10
        },
        {
            id: 5,
            title: 'Product 1',
            image : 'https://www.oregondairy.com/wp-content/uploads/2016/05/coffee-1-1024x683.jpg',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            price: 9.99,
            qty: 10
        },
        {
            id: 6,
            title: 'Product 1',
            image : 'https://www.oregondairy.com/wp-content/uploads/2016/05/coffee-1-1024x683.jpg',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            price: 9.99,
            qty: 10
        },
   ]
);

</script>
