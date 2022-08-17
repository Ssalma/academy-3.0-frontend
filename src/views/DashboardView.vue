<template>
  <div class="main-dashboard">
    <div class="left">
      <dashboard-left :fullName="fullName" :email="user.email"></dashboard-left>
    </div>
    <div class="right">
      <h1 class="dashboardmain-text">Dashboard</h1>
      <p class="status">
        Your Application is currently being reviewed, you will be notified if
        successful
      </p>
      <div class="status-card">
        <div>
          <h3 class="header">Date of Application</h3>
          <h1 class="status-text">{{ applicationDate }}</h1>
          <hr class="blue-horizonal" />
          <p class="status-time">4 days since applied</p>
        </div>
        <div>
          <h3 class="header">Application Status</h3>
          <h1 class="status-text">{{ application.status }}</h1>
          <hr class="yellow-horizonal" />
          <p class="status-time">We will get back to you</p>
        </div>
      </div>
      <!-- This is the card section below -->
      <section>
        <div class="update-card">
          <div class="update-content">
            <div class="updatetext-content">
              <h3 class="update-header">Updates</h3>
              <ul>
                <li><hr class="grey-horizonal" /></li>
                <li><hr class="grey-horizonal" /></li>
                <li><hr class="grey-horizonal" /></li>
                <li><hr class="grey-horizonal" /></li>
              </ul>
            </div>
          </div>
          <div class="update-content">
            <div class="updatetext-content">
              <h3 class="update-header">Take Assessment</h3>
              <div class="assessment-info">
                <h3>
                  We have 4 days left until the next assessment <br />
                  Watch this space
                </h3>
                <app-button
                  :text="takeAssessmentText"
                  class="takeassessment-btn"
                ></app-button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import leftDashboardComponentVue from '@/components/leftDashboardComponent.vue';
import buttonComponentVue from '@/components/buttonComponent.vue';
import axios from 'axios';
export default {
  components: {
    'dashboard-left': leftDashboardComponentVue,
    'app-button': buttonComponentVue,
  },
  async created() {
    await this.loadUserDetails();
  },
  data() {
    return {
      takeAssessmentText: 'Take Assessment',
      user: null,
      application: null,
      fullName: null,
      applicationDate: null,
    };
  },
  methods: {
    async loadUserDetails() {
      let token = localStorage.getItem('token');
      const response = await axios.get(
        'http://localhost:8081/api/v1/auth/user',
        {
          headers: { token: token },
        }
      );
      const user = response.data.data.user;
      const application = response.data.data.application;
      this.user = user;
      this.application = application;
      this.fullName = `${this.user.firstName} ${this.user.lastName}`;
      this.applicationDate = `${this.application.createdAt.substr(
        8,
        2
      )}.${this.application.createdAt.substr(
        5,
        2
      )}.${this.application.createdAt.substr(2, 2)}`;
      console.log(response);
    },
  },
};
</script>

<style scoped>
.main-dashboard {
  display: flex;
  grid-template-columns: auto;
  max-width: 1440px;
  font-family: 'Lato';
  font-style: normal;
}

.left {
  width: 100%;
  max-width: 292px;
}

.right {
  width: 100%;
  margin: 107px 0px 86px 56px;
}

.dashboardmain-text {
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
}

.status {
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #2b3c4e;
  margin: 14px 0px 61px 0px;
}

.status-card {
  display: flex;
  justify-content: space-between;
  max-width: 485px;
  width: calc(100% - 20px);
}

.header {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: left;
  color: #4f4f4f;
}

.status-text {
  font-weight: 300;
  font-size: 48px;
  line-height: 58px;
  text-align: center;
  color: #2b3c4e;
  margin-top: 11px;
}

.blue-horizonal {
  background: #006df0;
  margin: 19px 0 9px 0px;
  height: 4px;
  width: 148px;
  border-radius: 4px;
  border: none;
}

.yellow-horizonal {
  background: #f09000;
  margin: 19px 0 9px 0px;
  height: 4px;
  width: 148px;
  border-radius: 4px;
  border: none;
}

.status-time {
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #4f4f4f;
}

.update-card {
  display: flex;
  gap: 40px;
}

.update-content {
  width: 100%;
  max-width: 422px;
  border: 1px solid #ececf9;
  border-radius: 4px;
  padding: 25px 0px 99px 0px;
  margin-top: 97px;
  position: relative;
}

.update-header {
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
  margin-bottom: 87px;
}

.updatetext-content {
  width: calc(100% - 35px);
  margin: 0 auto;
}

ul {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 74px;
}

.grey-horizonal {
  border: 1px solid #cecece;
  width: 382px;
  background: #cecece;
  height: 0.5px;
  opacity: 50%;
}

.assessment-info {
  font-weight: 400;
  font-size: 15.7273px;
  line-height: 20px;
  text-align: center;
  color: #4f4f4f;
  position: absolute;
  margin: 0 auto;
  top: 50%;
  transform: translate(0, -50%);
}
</style>
