<template>
  <div id="efficiency" class="w-screen h-full relative">
    <div class="w-full h-full flex flex-col justify-center items-center">
      <div
        class="w-full h-[60px] flex justify-between items-center px-6 border-b border-b-gray-200 bg-gray-50"
      >
        <div class="flex justify-start items-center gap-4">
          <router-link to="/live">
            <ToHomepageBtn />
          </router-link>
          <span class="text-lg">2025-06-10 10:49 记录</span>
        </div>
        <div class="flex items-center gap-4">
          <button
            class="w-[40px] h-[40px] rounded-full border bg-white border-gray-200 hover:bg-[#615ced30]"
          >
            <EllipsisOutlined
              class="!text-gray-600 pb-2 hover:!text-[#615ced]"
            />
          </button>
          <button
            class="w-[40px] h-[40px] rounded-full border bg-white border-gray-200 hover:bg-[#615ced30]"
          >
            <StarOutlined class="!text-gray-600 pb-2 hover:!text-[#615ced]" />
          </button>
          <button
            class="w-[40px] h-[40px] rounded-full border bg-white border-gray-200 hover:bg-[#615ced30]"
          >
            <SaveOutlined class="!text-gray-600 pb-2 hover:!text-[#615ced]" />
          </button>
          <button
            class="w-[40px] h-[40px] rounded-full border bg-white border-gray-200 hover:bg-[#615ced30]"
          >
            <SendOutlined class="!text-gray-600 pb-2 hover:!text-[#615ced]" />
          </button>
          <button
            class="flex justify-center items-center gap-2 bg-[#615ced] text-white text-[16px] p-[7px] rounded-3xl px-6"
          >
            <DownloadOutlined /><span>导出</span>
          </button>
        </div>
      </div>
      <div class="flex-1 w-full flex">
        <div
          id="left"
          class="w-[50%] h-full max-h-[calc(100vh-60px)] bg-slate-50 flex flex-col justify-center items-start p-4 px-8 gap-4"
        >
          <VoiceToTextBox />
          <div
            class="w-full flex-1 overflow-y-auto flex flex-col gap-5 h-[600px]"
          >
            <Speaker />
          </div>
          <div
            class="flex justify-between items-center flex-1 w-full h-[100px]"
          >
            <div class="flex gap-2 w-full"><Player /></div>
          </div>
        </div>
        <div
          id="right"
          class="w-[50%] h-full max-h-[calc(100vh-60px)] flex flex-col justify-center items-start p-4 px-8 gap-4"
        >
          <div
            class="flex justify-start items-center gap-4 text-[16px] h-[50px] pb-2"
          >
            <button
              @click="handleToggleIntro"
              class="focus:border-b-2 focus:border-b-[#615ced]"
            >
              导读
            </button>
            <button
              @click="handleToggleBrainDrawing"
              class="focus:border-b-2 focus:border-b-[#615ced]"
            >
              脑图
            </button>
            <button
              @click="handleToggleNote"
              class="focus:border-b-2 focus:border-b-[#615ced]"
            >
              笔记
            </button>
          </div>
          <div class="overflow-y-auto w-full flex-1">
            <RichText v-show="toggleIntro === 3" />
            <EfficiencyIntro v-show="toggleIntro === 1" />
            <MindMap v-show="toggleIntro === 2" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ToHomepageBtn from "../components/live/ToHomepageBtn.vue";
import {
  DownloadOutlined,
  EllipsisOutlined,
  StarOutlined,
  SaveOutlined,
  SendOutlined,
} from "@ant-design/icons-vue";
import Speaker from "../components/recording/Speaker.vue";
import SpeakingBox from "../components/recording/SpeakingBox.vue";
import VoiceToTextBox from "../components/efficiency/VoiceToTextBox.vue";
import { ref, onMounted, onUnmounted } from "vue";
import RichText from "../components/recording/RichText.vue";
import Intro from "../components/recording/Intro.vue";
import CloseConfirm from "../components/wanxiang/CloseConfirm.vue";
import MindMap from "../components/efficiency/MindMap.vue";
import Player from "../components/efficiency/Player.vue";
import EfficiencyIntro from "../components/efficiency/EfficiencyIntro.vue";

let toggleIntro = ref(1); //true为导读intro，false为笔记note
let togglePause = ref(false); //false为录音中，true为暂停
function handleToggleNote() {
  toggleIntro.value = 3;
}
function handleToggleBrainDrawing() {
  toggleIntro.value = 2;
}
function handleToggleIntro() {
  toggleIntro.value = 1;
}
// function handleTogglePause() {
//   togglePause.value = !togglePause.value;
// }

const imageUrl =
  "https://img.alicdn.com/imgextra/i1/O1CN01AV7f1E1kwAtJHELpc_!!6000000004747-2-tps-5760-64.png";
const totalFrames = 90;
const currentFrame = ref(0);
const fps = 12;
const isPlaying = ref(true); // 新增播放状态
let animationInterval = null;
let showCloseRecordingPopOut = ref(false);

const startAnimation = () => {
  if (animationInterval) return; // 防止重复启动

  isPlaying.value = true;
  animationInterval = setInterval(() => {
    currentFrame.value = (currentFrame.value + 1) % totalFrames;
  }, 1000 / fps);
};

const stopAnimation = () => {
  if (animationInterval) {
    clearInterval(animationInterval);
    animationInterval = null;
    isPlaying.value = false;
  }
};

const toggleAnimation = () => {
  if (isPlaying.value) {
    stopAnimation();
  } else {
    startAnimation();
  }
};

onMounted(() => {
  startAnimation();
});

onUnmounted(() => {
  stopAnimation();
});

// 暴露给模板使用
const handleClick = () => {
  togglePause.value = !togglePause.value;
  toggleAnimation();
};
function handleShowCloseRecording() {
  showCloseRecordingPopOut.value = true;
}
function handleUnShowCloseRecording() {
  showCloseRecordingPopOut.value = false;
}
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
