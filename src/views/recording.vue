<template>
  <div id="recording" class="w-screen h-screen">
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

        <button
          class="flex justify-center items-center gap-2 bg-[#615ced] text-white text-[16px] p-[7px] rounded-3xl px-6"
        >
          <FileDoneOutlined /><span>保存</span>
        </button>
      </div>
      <div class="flex-1 w-full flex">
        <div
          id="left"
          class="w-[50%] h-full max-h-[calc(100vh-60px)] bg-slate-50 flex flex-col justify-center items-start p-4 px-8 gap-4"
        >
          <VoiceToTextBar />
          <div class="w-full overflow-y-auto flex flex-col gap-5 h-[600px]">
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
                <span class="text-lg">{{
                  togglePause ? "录音已暂停" : "录音中..."
                }}</span>
                <p>01:54:46 / <span class="text-gray-500">06:00:00</span></p>
              </div>
            </div>
            <div class="flex gap-2">
              <button
                class="bg-white w-[50px] h-[40px] rounded-md text-red-500 hover:bg-red-500 hover:text-white pb-2"
              >
                <PoweroffOutlined class="text-[14px] text-bold" />
              </button>
              <button
                v-show="togglePause"
                @click="
                  {
                    handleClick();
                  }
                "
                class="w-[50px] h-[40px] rounded-md text-[#615ced] bg-white hover:text-white hover:bg-[#615ced] pb-2"
              >
                <PauseOutlined class="text-[16px]" />
              </button>
              <button
                v-show="!togglePause"
                @click="
                  {
                    handleClick();
                  }
                "
                class="w-[50px] h-[40px] rounded-md text-[#615ced] bg-white hover:text-white hover:bg-[#615ced] pb-2"
              >
                <PlayCircleOutlined class="text-[16px]" />
              </button>
            </div>
          </div>
        </div>
        <div id="right" class="w-[50%] h-full p-5">
          <div class="flex justify-start items-center gap-4 text-[16px] pb-2">
            <button
              @click="handleToggleIntro"
              class="focus:border-b-2 focus:border-b-[#615ced]"
            >
              导读
            </button>
            <button
              @click="handleToggleNote"
              class="focus:border-b-2 focus:border-b-[#615ced]"
            >
              笔记
            </button>
          </div>
          <RichText v-show="!toggleIntro" />
          <Intro v-show="toggleIntro" />
        </div>
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
  PauseOutlined,
} from "@ant-design/icons-vue";
import Speaker from "../components/recording/Speaker.vue";
import SpeakingBox from "../components/recording/SpeakingBox.vue";
import VoiceToTextBar from "../components/recording/VoiceToTextBar.vue";
import { ref, onMounted, onUnmounted } from "vue";
import RichText from "../components/recording/RichText.vue";
import Intro from "../components/recording/Intro.vue";

let toggleIntro = ref(true); //true为导读intro，false为笔记note
let togglePause = ref(false); //false为录音中，true为暂停
function handleToggleNote() {
  toggleIntro.value = false;
}
function handleToggleIntro() {
  toggleIntro.value = true;
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
