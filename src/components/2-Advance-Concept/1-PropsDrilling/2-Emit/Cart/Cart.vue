<script setup>
import { ref } from 'vue';
import ProductItem from './ProductItem.vue';

const cartItems = ref([]);

const addProductToCart = (product) => {
  cartItems.value.push(product); // បញ្ចូលទំនិញទៅកន្ត្រក
};
</script>

<template>
  <div>
    <h2>🛒 កន្ត្រកទំនិញ</h2>
    <ProductItem @addToCart="addProductToCart" />
    
    <h3>ទំនិញក្នុងកន្ត្រក:</h3>
    <ul>
      <li v-for="(item, index) in cartItems" :key="index">
        {{ item.name }} - ${{ item.price }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
h2 {
  text-align: center;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  background: #f4f4f4;
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
}
</style>
