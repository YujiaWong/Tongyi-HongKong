<template>
  <div id="Feedback">
    <div
      class="flex flex-col justify-start items-start p-8 bg-[#282c37] rounded-lg text-gray-400"
    >
      <p class="text-white text-700 text-[16px]">
        进一步反馈，您认为当前生成图片的问题是
      </p>
      <div class="flex justify-start items-center gap-4">
        <div class="flex flex-col">
          <div class="flex justify-start items-center gap-2">
            <input type="checkbox" /><span>语义理解有误</span>
          </div>
          <div class="flex justify-start items-center gap-2">
            <input type="checkbox" /><span>配色不和谐</span>
          </div>
          <div class="flex justify-start items-center gap-2">
            <input type="checkbox" /><span>肢体异常</span>
          </div>
        </div>
        <div class="flex flex-col">
          <div class="flex justify-start items-center gap-2">
            <input type="checkbox" /><span>构图差</span>
          </div>
          <div class="flex justify-start items-center gap-2">
            <input type="checkbox" /><span>光影细节不足</span>
          </div>
          <div class="flex justify-start items-center gap-2">
            <input type="checkbox" /><span>姿态扭曲</span>
          </div>
        </div>
        <div class="flex flex-col">
          <div class="flex justify-start items-center gap-2">
            <input type="checkbox" /><span>造型不佳</span>
          </div>
          <div class="flex justify-start items-center gap-2">
            <input type="checkbox" /><span>五官扭曲</span>
          </div>
          <div class="flex justify-start items-center gap-2">
            <input type="checkbox" /><span>人脸细节缺失</span>
          </div>
        </div>
      </div>
      <div class="flex justify-start items-center gap-2">
        <input type="checkbox" /><span>外形与涂鸦匹配度低</span>
      </div>
      <p class="text-white text-700 text-[16px] mt-4">请描述具体原因:</p>
      <textarea
        class="w-[400px] h-[100px] rounded-lg p-2 min-h-[50px]"
        placeholder="请输入具体原因"
      />
      <div class="w-full flex justify-end pt-4 gap-2">
        <button
          @click="
            () => {
              hideFeedback();
              concealFeedback();
            }
          "
          class="w-[100px] rounded-3xl bg-[#282c37] text-white border border-white p-2"
        >
          取消
        </button>
        <button
          class="w-[100px] rounded-3xl bg-[rgb(72,72,237)] text-white p-2"
        >
          提交
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  showFeedback: {
    type: Boolean,
    required: true,
  },
  feedbackFlag: {
    type: Boolean,
    required: true,
  },
});
const emit = defineEmits(["update:showFeedback", "update:feedbackFlag"]);

function concealFeedback() {
  emit("update:feedbackFlag", false);
}
function hideFeedback() {
  emit("update:showFeedback", false);
}
</script>
<style scoped></style>
