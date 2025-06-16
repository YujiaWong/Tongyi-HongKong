<template>
  <div id="recording" class="w-screen h-screen overflow-hidden">
    <div class="w-full h-full flex flex-col justify-center items-center">
      <div class="w-full h-[60px] flex justify-between items-center px-6">
        <div class="flex justify-start items-center gap-4">
          <router-link to="/live">
            <ToHomepageBtn />
          </router-link>
          <span class="text-lg">2025-06-10 10:49 记录</span>
        </div>

        <button
          class="flex justify-center items-center gap-2 bg-[#615ced] text-white text-[16px] p-[7px] rounded-3xl px-6"
        >
          <FileDoneOutlined /><span>保存</span>
        </button>
      </div>
      <div class="flex-1 w-full">
        <div
          id="left"
          class="w-[50%] h-full max-h-[calc(100vh-60px)] bg-slate-50 flex flex-col justify-center items-start p-4 px-8 gap-4"
        >
          <VoiceToTextBar />
          <div class="overflow-y-auto flex flex-col gap-5 h-[600px]">
            <Speaker />
            <Speaker />
            <Speaker />
            <Speaker />
            <SpeakingBox />
          </div>
          <div
            class="flex justify-between items-center flex-1 w-full h-[100px]"
          >
            <div class="flex items-center gap-4 pl-2">
              <div class="circle-viewport">
                <!-- 显示当前帧的圆形区域 -->
                <div
                  class="circle-frame"
                  :style="{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundPosition: `-${currentFrame * 64}px 0`,
                  }"
                ></div>
              </div>

              <div class="flex flex-col">
                <span class="text-lg">录音已暂停</span>
                <p>01:54:46 / <span class="text-gray-500">06:00:00</span></p>
              </div>
            </div>
            <div class="flex gap-2">
              <button
                class="bg-white w-[40px] h-[30px] rounded-md text-red-500 hover:bg-red-500 hover:text-white pb-2"
              >
                <PoweroffOutlined />
              </button>
              <button
                class="w-[40px] h-[30px] rounded-md text-[#615ced] bg-white hover:text-white hover:bg-[#615ced] pb-2"
              >
                <PlayCircleOutlined />
              </button>
            </div>
          </div>
        </div>
        <div id="right" class="w-[50%] h-full"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ToHomepageBtn from "../components/live/ToHomepageBtn.vue";
import {
  FileDoneOutlined,
  PlayCircleOutlined,
  PoweroffOutlined,
} from "@ant-design/icons-vue";
import Speaker from "../components/recording/Speaker.vue";
import SpeakingBox from "../components/recording/SpeakingBox.vue";
import VoiceToTextBar from "../components/recording/VoiceToTextBar.vue";
import { ref, onMounted, onUnmounted } from "vue";

const imageUrl =
  "https://img.alicdn.com/imgextra/i1/O1CN01AV7f1E1kwAtJHELpc_!!6000000004747-2-tps-5760-64.png";
const totalFrames = 90; // 5760/64
const currentFrame = ref(0);
const fps = 12; // 动画帧率
let animationInterval = null;

onMounted(() => {
  animationInterval = setInterval(() => {
    currentFrame.value = (currentFrame.value + 1) % totalFrames;
  }, 1000 / fps);
});

onUnmounted(() => {
  clearInterval(animationInterval);
});
</script>
<style scoped>
.circle-viewport {
  width: 64px;
  height: 64px;
  overflow: hidden;
  position: relative;
  border-radius: 50%;
}

.circle-frame {
  width: 64px;
  height: 64px;
  background-repeat: no-repeat;
  background-size: 5760px 64px; /* 原图尺寸 */
}
</style>
