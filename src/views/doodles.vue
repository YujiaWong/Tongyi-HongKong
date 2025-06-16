<template>
  <div id="doodles">
    <div class="flex flex-col w-screen h-screen">
      <div
        class="h-[116px] w-full bg-slate-700 flex justify-between items-center px-[32px] pt-[64px] text-white text-lg"
      >
        <div class="flex justify-start items-center gap-4">
          <p class="text-[20px] font-bold">涂鸦作画</p>
          <p class="text-[16px]">试试在画板上涂鸦并结合描述生成画作</p>
        </div>

        <p class="text-[16px]">
          1 在左侧画板上进行涂鸦 ---- 2 输入对应文字描述 ---- 3 选择生成图像风格
          ---- 4 点击生成
        </p>
      </div>

      <div class="flex-1 bg-[#070c14]">
        <div class="flex justify-start items-start p-6">
          <div class=""><DrawingPanel /></div>

          <div class="flex-1 flex-col justify-start items-center pl-[30px]">
            <div
              class="h-[calc(100vh-180px)] overflow-y-auto pr-4 scrollbar-hide"
            >
              <ControlPanel v-model:toggle="toggle" />\
              <Skeleton />
              <GeneratedDrawing :toggle="toggle" />

              <GeneratedDrawing :toggle="toggle" />
              <GeneratedDrawing :toggle="toggle" />
              <TryAgain />
              <GeneratedDrawing :toggle="toggle" />
              <p class="text-gray-300 text-center">
                --------------------已经到底啦----------------------
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import DrawingPanel from "../components/doodles/DrawingPanel.vue";
import ControlPanel from "../components/doodles/ControlPanel.vue";
import GeneratedDrawing from "../components/doodles/GeneratedDrawing.vue";
import DrawingDetails from "../components/doodles/DrawingDetails.vue";
import TryAgain from "../components/doodles/TryAgain.vue";
import Feedback from "../components/doodles/Feedback.vue";
import { ref } from "vue";
import Skeleton from "../components/doodles/Skeleton.vue";
let toggle = ref(false);
</script>
