<template>
  <div class="main-dashboard" v-cloak>
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
          <p class="time">
            {{ timerMins }}<sub>min</sub>{{ timerSecs }}<sub>sec</sub>
          </p>
        </div>
      </div>

      <div class="main-body">
        <div class="questions">
          <h5>Question {{ index + 1 }}</h5>
          <h1 class="question">{{ questions[index]['question'] }}</h1>
          <div class="checkbox-container">
            <div class="input-questions">
              <div>
                <label
                  class="option-selector"
                  :for="key"
                  v-for="(answer, key) in questionAnswers"
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
            @click="previous"
            :text="Button.previousButton"
          ></app-button>
          <app-button
            class="next-btn next-button-right"
            @click="next"
            :text="Button.nextButton"
          ></app-button>
        </div>
        <div class="finish">
          <app-button
            class="finish-btn finish-button-center"
            :text="Button.finishButton"
            :isActive="isFinished"
            @click="finish"
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
      score: 0,
      isFinished: false,
      Button: {
        nextButton: 'Next',
        previousButton: 'Previous',
        finishButton: 'Finish',
        TakeAssessment: 'Take Assessment',
      },
      selectedAnswer: '',
      index: 0,
      questions: [],
      mins: null,
      secs: null,
      duration: null,
      timeUp: false,
    };
  },
  methods: {
    answered(event) {
      this.selectedAnswer = event.target.value;

      this.isClicked = !this.isClicked;
    },
    async loadUserDetails() {
      let token = localStorage.getItem('token');
      const response = await axios.get(
        'http://localhost:5000/api/v1/auth/user/application',
        {
          headers: { token: token },
        }
      );
      const application = response.data.data;
      this.fullName = `${application.firstName} ${application.lastName}`;
      this.email = application.email;
      this.img = application.img;
      const res = await axios.get(
        'http://localhost:5000/api/v1/auth/assessments/all',
        {
          headers: { token: token },
        }
      );

      this.questions = res.data.data;

      const timer = await axios.get('http://localhost:5000/api/v1/auth/timer', {
        headers: { token: token },
      });
      const time = timer.data.data;
      const minutes = parseInt(time.minutes);
      const seconds = parseInt(time.seconds) / 60;
      const duration = 1000 * (60 * (minutes + seconds));
      const date = new Date();
      const startTime = date.getTime();
      const endTime = startTime + duration;
      setInterval(() => {
        let rightNow = new Date().getTime();

        let timeLeft = endTime - rightNow;
        let left = timeLeft / 1000;
        this.mins = parseInt(left / 60, 10);
        this.secs = parseInt(left % 60, 10);
        if (this.secs < 10) this.secs = `0${this.secs}`;
        if (rightNow >= endTime) this.timeUp = true;
      }, 1000);
    },

    next() {
      if (this.index < this.questions.length - 1) {
        this.questions[this.index]['selectedAnswer'] = this.selectedAnswer;
        if (
          this.selectedAnswer == this.questions[this.index]['correctAnswer'] &&
          !this.isFinished
        ) {
          this.score += 1;
        }
        this.selectedAnswer = '';
        if (this.index < this.questions.length - 1) {
          this.index += 1;
        }
      }
      if (this.index + 2 > this.questions.length) {
        this.isFinished = true;
      }
      if (this.timeUp) {
        this.isFinished = true;
        this.finish();
      }
    },

    previous() {
      if (this.index > 0) {
        this.index -= 1;
        this.isFinished = false;
        if (this.score > 0) {
          this.score -= 1;
        }
        this.selectedAnswer = this.questions[this.index]['selectedAnswer'];
      }
    },

    async finish() {
      if (this.isFinished) {
        if (
          this.selectedAnswer == this.questions[this.index]['correctAnswer']
        ) {
          this.score += 1;
        }
        let token = localStorage.getItem('token');
        await axios.put(
          'http://localhost:5000/api/v1/auth/user/score',
          {
            score: this.score,
          },
          {
            headers: { token: token },
          }
        );

        this.$router.push('/thankyouassessmentdashboard');
      }
    },
  },
  computed: {
    questionAnswers() {
      const keys = Object.keys(this.questions[this.index]).filter(
        (k) => k.length == 1
      );
      const obj = {};
      keys.forEach((key) => {
        obj[key] = this.questions[this.index][key];
      });
      return obj;
    },

    timerMins() {
      return this.mins;
    },

    timerSecs() {
      return this.secs;
    },
  },
};
</script>

<style scoped>
[v-cloak] {
  display: none;
}

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

.main-body {
  margin-top: 64px;
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

label {
  cursor: pointer;
}

input[type='radio'] {
  position: relative;
  appearance: none;
  border: 1px solid #d3d3d3;
  width: 8px;
  height: 8px;
  content: none;
  outline: none;
  margin: 37px 42px 0px 0px;
  cursor: pointer;
  align-self: center;
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
