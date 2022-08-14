<template>
  <div class="forgot-application">
    <h1 class="forgot-header">Forgot Password</h1>
    <p class="forgot-para">Please select option to send link to reset password</p>
    <div>
        <div class="card">
            <img src="../assets/email.svg" alt="message-icon" class="image-icon">
            <div>
                <a  href="#" class="reset">Reset via Email</a>
                <p class="reset-para">Reset password link will be send to your registered email address.</p>
            </div>
            <input type="checkbox" class="checkbox">
        </div>
        <div class="card">
            <img src="../assets/telephone.svg" alt="message-icon" class="image-icon">
            <div>
                <a href="#" class="reset">Reset via Sms</a>
                <p class="reset-para">Reset password link will be send to your registered phone number.</p>
            </div>
            <input type="checkbox">
        </div>
        <div class="bottom">
            <app-button :text="sendLink" class="signin-btn"></app-button>
            <p class="reset-para">Didn't receive link? <a href="#" class="resend">Resend</a></p>
        </div>
        
    </div>
  </div>
</template>

<script>
import buttonComponentVue from '@/components/buttonComponent.vue';
export default {
    components: {
        "app-button": buttonComponentVue
    },
    data(){
        return{
            sendLink: "Send Link"
        }
    }
}
</script>

<style scoped>
.forgot-application{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Lato';
    font-style: normal;
    background: #FFFFFF;
    box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
    border-radius: 8px;
    padding: 34px 58px;
}

.forgot-header{
    font-weight: 600;
    font-size: 32px;
    line-height: 38px;
    /* identical to box height */
    color: #2B3C4E;
    text-align: center;
}

.forgot-para{
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */
    color: #7D7D7D;
    margin: 16px 0px 48px 0px;
    text-align: center;
}

.card{
    display: flex;
    padding: 27px 60px 23px 28px;
    background: #FFFFFF;
    border: 1px solid #7557D3;
    box-shadow: 0px 8px 30px 10px rgba(117, 87, 211, 0.05);
    border-radius: 4px;
    margin-bottom: 24px;
    align-items: center;
}

.image-icon{
    margin-right: 28px;
}

.reset{
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    margin-bottom: 16px;
    color: #211F26;
}

.reset:hover{
    color: #7557D3;
}

.reset-para{
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #B1B1B1;
    width: 245px;
    margin-right: 20px;
}

.bottom{
    text-align: center;
}

.resend{
    color: #7557D3;
}

a{
    text-decoration: none;
}

</style>