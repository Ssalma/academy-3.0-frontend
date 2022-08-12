<template>
  <div class="signup-container">
        <div class="signup-header">
            <figure>
                <img src="../assets/enyataSmallerLogo.svg" alt="Enyata logo">
            </figure>
            <h1 class="applicantText">Applicant Sign Up</h1>
        </div>
        
        <form>
            <div class="form-input">
                <fieldset class="left">
                    <label for="first Name">First Name</label>
                    <input type="text">
                    <label for="Email Address">Email Address</label>
                    <input type="email">
                    <label for="Password">Password</label>
                    <input type="password">
                </fieldset>
                <fieldset>
                    <label for="last Name">Last Name</label>
                    <input type="text">
                    <label for="phone Number">Phone Number</label>
                    <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
                    <label for="confirm Password">Confirm Password</label>
                    <input type="password">
                </fieldset>
            </div>
            <div class="btnContainer">
                <app-button class="signup-btn" :text="signUpText"></app-button>
                <p class="signupbtn-text">Already have an account? Sign In</p>
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
            signUpText: "Sign Up"
        }
    }
}
</script>

<style scoped>
.signup-container{
    height: 100vh;
    max-width: 1440px;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.signup-header{
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

.form-input{
    display: flex;
    justify-content: center;
    gap: 62px;
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

input[type=text]{
    padding-left: 10px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */
    color: #4F4F4F;
}

input[type=text]:focus {
  border: 3px solid #7557D3;
}

input[type=tel]:focus {
  border: 3px solid #7557D3;
}

input[type=email]:focus {
  border: 3px solid #7557D3;
}

input[type=password]{
    padding-left: 10px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */
    color: #4F4F4F; 
}

input[type=email]{
    padding-left: 10px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */
    color: #4F4F4F; 
}

input[type=tel]{
    padding-left: 10px; 
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */
    color: #4F4F4F;
}

input[type=password]:focus {
  border: 3px solid #7557D3;
}

.btnContainer{
    text-align: center;
}

.signupbtn-text{
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