<template>
  <div id="qianwen" class="m-0 p-0">
    <div
      class="bg-gradient-to-r from-[rgb(68,51,255,0.8)] to-[rgb(68,51,255,0.3)] w-screen h-screen flex justify-start items-center p-2"
    >
      <div
        id="left"
        class="w-[70px] h-full flex flex-col justify-between items-center p-3 pl-1"
      >
        <div class="text-gray-100">
          <div class="flex flex-col justify-center items-center">
            <SlackOutlined class="text-3xl" /><span class="text-[16px]"
              >通义</span
            >
          </div>
          <div class="flex flex-col gap-4 pt-10">
            <LeftBarChatBtn />
            <LeftBarFindingBtn />
            <LeftBarMyDocBtn />
          </div>
        </div>
        <UserPopUpBox class="z-20" />
      </div>
      <div
        id="right"
        class="flex flex-1 h-full rounded-lg bg-[#f7f8ff] z-10 overflow-hidden"
      >
        <div class="w-full flex flex-col justify-start items-center">
          <div class="w-full flex justify-between items-center p-4">
            <router-link to="qianwen1">
              <ToHomepageBtn />
            </router-link>
            <div class="flex gap-2"><StarBtn /> <UploadBtn /></div>
          </div>
          <!-- --------------中间内容区域-------------------- -->
          <div class="w-full h-[800px] flex justify-center overflow-y-auto">
            <div class="w-[880px] h-full">
              <div class="w-full flex justify-between items-center">
                <div class="flex flex-col">
                  <span class="text-[36px] font-bold">通义实时记录</span
                  ><span class="text-gray-500"
                    >语音转文字·发言人区分·智能总结</span
                  >
                </div>
                <img
                  src="https://gw.alicdn.com/imgextra/i3/O1CN01gnv7gP1aSH87GGzfK_!!6000000003328-2-tps-600-300.png"
                  width="300"
                />
              </div>
              <div
                class="w-[880px] rounded-2xl bg-white flex justify-center items-center"
              >
                <FunctionPanel />
              </div>
              <div class="w-full my-[30px]">
                <div class="flex flex-col">
                  <Records />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  SlackOutlined,
  CaretLeftFilled,
  LineOutlined,
  RightOutlined,
} from "@ant-design/icons-vue";
import LeftBarChatBtn from "../components/qianwen/LeftBarChatBtn.vue";
import LeftBarFindingBtn from "../components/qianwen/LeftBarFindingBtn.vue";
import LeftBarMyDocBtn from "../components/qianwen/LeftBarMyDocBtn.vue";
import UserPopUpBox from "../components/qianwen/UserPopUpBox.vue";
import NewChatBtn from "../components/qianwen/NewChatBtn.vue";
import SearchBtn from "../components/qianwen/SearchBtn.vue";
import ManageChat from "../components/qianwen/ManageChat.vue";
import ChatItems from "../components/qianwen/ChatItems.vue";
import ChatAreaHeader from "../components/qianwen/ChatAreaHeader.vue";
import SearchBar from "../components/qianwen/SearchBar.vue";
import ChatAreaFunctionsPanel from "../components/qianwen/ChatAreaFunctionsPanel.vue";
import FunctionPanel from "../components/live/FunctionPanel.vue";

import { ref } from "vue";
import SixBtns from "../components/qianwen/SixBtns.vue";
import ChatAreaAIChatting from "../components/qianwen/ChatAreaAIChatting.vue";
import UploadBtn from "../components/qianwen/UploadBtn.vue";
import StarBtn from "../components/live/StarBtn.vue";
import ToHomepageBtn from "../components/live/ToHomepageBtn.vue";
import Records from "../components/live/Records.vue";

let showNewChat = ref(true);
let homePageMode = ref(true);
const chatHistory = ref(null);
const toggleBtn = ref(null);
let count = ref(0);
function handleClick() {
  count.value = count.value + 1;
  chatHistory.value.style.transition = "width 0.3s ease";
  if (count.value % 2 !== 0) {
    chatHistory.value.style.width = "250px";
  } else {
    chatHistory.value.style.width = "0px";
  }
}
</script>
