<template>
  <div id="OrderCenter">
    <a-button
      type="link"
      @click="showDrawer"
      class="!border !border-gray-200 !rounded-3xl w-[100px] !text-gray-500 !flex !justify-center !items-center !px-2 !p-1 hover:!text-[rgb(72,72,237)] hover:!bg-[rgb(228,228,251)]"
      ><AppstoreOutlined class="!text-red-200" />
      <span>指令中心</span></a-button
    >
    <a-drawer
      v-model:visible="open"
      class="custom-class z-50"
      root-class-name="root-class-name"
      :root-style="{ color: 'blue' }"
      title=""
      :closable="false"
      placement="right"
      @after-open-change="afterOpenChange"
      :mask="false"
    >
      <div>
        <div class="flex justify-between">
          <span class="text-[16px] font-semibold">指令中心</span>
          <button @click="unshowDrawer"><CloseOutlined /></button>
        </div>
        <div class="w-full h-[80px] overflow-hidden">
          <div class="flex w-full gap-2 py-4">
            <SearchPrompt v-model:showNewChat="showNewChat" />
            <NewPropmt :showNewChat="showNewChat" />
          </div>
        </div>
        <div
          id="btnSelect"
          class="w-full flex justify-start items-center gap-2 overflow-x-auto"
        >
          <div v-for="(item, index) in btnSelect" :key="index">
            <button
              @click="choosePromptBtn($event)"
              :class="{ active: activeIndex === index }"
              class="bg-gray-100 rounded-2xl p-1 px-2 text-xs focus:bg-[#615ced] focus:text-white whitespace-nowrap"
            >
              {{ item }}
            </button>
          </div>
        </div>
        <div
          class="flex flex-col justify-center items-start overflow-y-auto gap-2 mt-2"
        >
          <div
            v-for="(item, index) in currentPromptGroup"
            :key="index"
            class="w-full"
          >
            <button
              class="flex flex-col justify-start items-start gap-1 w-full rounded-xl bg-[#615ced23] p-4 hover:border hover:border-[#615ced]"
            >
              <span class="font-semibold">{{ item.title }}</span>
              <span class="text-gray-500 text-[14px] text-start">{{
                item.desc
              }}</span>
            </button>
          </div>
          <div
            v-show="currentPromptGroup.length === 0"
            class="w-full flex flex-col justify-center items-center mt-[100px]"
          >
            <img
              src="https://img.alicdn.com/imgextra/i2/O1CN01lpG2h51SSG8jrOtTs_!!6000000002245-2-tps-88-88.png"
            />
            <div class="flex">
              <div>暂无自定义指令，</div>
              <button class="text-[#615ced]" @click="handleshowPropmtBox">
                立即添加
              </button>
            </div>
          </div>
        </div>
      </div>
    </a-drawer>
    <div
      class="absolute top-0 left-0 w-screen h-screen z-50 bg-[rgb(0,0,0,0.2)] flex justify-center items-center"
      v-if="showPromptBox"
    >
      <div
        class="w-[600px] h-[500px] rounded-2xl bg-white flex flex-col p-4 gap-4 ]"
      >
        <div class="h-[30px] flex justify-between items-start">
          <span class="font-semibold">新建指令</span>
          <button
            class="text-gray-500 w-[30px] h-[30px] rounded-lg hover:bg-gray-100 hover:text-black flex items-center justify-center"
            @click="handleUnshowPropmtBox"
          >
            <CloseOutlined />
          </button>
        </div>
        <!-- <input
          type="text"
          class="w-full h-8 border border-gray-200 rounded-md outline-none px-2"
        /> -->
        <div
          class="h-[32px] border border-200 rounded-md hover:border-[#615ced] focus:border-[#615ced] hover:shadow-[0_0_3px_3px_rgb(72,72,237,0.1)] focus:shadow-[0_0_3px_3px_rgb(72,72,237,0.1)]"
        >
          <a-input
            v-model:value="value1"
            show-count
            :maxlength="30"
            placeholder="请输入指令标题"
            input-class="custom-focus"
            :bordered="false"
          />
        </div>
        <!-- <textarea
          class="w-full flex-1 border border-gray-200 outline-none resize-none rounded-md px-2"
        ></textarea> -->
        <div
          class="flex-1 border border-200 rounded-md pb-6 pr-2 hover:border-[#615ced] focus:border-[#615ced] hover:shadow-[0_0_3px_3px_rgb(72,72,237,0.1)] focus:shadow-[0_0_3px_3px_rgb(72,72,237,0.1)]"
        >
          <a-textarea
            v-model:value="value2"
            show-count
            :maxlength="10000"
            placeholder="请输入具体的指令内容，例如：帮我提炼出这篇文档的中心思想"
            :bordered="false"
            class="h-full !resize-none"
            :style="{ resize: 'none' }"
          />
        </div>

        <div class="flex justify-end items-center gap-2">
          <button
            @click="handleUnshowPropmtBox"
            class="w-[80px] border border-gray-200 rounded-2xl p-1 hover:bg-[#615ced44] hover:text-[#615ced]"
          >
            取消
          </button>
          <button class="w-[80px] rounded-2xl p-1 bg-[#615ced] text-white">
            保存
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { nextTick, ref } from "vue";
import { AppstoreOutlined, CloseOutlined } from "@ant-design/icons-vue";
import SearchBtn from "./SearchBtn.vue";
import NewChatBtn from "./NewChatBtn.vue";
import NewPropmt from "./NewPropmt.vue";
import SearchPrompt from "./searchPrompt.vue";
let showNewChat = ref(true);
const open = ref(false);
const btnSelect = ref([
  "全部",
  "自定义",
  "办公助理",
  "AI作画",
  "创意文案",
  "学习助手",
  "趣味生活",
]);

const contentSelect = ref({
  quanbu: [
    {
      title: "扩写助手",
      desc: "扩写文本、丰富内容：今天天气不错",
    },
    {
      title: "邮件润色专家",
      desc: "一键优化商务邮件，让您的沟通更专业得体：请检查这封给客户的邮件",
    },
    {
      title: "周报生成器",
      desc: "自动生成结构清晰的周报：我本周完成了项目A的初稿和客户会议",
    },
    {
      title: "代码调试助手",
      desc: "快速定位代码问题：这段Python函数为什么报错？",
    },
    {
      title: "旅行规划师",
      desc: "生成个性化旅行路线：我想在东京进行3天的美食之旅",
    },
    {
      title: "简历优化大师",
      desc: "让您的简历脱颖而出：请优化我的Java开发工程师简历",
    },
  ],
  zidingyi: [],
  bangonzhuli: [
    {
      title: "PPT大纲生成",
      desc: "快速创建演示框架：关于新能源汽车市场分析的PPT结构",
    },
    {
      title: "商业计划书助手",
      desc: "生成BP核心内容：为我的在线教育创业项目编写执行摘要",
    },
    {
      title: "小红书文案生成",
      desc: "轻松打造爆款文案：帮我写一篇关于夏日护肤的种草文案",
    },
    {
      title: "学术降重工具",
      desc: "智能改写论文内容：这段文献综述需要降低重复率",
    },
    {
      title: "短视频脚本创作",
      desc: "30秒快速生成短视频分镜：科普类视频关于黑洞现象",
    },
    {
      title: "多语言翻译官",
      desc: "精准翻译+文化适配：把这篇中文产品说明转换成地道的英文",
    },
  ],
  aizuohua: [
    {
      title: "小红书文案生成",
      desc: "轻松打造爆款文案：帮我写一篇关于夏日护肤的种草文案",
    },
    {
      title: "学术降重工具",
      desc: "智能改写论文内容：这段文献综述需要降低重复率",
    },
    {
      title: "短视频脚本创作",
      desc: "30秒快速生成短视频分镜：科普类视频关于黑洞现象",
    },
    {
      title: "多语言翻译官",
      desc: "精准翻译+文化适配：把这篇中文产品说明转换成地道的英文",
    },
    {
      title: "会议纪要生成",
      desc: "从录音中提取关键信息：整理刚才1小时的产品讨论会重点",
    },
    {
      title: "健身计划定制",
      desc: "生成个性化训练方案：为办公室久坐族设计减脂计划",
    },
    {
      title: "情感分析助手",
      desc: "解析文本情绪倾向：分析这封客户投诉邮件的情绪状态",
    },
    {
      title: "儿童故事创作",
      desc: "生成睡前故事：关于一只害怕黑暗的小狐狸",
    },
    {
      title: "健身计划定制",
      desc: "生成个性化训练方案：为办公室久坐族设计减脂计划",
    },
    {
      title: "情感分析助手",
      desc: "解析文本情绪倾向：分析这封客户投诉邮件的情绪状态",
    },
    {
      title: "儿童故事创作",
      desc: "生成睡前故事：关于一只害怕黑暗的小狐狸",
    },
    {
      title: "法律文书助手",
      desc: "生成标准法律文件：起草一份房屋租赁合同模板",
    },
    {
      title: "股票分析简报",
      desc: "解读财经数据：分析最近三个月新能源板块走势",
    },
  ],
  chuangyiwenan: [
    {
      title: "小红书文案生成",
      desc: "轻松打造爆款文案：帮我写一篇关于夏日护肤的种草文案",
    },
    {
      title: "学术降重工具",
      desc: "智能改写论文内容：这段文献综述需要降低重复率",
    },
    {
      title: "短视频脚本创作",
      desc: "30秒快速生成短视频分镜：科普类视频关于黑洞现象",
    },
    {
      title: "多语言翻译官",
      desc: "精准翻译+文化适配：把这篇中文产品说明转换成地道的英文",
    },
  ],
  xuexizhushou: [
    {
      title: "法律文书助手",
      desc: "生成标准法律文件：起草一份房屋租赁合同模板",
    },
    {
      title: "股票分析简报",
      desc: "解读财经数据：分析最近三个月新能源板块走势",
    },
    {
      title: "菜谱生成器",
      desc: "根据食材推荐做法：用冰箱里的鸡蛋、西红柿、青椒能做什么菜？",
    },
    {
      title: "心理学问答",
      desc: "提供专业心理建议：如何缓解公开演讲前的焦虑？",
    },
  ],
  quweishenghuo: [
    {
      title: "PPT大纲生成",
      desc: "快速创建演示框架：关于新能源汽车市场分析的PPT结构",
    },
    {
      title: "商业计划书助手",
      desc: "生成BP核心内容：为我的在线教育创业项目编写执行摘要",
    },
    {
      title: "诗词创作",
      desc: "生成符合意境的古诗：描写江南春雨的七言绝句",
    },
  ],
});

let currentPromptGroup = ref(contentSelect.value.quanbu);
function choosePromptBtn(event) {
  const text = event.currentTarget.innerText;
  const map = {
    全部: "quanbu",
    自定义: "zidingyi",
    办公助理: "bangonzhuli",
    AI作画: "aizuohua",
    创意文案: "chuangyiwenan",
    学习助手: "xuexizhushou",
    趣味生活: "quweishenghuo",
  };
  currentPromptGroup.value = contentSelect.value[map[text]] || [];
}

const afterOpenChange = (bool) => {
  console.log("open", bool);
};
const showDrawer = () => {
  open.value = true;
};
const unshowDrawer = () => {
  open.value = false;
};

const scrollToCenter = (index) => {
  activeIndex.value = index;
  nextTick(() => {
    // 确保DOM更新后执行
    const container = scrollContainer.value;
    const button = container.children[index];

    // 计算目标滚动位置
    const containerCenter = container.offsetWidth / 2;
    const buttonCenter = button.offsetLeft + button.offsetWidth / 2;
    const scrollPosition = buttonCenter - containerCenter;

    // 平滑滚动
    container.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  });
};
//新建指令弹窗的input和textarea
const value1 = ref("");
const value2 = ref("");

//显示新建prompt指令弹窗
let showPromptBox = ref(false);
function handleshowPropmtBox() {
  showPromptBox.value = true;
}
function handleUnshowPropmtBox() {
  showPromptBox.value = false;
}
</script>

<style scoped>
/* 隐藏滚动条但保留滚动功能 */
.overflow-x-auto {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
}
.overflow-x-auto::-webkit-scrollbar {
  display: none; /* Chrome/Safari */
}
.overflow-y-auto {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
}
.overflow-y-auto::-webkit-scrollbar {
  display: none; /* Chrome/Safari */
}

:deep(.ant-input-textarea textarea) {
  resize: none;
}
</style>
