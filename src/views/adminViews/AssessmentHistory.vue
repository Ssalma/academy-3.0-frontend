<template>
  <div class="home">
    <DashBoardNav activeTab="5" />
    <Layout />
  </div>
</template>

<script>
import DashBoardNav from "@/components/DashboardNav.vue";
import Layout from "@/components/HistoryLayout.vue";
export default {
  name: "AssessmentHistory View",
  components: { DashBoardNav, Layout },
};
</script>

<style scoped>
.home {
  display: flex;
  height: 240vh;
  overflow-x: hidden;
  max-width: 1440px;
}

.home::-webkit-scrollbar {
  width: 6px;
}

.home::-webkit-scrollbar-track {
  background: #cdcfd6;
}

.home::-webkit-scrollbar-thumb {
  background: #031131;
  opacity: 0.7;
  border-radius: 17px;
  background-clip: padding-box;
}

.home::-webkit-scrollbar-thumb:hover {
  background: #031131;
  opacity: 0.7;
  border-radius: 17px;
}
</style>
