<template>
  <div class="main">
    <ProfileView class="profile" />
    <alertBox class="alert" />
    <div class="home">
      <DashBoardNav activeTab="3" />
      <Layout />
    </div>
  </div>
</template>

<script>
import DashBoardNav from "../components/DashboardNav.vue";
import Layout from "../components/EntriesLayout.vue";
import ProfileView from "../components/ProfileView.vue";
import alertBox from "../components/alertBtn.vue";
export default {
  name: "ApplicationEntries View",
  components: { DashBoardNav, Layout, ProfileView, alertBox },
  data() {
    return {
      isVisibility: "false",
    };
  },
};
</script>

<style scoped>
.home {
  display: flex;
}
.profile {
  position: absolute;
  display: none;
}
.alert {
  position: absolute;
  display: none;
}
</style>
