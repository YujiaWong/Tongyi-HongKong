<template>
  <div id="GenerateVidPanel">
    <div
      class="w-[300px] h-[800px] rounded-2xl shadow-[0_0_15px_-3px_rgb(0,0,0,0.3)]"
    >
      <a-tabs
        v-model:activeKey="activeKey"
        :tabBarGutter="20"
        class="!p-2 !px-4"
      >
        <a-tab-pane key="1" tab="图生视频" class="!p-0">
          <PicToVidPanel
        /></a-tab-pane>
        <a-tab-pane key="2" tab="文生视频" force-render
          ><TextToVidPanel
        /></a-tab-pane>
        <a-tab-pane key="3" tab="视频特效"
          ><VidEffectPanel></VidEffectPanel
        ></a-tab-pane>
        <template #rightExtra>
          <a-button
            @click="leftClick"
            class="!border-none !p-2 !text-gray-500 !text-xs"
            >&lt</a-button
          >
          <a-button
            @click="rightClick"
            class="!border-none !p-2 !text-gray-500 !text-xs"
            >&gt</a-button
          >
        </template>
      </a-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import PicToVidPanel from "./PicToVidPanel.vue";
import TextToVidPanel from "./TextToVidPanel.vue";
import VidEffectPanel from "./VidEffectPanel.vue";
const textContent = ref("");
const checked = ref<boolean>(false);
const activeKey = ref<string>("1");
function leftClick() {
  if (parseInt(activeKey.value) > 1) {
    activeKey.value = (parseInt(activeKey.value) - 1).toString();
  }
}
function rightClick() {
  if (parseInt(activeKey.value) < 3) {
    activeKey.value = (parseInt(activeKey.value) + 1).toString();
  }
}
</script>

<style scoped></style>
