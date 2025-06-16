<template>
  <div>
    <h1 class="text-2xl text-center mt-5">通义千问</h1>
    <div class="flex flex-col items-start p-[20px] gap-4">
      <NewChatBtn />
      <SearchBtn />
      <SearchBar />
      <UserPopUpBox />
      <div class="flex gap-5">
        <LeftBarChatBtn />
        <LeftBarFindingBtn />
        <LeftBarMyDocBtn />
      </div>
      <div class="flex gap-5 justify-center">
        <FindingAgent />
        <CreateAgent />
      </div>
      <div class="flex gap-5 justify-center">
        <MyRecordBtn />
        <NewFolder />
      </div>
      <div class="flex flex-col gap-5 justify-center">
        <MyAgent />
        <MyCollection />
        <MyShare />
      </div>
      <div class="flex flex-col gap-2">
        <MyRecordSearch />
        <CreateRecordBtn />
      </div>
      <div>
        <ManageChat />
      </div>
      <div>
        <UploadBtn />
      </div>
      <AIChatBox />
    </div>
  </div>
</template>

<script setup>
import NewChatBtn from "../components/qianwen/NewChatBtn.vue";
import SearchBtn from "../components/qianwen/SearchBtn.vue";
import SearchBar from "../components/qianwen/SearchBar.vue";
import UserPopUpBox from "../components/qianwen/UserPopUpBox.vue";
import LeftBarChatBtn from "../components/qianwen/LeftBarChatBtn.vue";
import LeftBarFindingBtn from "../components/qianwen/LeftBarFindingBtn.vue";
import LeftBarMyDocBtn from "../components/qianwen/LeftBarMyDocBtn.vue";
import FindingAgent from "../components/qianwen/FindingAgent.vue";
import CreateAgent from "../components/qianwen/CreateAgent.vue";
import MyRecordBtn from "../components/qianwen/MyRecordBtn.vue";
import NewFolder from "../components/qianwen/NewFolder.vue";
import MyAgent from "../components/qianwen/MyAgent.vue";
import MyCollection from "../components/qianwen/MyCollection.vue";
import MyShare from "../components/qianwen/MyShare.vue";
import MyRecordSearch from "../components/qianwen/MyRecordSearch.vue";
import CreateRecordBtn from "../components/qianwen/CreateRecordBtn.vue";
import ManageChat from "../components/qianwen/ManageChat.vue";
import UploadBtn from "../components/qianwen/UploadBtn.vue";
import AIChatBox from "../components/qianwen/AIChatBox.vue";
</script>
