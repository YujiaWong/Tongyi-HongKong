<template>
  <div id="OutputBox">
    <div
      class="outputHolder relative"
      ref="outputBox"
      @mouseenter="ShowOutputContent"
      @mouseleave="UnshowOutputContent"
    >
      <button
        class="flex justify-center items-center gap-2 bg-[#615ced] text-white text-[16px] p-[7px] rounded-3xl px-6"
      >
        <DownloadOutlined /><span class="text-[16px] font-semibold">导出</span>
      </button>
      <div
        v-if="displayOutputContent"
        ref="outputContent"
        class="bg-white rounded-xl shadow-[0_0_10px_3px_rgb(0,0,0,0.1)] absolute top-full right-0 mt-2 flex flex-col justify-start items-start p-3 gap-4 text-xs"
      >
        <span class="font-semibold">导出</span>
        <div class="flex justify-start items-start gap-2">
          <input type="checkbox" class="mt-1 accent-[#615ced]" />
          <div class="flex flex-col gap-2">
            <span>原文</span>
            <div class="flex items-center justify-start gap-2">
              <span class="whitespace-nowrap">文档格式</span>
              <div class="relative">
                <button
                  @click="handleToggleFormat"
                  class="w-[165px] h-[30px] flex justify-between items-center rounded-md border border-gray-200 p-2 px-3 text-gray-500 shadow-[0_0_3px_2px_rgb(68,51,255,0.2)]"
                >
                  <span>{{ format }}</span
                  ><DownOutlined class="text-gray-400" />
                </button>
                <div
                  v-show="toggleFormat"
                  class="w-[165px] rounded-2xl bg-white absolute top-full left-0 p-2 mt-2 shadow-[0_0_15px_-3px_rgba(0,0,0,0.2)] z-20"
                >
                  <button
                    @click="selectFormat('.docx')"
                    class="w-full rounded-md text-gray-400 p-2 pl-3 hover:bg-[rgb(68,51,255,0.1)] focus:text-[rgb(68,51,255,0.8)] text-start"
                  >
                    .docx
                  </button>
                  <button
                    @click="selectFormat('.txt')"
                    class="w-full rounded-md text-gray-400 p-2 pl-3 hover:bg-[rgb(68,51,255,0.1)] focus:text-[rgb(68,51,255,0.8)] text-start"
                  >
                    .txt
                  </button>
                  <button
                    @click="selectFormat('.srt')"
                    class="w-full rounded-md text-gray-400 p-2 pl-3 hover:bg-[rgb(68,51,255,0.1)] focus:text-[rgb(68,51,255,0.8)] text-start"
                  >
                    .srt
                  </button>
                  <button
                    @click="selectFormat('.md')"
                    class="w-full rounded-md text-gray-400 p-2 pl-3 hover:bg-[rgb(68,51,255,0.1)] focus:text-[rgb(68,51,255,0.8)] text-start"
                  >
                    .md
                  </button>
                  <button
                    @click="selectFormat('.pdf')"
                    class="w-full rounded-md text-gray-400 p-2 pl-3 hover:bg-[rgb(68,51,255,0.1)] focus:text-[rgb(68,51,255,0.8)] text-start"
                  >
                    .pdf
                  </button>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-start gap-2">
              <span class="whitespace-nowrap">显示信息</span>
              <div class="relative">
                <button
                  @click="handleToggleInfo"
                  class="w-[165px] h-[30px] flex justify-between items-center rounded-md border border-gray-200 p-2 pr-3 text-gray-500 shadow-[0_0_3px_2px_rgb(68,51,255,0.2)]"
                >
                  <button
                    v-if="showSpeakerBtn"
                    class="bg-purple-50 p-1 px-2 rounded-md"
                    @click="unshowBtn(1)"
                  >
                    发言人 x
                  </button>
                  <button
                    v-if="showTimeStamp"
                    class="bg-purple-50 p-1 px-2 rounded-md"
                    @click="unshowBtn(2)"
                  >
                    时间戳 x
                  </button>
                  <div></div>
                  <DownOutlined class="text-gray-400" />
                </button>
                <div
                  v-show="toggleInfo"
                  class="w-[165px] rounded-2xl bg-white absolute top-full left-0 p-2 mt-2 shadow-[0_0_15px_-3px_rgba(0,0,0,0.2)] z-20"
                >
                  <button
                    class="w-full flex justify-between rounded-md text-gray-400 p-2 pl-3 hover:bg-[rgb(68,51,255,0.1)] focus:text-[rgb(68,51,255,0.8)] text-start"
                    @click="
                      {
                        showBtn(1), toggleCheckedSign(1);
                      }
                    "
                  >
                    <span>发言人</span
                    ><CheckOutlined v-show="showSpeakerCheckedSign" />
                  </button>
                  <button
                    class="w-full flex justify-between rounded-md text-gray-400 p-2 pl-3 hover:bg-[rgb(68,51,255,0.1)] focus:text-[rgb(68,51,255,0.8)] text-start"
                    @click="
                      {
                        showBtn(2), toggleCheckedSign(2);
                      }
                    "
                  >
                    <span>时间戳</span
                    ><CheckOutlined v-show="showTimeStampCheckedSign" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-start items-center gap-2">
          <input type="checkbox" />
          <span>导读</span>
        </div>
        <div class="flex justify-start items-center gap-2">
          <input type="checkbox" />
          <span>音视频</span>
        </div>
        <div class="flex justify-start items-center gap-2">
          <input type="checkbox" />
          <span>脑图</span>
        </div>
        <div class="flex justify-start items-center gap-2">
          <input type="checkbox" />
          <span>笔记</span>
        </div>
        <div class="w-full flex justify-center items-center gap-2">
          <button
            @click="UnshowOutputContent"
            class="rounded-2xl w-[50%] border border-gray-300 py-2"
          >
            取消
          </button>
          <button class="rounded-2xl w-[50%] bg-[#615ced] py-2 text-white">
            导出
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  DownloadOutlined,
  DownOutlined,
  CheckOutlined,
} from "@ant-design/icons-vue";
let toggleFormat = ref(false);
function handleToggleFormat() {
  toggleFormat.value = !toggleFormat.value;
  toggleInfo.value = false;
}

let toggleInfo = ref(false);
function handleToggleInfo() {
  toggleInfo.value = !toggleInfo.value;
  toggleFormat.value = false;
}

const outputContent = ref(null);
let displayOutputContent = ref(false);
let timer = null;
function ShowOutputContent() {
  displayOutputContent.value = true;
  clearTimeout(timer);
}
function UnshowOutputContent() {
  timer = setTimeout(() => {
    displayOutputContent.value = false;
    // showSpeakerBtn.value = true;
    // showTimeStamp.value = true;
    // showSpeakerCheckedSign = false;
    // showTimeStampCheckedSign = false;
    toggleFormat.value = false;
    toggleInfo.value = false;
  }, 500);
}
let showSpeakerBtn = ref(true);
let showTimeStamp = ref(true);
function unshowBtn(target) {
  if (target === 1) {
    showSpeakerBtn.value = false;
  }
  if (target === 2) {
    showTimeStamp.value = false;
  }
}
function showBtn(target) {
  if (target === 1) {
    showSpeakerBtn.value = !showSpeakerBtn.value;
  }
  if (target === 2) {
    showTimeStamp.value = !showTimeStamp.value;
  }
}
let showSpeakerCheckedSign = ref(false);
let showTimeStampCheckedSign = ref(false);
function toggleCheckedSign(target) {
  if (target === 1) {
    showSpeakerCheckedSign.value = !showSpeakerCheckedSign.value;
  }
  if (target === 2) {
    showTimeStampCheckedSign.value = !showTimeStampCheckedSign.value;
  }
}

let format = ref(".docx");
function selectFormat(f) {
  format.value = f;
}
</script>

<style scoped>
input[type="checkbox"] {
  accent-color: #615ced;
}
</style>
