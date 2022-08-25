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

      <div class="main-body">
        <div class="questions">
          <h5>{{ questions[index]['questionNumber'] }}</h5>
          <h1 class="question">{{ questions[index]['question'] }}</h1>
          <div class="checkbox-container" @click="changeColor">
            <div class="input-questions">
              <div>
                <label
                  class="option-selector"
                  :for="key"
                  v-for="(answer, key) in questions[index]['answers']"
                  :key="answer"
                >
                  <br />

                  <input
                    type="radio"
                    :id="key"
                    v-model="clicked"
                    :value="key"
                    name="radio"
                    @change="answered($event)"
                  />

                  <span :class="clicked == key ? 'greenbg' : 'none'">{{
                    answer
                  }}</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="next-previous">
          <app-button
            class="previous-btn"
            @click="index--"
            :text="Button.previousButton"
          ></app-button>
          <app-button
            class="next-btn next-button-right"
            @click="index++"
            :text="Button.nextButton"
          ></app-button>
        </div>
        <div class="finish">
          <app-button
            class="finish-btn finish-button-center"
            :text="Button.finishButton"
          ></app-button>
        </div>
      </div>
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
      fullName: null,
      user: null,
      application: null,
      email: null,
      img: null,
      isClicked: false,
      clicked: '',
      Button: {
        nextButton: 'Next',
        previousButton: 'Previous',
        finishButton: 'Finish',
        TakeAssessment: 'Take Assessment',
      },
      selectedAnswer: '',
      index: 0,
      questions: [
        {
          questionNumber: 'Question 1',
          question: 'which of these is a frameworks?',
          answers: {
            a: 'A. To reduce the file size of images and videos.',
            b: 'B. To speed up 3D rendering performance.',
            c: 'C. To support higher video resolutions.',
            d: 'D. To display more colors in images and videos',
          },
          correctAnswer: 'c',
        },
        {
          questionNumber: 'Question 2',
          question: 'which of these is a programming language ?',
          answers: {
            a: 'A. css',
            b: 'B. javascript',
            c: 'C. vuejs',
            d: 'D. html',
          },
          correctAnswer: 'b',
        },
        {
          questionNumber: 'Question 3',
          question: 'which of these is used for styling?',
          answers: {
            a: 'A. css',
            b: 'B. javascript',
            c: 'C. uejs',
            d: 'D. html',
          },
          correctAnswer: 'a',
        },
      ],
    };
  },
  methods: {
    answered(event) {
      this.selectedAnswer = event.target.value;
      console.log(this.selectedAnswer);
      this.isClicked = !this.isClicked;
    },
    async loadUserDetails() {
      let token = localStorage.getItem('token');
      const response = await axios.get(
        'http://localhost:8081/api/v1/auth/user/application',
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
  max-width: 1440px;
  overflow-x: hidden;
  font-family: 'Lato';
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
  margin: 14px 0px 0px 0px;
  width: 607px;
}

.timer {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
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

.question {
  font-style: italic;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #2b3c4e;
  text-align: center;
}

.form {
  position: relative;
}

.input-questions {
  display: flex;
  justify-content: center;
  align-items: center;
}

.option-selector {
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #2b3c4e;
  align-items: center;
}

.next-button-right {
  float: right;
}
.next-button-center {
  text-align: center;
}

.next-previous {
  margin-top: 26px;
}

.finish {
  margin: 45px 0px 0px 0px;
  text-align: center;
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

.greenbg {
  background: #31d283;
  display: inline-flex;
  width: 355px;
  height: 20px;
  padding-left: 10px;
}

input[type='radio'] {
  position: relative;
  appearance: none;
  border: 1px solid #d3d3d3;
  width: 8px;
  height: 8px;
  content: none;
  outline: none;
  margin: 49px 42px 0px 0px;
}

input[type='radio']:checked {
  appearance: none;
  outline: none;
  padding: 0;
  content: none;
  border: none;
}

input[type='radio']:checked::before {
  position: absolute;
  color: #2b3c4e !important;
  content: '\00A0\2713\00A0' !important;
  border: 1px solid #d3d3d3;
  font-weight: bolder;
  font-size: 8px;
  background-color: #2b3c4e;
}
</style>
