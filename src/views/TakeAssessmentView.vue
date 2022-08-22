<template>
<div class="main-dashboard">
        <div class="left">
            <dashboard-left></dashboard-left>
        </div>
        <div class="right">
            <div class="header-text">
                <div>
                    <h1 class="take-assessment">Take Assessment</h1>
                    <p class="status">Click the button below to start assessment, you have limited time for this test</p>
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
        };
    },
    methods: {
  },
}
</script>

<style scoped>
.main-dashboard{
    display: flex;
    max-width: 1440px;
    font-family: 'Lato';
    font-style: normal;
    height:100vh;
    overflow-x: hidden;
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

.show-before{
    text-align: center;
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

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
    background: #CDCFD6;
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