<template>
  <div id="DrawingInfoBoard flex justify-start items-center">
    <a-button type="link" @click="showModal">.</a-button>
    <div v-if="visible" class="verticalBar fixed top-[80px] left-[190px]">
      <div
        v-for="(item, index) in pics"
        :key="index"
        class="mb-2 rounded-lg overflow-hidden relative"
      >
        <img
          v-for="(i, index) in item"
          :key="index"
          @click="iconShowPic"
          :src="i"
          class="w-[50px] h-[50px] opacity-60 transition:all duration-300 hover:w-[60px] hover:h-[60px] hover:opacity-100"
        />
      </div>
    </div>
    <a-modal
      class="custom-modal"
      v-model:visible="visible"
      title=""
      :closable="false"
      :footer="null"
      centered="true"
      width="1000px"
    >
      <div class="content flex">
        <div
          class="left flex justify-center items-end w-[70%] h-[650px] bg-slate-400 relative"
        >
          <button
            @click="handleLeftToggle"
            class="btnLeft absolute top-[45%] left-5 w-[50px] h-[50px] rounded-full bg-slate-200 pb-1"
          >
            <LeftOutlined />
          </button>
          <button
            @click="handleRightToggle"
            class="btnRight absolute top-[45%] right-5 w-[50px] h-[50px] rounded-full bg-slate-200 pb-1"
          >
            <RightOutlined />
          </button>
          <p
            class="w-[60px] h-[30px] rounded-2xl mt-1 bg-slate-100 absolute top-0 right-1 flex items-center justify-center"
          >
            {{ (currentIndex % 4) + 1 }}/4
          </p>
          <img :src="picUrl" class="w-full h-full overflow-hidden" />
        </div>
        <div class="right h-[650px] flex flex-col justify-between pl-4 gap-4">
          <div>
            <div class="flex justify-between items-center gap-11 relative">
              <div class="flex justify-center items-center gap-2">
                <button
                  class="w-[40px] h-[40px] rounded-full bg-gray-100 hover:text-[rgb(72,72,237)]"
                >
                  <DislikeOutlined class="text-center pb-1" />
                </button>
                <button
                  class="w-[40px] h-[40px] rounded-full bg-gray-100 hover:text-[rgb(72,72,237)]"
                >
                  <LikeOutlined class="text-center pb-3" />
                </button>
              </div>
              <div class="flex justify-center items-center gap-2">
                <a-popover placement="bottom">
                  <template #content>
                    <button
                      class="flex justify-start items-center gap-4 w-[140px] p-2 pl-3 rounded-2xl hover:bg-gray-100"
                    >
                      <CopyOutlined class="text-md text-gray-500" />
                      <span class="text-[16px] text-gray-500 pr-2"
                        >复制链接</span
                      >
                    </button>
                    <button
                      class="flex justify-start items-center gap-4 p-2 pl-3 w-[140px] rounded-2xl hover:bg-gray-100"
                    >
                      <SendOutlined
                        :rotate="320"
                        class="text-md text-gray-500"
                      />
                      <span class="text-[16px] text-gray-500 pr-2"
                        >投稿到广场</span
                      >
                    </button>
                  </template>
                  <a-button
                    class="ellipsisBtn !w-[40px] !h-[40px] !rounded-full !border-none !bg-gray-100 hover:!text-[rgb(72,72,237)]"
                  >
                    <p class="mb-2">...</p>
                  </a-button>
                </a-popover>
                <div class="downloadHolder">
                  <button
                    class="downloadBtn w-[40px] h-[40px] rounded-full bg-gray-100 hover:text-[rgb(72,72,237)]"
                  >
                    <DownloadOutlined class="text-center pb-3" />
                  </button>
                  <div
                    class="downloadBoard flex flex-col justify-center items-center w-[170px] h-[100px] rounded-3xl bg-white absolute shadow-lg top-[50px] left-[-70px] p-2"
                  >
                    <button
                      class="flex justify-center items-center gap-2 p-2 pl-4 rounded-2xl hover:bg-gray-100"
                    >
                      <FileJpgOutlined class="text-md text-gray-500" />
                      <span class="text-[16px] text-gray-500 pr-2"
                        >有水印下载</span
                      >
                    </button>
                    <button
                      class="flex justify-center items-center gap-2 p-2 pl-4 rounded-2xl hover:bg-gray-100"
                    >
                      <FileImageOutlined class="text-md text-gray-500" />
                      <span class="text-[16px] text-gray-500 pr-2"
                        >无水印下载</span
                      >
                    </button>
                  </div>
                </div>
                <button
                  class="w-[40px] h-[40px] rounded-full bg-gray-100 hover:text-[rgb(72,72,237)]"
                >
                  <StarOutlined class="text-center pb-2" />
                </button>
              </div>
            </div>
            <div class="flex justify-between items-start pt-5 pb-2">
              <div>
                <p>提示咒语</p>
                <p class="mb-2">画个小朋友</p>
              </div>
              <button class="text-[rgb(72,72,237)]">复制咒语</button>
            </div>
            <hr />
            <div class="mt-4">
              <div class="flex justify-start items-center gap-[60px]">
                <div class="w-[80px]">
                  <h1 class="text-gray-400 text-[14px]">生成方式</h1>
                  <p class="text-[12px]">文本生成图片</p>
                </div>
                <div class="flex flex-col">
                  <h1 class="text-gray-400 text-[14px]">图片比例</h1>
                  <p class="text-[12px]">1:1</p>
                </div>
              </div>
              <div class="flex justify-start items-center gap-[60px]">
                <div class="w-[80px]">
                  <h1 class="text-gray-400 text-[14px]">灵感模式</h1>
                  <p class="text-[12px]">开启</p>
                </div>
                <div class="flex flex-col">
                  <h1 class="text-gray-400 text-[14px]">创作时间</h1>
                  <p class="text-[12px]">2025-05-27 14:57:27</p>
                </div>
              </div>
              <div class="flex justify-start items-center gap-[60px]">
                <div>
                  <h1 class="text-gray-400">模型</h1>
                  <div class="p-4 rounded-xl bg-gray-100 text-xs">
                    万相2.1 专业
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <div class="flex gap-2">
              <button
                class="p-2 px-6 bg-[#f5f8ff] rounded-3xl text-[rgb(72,72,237)] flex items-center gap-2"
              >
                <PlayCircleOutlined />
                生成视频
              </button>
              <button
                class="p-2 px-6 bg-[#f5f8ff] rounded-3xl text-[rgb(72,72,237)] flex items-center gap-2"
              >
                <ArrowsAltOutlined />
                高清放大
              </button>
            </div>
            <div class="flex gap-2">
              <button
                class="p-2 px-6 bg-[#f5f8ff] rounded-3xl text-[rgb(72,72,237)] flex items-center gap-2"
              >
                <EditOutlined />
                局部重绘
              </button>
              <button
                class="p-2 px-6 bg-[#f5f8ff] rounded-3xl text-[rgb(72,72,237)] flex items-center gap-2"
              >
                <EditOutlined />
                复用创意
              </button>
            </div>
          </div>
        </div>
      </div>
    </a-modal>
    <button
      @click="handleClose"
      v-if="visible"
      class="closeBtn rounded-full w-[50px] h-[50px] bg-gray-200 fixed top-[80px] right-[180px] z-10001 text-[30px]"
    >
      ×
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { CloseOutlined } from "@ant-design/icons-vue";
import {
  DownloadOutlined,
  StarOutlined,
  LeftOutlined,
  RightOutlined,
  ArrowsAltOutlined,
  FileImageOutlined,
  LikeOutlined,
  PlayCircleOutlined,
  DislikeOutlined,
  FileJpgOutlined,
  CopyOutlined,
  SendOutlined,
  EditOutlined,
  HighlightOutlined,
  ExpandOutlined,
} from "@ant-design/icons-vue";
const visible = ref(false);
const pics = [
  ["cat1.jpg", "cat2.jpg", "cat3.jpg", "cat4.jpg"],
  ["zoo1.jpg", "zoo2.jpg", "zoo3.jpg", "zoo4.jpg"],
  ["dog.jpg"],
];
const currentIndex = ref(0);
let picArr = [];
let index = 0;
//把二维数组pics放进一维数组picArr，以便实现左右按键跳转图片
for (let i = 0; i < pics.length; i++) {
  for (let j = 0; j < pics[i].length; j++) {
    picArr[index] = pics[i][j];
    index++;
  }
}
const value = ref("");
const picUrl = ref(picArr[currentIndex.value]);
const textContent = ref("");
const checked = ref<boolean>(false);

const showModal = () => {
  visible.value = true;
};
const handleClose = () => {
  visible.value = false;
};

const handleLeftToggle = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = 0;
  }
  picUrl.value = picArr[currentIndex.value];
};
const handleRightToggle = () => {
  if (currentIndex.value < picArr.length - 1) {
    currentIndex.value += 1;
  } else {
    currentIndex.value = picArr.length - 1;
  }
  picUrl.value = picArr[currentIndex.value];
};

const iconShowPic = (e: any) => {
  const url = e.target.currentSrc.split("4200/")[1];
  console.log(url);
  picUrl.value = url;
};

const handleOk = (e: MouseEvent) => {
  console.log(e);
  visible.value = false;
};
</script>

<style>
.ant-modal-content {
  @apply rounded-xl;
}
.closeBtn {
  z-index: 1001;
}
.verticalBar {
  z-index: 1001;
}
.btnRight {
  display: none;
}
.btnLeft {
  display: none;
}
.left:hover .btnLeft {
  display: block;
}
.left:hover .btnRight {
  display: block;
}

.downloadBoard {
  opacity: 0;
  transition: opacity 0.3s ease;
}
.downloadHolder:hover .downloadBoard {
  opacity: 1;
}
.ellipsisBoard {
  opacity: 0;
  transition: opacity 0.3s ease;
}
.ellipsisHolder:hover .ellipsisBoard {
  opacity: 1;
}
.ellipsisHolder,
.downloadHolder {
  position: relative;
  z-index: 1; /* 确保悬停层级正确 */
}

.ellipsisBoard,
.downloadBoard {
  z-index: 1000; /* 确保面板在最上层 */
}
.ant-popover-arrow {
  display: none !important;
}
.ant-popover-inner {
  border-radius: 20px !important;
}
</style>
