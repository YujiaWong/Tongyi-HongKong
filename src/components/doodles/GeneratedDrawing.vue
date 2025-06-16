<template>
  <div id="GeneratedDrawing" class="relative">
    <div class="flex gap-2">
      <div>
        <input v-show="toggle" type="checkbox" />
      </div>
      <div
        class="w-full flex flex-col justify-between items-center gap-4 text-gray-300 pb-6"
      >
        <div class="flex w-full">
          <span class="text-xs mr-6">2025-06-04 14:32:21 </span>
          <div class="flex-1 border-t border-t-gray-400 mt-2"></div>
        </div>
        <div class="w-full flex justify-between items-center">
          <div class="flex justify-start items-center gap-2 relative">
            <div class="picBtn flex gap-2 bg-[#878AAB33] p-1 rounded-sm">
              <div class="w-5 h-5 bg-black"></div>
              <span>涂鸦</span>
            </div>
            <div
              class="bigPic w-[220px] h-[220px] bg-[#141822] rounded-xl absolute top-9 left-0 z-10"
            ></div>
            <span>x</span>
            <div class="flex gap-2 bg-[#878AAB33] p-1 rounded-sm">
              <span>扁平插画</span>
            </div>
            <span>x</span>
            <a-popover color="#2D3240">
              <template #content>
                <button
                  @click="copy"
                  ref="copyButton"
                  id="copyButton"
                  class="text-gray-300 flex justify-center items-center gap-2 hover:text-white"
                >
                  <CopyOutlined /><span>复制文本</span>
                </button>
              </template>
              <a-button
                type="link"
                class="!text-gray-300 hover:!text-white !p-0"
                ><span ref="copyContent">小猫</span></a-button
              >
            </a-popover>
          </div>
          <div class="flex justify-center items-center gap-8">
            <button class="flex items-center gap-2">
              <EnterOutlined />复用创意
            </button>
            <button class="flex items-center gap-2">
              <RedoOutlined />再次生成
            </button>
            <button class="pb-[5px]"><DeleteOutlined /></button>
          </div>
        </div>
        <div class="w-full flex gap-2 relative">
          <div
            v-for="(item, index) in pics"
            :key="index"
            class="drawingHolder relative"
          >
            <button
              @click="handleShowDetails"
              class="drawingArea w-[260px] h-[260px] rounded-lg"
            >
              <img class="drawingImg overflow-hidden rounded-lg" :src="item" />
            </button>
            <div
              class="drawingBtns w-[260px] flex justify-between items-end text-gray-200 absolute bottom-4 px-4"
            >
              <div class="flex justify-center items-center gap-2">
                <div
                  class="feedbackHolder w-full relative"
                  ref="feedbackHolder"
                >
                  <button
                    class="feedbackBtn"
                    ref="feedbackBtn"
                    @click="showFeedback"
                  >
                    <DislikeOutlined />
                  </button>
                  <Teleport to="body">
                    <Feedback
                      class="feedbackBoard absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-99"
                      ref="feedbackBoard"
                      v-if="feedbackFlag"
                      v-model:feedbackFlag="feedbackFlag"
                    />
                  </Teleport>
                </div>
                <span>|</span>
                <button><LikeOutlined /></button>
              </div>

              <div class="flex justify-center items-end gap-2">
                <div class="downloadHolder relative">
                  <div
                    class="downloadBoard absolute p-3 rounded-md bottom-full right-[-40px] bg-[#141822] w-[110px]"
                  >
                    <button class="p-2 hover:bg-slate-500/50">
                      下载结果图
                    </button>
                    <button class="p-2 hover:bg-slate-500/50">
                      下载对比图
                    </button>
                  </div>
                  <button class="downloadBtn"><DownloadOutlined /></button>
                </div>
                <span>|</span>
                <button>
                  <StarOutlined class="active:text-yellow-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <DrawingDetails v-model:showDetails="showDetails" :pics="pics" />
</template>

<script setup>
import {
  DeleteOutlined,
  EnterOutlined,
  RedoOutlined,
  DislikeOutlined,
  LikeOutlined,
  StarOutlined,
  DownloadOutlined,
  CopyOutlined,
} from "@ant-design/icons-vue";
import DrawingDetails from "./DrawingDetails.vue";
import { ref } from "vue";
import Feedback from "./Feedback.vue";
let showDetails = ref(false);

function handleShowDetails() {
  showDetails.value = true;
}
const pics = ["zoo1.jpg", "cat3.jpg", "dog.jpg", "zoo3.jpg"];

const props = defineProps({
  toggle: {
    type: Boolean,
    required: true,
  },
});
const feedbackBoard = ref(null);
const feedbackBtn = ref(null);
const feedbackHolder = ref(null);
let feedbackFlag = ref(false);
function showFeedback() {
  feedbackFlag.value = !feedbackFlag.value;
}

const copyButton = ref(null);
const copyContent = ref(null);
async function copy() {
  try {
    const textToCopy = copyContent.value.textContent;
    await navigator.clipboard.writeText(textToCopy);
  } catch (err) {
    console.error("cannot copy the text");
  }
}
</script>

<style scoped>
.drawingBtns {
  opacity: 0;
  transition: opacity 0.3s ease;
}
.drawingHolder:hover .drawingArea {
  border: 3px solid rgb(72, 72, 237);
  border-radius: 10px;
}
.drawingHolder:hover .drawingImg {
  filter: brightness(55%);
}
.drawingHolder:hover .drawingBtns {
  opacity: 100;
}
.bigPic {
  display: none;
}
.picBtn:hover + .bigPic {
  display: block;
}
.downloadHolder:hover .downloadBoard {
  display: block;
}
.downloadBoard {
  display: none;
}
</style>
