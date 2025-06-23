<template>
  <div
    id="Player"
    class="audio-player w-full h-[60px] flex items-center justify-between"
  >
    <div class="flex gap-5">
      <button @click="skipBackward">
        <UndoOutlined class="!text-[#615ced] text-lg rotate-90" />
      </button>
      <button
        @click="togglePlay"
        class="w-[35px] h-[35px] bg-[#615ced] rounded-full flex justify-center items-center text-white"
      >
        <PauseOutlined v-if="isPlaying" class="!text-white text-lg" />
        <CaretRightOutlined v-else class="!text-white text-lg" />
      </button>

      <button @click="skipForward">
        <RedoOutlined class="!text-[#615ced] text-lg -rotate-90" />
      </button>
    </div>
    <!-- 进度条 -->
    <div class="flex flex-col flex-1 p-4 min-w-[250px]">
      <div class="voiceSpectrum w-full h-[25px] flex items-end">
        <div
          v-for="(item, index) in specturm"
          :key="index"
          :style="{
            width: '2px',
            height: `${item}px`,
          }"
          class="bg-[#615ced55]"
        ></div>
      </div>
      <button
        class="progress-bar w-full h-1 bg-[#615ced55] p-0"
        @click="setProgress"
      >
        <div
          class="progress bg-[#615ced] h-1"
          :style="{ width: progress + '%' }"
        ></div>
      </button>

      <!-- 当前播放时间与总时长 -->
      <div class="flex justify-between items-center text-xs text-gray-500 mt-2">
        <span>{{ currentTime }} </span>
        <span>{{ duration }}</span>
      </div>
    </div>

    <a-popover>
      <template #content>
        <div class="flex flex-col justify-center items-center gap-4 p-2">
          <button
            @click="setSpeed(2)"
            class="hover:text-[#615ced] focus:text-[#615ced]"
          >
            2x
          </button>
          <button
            @click="setSpeed(1.5)"
            class="hover:text-[#615ced] focus:text-[#615ced]"
          >
            1.5x
          </button>
          <button
            @click="setSpeed(1.25)"
            class="hover:text-[#615ced] focus:text-[#615ced]"
          >
            1.25x
          </button>
          <button
            @click="setSpeed(1)"
            class="hover:text-[#615ced] focus:text-[#615ced]"
          >
            1.0x
          </button>
          <button
            @click="setSpeed(0.75)"
            class="hover:text-[#615ced] focus:text-[#615ced]"
          >
            0.75x
          </button>
        </div>
      </template>
      <a-button
        type="link"
        class="!text-[#615ced] !p-0"
        @click="skipBackward"
        >{{ voiceSpeed === 1 ? "倍速" : `${voiceSpeed}x` }}</a-button
      >
    </a-popover>

    <a-popover>
      <template #content>
        <div class="w-[200px] flex flex-col justify-between items-center gap-4">
          <div class="w-full flex justify-between items-center">
            <span>跳过空白片段</span>
            <a-switch
              v-model:checked="checked"
              size="small"
              class="custom-switch"
            />
          </div>
          <div class="w-full flex justify-between items-center text-gray-500">
            <button class="flex items-center" @click="toZero">
              <SoundOutlined />
            </button>

            <a-slider
              @change="handleVolumn"
              v-model:value="volumn"
              :tooltip-open="true"
              class="custom-slider custom-handle w-[150px]"
            />
            <span class="text-xs">{{ volumn }}</span>
          </div>
        </div>
      </template>
      <a-button
        type="link"
        @click="skipBackward"
        class="!flex !items-center !mb-1"
        ><ControlOutlined class="!text-[#615ced] !text-lg"
      /></a-button>
    </a-popover>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

import {
  PauseOutlined,
  CaretRightOutlined,
  RedoOutlined,
  UndoOutlined,
  ControlOutlined,
  SoundOutlined,
} from "@ant-design/icons-vue";
import jaychouMp3 from "/src/assets/jaychou.mp3";

const audio = new Audio(jaychouMp3);
const isPlaying = ref(false);
const progress = ref(0);
const currentTime = ref("00:00");
const duration = ref("00:00");
let voiceSpeed = ref(1);

// 格式化时间显示
function formatTime(time) {
  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
}

// 切换播放状态
function togglePlay() {
  if (isPlaying.value) {
    audio.pause();
  } else {
    audio.play();
  }
  isPlaying.value = !isPlaying.value;
}

function setSpeed(speed) {
  voiceSpeed.value = speed;
  audio.playbackRate = speed;
}

// 更新进度条和当前时间
function updateProgress() {
  progress.value = (audio.currentTime / audio.duration) * 100;
  currentTime.value = formatTime(audio.currentTime);
}

// 设置音频进度
function setProgress(event) {
  const percent = event.offsetX / event.target.offsetWidth;
  audio.currentTime = percent * audio.duration;
}

// 跳到指定句（这里只是一个简单的例子）
function skipBackward() {
  audio.currentTime = Math.max(audio.currentTime - 5, 0); // 向前跳5秒
}

function skipForward() {
  audio.currentTime = Math.min(audio.currentTime + 5, audio.duration); // 向后跳5秒
}

onMounted(() => {
  const specturm = new Array(300)
    .fill(0)
    .map((item) => (item = Math.floor(Math.random() * 25)));
  console.log(specturm);

  audio.volume = volumn.value / 100;
  audio.addEventListener("timeupdate", updateProgress);
  audio.addEventListener("loadedmetadata", () => {
    duration.value = formatTime(audio.duration);
  });
});

onBeforeUnmount(() => {
  audio.removeEventListener("timeupdate", updateProgress);
});

const checked = ref(false); //控制player是否跳过空白
const volumn = ref(30); //控制音量

function handleVolumn(value) {
  audio.volume = value / 100;
  volumn.value = value;
}

function toZero() {
  audio.volume = 0;
  volumn.value = 0;
}

//波形图模拟
const specturm = new Array(300)
  .fill(0)
  .map((item) => (item = Math.floor(Math.random() * 25)));
</script>

<style scoped>
.custom-slider :deep(.ant-slider-track) {
  background-color: #8581f3 !important;
}
.custom-handle :deep(.ant-slider-handle) {
  border: 2px solid #8581f3 !important;
}

.ant-switch-checked {
  background-color: #615ced !important;
}

.ant-switch-handle::before {
  background-color: white !important; /* 滑块颜色 */
}
</style>
