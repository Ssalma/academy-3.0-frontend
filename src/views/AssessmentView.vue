<template>
<div class="main-dashboard">
        <div class="left">
            <dashboard-left></dashboard-left>
        </div>
        <div class="right">
            <div class="header-text">
                <div>
                    <h1 class="take-assessment">Take Assessment</h1>
                    <p class="status">Click the finish button below to submit assessment, you can go back at any time to edit your answers.</p>
                </div>
                <div>
                    <h1 class="timer">Timer</h1>
                    <p class="time">00<sub>min</sub>000<sub>sec</sub></p>
                </div>
            </div>
            <div class="show-before">
                <figure>
                    <img src="../assets/hourglass.svg" alt="hour glass loading">
                    <figcaption>We have 4 days left until the next assessment <br>
                                            Watch this space</figcaption>
                    <app-button class="finish-btn finish-button-center" :text="Button.TakeAssessment"></app-button>
                </figure>
            </div>

            <div class="main-body">
                <div class="questions">
                    <h5>{{ questions[index]["questionNumber"] }}</h5>
                    <h1 class="question">{{ questions[index]["question"] }}</h1>
                    <div class="checkbox-container" @click="changeColor">
                    <div class="input-questions">
                            <label
                                class="option-selector"
                                :for="key"
                                v-for="(answer, key) in questions[index]['answers']"
                                :key="answer"
                            >
                                <br />
                                <input
                                type="checkbox"
                                :id="key"
                                name=""
                                :value="key"
                                @change="answered($event)"
                                />
                                {{ answer }}
                            </label>
                        </div>
                    </div>
                </div>
          <div class="next-previous">
            <app-button class="previous-btn" @click="index--"  :text="Button.previousButton"></app-button>
            <app-button class="next-btn next-button-right" @click="index++" :text="Button.nextButton"></app-button>
          </div>
          <div class="finish">
                <app-button class="finish-btn finish-button-center" :text="Button.finishButton"></app-button>
          </div>
        </div>
        </div>
    </div> 
</template>

<script>
import leftDashboardComponentVue from '@/components/leftDashboardComponent.vue';
import buttonComponentVue from '@/components/buttonComponent.vue';
export default {
    components: {
        "dashboard-left": leftDashboardComponentVue,
        "app-button": buttonComponentVue
    },
    data(){
        return{
            Button: { nextButton: "Next", previousButton: "Previous", finishButton: "Finish", TakeAssessment: "Take Assessment"},
            selectedAnswer: "",
      index: 0,
      questions: [
        {
          questionNumber: "Question 1",
          question: "which of these is a frameworks?",
          answers: {
            a: "A. To reduce teh file size of images and videos.",
            b: "B. To speed up 3D rendering performance.",
            c: "C. To support higher video resolutions.",
            d: "D. To display more colors in images and videos",
          },
          correctAnswer: "c",
        },
        {
          questionNumber: "Question 2",
          question: "which of these is a programming language ?",
          answers: {
            a: "A. css",
            b: "B. javascript",
            c: "C. vuejs",
            d: "D. html",
          },
          correctAnswer: "b",
        },
        {
          questionNumber: "Question 3",
          question: "which of these is used for styling?",
          answers: {
            a: "A. css",
            b: "B. javascript",
            c: "C. uejs",
            d: "D. html",
          },
          correctAnswer: "a",
        },
      ],
        };
    },
    methods: {
    answered(event) {
      this.selectedAnswer = event.target.value;
    },
    // changeColor() {},
  },

}
</script>

<style scoped>
.main-dashboard{
    display: flex;
    grid-template-columns: auto;
    max-width: 100%;
    overflow-x: hidden;
    font-family: 'Lato';
    font-style: normal;
}

.left{
    width: 100%;
    max-width: 292px;
}

.right{
    width: 100%;
    margin: 107px 82px 86px 56px;
}

.header-text{
    display: flex;
    justify-content: space-between;
}

.take-assessment{
    font-weight: 300;
    font-size: 43.5555px;
    line-height: 52px;
    letter-spacing: -0.02em;
    color: #2B3C4E; 
}

.status{
    font-style: italic;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #2B3C4E;
    margin: 14px 0px 61px 0px;
    width: 607px;
}

.timer{
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */
    text-align: center;
    color: #4F4F4F;
}

.time{
    font-weight: 300;
    font-size: 48px;
    line-height: 58px;
    text-align: center;
    color: #2B3C4E;
}

sub{
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #4F4F4F;
}

h5{
    font-style: italic;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #2B3C4E;
    margin-bottom: 14px;
}

.question{
    font-style: italic;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    /* identical to box height */
    color: #2B3C4E;
    text-align: center;
}

.form{
 position: relative;
}

.input-questions{
    position: relative;
    left: 27%;
}

input[type=checkbox]{
    margin: 0px 42px 37px 0px; 
}

.option-selector{
    font-style: italic;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #2B3C4E;
}

.input-top{
    margin: 48px 0px 37px 0px;
}

.input-bottom{
    margin-bottom: 37px;
}

.next-button-right{
    float: right;
}
.next-button-center{
    text-align: center;
}

.next-previous{
    margin-top: 26px;
}

.finish{
    margin: 45px 0px 0px 0px;
    text-align: center;
}

.show-before{
    text-align: center;
    display: none;
}

figcaption{
    font-style: normal;
    font-weight: 400;
    font-size: 16.7273px;
    line-height: 20px;
    text-align: center;
    color: #4F4F4F;
    margin: 21px 0px 24px 0px;
}

/* form{
    display: none;
} */
</style>