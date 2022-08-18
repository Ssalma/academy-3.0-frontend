<template>
  <div class="wrap">
    <div class="profile">
      <div><img src="../assets/Ellipse.svg" alt="" class="userImg" /></div>
      <p class="name">Josh Doe</p>
      <p class="email">j.doe@enyata.com</p>
    </div>

    <div class="whiteBackground">
      <div class="tabsWrap">
        <div class="tabs" id="topTab">
          <img
            src="../assets/D.svg"
            alt=""
            class="tabIcon"
            @click="this.$router.push({ name: 'DashBoard' })"
          />
          <p class="tabText" @click="activeTab()">Dashboard</p>
        </div>

        <div class="tabs">
          <img src="../assets/plus.svg" alt="" class="tabIcon" />
          <p class="tabText" @click="this.$router.push({ name: 'FormAssesment' })">
            Create Application
          </p>
        </div>

        <div class="tabs">
          <img src="../assets/message.svg" alt="" class="tabIcon" />
          <p class="tabText" @click="this.$router.push({ name: 'ApplicationEntries' })">
            Application Entries
          </p>
        </div>

        <div class="tabs">
          <img src="../assets/mm.svg" alt="" class="tabIcon" />
          <p class="tabText" @click="this.$router.push({ name: 'ComposeAssessment' })">
            Compose Assessment
          </p>
        </div>

        <div class="tabs">
          <img src="../assets/4.svg" alt="" class="tabIcon" />
          <p class="tabText" @click="this.$router.push({ name: 'AssessmentHistory' })">
            Assessment History
          </p>
        </div>

        <div class="tabs">
          <img src="../assets/dr.svg" alt="" class="tabIcon" />
          <p class="tabText" @click="this.$router.push({ name: 'Results' })">Results</p>
        </div>

        <div class="tabs">
          <img src="../assets/Setting.svg" alt="" class="tabIcon" />
          <p class="tabText" @click="this.$router.push({ name: 'Settings' })">Settings</p>
        </div>
      </div>

      <div class="" id="logout">
        <img src="../assets/logout.svg" alt="" class="tabIcon" />
        <p class="tabText">Log Out</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashBoardNav",
  data() {
    return {
      isActive: "false",
    };
  },
  methods: {
    activeTab() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>
p {
  margin: 0;
}
.profile {
  background: #7557d3;
  width: 292px;
  text-align: center;
  padding: 75px 0 38px 0;
}
.userImg {
  width: 80px;
  height: 80px;
  border-radius: 30px;
}
.name {
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  /* line-height: 24px; */
  letter-spacing: -0.02em;
  color: #ffffff;
  margin: 12px 0 5px 0;
}
.email {
  font-family: "Lato";
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  /* line-height: 19px; */
  letter-spacing: -0.02em;
  color: #ffffff;
  margin: 0 0 38px 0;
}
.tabIcon {
  margin: 0 16px 0 32px;
}
.tabs {
  display: flex;
  padding-top: 29px;
  height: fit-content;
  align-items: center;
}
.active {
  border-left-style: solid;
  border-left-color: #7557d3;
  border-left-width: 4px;
}
.tabText {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  /* line-height: 19px; */
  text-align: center;
  color: #2b3c4e;
}
.whiteBackground {
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-radius: 8px;
  width: 292px;
}
#logout {
  padding: 230px 0 160px 0;
  display: flex;
}
#topTab {
  margin-top: 14px;
}
</style>
