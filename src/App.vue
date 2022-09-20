<script setup lang="ts">
import { ref } from 'vue';
import FileExplorer from './components/fileExplorer.vue';
import TextEditor from './components/textEditor.vue';
import { display, links, index, displayUpdate } from './components/posts/blogHandler'
</script>

<template>
    <div>
        <div class="header align-center d-flex w-101">
          <div class="d-flex flex-row align-center pl-4">
            <font-awesome-icon icon="fa-solid fa-cubes" />
            <div class="font-weight-medium">&nbsp;&nbsp;BlogEditor</div>
          </div>
            <div class="d-flex justify-space-around w-100 ">
                <div><span class="font-weight-medium">Nathan Macapinlac</span> / DMUY-1143</div>
            </div>
        </div>
        <v-divider class="divider"/>
        <div class="d-flex flex-row">
        <FileExplorer/>
        <transition mode="out-in">
        <TextEditor :key="index" />
        </transition>
      </div>
    </div>
</template>

<style>
@import './assets/base.css';
.v-enter-active,
.v-leave-active {
  transition: opacity 0.4s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.divider{
  background-color: #8388AF;
}

.header{
  height: 50px;
  line-height: 50px;
  user-select: none;
  z-index: 100000;
}
</style>