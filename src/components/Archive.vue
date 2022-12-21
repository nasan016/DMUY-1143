<script setup lang="ts">
import { show_screen, images } from './blog_posts';
import { ref } from 'vue';

const idx = ref(0)

const idx_inc = () =>{
    idx.value++
    if(idx.value === images.length){
        idx.value = 0
    }
}
</script>

<template>
    <div class="d-flex flex-column align-center justify-center">
    <transition name="slide-fade" mode="out-in">
    <div class="d-flex flex-column align-center">
        <div class="week-title">
            Archive
        </div>
        <div class="back-button">
            Click the images to see the next one!
        </div>
        <div class="back-button mb-4" 
        @click="show_screen = ''">
            Go Back?
        </div>
        <div class="blog-content" @click="idx_inc">
            <img :src="images[idx]">
        </div>
    </div>
</transition>
</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap');
.v-enter-active,
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.back-button{
    font-size: 16px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.back-button:hover{
    color:grey;
}
.slide-fade-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(50%);
  opacity: 0;
}
.week-title{
    font-family: 'Major Mono Display', monospace;
    font-size: 100px;
    user-select: none;
}

.blog-content{
    font-size: 20px;
}

.button-container{
    height: 40px;
    width: 20px;
    font-size: 20px;
    text-align: center;
    user-select: none;
    cursor: pointer;
    transition: all 0.2s ease;
}

.button-container:hover{
    color: grey;
}
</style>