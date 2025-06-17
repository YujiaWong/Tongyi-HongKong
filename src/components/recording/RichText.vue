<template>
  <div id="RichText" class="quill-editor">
    <!-- 这里是 Quill 编辑器的容器 -->
    <div ref="editor"></div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import Quill from "quill";
import "quill/dist/quill.snow.css"; // 引入 Quill 的样式

export default {
  name: "QuillEditor",
  setup() {
    const editor = ref(null); // 使用 Vue 的 ref 来引用 DOM 元素

    onMounted(() => {
      // 初始化 Quill 编辑器
      new Quill(editor.value, {
        theme: "snow", // 使用 snow 主题
        placeholder: "开始记录你的灵感和思考...",
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["bold", "italic", "underline", "strike"], // toggled buttons
            ["image", "blockquote", "code-block", "formula", "link", "video"],

            [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
            [{ script: "sub" }, { script: "super" }], // superscript/subscript
            [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
            [{ direction: "rtl" }], // text direction

            [{ color: [] }, { background: [] }], // dropdown with defaults from theme
            [{ font: [] }],
            [{ align: [] }],
          ],
        },
      });
    });

    return {
      editor,
    };
  },
};
</script>

<style scoped>
.quill-editor {
  width: 100%;
  height: 650px;

  border: none !important;
}
.quill-editor :deep(.ql-container.ql-snow) {
  border: none;
}

.quill-editor :deep(.ql-toolbar.ql-snow) {
  border: none;
}
</style>
