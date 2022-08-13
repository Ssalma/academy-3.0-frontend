<template>
    <div class="signin-container">
        <div class="signin-header">
            <figure>
              <router-link :to="{ name: 'home'}"><img src="../assets/enyataSmallerLogo.svg" alt="Enyata logo"></router-link>  
            </figure>
            <h1 class="applicantText">Applicant Log In</h1>
        </div>
        <form>
            <div class="form-input">
                <fieldset class="left">
                    <label for="Email Address">Email Address</label>
                    <input type="email">
                    <label for="Password">Password</label>
                    <input type="password" class="password">
                    
                </fieldset>
            </div>
            <div class="btn-container">
                <app-button class="signin-btn" :text="signInText"></app-button>
                <div class="btn-container-text">
                    <p class="signinbtn-text">Don't have an account Yet? <router-link :to="{ name: 'signup'}">Sign Up</router-link></p>
                    <p class="signinbtn-text">Forgot Password?</p>
                </div>  
            </div>
            
        </form>
    
    </div>
</template>

<script>
import buttonComponentVue from '@/components/buttonComponent.vue';
export default {
    components:{
        "app-button": buttonComponentVue
    },
    data(){
        return{
            signInText: "Sign In"
        }
    }
}
</script>

<style scoped>
.signin-container{
    position: fixed;
    top: 50%;
    left: 50%;
    /* bring your own prefixes */
    transform: translate(-50%, -50%);
}

.form-input{
    display: flex;
    justify-content: center;
}

.signin-header{
    text-align: center;
}

.applicantText{
    font-family: 'Lato';
    font-style: italic;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    /* identical to box height */
    color: #2B3C4E;
    margin: 28px 0px 68px 0px;
}

fieldset{
    border: none;
}

label{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */
    color: #4F4F4F;
    margin-bottom: 5px;
    display: block;
}

input{
    border: 1.5px solid #BDBDBD;
    border-radius: 4px;
    width: 379px;
    height: 48px;
    margin-bottom: 27px;
}

input:focus{
  outline: none;
}

input[type=password]:focus, [type=email]:focus {
  border: 3px solid #7557D3;
}

input[type=password], [type=email]{
    padding-left: 10px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */
    color: #4F4F4F; 
}

.btn-container-text{
    display: flex;
    justify-content: space-between;
}

.signinbtn-text{
    font-family: 'Lato';
    font-style: italic;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */
    color: #4F4F4F;
    margin-top: 10px;
}





</style>