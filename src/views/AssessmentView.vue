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

            <form>
                <div class="form">
                    <h5>Question 1</h5>
                    <h1 class="question">What is the purpose of HDR technology?</h1>
                        <div class="input-questions">
                            <div class="input-top">
                                <input type="checkbox" id="option1">
                                <label for="option1" class="option-selector">A. To reduce the file size of images and videos</label><br>
                            </div>
                            <div class="input-bottom">
                                <input type="checkbox" id="option2">
                                <label for="option2" class="option-selector">B. To speed up 3D rendering performance.</label><br>
                            </div>
                            <div class="input-bottom">
                                <input type="checkbox" id="option3">
                                <label for="option3" class="option-selector">C. To support higher video resolutions</label><br>
                            </div>
                            <div>
                                <input type="checkbox" id="option4">
                                <label for="option4" class="option-selector">D. To display more colors in images and videos</label> 
                            </div>
                        </div>
                    <div class="next-previous">
                        <app-button class="previous-btn" :text="Button.previousButton"></app-button>
                        <app-button class="next-btn next-button-right" :text="Button.nextButton"></app-button>
                    </div>
                    <div class="finish">
                        <app-button class="finish-btn finish-button-center" :text="Button.finishButton"></app-button>
                    </div>
                    
                </div>
                
            </form>
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
            Button: { nextButton: "Next", previousButton: "Previous", finishButton: "finish", TakeAssessment: "Take Assessment"}
        }
    }
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
    margin-right: 42px; 
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
    margin-top: 86px;
}

.finish{
    margin: 75px 0px 0px 0px;
    text-align: center;
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

form{
    display: none;
}
</style>