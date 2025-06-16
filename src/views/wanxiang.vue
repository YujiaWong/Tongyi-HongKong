<template>
  <div>
    <h1 class="text-2xl text-center mt-5">通义万象-文字作画</h1>
    <div class="flex flex-col items-start p-[20px] gap-4">
      <UserInfo />
      <TextToPicBtn />
      <Explore />
      <GenerateVid />
      <MyCollect />
      <EmptyBoard />
      <div class="flex gap-5">
        <TextToPicPanel />
        <CreationModel />
        <AIExpansion />
        <MagicBook />
      </div>
      <div>
        <InspirationTemplate />
      </div>
      <div>
        <GeneratingArea />
      </div>
      <ReDrawing />
      <ReDrawingSave />
      <DrawingInfoBoard />
      <div>
        <TestCanvas />
      </div>
      <CloseConfirm />
      <DeleteConfirm />
    </div>
    <h1 class="text-2xl text-center mt-5">通义万象-视频生成</h1>
    <div class="flex justify-start items-center gap-5 pl-[20px] pb-5">
      <GenerateVidPanel />
      <OfficialTemplate />
    </div>
    <div class="flex justify-start items-center gap-5 pl-[20px] pb-5">
      <VidArea />
    </div>
  </div>
</template>

<script setup>
// ----------------------------
import UserInfo from "../components/wanxiang/UserInfo.vue";
import TextToPicBtn from "../components/wanxiang/TextToPicBtn.vue";
import Explore from "../components/wanxiang/Explore.vue";
import MyCollect from "../components/wanxiang/MyCollect.vue";
import TextToPicPanel from "../components/wanxiang/TextToPicPanel.vue";
import CreationModel from "../components/wanxiang/CreationModel.vue";
import AIExpansion from "../components/wanxiang/AIExpansion.vue";
import MagicBook from "../components/wanxiang/MagicBook.vue";
import InspirationTemplate from "../components/wanxiang/InspirationTemplate.vue";
import GeneratingArea from "../components/wanxiang/GeneratingArea.vue";
import ReDrawing from "../components/wanxiang/ReDrawing.vue";
import DrawingInfoBoard from "../components/wanxiang/DrawingInfoBoard.vue";
import TestCanvas from "../components/wanxiang/TestCanvas.vue";
import ReDrawingSave from "../components/wanxiang/ReDrawingSave.vue";
import CloseConfirm from "../components/wanxiang/CloseConfirm.vue";
import DeleteConfirm from "../components/wanxiang/DeleteConfirm.vue";
import GenerateVid from "../components/wanxiang/GenerateVid.vue";
import EmptyBoard from "../components/wanxiang/EmptyBoard.vue";
//----------------------
import GenerateVidPanel from "../components/wanxiang/GenerateVidPanel.vue";
import OfficialTemplate from "../components/wanxiang/OfficialTemplate.vue";
import VidArea from "../components/wanxiang/VidArea.vue";
</script>
