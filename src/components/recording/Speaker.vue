<template>
  <div id="Speaker" class="w-full pt-4">
    <div v-for="(item, index) in content" key="index" class="mt-4">
      <div class="w-full flex flex-col justify-start items-start gap-2">
        <div class="holder w-full flex justify-between items-center">
          <div
            class="flex justify-start items-center text-gray-500 gap-2 text-xs"
          >
            <SmileOutlined
              class="text-[30px] !text-white rounded-full bg-gradient-to-br from-purple-500 to-blue-400"
            />
            <span>发言人1</span>
            <span> 00:00</span
            ><button class="editNameBtn flex items-center">
              <EditOutlined />
            </button>
          </div>
          <div class="fourIcons flex justify-start items-center gap-4 relative">
            <button class="importantBtn">
              <PushpinOutlined
                class="bg-blue-300 p-1 rounded-full !text-white text-xs"
              />
            </button>
            <div
              class="importantContent bg-gray-700 text-white rounded-md p-2 text-xs absolute bottom-6 left-[-25px]"
            >
              标记为重点
            </div>
            <button class="questionBtn">
              <QuestionOutlined
                class="bg-pink-300 p-1 rounded-full !text-white text-xs"
              />
            </button>
            <div
              class="questionContent bg-gray-700 text-white rounded-md p-2 text-xs absolute bottom-6 left-[5px]"
            >
              标记为问题
            </div>
            <button class="waitingBtn">
              <CheckOutlined
                class="bg-yellow-300 p-1 rounded-full !text-white text-xs"
              />
            </button>
            <div
              class="waitingContent bg-gray-700 text-white rounded-md p-2 text-xs absolute bottom-6 right-[10px]"
            >
              标记为待办
            </div>
            <button class="removeBtn">
              <CloseOutlined
                class="bg-gray-300 p-1 rounded-full !text-white text-xs"
              />
            </button>
            <div
              class="removeContent bg-gray-700 text-white rounded-md p-2 text-xs absolute bottom-6 right-[0px]"
            >
              清除标记
            </div>
          </div>
        </div>

        <!-- Auto-resizing textarea -->
        <textarea
          v-model="content[index]"
          class="w-full p-4 pb-6 rounded-lg outline-none focus:border-2 focus:border-purple-100 transition-all duration-100 resize-none"
          :style="{
            height: `${textareaHeights[index]}px`,
            minHeight: '60px',
            maxHeight: '300px',
            overflow: textareaHeights[index] >= 300 ? 'auto' : 'hidden',
          }"
          @input="(e) => adjustTextareaHeight(e, index)"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import {
  SmileOutlined,
  PushpinOutlined,
  QuestionOutlined,
  CheckOutlined,
  CloseOutlined,
  EditOutlined,
} from "@ant-design/icons-vue";

const content = ref([
  "发言内容当遇到路由问题时，打开浏览器的开发者工具查看控制台输出以及使用Vue1111 ",
  "2025年6月17日，联合国气候峰会在日内瓦顺利闭幕，来自195个国家的代表共同签署了一项旨在应对气候变化的历史性协议。协议承诺到2035年将全球碳排放量减少50%，并设立“绿色基金”支持发展中国家能源转型。",
  "全天候健康监测，精准运动记录，超长续航体验！极光Pro，用科技守护你的每一刻精彩生活。即日起限时优惠，立即抢购！",
  "窗外的雨丝斜斜地划过玻璃，像是谁无声的低语。他坐在灯下，翻着那本旧书，纸页微微泛黄，夹着一张早已褪色的照片。记忆随着潮湿的空气慢慢渗入心底，仿佛又回到了那个夏天——蝉鸣、阳光，还有她的笑",
  "近年来，人工智能技术广泛应用于医学影像分析、疾病预测与药物研发。AI系统能够通过深度学习识别CT图像中的微小病变，准确率可达98%以上，极大提高了早期癌症的检出率，并减轻了医生的工作负担",
  "在这段讨论中，涉及到的工作项目管理方面包括用户可能需要退出某个系统，如UUAT，以及处理logo问题，这些事项似乎计划在六月份进行。对话还涵盖了技术细节，如确保迭代和测试环境的正常运行，同时可能需要通过邮件沟通或偶遇相关人员来解决问题。",
]);

// 数组存储每个textarea的高度
const textareaHeights = ref(content.value.map(() => 60));

const adjustTextareaHeight = (event, index) => {
  const textarea = event.target;
  // 重置高度以获取正确的scrollHeight
  textarea.style.height = "auto";
  // 计算新高度
  textareaHeights.value[index] = Math.min(Math.max(textarea.scrollHeight, 60));
};

onMounted(() => {
  content.value.forEach((_, index) => {
    const textarea = document.querySelectorAll("textarea")[index];
    if (textarea) {
      textareaHeights.value[index] = Math.min(
        Math.max(textarea.scrollHeight, 60),
        300
      );
    }
  });
});
</script>

<style scoped>
.fourIcons {
  opacity: 0;
}
.editNameBtn {
  opacity: 0;
}
.importantContent {
  display: none;
}
.importantBtn:hover + .importantContent {
  display: block;
}
.waitingContent {
  display: none;
}
.waitingBtn:hover + .waitingContent {
  display: block;
}
.removeContent {
  display: none;
}
.removeBtn:hover + .removeContent {
  display: block;
}
.questionContent {
  display: none;
}
.questionBtn:hover + .questionContent {
  display: block;
}
.holder:hover .editNameBtn {
  opacity: 100;
}
.holder:hover .fourIcons {
  opacity: 100;
}
textarea {
  transition: none !important;
}
</style>
