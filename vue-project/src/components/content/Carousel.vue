<template>
    <div>
        <carousel :items-to-show="2.2">
            <slide v-for="item in slides" :key="item.slide">
                <img :src="item.slide">
            </slide>

            <template #addons>
                <navigation />
            </template>
        </carousel>
    </div>
</template>
  
<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

export default {
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    props: {
        slides: Array,
    },
};
</script>
<style>
.carousel__slide {
    padding: 5px;
}
</style>
  