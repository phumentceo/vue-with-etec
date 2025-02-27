<template>
    <!-- <Child :message="text1" :about="message1" />
    <Child :message="text2" :about="message2"  /> -->

    <div class="row p-0 m-0">
        
        <div class="col-lg-4 mb-3">
            <Card :image="'https://corporate.walmart.com/content/corporate/en_us/purpose/sustainability/planet/nature/jcr:content/par/image_2_0.img.png/1693432526985.png'" />
        </div>

        <div class="col-lg-4 mb-3">
            <Card :image="'https://static.sadhguru.org/d/46272/1633199491-1633199490440.jpg'" />
        </div>

        <div class="col-lg-4 mb-3">
            <Card :image="'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg'" />
        </div>


        <div class="col-lg-4 mb-3">
            <Card :image="'https://corporate.walmart.com/content/corporate/en_us/purpose/sustainability/planet/nature/jcr:content/par/image_2_0.img.png/1693432526985.png'" />
        </div>
    </div>


</template>

<script setup>
import { ref } from "vue";

// import Child from "./Child.vue";
import Card from "./Card.vue";

// const text1 = ref("Hello World from Parent Component");
// const text2 = "hello sophea";
// const message1 = "Message1";
// const message2 = "Message2"

</script>