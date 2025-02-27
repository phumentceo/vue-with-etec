<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['addToCart']);

const product = {
  id: 1,
  name: 'Laptop',
  price: 1200
};

const addToCart = () => {
  emit('addToCart', product); // ផ្ញើព័ត៌មានផលិតផលទៅ Component ម្ដាយ
};
</script>

<template>
  <div class="product">
    <h3>{{ product.name }}</h3>
    <p>តម្លៃ៖ ${{ product.price }}</p>
    <button @click="addToCart">🛒 បញ្ចូលកន្ត្រក</button>
  </div>
</template>

<style scoped>
.product {
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
  text-align: center;
}
button {
  background-color: green;
  color: white;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: darkgreen;
}
</style>
