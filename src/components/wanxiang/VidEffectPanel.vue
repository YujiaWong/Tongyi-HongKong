<template>
  <div id="VidEffectPanel">
    <div class="holder flex flex-col w-[265px] h-[800px] rounded-3xl gap-3">
      <div class="h-[80%] overflow-y-auto scrollbar-hide">
        <div class="flex justify-between pb-4">
          <button class="p-2 py-1 border border-gray-300 rounded-3xl">
            万象2.1专业
          </button>
          <button
            class="text-[#878aab] text-xs flex justify-center items-center gap-1"
          >
            <ReadOutlined /><span>使用指南</span>
          </button>
        </div>

        <!-- --------------上传图像start-------------- -->
        <div id="uploadImage" class="w-[100%] h-[260px]">
          <UploadImageBox />
        </div>
        <!-- ------------- 上传图像end------------------ -->
        <div class="w-full mt-2">
          <p>模板特效</p>
          <div class="flex flex-col justify-center items-center">
            <div class="flex justify-between items-center flex-wrap gap-3">
              <div
                v-for="(item, index) in effects"
                :key="index"
                class="relative z-50"
              >
                <button
                  class="cardHolder w-[80px] h-[120px] bg-white flex flex-col justify-center z-99 items-center gap-1 rounded-2xl focus:border hover:bg-slate-100 focus:border-[rgb(72,72,237)]"
                >
                  <div class="w-[78px] h-[80px] bg-slate-300 rounded-2xl z-10">
                    <img
                      :src="item.image"
                      class="w-full h-full rounded-2xl overflow-hidden"
                    />
                  </div>
                  <p>{{ item.title }}</p>
                </button>
                <div
                  :class="[
                    'PopOutBox absolute w-[160px] h-[190px] z-99 bottom-[130px]  flex flex-col justify-center items-center p-1 rounded-2xl gap-2 bg-slate-100',
                    { 'right-0': index % 3 === 2, 'left-0': index % 3 !== 2 },
                  ]"
                >
                  <img
                    :src="item.image"
                    class="w-[150px] h-[150px] rounded-2xl overflow-hidden"
                  />
                  <p class="text-center pb-2 pt-1">{{ item.title }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        class="mt-[10px] p-3 w-[100%] rounded-[50px] text-white text-lg bg-[rgb(92,92,242)]"
      >
        生成视频
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ReadOutlined,
  AlertOutlined,
  RedoOutlined,
  PlusOutlined,
  RightOutlined,
  CloseCircleOutlined,
  BorderOutlined,
  ExclamationCircleFilled,
} from "@ant-design/icons-vue";
import { ref } from "vue";
import UploadImageBox from "./UploadImageBox.vue";
const textContent = ref("");
const checked = ref<boolean>(false);
const switchChecked = ref<boolean>(false);
const inspireChecked = ref<boolean>(false);
const vidChecked = ref<boolean>(false);
const effects = [
  { title: "转圈圈", image: "zoo1.jpg" },
  { title: "魔法悬浮", image: "zoo2.jpg" },
  { title: "赠人玫瑰", image: "dog.jpg" },
  { title: "戳戳乐", image: "cat4.jpg" },
  { title: "气球膨胀", image: "cat1.jpg" },
  { title: "分子扩散", image: "zoo4.jpg" },
  { title: "双倍扩散", image: "cat2.jpg" },
  { title: "爱的抱抱", image: "cat3.jpg" },
  { title: "唇齿相依", image: "zoo3.jpg" },
  { title: "爱你哟", image: "dog.jpg" },
  { title: "闪亮玫瑰", image: "cat2.jpg" },
  { title: "时光木马", image: "zoo4.jpg" },
];
</script>

<style scoped>
.textPlace:focus .holder {
  border-color: rgb(72, 72, 237);
}
.popUpInfo {
  display: none;
}
.exlcamation:hover + .popUpInfo {
  display: block;
}

.PopOutBox {
  display: none;
}
.cardHolder:hover + .PopOutBox {
  display: block;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none; /* Chrome/Safari */
}

.scrollbar-hide {
  -ms-overflow-style: none; /* IE 和 Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
