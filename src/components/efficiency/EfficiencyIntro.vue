<template>
  <div id="Intro" class="flex flex-col gap-6 mt-2 overflow-y-auto">
    <div id="keyWords" class="flex flex-col justify-start">
      <span class="font-semibold text-gray-700 text-[16px]">关键词</span>
      <div class="mt-2">
        <div
          ref="keywardsHolder"
          class="flex items-start justify-start gap-3 flex-wrap overflow-hidden"
        >
          <button
            v-for="(item, index) of keywardsArray"
            :key="index"
            class="text-[#615ced] bg-[#615ced22] rounded-md p-1 px-4 hover:bg-[#615ced44]"
          >
            {{ item }}
          </button>
        </div>
        <button
          ref="toggleFold"
          @click="handleToggleFold"
          class="text-[#615ced] text-xs mt-2"
        >
          {{ foldCount % 2 === 0 ? "点击展开" : "收起" }}
        </button>
      </div>
    </div>
    <div id="abstract" class="w-full flex flex-col justify-start items-start">
      <span class="font-semibold text-gray-700 text-[16px]">全文概要</span>
      <p ref="abstractContent" class="w-full text-gray-600 overflow-hidden">
        在这段讨论中，涉及到的工作项目管理方面包括用户可能需要退出某个系统，如UUAT，以及处理logo问题，这些事项似乎计划在六月份进行。对话还涵盖了技术细节，如确保迭代和测试环境的正常运行，同时可能需要通过邮件沟通或偶遇相关人员来解决问题。<br />整体上，给人一种需要解决多个问题，涉及系统退出、logo设计、邮件交流和技术测试的繁忙工作氛围。在这段讨论中，涉及到的工作项目管理方面包括用户可能需要退出某个系统，如UUAT，以及处理logo问题，这些事项似乎计划在六月份进行。对话还涵盖了技术细节，如确保迭代和测试环境的正常运行。
      </p>
      <button
        ref="toggleAbstractFold"
        @click="handleToggleAbstractFold"
        class="text-[#615ced] text-xs"
      >
        {{ isFold ? "收起" : "点击展开" }}
      </button>
    </div>
    <div class="w-full mt-2">
      <div
        class="flex justify-start items-center gap-4 border-b border-b-gray-300"
      >
        <button
          @click="toggleChapterOverview"
          class="font-light text-[15px] text-gray-500 focus:font-semibold focus:text-black focus:border-b-2 focus:border-b-[#615ced]"
        >
          章节速览
        </button>
        <button
          @click="toggleChapterSummary"
          class="font-light text-[15px] text-gray-500 focus:font-semibold focus:text-black focus:border-b-2 focus:border-b-[#615ced]"
        >
          发言总结
        </button>
        <button
          @click="toggleSectionPreview"
          class="font-light text-[15px] text-gray-500 focus:font-semibold focus:text-black focus:border-b-2 focus:border-b-[#615ced]"
        >
          问答回顾
        </button>
      </div>
      <ChapterOverview v-if="controlNum === 1" />
      <SectionPreview v-if="controlNum === 3" />
      <ChapterSummary v-if="controlNum === 2" />
    </div>
  </div>
</template>

<script setup>
import { CopyOutlined } from "@ant-design/icons-vue";
import { onMounted, ref } from "vue";
import ChapterOverview from "./ChapterOverview.vue";
import SectionPreview from "./SectionPreview.vue";
import ChapterSummary from "./ChapterSummary.vue";
const keywardsArray = ref([
  "人工智能",
  "健身锻炼",
  "数据可视化",
  "情绪管理",
  "网络安全",
  "时间管理",
  "自然语言处理",
  "旅行攻略",
  "职业规划",
  "前端开发",
  "心理学",
  "区块链",
  "高效学习",
  "电影推荐",
  "UI/UX设计",
  "冥想放松",
  "云计算",
  "营养健康",
  "开源项目",
  "数字音频处理",
]);

const toggleFold = ref(null);
const keywardsHolder = ref(null);
const abstractContent = ref(null);
let foldCount = ref(0); //双数为关键词fold，单数unfold
let isFold = ref(false); //控制全文概要展开
let controlNum = ref(1); //1为章节速览，2为发言总结，3为问题回顾
function toggleChapterOverview() {
  controlNum.value = 1;
}
function toggleChapterSummary() {
  controlNum.value = 2;
}
function toggleSectionPreview() {
  controlNum.value = 3;
}
onMounted(() => {
  if (keywardsHolder.value) keywardsHolder.value.style.height = "40px";
  if (abstractContent.value) abstractContent.value.style.height = "40px";
});

function handleToggleFold() {
  const el = keywardsHolder.value;
  el.style.transition = "height 0.3s ease";
  el.style.height = "40px";
  if (foldCount.value % 2 === 0) {
    // 折叠
    el.style.height = el.scrollHeight + "px";
  } else {
    el.style.height = "40px";
  }
  foldCount.value++;
}
function handleToggleAbstractFold() {
  abstractContent.value.style.transition = "height 0.3s ease";
  abstractContent.value.style.height = "40px";
  if (!isFold.value) {
    abstractContent.value.style.height =
      abstractContent.value.scrollHeight + "px";
  } else {
    abstractContent.value.style.height = "40px";
  }
  isFold.value = !isFold.value;
}
</script>

<style scoped></style>
