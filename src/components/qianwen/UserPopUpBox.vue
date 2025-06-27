<template>
  <div id="UserPopUpBox">
    <div class="hoverWrapper relative">
      <button class="hoverButton">
        <UserOutlined class="icon text-[28px] !text-gray-200" />
      </button>

      <div
        class="hoverContent w-[350px] h-[300px] bg-purple-200 rounded-[20px] shadow-lg p-5 absolute bottom-2 left-[25px]"
      >
        <div class="flex flex-col justify-center items-start gap-6">
          <div class="flex flex-row gap-3 justify-center items-center">
            <div>
              <SmileFilled
                class="text-3xl !text-[#615ced] border-2 border-white rounded-full"
              />
            </div>
            <div class="flex flex-col gap-1">
              <span class="text-sm">184****1111</span>
              <span class="text-xs text-gray-500">UID:uhkbkqjd</span>
            </div>
          </div>
          <div class="flex flex-row gap-7 justify-center items-start">
            <button class="flex flex-col gap-1 hover:text-[#615ced]">
              <QrcodeOutlined class="text-xl" />
              <span>了解通义</span>
            </button>
            <button class="flex flex-col gap-1 hover:text-[#615ced]">
              <OneToOneOutlined class="text-xl" />
              <span>权益中心</span>
            </button>
            <button class="flex flex-col gap-1 hover:text-[#615ced]">
              <MessageOutlined class="text-xl" />
              <span>我要反馈</span>
            </button>
            <button class="flex flex-col gap-1 hover:text-[#615ced]">
              <ThunderboltOutlined class="text-xl" />
              <span>插件下载</span>
            </button>
          </div>
          <div class="flex flex-row gap-7 justify-center items-start">
            <button class="flex flex-col gap-1 hover:text-[#615ced]">
              <ExceptionOutlined class="text-xl" />
              <span>隐私说明</span>
            </button>
            <button class="flex flex-col gap-1 hover:text-[#615ced]">
              <SubnodeOutlined class="text-xl" />
              <span>APIf服务</span>
            </button>
            <button class="flex flex-col gap-1 hover:text-[#615ced]">
              <SettingOutlined class="text-xl" />
              <span>帮助中心</span>
            </button>
            <button class="flex flex-col gap-1 hover:text-[#615ced]">
              <FlagOutlined class="text-xl" />
              <span>多端体验</span>
            </button>
          </div>
          <div class="flex flex-row gap-7 justify-center items-start">
            <button class="flex flex-col gap-1 hover:text-[#615ced]">
              <ProfileOutlined class="text-xl" />
              <span>问卷调研</span>
            </button>
            <button class="flex flex-col gap-1">
              <OneToOneOutlined class="text-xl !text-red-600" />
              <span class="text-red-600">退出登陆</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  UserOutlined,
  SmileFilled,
  QrcodeOutlined,
  OneToOneOutlined,
  MessageOutlined,
  ThunderboltOutlined,
  SettingOutlined,
  SubnodeOutlined,
  ProfileOutlined,
  ExceptionOutlined,
  FlagOutlined,
} from "@ant-design/icons-vue";
</script>

<style scoped>
.hoverContent {
  display: none;
}
.hoverWrapper:hover .hoverContent {
  display: block;
  background: linear-gradient(175deg, #c4c2fa 10%, #ffffff 30%);
}
</style>
