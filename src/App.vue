<script setup lang="ts">
import { ref } from "vue"
import {show_screen} from "./components/blog_posts"
import LandingPage from "./components/LandingPage.vue"
import LinkLoader from "./components/LinkLoader.vue"
import Archive from "./components/Archive.vue"

</script>

<template>
    <transition name="slide-fade" mode="out-in">
        <div v-if="show_screen === 'landing'">
            <div @click="show_screen=''">
                <LandingPage/>
            </div>
        </div>
        <div v-else-if="show_screen === 'archive'">
          <div>
            <Archive/>
          </div>
        </div>
        <div v-else>
            <LinkLoader/>
        </div>
    </transition>
</template>

<style>
@import './assets/base.css';

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 1s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translatey(100%);
  opacity: 0;
}
</style>