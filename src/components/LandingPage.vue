<script setup lang="ts">
import {ref} from "vue"

const show_o = ref(true)
const show_m = ref(true)
const show_dash = ref(true)
const show_1 = ref(true)

const change_o = () => {
    show_o.value = !(show_o.value)
}

const change_m = () => {
    show_m.value = !(show_m.value)
}

const change_dash = () => {
    show_dash.value = !(show_dash.value)
}

const change_1 = () => {
    show_1.value = !(show_1.value)
}

setInterval(change_o, 1500)
setInterval(change_m, 2000)
setInterval(change_dash, 2000)
setInterval(change_1, 2500)
</script>

<template>
    <div>
        <div class="pl-1 d-flex flex-column justify-end titles">
            <div class="spacing">
                <div class="d-flex flex-row">
                    <div class="icon-container" >
                        b
                    </div>
                    <div class="icon-container" >
                        L
                    </div>
                        <div class="icon-container">
                            <transition mode="out-in">
                            <div v-if="show_o">
                                O
                            </div>
                            <div v-else>
                                ☺
                            </div>
                        </transition>
                        </div>
                    <div class="icon-container" >
                        G
                    </div>
                    <div class="d-flex pt-16 pl-10 mini-text">
                        <div class="mini-container">
                            "HELLO."
                        </div>
                        <div class="mini-container">
                            I AM NATHAN. 
                            I MADE THIS BLOG FROM SCRATCH TO LEARN MORE ABOUT DESIGN AND CHALLENGE MY CODING SKILLS. 
                            <span style="color: #647C90; text-decoration: underline;">CLICK TO EXPLORE.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex flex-row">
                <div class="icon-container" id="d">
                    D
                </div>
                    <div class="icon-container" id="m">
                        <transition mode="out-in">
                        <div v-if="show_m">
                            M
                        </div>
                        <div class="heart" v-else>
                            ♡
                        </div>
                        </transition>
                    </div>
                <div class="icon-container" >
                    u
                </div>
                <div class="icon-container" >
                    Y
                </div>
                    <div class="icon-container" id="dash">
                    <transition mode="out-in">
                        <div v-if="show_dash">
                            -
                        </div>
                        <div v-else>
                            ➭
                        </div>
                    </transition>
                    </div>
                <div class="icon-container"  id="1">
                    1
                </div>
                    <div class="icon-container" id="1">
                        <transition mode="out-in">
                            <div v-if="show_1">
                                1
                            </div>
                            <div v-else>
                                ⋮
                            </div>
                        </transition>
                    </div>
                <div class="icon-container"  id="4">
                    4
                </div>
                <div class="icon-container" id="3">
                    3 
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@200&display=swap');

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.titles{
    font-size: 180px;
    height: 100vh;
    user-select: none;
    font-family: 'Major Mono Display', monospace;
}

.spacing{
    height: 150px;
}

.icon{
    font-size: 140px;
}

.icon-container{
    width: 135px;
    text-align: center;
}

.heart{
    font-size: 170px;
    line-height: 270px;
}

.mini-text{
    font-family: 'Barlow', sans-serif;
    font-size: 16px;
    text-align: justify;
}

.mini-container{
    width: 220px;
}
</style>
