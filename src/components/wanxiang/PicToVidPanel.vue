<template>
  <div id="PicToVidPanel">
    <div class="holder flex flex-col w-[265px] h-[800px] rounded-3xl gap-3">
      <div class="flex justify-between it">
        <button class="p-2 py-1 border border-gray-300 rounded-3xl">
          万象2.1专业
        </button>
        <button
          class="text-[#878aab] text-xs flex justify-center items-center gap-1"
        >
          <ReadOutlined /><span>使用指南</span>
        </button>
      </div>
      <div class="flex justify-between items-center">
        <p>图像上传</p>
        <div class="flex justify-start items-center gap-2 pb-2">
          <span class="text-gray-400">首尾帧</span>
          <a-switch v-model:checked="switchChecked" size="small" />
        </div>
      </div>
      <!-- --------------上传图像start-------------- -->
      <div id="uploadImage" class="w-[100%] h-[260px]">
        <UploadImageBox />
      </div>
      <!-- ------------- 上传图像end------------------ -->
      <span>创意描述(选填)</span>
      <div class="bg-[#f8f9ff] w-[100%] h-[160px] rounded-2xl">
        <textarea
          v-model="textContent"
          class="textPlace !border-none !bg-transparent !w-[260px] !h-[120px] focus:!outline-none p-3 pr-2 resize-none"
          placeholder="试试输入你心中的画面，尽量描述具体，可以尝试一些辅助词来描述"
        />
        <div class="flex pl-2 gap-2 justify-between items-center">
          <button
            class="h-7 flex justify-start items-center gap-2 px-3 bg-gray-200 rounded-2xl text-xs"
          >
            <AlertOutlined />
            <span class="text-gray-500">智能扩写</span>
          </button>
          <div class="flex justify-center items-center gap-1 pr-2">
            <span class="text-xs pl-2">{{ textContent.length }}/800</span>
            <button class="text-gray-400 pb-1">
              <CloseCircleOutlined />
            </button>
          </div>
        </div>
      </div>

      <hr />

      <div class="w-[100%] flex flex-col justify-center items-center gap-2">
        <div id="inspiration" class="w-[100%]">
          <div
            class="w-[100%] flex justify-between items-center gap-2 relative"
          >
            <div class="flex justify-center items-center gap-2">
              <span>灵感模式</span>
              <ExclamationCircleFilled
                class="exlcamation text-xs !text-gray-300"
              />
              <div
                class="popUpInfo p-2 h-[100px] w-[200px] shadow-md rounded-2xl bg-white absolute bottom-5 left-[60px]"
              >
                <span class="pl-2">灵感模式 </span>
                <p class="text-sm pl-2">
                  增加创意灵感，提升画面丰富度与表现力，可能会与输入提示词有差异
                </p>
              </div>
            </div>
            <div>
              <a-switch v-model:checked="inspireChecked" size="small" />
            </div>
          </div>
        </div>
        <div id="videoSounds" class="w-[100%]">
          <div
            class="w-[100%] flex justify-between items-center gap-2 relative"
          >
            <div class="flex justify-center items-center gap-2">
              <span>视频音效</span>
              <ExclamationCircleFilled
                class="exlcamation text-xs !text-gray-300"
              />
              <div
                class="popUpInfo p-2 h-[100px] w-[200px] shadow-md rounded-2xl bg-white absolute bottom-5 left-[60px]"
              >
                <span class="pl-2">视频音效</span>
                <p class="text-sm pl-2">
                  为视频内容生成合适的声音效果，若无明确音效则生成背景音乐
                </p>
              </div>
            </div>
            <div>
              <a-switch v-model:checked="vidChecked" size="small" />
            </div>
          </div>
        </div>
      </div>
      <button
        class="mt-4 p-3 w-[100%] rounded-[50px] text-white text-lg bg-[rgb(92,92,242)]"
      >
        生成视频
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ReadOutlined,
  AlertOutlined,
  RedoOutlined,
  PlusOutlined,
  RightOutlined,
  CloseCircleOutlined,
  BorderOutlined,
  ExclamationCircleFilled,
} from "@ant-design/icons-vue";
import { ref } from "vue";
import UploadImageBox from "./UploadImageBox.vue";
const textContent = ref("");
const checked = ref<boolean>(false);
const switchChecked = ref<boolean>(false);
const inspireChecked = ref<boolean>(false);
const vidChecked = ref<boolean>(false);
</script>

<style scoped>
.textPlace:focus .holder {
  border-color: rgb(72, 72, 237);
}
.popUpInfo {
  display: none;
}
.exlcamation:hover + .popUpInfo {
  display: block;
}
</style>
