<script setup lang="ts">
    import { ref } from 'vue'
    import { display, index } from './posts/blogHandler'
</script>

<template>
    <div class="text d-flex flex-column overflow-y-hidden" :key="index">
        <div class="numberBg elevation-8"></div>
        <div class="d-flex flex-row pt-3" v-for="(item, idx) in display" :key="idx">
            <div class="d-flex flex-column">
                <div class="lineNumbers pr-4">
                    {{ idx + 1 }}
                </div>
            </div>
            <div class="pl-4">
                {{ item }}
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Mono&display=swap');

.numberBg{
    width: 60px;
    background-color: #181825;
    position: fixed;
    z-index: 0;
    height: 100%;
}

.lineNumbers{
    text-align: right;
    width: 60px;
    background-color: #181825;
    z-index: 10000;
    color: #484870;
}
.text{
    font-family: 'Fira Mono', monospace;
    width: 100%;
    font-size: 16px;
    color: #FFEBFB;
    background-color: #202032;
}
</style>

<!-- #9D9FBE -->