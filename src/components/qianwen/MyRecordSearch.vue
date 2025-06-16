<template>
    <div id="MyRecordSearch">
        <a-input v-model:value="userName" placeholder="搜索..." class="!rounded-xl !border-gray-400 active:!border-purple-500 shadow-sm">
            <template #prefix>
                <SearchOutlined />
            </template> 
        </a-input>
    </div>
</template>

<script lang="ts" setup>
import { SearchOutlined  } from '@ant-design/icons-vue';
import { ref } from 'vue';
const userName = ref<string>('');
</script>