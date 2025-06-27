<template>
  <div id="chatItems" class="w-full overflow-y-auto">
    <div class="w-[210px] h-full flex flex-col justify-start items-start p-4">
      <p class="text-gray-500">置顶</p>
      <div
        class="w-[210px] flex flex-col justify-start items-start text-sm gap-4"
      >
        <!-- tabindex使得不可focus聚焦的标签现在可，设置ref=container，在本身可以获取焦点的子标签设置@click="$refs.container.focus()"，使得聚焦子标签时候，父标签也聚焦 -->
        <div
          v-for="(item, index) in chats"
          :key="index"
          class="w-full relative"
        >
          <div
            tabindex="0"
            :ref="(el) => setRef(el, index)"
            class="w-full flex justify-center items-center rounded-lg focus:bg-[rgb(68,51,255,0.1)] focus:text-[rgb(68,51,255)] hover:bg-[rgb(68,51,255,0.1)] hover:text-[rgb(68,51,255)] transition-all duration-200"
          >
            <button
              @click="focusDiv(index)"
              class="w-[180px] rounded-l-xl flex justify-between items-center p-2"
            >
              <span class="truncate">{{ item.question }}</span>
            </button>
            <button
              @click="
                {
                  focusDiv(index), handleShowEditPanel(index);
                }
              "
              ref="moreBtn"
              class="flex-1 rounded-r-lg h-[36px]"
            >
              <MoreOutlined rotate="90" class="pb-1" />
            </button>
            <EditChat
              ref="editChat"
              class="absolute top-[30px] left-[50px] z-20"
              v-if="item.showEditPanel"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { MoreOutlined } from "@ant-design/icons-vue";
import { onMounted, onUnmounted, ref } from "vue";
import EditChat from "./EditChat.vue";

const showEditPanel = ref(false);

function handleShowEditPanel(index) {
  const current = chats.value[index];
  const isOpen = current.showEditPanel;
  // 先关闭所有弹窗
  chats.value.forEach((chat) => {
    chat.showEditPanel = false;
  });
  // 再打开当前项（如果是点击打开）
  if (!isOpen) {
    current.showEditPanel = true;
  }
}
const editChat = ref(null);
function handleClickOutsideEditPanel(event) {
  // 判断有没有任何一个弹窗是打开的
  const anyOpen = chats.value.some((chat) => chat.showEditPanel);
  if (!anyOpen) {
    return; // 没人开着，直接返回
  }

  // 遍历每个聊天项容器，看看点的是不是某个弹窗里面
  for (let i = 0; i < divs.value.length; i++) {
    const container = divs.value[i];
    const chat = chats.value[i];

    // 如果这个聊天项有弹窗，并且点击的是它的内部
    if (chat.showEditPanel && container && container.contains(event.target)) {
      return; // 点在弹窗内部，不关闭
    }
  }

  // 否则，全部关闭
  chats.value.forEach((chat) => {
    chat.showEditPanel = false;
  });
}
onMounted(() => {
  document.addEventListener("mousedown", handleClickOutsideEditPanel);
});
onUnmounted(() => {
  document.removeEventListener("mousedown", handleClickOutsideEditPanel);
});
// 存储每个 div 的 DOM 元素
const divs = ref([]);

// 设置 ref 到数组中
function setRef(el, index) {
  divs.value[index] = el;
}

// 点击按钮时手动让对应 div 聚焦
function focusDiv(index) {
  divs.value[index]?.focus();
}

// 数据源
const chats = ref([
  { question: "AI的未来发展趋势，如何把握和利用", showEditPanel: false },
  { question: "前端react和vue", showEditPanel: false },
  { question: "AI的未来发展趋势", showEditPanel: false },
  { question: "<div>", showEditPanel: false },
  { question: "如何构建高可用的微服务架构", showEditPanel: false },
  { question: "量子计算对密码学的影响", showEditPanel: false },
  { question: "Web3.0时代的产品设计方法论", showEditPanel: false },
  { question: "大数据分析在精准营销中的应用", showEditPanel: false },
  { question: "5G技术将如何改变物联网发展", showEditPanel: false },
  { question: "低代码平台的企业级应用实践", showEditPanel: false },
  { question: "边缘计算与云计算的协同发展", showEditPanel: false },
  { question: "数字化转型中的组织架构调整", showEditPanel: false },
  { question: "区块链技术在金融领域的应用前景", showEditPanel: false },
  { question: "如何评估机器学习模型的业务价值？", showEditPanel: false },
  { question: "Serverless架构的优缺点分析", showEditPanel: false },
  { question: "TypeScript在大规模项目中的最佳实践", showEditPanel: false },
  { question: "元宇宙技术落地的三大挑战", showEditPanel: false },
  { question: "自动化测试在DevOps中的集成方案", showEditPanel: false },
]);
</script>
