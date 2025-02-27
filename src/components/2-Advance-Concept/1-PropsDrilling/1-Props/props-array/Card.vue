<template>

    <div class="card">
        <img :src="data.image" alt="">
        <div class="card-body">
            <h4 class="card-title">{{ data.title }}</h4>
            <h5>${{ data.price }}</h5>
            <p>{{ data.desc }}</p>
        </div>
    </div>
  
</template>

<script setup>
  defineProps({
    data: {
      type:  Array,
      required: true
    }
  });
</script>
