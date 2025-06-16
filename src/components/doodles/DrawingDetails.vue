<template>
  <Teleport to="body">
    <div id="DrawingDetails" v-show="showDetails">
      <div
        class="w-screen h-screen backdrop-blur-xl flex flex-col items-center absolute top-0 left-0"
      >
        <div class="w-full text-white flex justify-end items-end gap-[200px]">
          <button
            @click="closeModal"
            class="flex justify-center items-center rounded-full w-[40px] h-[40px] text-lg bg-gray-500/50 fixed top-5 right-5"
          >
            ×
          </button>
        </div>
        <div class="flex justify-between items-center">
          <button
            class="text-gray-200 w-[40px] h-[40px] rounded-full bg-gray-500/30 pb-1 fixed left-10 top-[45%]"
          >
            <LeftOutlined />
          </button>
          <div class="flex h-screen justify-center items-center">
            <div
              ref="ImageBox"
              class="w-[900px] h-[450px] rounded-2xl flex justify-between overflow-hidden"
            >
              <div class="flex-1 bg-gray-600"></div>
              <img src="zoo1.jpg" class="w-[50%] h-[100%]" />
            </div>
            <button
              class="text-gray-200 w-[40px] h-[40px] rounded-full bg-gray-500/30 pb-1 fixed right-10 top-[45%]"
            >
              <RightOutlined />
            </button>
          </div>
        </div>
        <div
          id="buttons"
          class="flex justify-center items-center gap-8 fixed bottom-12"
        >
          <div
            class="bg-gray-500/30 rounded-3xl p-1 pb-2 px-6 text-gray-300 text-lg flex justify-center items-center gap-6"
          >
            <button @click="zoomIn"><ZoomInOutlined /></button><span>|</span>
            <button @click="zoomOut"><ZoomOutOutlined /></button><span>|</span>
            <button @click="reset"><CompressOutlined /></button>
          </div>
          <div
            class="bg-gray-500/30 rounded-3xl p-1 pb-2 px-6 text-gray-300 text-lg flex justify-center items-center gap-6"
          >
            <button><LikeOutlined /></button><span>|</span>
            <button @click="ToShowFeedback"><DislikeOutlined /></button>
          </div>
          <Feedback
            v-if="showFeedback"
            v-model:show-feedback="showFeedback"
            class="absolute bottom-[50px]"
          />
          <div
            class="bg-gray-500/30 rounded-3xl p-1 pb-2 px-6 text-gray-300 text-lg flex justify-center items-center gap-6"
          >
            <button><DownloadOutlined /></button><span>|</span>
            <button><StarOutlined /></button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import {
  ZoomInOutlined,
  ZoomOutOutlined,
  CompressOutlined,
  LikeOutlined,
  DislikeOutlined,
  DownloadOutlined,
  StarOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons-vue";
import Feedback from "./Feedback.vue";
import { ref } from "vue";

const ImageBox = ref(null);
function zoomIn() {
  const currentWidth = parseFloat(ImageBox.value.style.width) || 900;
  const newWidth = currentWidth * 1.2 + "px";
  ImageBox.value.style.width = newWidth;
  const currenHeight = parseFloat(ImageBox.value.style.height) || 450;
  const newHeight = currenHeight * 1.2 + "px";
  ImageBox.value.style.height = newHeight;
}
function zoomOut() {
  const currentWidth = parseFloat(ImageBox.value.style.width) || 900;
  const newWidth = currentWidth * 0.8 + "px";
  ImageBox.value.style.width = newWidth;
  const currenHeight = parseFloat(ImageBox.value.style.height) || 450;
  const newHeight = currenHeight * 0.8 + "px";
  ImageBox.value.style.height = newHeight;
}
function reset() {
  ImageBox.value.style.width = "900px";

  ImageBox.value.style.height = "450px";
}
let showFeedback = ref(false);
function ToShowFeedback() {
  showFeedback.value = true;
}

const props = defineProps({
  showDetails: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["update:showDetails"]);

// 点击关闭按钮时触发
function closeModal() {
  emit("update:showDetails", false); // 父组件把 showDetails 改为 false
}
</script>
