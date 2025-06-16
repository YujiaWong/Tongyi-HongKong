<template>
  <div id="GeneratingArea">
    <div
      class="w-[1000px] h-[800px] shadow-lg rounded-3xl p-6 flex flex-col gap-2"
    >
      <div class="flex justify-between items-center gap-4">
        <span class="p-1 px-2 bg-[#f3f2ff] text-[#6e5ced] rounded-2xl"
          >万象2.1 专业</span
        >
        <div class="flex justify-center items-center gap-2 relative">
          <button
            class="ideaBtn flex justify-center items-center text-[#6e5ced] gap-2 p-1 px-4 rounded-2xl hover:bg-[#f3f2ff]"
          >
            <EditOutlined />复用创意
          </button>
          <div
            class="ideaPopOut w-[250px] shadow-lg rounded-2xl absolute top-8 right-[80px] bg-white flex justify-center items-center"
          >
            <p class="px-3 pt-2">
              点击复用创意后，会将生成时配置的文字、图片等信息重新填回左侧，您可以重新在左侧进行内容编辑。
            </p>
          </div>
          <button
            class="flex justify-center items-center gap-2 p-1 px-4 rounded-2xl text-[#6e5ced] hover:bg-[#f3f2ff]"
          >
            <RollbackOutlined />再次生成
          </button>
          <button
            class="flex justify-center items-center p-2 rounded-2xl text-[#6e5ced] hover:bg-[#f3f2ff]"
          >
            <DeleteOutlined />
          </button>
        </div>
      </div>
      <p class="text-gray-600">画个小猫</p>
      <div class="flex gap-4 justify-center items-center">
        <div v-for="(item, index) in pics" :key="index">
          <button
            class="renderedPics w-[226px] h-[240px] bg-purple-300 rounded-3xl relative overflow-hidden"
          >
            <img :src="item" class="object-cover w-[226px] h-full" />
            <div
              class="blurArea w-[226px] h-[80px] backdrop-blur bg-[rgb(255,255,255,0.5)] rounded-2xl absolute bottom-[0px] flex justify-center items-center gap-4 p-2"
            >
              <div
                class="flex flex-row justify-center items-center gap-4 w-[100%] h-[100%] relative"
              >
                <button
                  class="collectBtn w-[40px] h-[40px] rounded-full bg-white text-center"
                >
                  <StarOutlined class="pb-2" />
                </button>
                <!-- <div class="downloadHolder relative group">
                  <button
                    class="downloadBtn w-[40px] h-[40px] rounded-full bg-white text-center"
                  >
                    <VerticalAlignBottomOutlined class="pb-2" />
                  </button>
                  <div
                    class="downloadBoard w-[150px] h-[120px] rounded-3xl bg-white absolute bottom-[50px] right-0 p-2 hidden group-hover:block"
                  >
                    <button
                      class="flex justify-center items-center gap-2 p-2 px-2 rounded-2xl hover:bg-gray-100"
                    >
                      <FileJpgOutlined class="text-md text-gray-500" />
                      <span class="text-[16px] text-gray-500">有水印下载</span>
                    </button>
                    <button
                      class="flex justify-center items-center gap-2 p-2 px-2 rounded-2xl hover:bg-gray-100"
                    >
                      <FileImageOutlined class="text-md text-gray-500" />
                      <span class="text-[16px] text-gray-500">无水印下载</span>
                    </button>
                  </div>
                </div> -->
                <div class="penHolder">
                  <button
                    class="penBtn w-[40px] h-[40px] rounded-full bg-white text-center"
                  >
                    <VerticalAlignBottomOutlined class="pb-2" />
                  </button>
                  <div
                    class="penBoard w-[170px] h-[120px] rounded-3xl bg-white absolute bottom-[50px] right-[25px] p-2"
                  >
                    <button
                      class="flex justify-center items-center gap-2 p-2 pr-4 pl-3 rounded-2xl hover:bg-gray-100"
                    >
                      <FileJpgOutlined class="text-md text-gray-500" />
                      <span class="text-[16px] text-gray-500">有水印下载</span>
                    </button>
                    <button
                      class="flex justify-center items-center gap-2 p-2 pr-4 pl-3 rounded-2xl hover:bg-gray-100"
                    >
                      <FileImageOutlined class="text-md text-gray-500" />
                      <span class="text-[16px] text-gray-500">无水印下载</span>
                    </button>
                  </div>
                </div>
                <div class="penHolder">
                  <button
                    class="penBtn w-[40px] h-[40px] rounded-full bg-white text-center"
                  >
                    <HighlightOutlined class="pb-2" />
                  </button>
                  <div
                    class="penBoard w-[150px] h-[160px] rounded-3xl bg-white absolute bottom-[50px] right-[25px] p-2"
                  >
                    <button
                      class="flex justify-center items-center gap-2 p-2 pr-4 pl-3 rounded-2xl hover:bg-gray-100"
                    >
                      <BorderOuterOutlined class="text-md text-gray-500" />
                      <span class="text-[16px] text-gray-500">高清放大</span>
                    </button>
                    <button
                      class="flex justify-center items-center gap-2 p-2 pr-4 pl-3 rounded-2xl hover:bg-gray-100"
                    >
                      <HighlightOutlined class="text-md text-gray-500" />
                      <span class="text-[16px] text-gray-500">局部重绘</span>
                    </button>
                    <button
                      class="flex justify-center items-center gap-2 p-2 pr-4 pl-3 rounded-2xl hover:bg-gray-100"
                    >
                      <YoutubeOutlined class="text-md text-gray-500" />
                      <span class="text-[16px] text-gray-500">生成视频</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  DeleteOutlined,
  RollbackOutlined,
  EditOutlined,
  VerticalAlignBottomOutlined,
  StarOutlined,
  HighlightOutlined,
  FileImageOutlined,
  FileJpgOutlined,
  BorderOuterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons-vue";
import { ref } from "vue";
const pics = ["cat1.jpg", "cat2.jpg", "cat3.jpg", "cat4.jpg"];
</script>

<style scoped>
.blurArea {
  display: none;
}
.renderedPics:hover .blurArea {
  display: block;
}
.collectBtn:hover {
  color: #6e5ced;
}
.penBtn:hover {
  background-color: #6e5ced;
  color: white;
}
.downloadBtn:hover {
  background-color: #6e5ced;
  color: white;
}
.downloadBoard {
  display: none;
  border: 10px solid transparent; /* 设置所有边的透明边框 */
  background-clip: padding-box;
}
.downloadHolder:hover .downloadBoard {
  display: block;
  border: 10px solid transparent;
}
.penBoard {
  display: none;
  border: 10px solid transparent; /* 设置所有边的透明边框 */
  background-clip: padding-box; /* 防止背景色扩展到边框区域 */
}
.penHolder:hover .penBoard {
  display: block;
  border: 10px solid transparent;
}
.ideaPopOut {
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 999;
}
.ideaBtn:hover + .ideaPopOut {
  opacity: 1;
}
</style>
