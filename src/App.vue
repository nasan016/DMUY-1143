<script setup lang="ts">
import { ref } from "vue"
import LandingPage from "./components/LandingPage.vue"
import LinkLoader from "./components/LinkLoader.vue"

const show_landing = ref(true)

</script>

<template>
    <transition name="slide-fade" mode="out-in">
        <div v-if="show_landing">
            <div @click="show_landing=!show_landing">
                <LandingPage/>
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