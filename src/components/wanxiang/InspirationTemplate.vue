<template>
  <div id="InspirationTemplate">
    <div
      class="holder flex flex-col w-[550px] h-[800px] shadow-lg shadow-gray-300 rounded-3xl p-6 pl-[50px] gap-2 bg-[#fafafc]"
    >
      <div class="flex flex-row justify-between items-center">
        <span class="font-600 text-[16px]">创意模板</span>
        <button class="text-xl">×</button>
      </div>
      <div class="flex gap-4 mt-5 text-[16px] text-gray-500">
        <button @click="handleVisible" class="focus:text-black">组图</button>
        <button @click="handleShow" class="focus:text-black">风格</button>
      </div>
      <div v-show="isVisible" class="flex flex-wrap gap-2 mt-2">
        <Cards img="xx" title="四格漫画" desc="擅长卡通风格小漫画" />
        <Cards img="xx" title="情侣头像" desc="擅长清新可爱情侣头像" />
        <Cards img="xx" title="图标印花" desc="擅长设计和展示印花" />
        <Cards img="xx" title="电影分镜" desc="擅长电影质感" />
      </div>
      <div v-show="isShow" class="flex flex-wrap gap-2 mt-2">
        <Cards img="xx" title="幼圆卡通" desc="擅长卡通，宠物" />
        <Cards img="xx" title="可爱涂鸦" desc="擅长人物，宠物" />
        <Cards img="xx" title="粘土世界" desc="擅长人物，建筑" />
        <Cards img="xx" title="毛毡" desc="擅长人物，风景" />
        <Cards img="xx" title="2D卡通" desc="擅长人像，景色" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Cards from "./Cards.vue";
import { ref } from "vue";
let isVisible = ref(true);
let isShow = ref(false);
function handleVisible() {
  isVisible.value = true;
  isShow.value = false;
}
function handleShow() {
  isShow.value = true;
  isVisible.value = false;
}
</script>
