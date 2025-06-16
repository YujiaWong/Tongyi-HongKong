<template>
  <div id="VidTemplate">
    <div class="flex flex-col justify-center items-start w-full gap-4 pb-4">
      <div class="w-full flex justify-between items-center px-2">
        <div class="w-[60%] flex justify-start items-center gap-2 relative">
          <span
            class="text-[rgb(72,72,237)] p-1 px-3 rounded-3xl bg-[rgb(72,72,237,0.1)] text-700"
            >高清放大</span
          >
          <img
            src="zoo1.jpg"
            width="25"
            height="25"
            class="effectType overflow-hidden rounded-sm"
          />
          <div
            class="effectPic rounded-xl shadow-[0_0_15px_-3px_rgba(0,0,0,0.3)] p-2 absolute top-10 left-[80px] bg-white"
          >
            <p class="text-[15px] font-700">赠人玫瑰</p>
            <img
              src="zoo1.jpg"
              class="w-[150px] h-[150px] rounded-xl overflow-hidden"
            />
          </div>
          <img
            src="dog.jpg"
            width="25"
            height="25"
            class="referenceIcon overflow-hidden rounded-sm"
          />
          <div
            class="referencePic rounded-xl shadow-[0_0_15px_-3px_rgba(0,0,0,0.3)] p-2 absolute top-10 left-[120px] bg-white"
          >
            <p class="text-[15px] font-700">参考图</p>
            <img
              src="dog.jpg"
              class="w-[150px] h-[150px] rounded-xl overflow-hidden"
            />
          </div>
        </div>
        <div class="flex justify-center items-center gap-3 relative">
          <button
            class="reuseBtn !text-[rgb(72,72,237)] p-1 px-2 rounded-3xl flex justify-center items-center gap-2 hover:bg-[rgb(222,222,250)]"
          >
            <EditOutlined /><span>复用创意</span>
          </button>
          <div class="reuseText absolute">
            <p
              class="w-[300px] p-2 rounded-xl shadow-[0_0_15px_-3px_rgba(0,0,0,0.3)] bg-white absolute top-6 left-[-220px]"
            >
              点击复用创意后，会将生成时配置的文字、图片等信息重新填回左侧，您可以重新在左侧进行内容编辑。
            </p>
          </div>
          <button
            class="!text-[rgb(72,72,237)] p-1 px-2 rounded-3xl flex justify-center items-center gap-2 hover:bg-[rgb(72,72,237,0.1)]"
          >
            <EnterOutlined /><span>再次生成</span>
          </button>
          <button
            class="!text-[rgb(72,72,237)] p-2 rounded-3xl flex justify-center items-center gap-2 hover:bg-[rgb(72,72,237,0.1)]"
          >
            <DeleteOutlined class="text-md !text-[rgb(72,72,237)]" />
          </button>
        </div>
      </div>
      <div class="w-full h-[420px] rounded-3xl bg-gray-100">
        <div class="flex justify-end items-start gap-4 pt-2 pr-2">
          <button
            class="w-[40px] h-[40px] rounded-full bg-white shadow-md pb-1"
          >
            <StarOutlined class="hover:text-[rgb(72,72,237)]" />
          </button>
          <button
            class="w-[40px] h-[40px] rounded-full bg-white shadow-md pb-1"
          >
            <PlaySquareOutlined class="hover:text-[rgb(72,72,237)]" />
          </button>
          <button
            class="w-[40px] h-[40px] rounded-full bg-white shadow-md pb-1"
          >
            <DownloadOutlined class="hover:text-[rgb(72,72,237)]" />
          </button>
          <button
            class="h-[40px] rounded-full bg-white shadow-md pb-1 flex justify-center items-center gap-2 px-4 hover:text-[rgb(72,72,237)]"
          >
            <MenuUnfoldOutlined /><span>参数详情</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  DeleteOutlined,
  StarOutlined,
  PlaySquareOutlined,
  DownloadOutlined,
  MenuUnfoldOutlined,
  EditOutlined,
  EnterOutlined,
} from "@ant-design/icons-vue";
</script>

<style scoped>
.effectPic {
  display: none;
}
.effectType:hover + .effectPic {
  display: block;
}
.referencePic {
  display: none;
}
.referenceIcon:hover + .referencePic {
  display: block;
}

.reuseText {
  display: none;
}
.reuseBtn:hover + .reuseText {
  display: block;
}
</style>
