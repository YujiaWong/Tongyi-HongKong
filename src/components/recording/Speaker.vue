<template>
  <div id="Speaker" class="w-full">
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
          <div class="fourIcons flex justify-start items-center gap-4">
            <button>
              <PushpinOutlined
                class="bg-blue-300 p-1 rounded-full !text-white text-xs"
              />
            </button>
            <button>
              <QuestionOutlined
                class="bg-pink-300 p-1 rounded-full !text-white text-xs"
              />
            </button>
            <button>
              <CheckOutlined
                class="bg-yellow-300 p-1 rounded-full !text-white text-xs"
              />
            </button>
            <button>
              <CloseOutlined
                class="bg-gray-300 p-1 rounded-full !text-white text-xs"
              />
            </button>
          </div>
        </div>

        <!-- Auto-resizing textarea -->
        <textarea
          v-model="content[index]"
          class="w-full p-4 rounded-lg outline-none focus:border-2 focus:border-purple-100 transition-all duration-100 resize-none"
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
