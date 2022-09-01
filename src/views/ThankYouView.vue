<template>
  <div class="main-dashboard">
    <div class="left">
      <dashboard-left
        :fullName="fullName"
        :email="email"
        :imgURL="img"
      ></dashboard-left>
    </div>
    <div class="right">
      <div class="header-text">
        <div>
          <h1 class="take-assessment">Take Assessment</h1>
          <p class="status">Thank you!</p>
        </div>
        <div>
          <h1 class="timer">Timer</h1>
          <p class="time">00<sub>min</sub>000<sub>sec</sub></p>
        </div>
      </div>
      <div class="show-before">
        <figure>
          <img src="../assets/confetti.svg" alt="hour glass loading" />
          <figcaption>
            We have received your assessment test, we will get back to you soon.
            <br />
            Best of luck
          </figcaption>
          <router-link :to="{ name: 'home' }"
            ><app-button
              class="home-btn finish-button-center"
              :text="Button.Home"
            ></app-button
          ></router-link>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
import leftDashboardComponentVue from "@/components/leftDashboardComponent.vue";
import buttonComponentVue from "@/components/buttonComponent.vue";
import axios from "axios"
export default {
  components: {
    "dashboard-left": leftDashboardComponentVue,
    "app-button": buttonComponentVue,
  },
  data() {
    return {
      Button: {
        nextButton: "Next",
        previousButton: "Previous",
        finishButton: "Finish",
        TakeAssessment: "Take Assessment",
        Home: "Home",
      },
        selectedAnswer: "",
        fullName: null,
        user: null,
        application: null,
        email: null,
        img: null,
    };
  },
  async created() {
    await this.loadUserDetails();
  },
  methods: {
    async loadUserDetails() {
      let token = localStorage.getItem("token");
      const response = await axios.get(
        "http://localhost:5000/api/v1/auth/user/application",
        {
          headers: { token: token },
        }
      );
      const application = response.data.data;
      this.status = application.status;
      this.fullName = `${application.firstName} ${application.lastName}`;
      this.email = application.email;
      this.img = application.img;
    },
  },
};
</script>

<style scoped>
.main-dashboard {
  display: flex;
  max-width: 100%;
  overflow-x: hidden;
  font-family: "Lato";
  font-style: normal;
  height: 100vh;
}

.left {
  width: 100%;
  max-width: 292px;
}

.right {
  width: 100%;
  margin: 107px 82px 86px 56px;
}

.header-text {
  display: flex;
  justify-content: space-between;
}

.take-assessment {
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

.timer {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  text-align: center;
  color: #4f4f4f;
}

.time {
  font-weight: 300;
  font-size: 48px;
  line-height: 58px;
  text-align: center;
  color: #2b3c4e;
}

sub {
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #4f4f4f;
}

h5 {
  font-style: italic;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #2b3c4e;
  margin-bottom: 14px;
}

.show-before {
  text-align: center;
}

figcaption {
  font-style: normal;
  font-weight: 400;
  font-size: 16.7273px;
  line-height: 20px;
  text-align: center;
  color: #4f4f4f;
  margin: 21px 0px 24px 0px;
}

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #cdcfd6;
}

::-webkit-scrollbar-thumb {
  background: #031131;
  opacity: 0.7;
  border-radius: 17px;
  background-clip: padding-box;
}

::-webkit-scrollbar-thumb:hover {
  background: #031131;
  opacity: 0.7;
  border-radius: 17px;
}
</style>
