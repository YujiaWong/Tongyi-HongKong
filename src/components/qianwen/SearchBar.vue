<template>
  <div id="SixBtns" v-show="!toggleSearchBar">
    <div class="flex justify-start items-center gap-2">
      <button
        @click="openBigSearchBar"
        class="border border-gray-200 rounded-3xl w-[100px] text-gray-500 flex justify-center items-center gap-2 px-2 p-1 hover:!text-[rgb(72,72,237)] hover:bg-[rgb(228,228,251)]"
      >
        <RadarChartOutlined
          style="color: rgb(32, 227, 55)"
          class="text-red-400 hover:!text-[rgb(72,72,237)]"
        />
        <span>深度思考</span>
      </button>
      <button
        @click="openBigSearchBar"
        class="border border-gray-200 rounded-3xl w-[100px] text-gray-500 flex justify-center items-center gap-2 px-2 p-1 hover:!text-[rgb(72,72,237)] hover:bg-[rgb(228,228,251)]"
      >
        <AlertOutlined class="!text-purple-600" />
        <span>分析研究</span>
      </button>
      <button
        @click="openBigSearchBar"
        class="border border-gray-200 rounded-3xl w-[100px] text-gray-500 flex justify-center items-center gap-2 px-2 p-1 hover:!text-[rgb(72,72,237)] hover:bg-[rgb(228,228,251)]"
      >
        <CodeOutlined class="!text-blue-400" />
        <span>代码模式</span>
      </button>
      <button
        @click="openBigSearchBar"
        class="border border-gray-200 rounded-3xl w-[100px] text-gray-500 flex justify-center items-center gap-2 px-2 p-1 hover:!text-[rgb(72,72,237)] hover:bg-[rgb(228,228,251)]"
      >
        <ChromeOutlined class="!text-purple-400" />
        <span>联网搜索</span>
      </button>
      <button
        @click="openBigSearchBar"
        class="border border-gray-200 rounded-3xl w-[100px] text-gray-500 flex justify-center items-center gap-2 px-2 p-1 hover:!text-[rgb(72,72,237)] hover:bg-[rgb(228,228,251)]"
      >
        <FundOutlined class="!text-green-400" />
        <span>PPT模式</span>
      </button>
      <!-- 指令中心 ordercenter -->
      <OrderCenter />
    </div>
  </div>
  <div
    v-if="toggleSearchBar"
    id="BigSearchBar"
    class="flex flex-col w-[900px] h-[100px] border border-[rgb(72,72,237)] rounded-[16px]"
  >
    <div
      class="w-full h-[45px] bg-slate-50 rounded-t-[16px] mb-2 flex justify-between items-center gap-2 px-5"
    >
      <div class="flex items-center gap-2">
        <div
          class="flex items-center gap-2 bg-[#615ced11] rounded-lg text-xs p-1"
        >
          <!-- <RadarChartOutlined class="!text-[rgb(72,72,237)]" /> -->
          <span class="text-[rgb(72,72,237)]">{{ modeName }}</span>
        </div>
        <span class="text-gray-500">{{ modeDesc }}</span>
      </div>
      <button @click="closeBigSearchBar">
        <CloseOutlined class="!text-gray-500 pr-2" />
      </button>
    </div>
    <div
      class="bg-white flex flex-row justify-start items-center gap-4 rounded-b-[16px] px-4 py-1"
    >
      <div
        class="relative"
        ref="uploadHolder"
        @mouseenter="handleShowUpload"
        @mouseleave="handleUnshowUpload"
      >
        <button>
          <UploadOutlined class="text-xl" />
        </button>
        <div
          ref="uploadContent"
          v-if="showUploadContent"
          class="absolute bottom-full -left-12 w-[140px] flex flex-col justify-center items-center gap-1 px-2 py-1 bg-white shadow-[0_0_5px_3px_rgb(0,0,0,0.1)] rounded-md"
        >
          <div class="relative">
            <button
              class="uploadImgBtn flex items-center gap-2 w-full rounded-md hover:bg-[#615ced11] p-2 px-4"
            >
              <PictureOutlined /><span>上传图片</span>
            </button>
            <div
              class="uploadImgHint absolute top-0 left-[130px] w-[200px] text-white bg-[#615ced] rounded-xl p-2"
            >
              可同时上传100个文件（每个 150 MB） 支持PDF / Word / Excel /
              Markdown / EPUB / Mobi / txt
            </div>
          </div>
          <input type="file" id="fileInput" style="display: none" />
          <button onclick="document.getElementById('fileInput').click()">
            选择文件
          </button>
          <div class="relative">
            <button
              class="uploadFileBtn flex items-center gap-2 w-full rounded-md hover:bg-[#615ced11] p-2 px-4"
            >
              <FileTextOutlined /> <span>上传文档</span>
            </button>
            <div
              class="uploadFileHint absolute top-0 left-[130px] w-[280px] text-white bg-[#615ced] rounded-xl p-2"
            >
              上传1张不超过10M的PNG/JPG/JPEG图片
            </div>
          </div>
        </div>
      </div>
      <form class="w-[95%] h-[100%]">
        <input
          v-model="inputValue"
          type="text"
          class="w-[100%] h-[100%] outline-none"
          placeholder="遇事不决问通义"
        />
      </form>
      <button @click="toggleToChatMode">
        <SendOutlined
          class="text-lg !text-white bg-[#d6d5de] rounded-full w-10 h-10 pt-[9px] pl-[2px]"
          :rotate="320"
          :class="{ '!bg-[rgb(72,72,237)]': hasInput }"
        />
      </button>
    </div>
  </div>
  <div
    v-if="!toggleSearchBar"
    id="SearchBar"
    class="bg-white w-[900px] h-[50px] flex flex-row justify-start items-center border border-[rgb(72,72,237)] rounded-[16px] gap-4 px-4"
  >
    <div
      class="relative"
      ref="uploadHolder"
      @mouseenter="handleShowUpload"
      @mouseleave="handleUnshowUpload"
    >
      <button>
        <UploadOutlined class="text-xl" />
      </button>
      <div
        ref="uploadContent"
        v-if="showUploadContent"
        class="absolute bottom-full -left-12 w-[140px] flex flex-col justify-center items-center gap-1 px-2 py-1 bg-white shadow-[0_0_5px_3px_rgb(0,0,0,0.1)] rounded-md"
      >
        <div class="relative">
          <button
            class="uploadImgBtn flex items-center gap-2 w-full rounded-md hover:bg-[#615ced11] p-2 px-4"
          >
            <PictureOutlined /><span>上传图片</span>
          </button>
          <div
            class="uploadImgHint absolute top-0 left-[130px] w-[200px] text-white bg-[#615ced] rounded-xl p-2"
          >
            可同时上传100个文件（每个 150 MB） 支持PDF / Word / Excel / Markdown
            / EPUB / Mobi / txt
          </div>
        </div>

        <div class="relative">
          <button
            class="uploadFileBtn flex items-center gap-2 w-full rounded-md hover:bg-[#615ced11] p-2 px-4"
          >
            <FileTextOutlined /> <span>上传文档</span>
          </button>
          <div
            class="uploadFileHint absolute top-0 left-[130px] w-[280px] text-white bg-[#615ced] rounded-xl p-2"
          >
            上传1张不超过10M的PNG/JPG/JPEG图片
          </div>
        </div>
      </div>
    </div>
    <form class="w-[95%] h-[100%]" @submit.prevent="emitSend">
      <input
        v-model="inputValue"
        type="text"
        class="w-[100%] h-[100%] outline-none text-[16px]"
        placeholder="遇事不决问通义"
      />
    </form>
    <button :disabled="!hasInput || loading" @click="emitSend">
      <SendOutlined
        class="text-lg !text-white bg-[#d6d5de] rounded-full w-10 h-10 pt-[9px] pl-[2px]"
        :rotate="320"
        :class="{ '!bg-[rgb(72,72,237)]': hasInput }"
      />
    </button>
  </div>
</template>

<script setup>
import {
  UploadOutlined,
  SendOutlined,
  FileTextOutlined,
  PictureOutlined,
} from "@ant-design/icons-vue";
import {
  RadarChartOutlined,
  FundOutlined,
  ChromeOutlined,
  AppstoreOutlined,
  AlertOutlined,
  CodeOutlined,
  CloseOutlined,
} from "@ant-design/icons-vue";

import { ref, computed, nextTick } from "vue";
import OrderCenter from "./OrderCenter.vue";
const inputValue = ref(""); //-----输入的文本-------
const hasInput = computed(() => {
  return inputValue.value.trim().length > 0;
});

let toggleSearchBar = ref(false); //false为正常形式搜索框，true为加高版
let modeName = ref("深度思考");
let modeDesc = ref("基于Qwen 3推理模式，支持自动联网搜索");
function closeBigSearchBar() {
  toggleSearchBar.value = false;
}
function openBigSearchBar(e) {
  toggleSearchBar.value = true;
  if (e.currentTarget.innerText === "深度思考") {
    modeName.value = "深度思考";
    modeDesc.value = "基于Qwen 3推理模式，支持自动联网搜索";
  } else if (e.currentTarget.innerText === "分析研究") {
    modeName.value = "分析研究";
    modeDesc.value = "花费更长时间，结合多步推理和多种工具解决复杂任务";
  } else if (e.currentTarget.innerText === "代码模式") {
    modeName.value = "代码模式";
    modeDesc.value = "更擅长处理代码问题，支持一句话生成应用";
  } else if (e.currentTarget.innerText === "联网搜索") {
    modeName.value = "联网搜索";
    modeDesc.value = "搜索互联网实时内容，获取最新信息";
  } else if (e.currentTarget.innerText === "PPT创作") {
    modeName.value = "PPT创作";
    modeDesc.value = "帮你制作言之有物、设计精美的智能PPT";
  }
}
const props = defineProps({
  homePageMode: {
    type: Boolean,
    required: true,
  },
  loading: Boolean,
});
const emit = defineEmits(["update:homePageMode", "send"]);

//const emit = defineEmits(["update:homPageMode"]);
//从homepage切换到对话模式
function toggleToChatMode() {
  emit("update:homePageMode", false);
}

const uploadContent = ref(null);
const uploadHolder = ref(null);
let showUploadContent = ref(false);
const timer = null;
function handleShowUpload() {
  showUploadContent.value = true;
  clearTimeout(timer);
}
function handleUnshowUpload() {
  timer = setTimeout(() => {
    showUploadContent.value = false;
  }, 500);
}

//  抽屉drawer----------------
const open = ref(false);
const afterOpenChange = (bool) => {
  console.log("open", bool);
};
const showDrawer = () => {
  open.value = true;
};

/* ---------- 方法 ---------- */
function emitSend() {
  if (!hasInput.value) return;
  emit("update:homePageMode", false); // 切到聊天模式
  emit("send", inputValue.value.trim()); // 把纯文本交给父盒子
  inputValue.value = "";
}
</script>

<style scoped>
.uploadImgHint {
  display: none;
}
.uploadImgBtn:hover + .uploadImgHint {
  display: block;
}
.uploadFileHint {
  display: none;
}
.uploadFileBtn:hover + .uploadFileHint {
  display: block;
}
</style>
