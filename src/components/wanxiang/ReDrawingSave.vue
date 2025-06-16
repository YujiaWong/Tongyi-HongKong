<template>
  <div id="ReDrawing flex justify-start items-center">
    <a-button type="primary" @click="showModal">ReDrawing save</a-button>
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
          <img src="cat4.jpg" class="w-full h-full overflow-hidden" />
          <div
            class="btns absolute top-[-5px] left-5 flex justify-between items-center pl-[50px] gap-[30px]"
          >
            <div
              class="flex justify-center items-center p-3 px-4 gap-6 rounded-3xl bg-[rgb(255,255,255,0.7)] backdrop-blur"
            >
              <button>
                <RotateRightOutlined class="text-lg text-gray-500" />
              </button>
              <button><ZoomInOutlined class="text-lg text-gray-500" /></button>
              <button><ZoomOutOutlined class="text-lg text-gray-500" /></button>
              <button><RetweetOutlined class="text-lg text-gray-500" /></button>
            </div>
            <div
              class="flex justify-center items-center p-3 px-4 gap-6 rounded-3xl bg-[rgb(255,255,255,0.7)] backdrop-blur"
            >
              <button>
                <ExpandOutlined class="text-md text-gray-500 pb-1" />
              </button>
              <button>
                <EditOutlined class="text-lg text-gray-500" />
              </button>
              <button>
                <HighlightOutlined class="text-lg text-gray-500" />
              </button>
            </div>
            <div
              class="flex justify-center items-center p-3 px-4 gap-6 rounded-3xl bg-[rgb(255,255,255,0.7)] backdrop-blur"
            >
              <button>
                <RedoOutlined class="text-lg text-gray-500 pb-1" />
              </button>
              <button class="text-[16px] text-gray-700">重置</button>
              <button>
                <UndoOutlined class="text-lg text-gray-500 pb-1" />
              </button>
            </div>
          </div>

          <span
            class="text-md text-gray-500 p-2 rounded-2xl bg-[rgb(255,255,255,0.7)] backdrop-blur mb-3 absolute"
          >
            请在图中涂出需要重绘的部分
          </span>
        </div>
        <div class="right h-[650px] flex flex-col pl-4 gap-4">
          <span class="font-bold">重绘后的全图完整文字描述</span>
          <div
            class="Textholder flex flex-col justify-between items-center gap-[280px] bg-[#f8f9ff] w-[280px] h-[260px] rounded-2xl hover:border border-[rgb(72,72,237)]"
          >
            <div>
              <textarea
                v-model="textContent"
                class="textPlace !border-none !bg-transparent !w-[260px] !h-[220px] focus:!outline-none p-3 resize-none"
              />
              <div class="flex pr-2 gap-2 justify-end items-center">
                <div class="flex justify-center items-center gap-1">
                  <span class="text-xs pl-2">{{ textContent.length }}/800</span>
                  <button class="text-gray-400 pb-1">
                    <CloseCircleOutlined />
                  </button>
                </div>
              </div>
            </div>
            <button
              class="mt-5 p-3 w-[100%] rounded-[50px] text-white text-lg bg-[rgb(92,92,242)]"
            >
              重绘画作
            </button>
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
import { ref } from "vue";
import { CloseOutlined } from "@ant-design/icons-vue";
const visible = ref(false);
const value = ref("");
import {
  UndoOutlined,
  RedoOutlined,
  RetweetOutlined,
  RotateRightOutlined,
  ZoomOutOutlined,
  CloseCircleOutlined,
  ZoomInOutlined,
  EditOutlined,
  HighlightOutlined,
  ExpandOutlined,
} from "@ant-design/icons-vue";

const textContent = ref("");
const checked = ref<boolean>(false);

const showModal = () => {
  visible.value = true;
};
const handleClose = () => {
  visible.value = false;
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
</style>
