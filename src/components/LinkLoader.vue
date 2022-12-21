<script setup lang="ts">
import { ref } from "vue"
import { posts, show_screen } from "./blog_posts"

const hover = ref(false)
const week_number = ref(0)
</script>

<template>
    <div class="d-flex flex-column align-center">
        <div class="d-flex align-center justify-center">
            <div class="pl-6 pr-6 pt-5 button-container" 
            v-for="(item, idx) in posts" 
            :key="idx"
            @click="week_number = idx">
                {{ idx + 1}}.
            </div>
        </div>
        <div class="mt-6 pb-0">
            <div class="button-container"
            @click="show_screen = 'archive'">
                Archive.
            </div>
        </div>
    <transition name="slide-fade" mode="out-in">
    <div :key="week_number" class="d-flex flex-column align-center">
        <div class="week-title">
            {{ posts[week_number][0] }}
        </div>
        <div class="blog-content">
            {{ posts[week_number][1] }}
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
    font-size: 150px;
    user-select: none;
}

.blog-content{
    font-size: 20px;
    user-select: none;
    width: 800px;
    text-align: justify;
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