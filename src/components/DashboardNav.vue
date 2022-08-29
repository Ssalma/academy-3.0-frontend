<template>
  <div class="wrap">
    <div class="profile">
      <div><img :src="img" alt="" class="userImg" /></div>
      <p class="name">{{ adminName }}</p>
      <p class="email">{{ email }}</p>
    </div>

    <div class="whiteBackground">
      <div class="tabsWrap">
        <div
          class="tabs"
          v-for="tab in tabs"
          :key="tab.id"
          :class="{
            active: tab.id === id && tab.id < 6,
            result: tab.id === id && tab.id > 5,
          }"
          @click="routing(tab)"
        >
          <img :src="tab.icon" alt="" class="tabIcon" />
          <p class="tabText">{{ tab.text }}</p>
        </div>
      </div>

      <div class="" id="logout">
        <img src="../assets/logout.svg" alt="" class="tabIcon" />
        <p class="tabText" @click="loggedOut()">Log Out</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'DashBoardNav',
  props: {
    activeTab: { type: String },
  },
  data() {
    return {
      // activeTab: "",

      id: this.activeTab,
      adminName: null,
      email: null,
      img: '',
      tabs: [
        {
          id: '1',
          icon: require('../assets/D.svg'),
          text: 'Dashboard',
          route: 'DashBoard',
        },
        {
          id: '2',
          icon: require('../assets/plus.svg'),
          text: 'Create Application',
          route: 'FormAssesment',
        },
        {
          id: '3',
          icon: require('../assets/message.svg'),
          text: 'Application Entries',
          route: 'ApplicationEntries',
        },
        {
          id: '4',
          icon: require('../assets/mm.svg'),
          text: 'Compose Assessment',
          route: 'ComposeAssessment',
        },
        {
          id: '5',
          icon: require('../assets/4.svg'),
          text: 'Assessment History',
          route: 'AssessmentHistory',
        },
        {
          id: '6',
          icon: require('../assets/dr.svg'),
          text: 'Results',
          route: 'Results',
        },
        {
          id: '7',
          icon: require('../assets/Setting.svg'),
          text: 'Settings',
          route: 'Settings',
        },
      ],
    };
  },
  async created() {
    await this.getAdmin();
  },
  methods: {
    routing(tab) {
      this.$router.push({ name: `${tab.route}` });
    },

    async getAdmin() {
      let token = localStorage.getItem('token');
      let response = await axios.get('http://localhost:5000/api/v1/auth/user', {
        headers: { token: token },
      });
      console.log(response);
      this.email = response.data.data.user.email;
      this.adminName =
        response.data.data.user.firstName +
        ' ' +
        response.data.data.user.lastName;
      this.img = response.data.data.user.img;
    },

    loggedOut() {
      localStorage.clear();
      this.$router.push({ name: 'home' });
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
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  /* line-height: 24px; */
  letter-spacing: -0.02em;
  color: #ffffff;
  margin: 12px 0 5px 0;
}
.email {
  font-family: 'Lato';
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
  cursor: pointer;
}
.active {
  border-left-style: solid;
  border-left-color: #7557d3;
  border-left-width: 4px;
}
.active p {
  font-weight: 700;
}
.result {
  border-left-style: solid;
  border-left-color: #31d283;
  border-left-width: 4px;
}
.result p {
  font-weight: 700;
}

.tabText {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
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
.tabsWrap {
  padding-top: 14px;
}
</style>
