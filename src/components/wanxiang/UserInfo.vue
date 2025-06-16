
<template>
  <div id="UserInfo">
    <div>
      <a-popover placement="rightBottom" trigger="click" arrow="false">
        <template #content>
          <div class="flex flex-col justify-center items-start gap-4">
        <div class="flex flex-row justify-start items-center gap-4 pl-2">
            <a-avatar size="medium">
                <template #icon><UserOutlined /></template>
            </a-avatar>
            <div class="flex flex-col gap-1">
                <span class="text-sm text-[#878aab]">184****1111</span>
                <span class="text-xs text-[#878aab]">UID:uhkbkqjd</span>
            </div>
        </div> 
        <div class="h-[1px] w-[200px] bg-gray-300"></div>
        <div class="flex flex-col gap-4 justify-center items-end mt-2">
            <button class="w-[200px] flex flex-row justify-start items-center gap-4 p-2 px-3 text-[16px] text-[#878aab] hover:bg-[#f3f2ff] rounded-2xl">
                <MessageOutlined class="text-xl"/>
                <span>消息</span>
            </button>
            <button class="w-[200px] flex flex-row justify-start items-center gap-4 p-2 px-3 text-[16px] text-[#878aab] hover:bg-[#f3f2ff] rounded-2xl">
                <UsergroupAddOutlined class="text-2xl"/>
                <span>交流群</span>
            </button>
            <button class="w-[200px] flex flex-row justify-start items-center gap-4 p-2 px-3 text-[16px] text-[#878aab] hover:bg-[#f3f2ff] rounded-2xl">
                <MailOutlined class="text-xl"/>
                <span>我要反馈</span>
            </button>
            <div class="h-[1px] w-[200px] bg-gray-300"></div>
            <button class="w-[200px] flex flex-row justify-start items-center gap-4 p-2 px-3 text-[16px] text-[#878aab] hover:bg-[#f3f2ff] rounded-2xl">
                <ExportOutlined  class="text-xl"/>
                <span>退出登陆</span>
            </button>
        </div>
        
      </div>
        </template>
        <a-button ref="userInfoBtn" type="link" class="!flex !flex-row !justify-center !items-center !rounded-3xl !p-4 !py-4 pr-[100px] !gap-3 ! !text-[#878aab] active:!text-[615ced#] active:!bg-gray-200">
        <UserOutlined class="text-xl"/>
        <span class="text-lg">我的</span>
    </a-button>
      </a-popover>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { UserOutlined, MailOutlined,UsergroupAddOutlined,MessageOutlined,ExportOutlined  } from '@ant-design/icons-vue';
const buttonWidth = ref<number>(70);
</script>
<style scoped>
#components-popover-demo-placement .ant-btn {
  width: 70px;
  text-align: center;
  padding: 0;
  margin-right: 8px;
  margin-bottom: 8px;
}

.clicked {
  background-color: azure;
}

</style>

