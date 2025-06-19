<template>
  <div
    id="Player"
    class="audio-player w-full flex items-center justify-between"
  >
    <button @click="skipBackward">
      <UndoOutlined class="!text-[#615ced] text-lg" />
    </button>
    <button
      @click="togglePlay"
      class="w-[35px] h-[35px] bg-[#615ced] rounded-full flex justify-center items-center text-white"
    >
      <PauseOutlined v-if="isPlaying" class="!text-white text-lg" />
      <CaretRightOutlined v-else class="!text-white text-lg" />
    </button>

    <button @click="skipForward">
      <RedoOutlined class="!text-[#615ced] text-lg" />
    </button>

    <!-- 进度条 -->
    <div class="progress-bar" @click="setProgress">
      <div class="progress" :style="{ width: progress + '%' }"></div>
    </div>

    <!-- 当前播放时间与总时长 -->
    <p>{{ currentTime }} / {{ duration }}</p>

    <button @click="skipBackward" class="!text-[#615ced]">倍速</button>
    <button @click="skipBackward">
      <ControlOutlined class="!text-[#615ced] text-lg" />
    </button>
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
} from "@ant-design/icons-vue";
import jaychouMp3 from "/src/assets/jaychou.mp3";

const audio = new Audio(jaychouMp3);
const isPlaying = ref(false);
const progress = ref(0);
const currentTime = ref("00:00");
const duration = ref("00:00");

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
  audio.addEventListener("timeupdate", updateProgress);
  audio.addEventListener("loadedmetadata", () => {
    duration.value = formatTime(audio.duration);
  });
});

onBeforeUnmount(() => {
  audio.removeEventListener("timeupdate", updateProgress);
});
</script>
