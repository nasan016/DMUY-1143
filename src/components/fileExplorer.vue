<script setup lang="ts">
import { ref } from 'vue';
import { display, links, index, displayUpdate } from './posts/blogHandler'

const isOpen = ref(true)

const linksTitles = ref([
    'week1',
    'week2',
    // 'week3',
    // 'week4',
    // 'week5',
    // 'week6',
    // 'week7',
    // 'week8',
    // 'week9',
    // 'week10',
    // 'week11',
    // 'week12',
    // 'week13',
    // 'week14',
    ])
    const update = () => {
        console.log(index.value)
        console.log(display.value)
    }
</script>

<template>
    <div class="fileExplorer elevation-8 overflow-y-hidden">
        <div class="fileHeading pl-2 elevation-2">
            <font-awesome-icon icon="fa-solid fa-folder-tree" />
            &nbsp;
            File Explorer
        </div>
        <v-divider class="divider"/>
        <div class="d-flex align-center pl-2 blogHeader" @click="isOpen=!isOpen" v-ripple>
            <div class="folderIcon">
            <font-awesome-icon v-if="isOpen" class="folderIcon" icon="fa-solid fa-folder-open" />
            <font-awesome-icon v-else class="folderIcon" icon="fa-solid fa-folder" />
            </div>
            <div class="links">&nbsp;&nbsp;Blog Posts</div>
        </div>
        <v-divider class="divider"/>
        <transition name="slide-fade">
        <div v-if="isOpen">
        <div v-for="(item, idx) in linksTitles" :key="idx">
            <div @click="index = idx; displayUpdate(); update()" class="files d-flex align-center pl-8" v-ripple>
                <font-awesome-icon class="folderIcon" icon="fa-solid fa-scroll" />
                <div class="links">&nbsp;&nbsp;{{ item }}.txt</div>
            </div>
            <v-divider class="divider"/>
        </div>
    </div>
</transition>   
    </div>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

.folderIcon{
    width:20px;
}

.blogHeader{
    user-select:none;
    cursor: pointer;
    transition: all 0.2s ease;
}
.blogHeader:hover{
    color: white;
    background-color: #313149;
}
.fileExplorer{
    user-select: none;
    width: 300px;
    border-right: solid 1px #8388AF;
    background-color: #29293D;
    height: 95vh;
}

.fileHeading{
    height: 32px;
    line-height: 32px;
    font-weight: 400;
    background-color: #313149;
}

.files{
    color: #B6B6CE;
    transition: all 0.2s ease;
    cursor: pointer;
}
.files:hover{
    color: white;
    background-color: #313149;
}
.links{
    font-size: 14px;
    height: 30px;
    line-height: 30px;
}


.folderIcon{
    font-size: 14px;
}
</style>