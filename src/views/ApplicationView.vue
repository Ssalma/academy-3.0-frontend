<template>
  <div class="application-container">
        <div class="application-header">
            <figure>
              <router-link :to="{ name: 'home'}"><img src="../assets/enyataSmallerLogo.svg" alt="Enyata logo"></router-link>  
            </figure>
            <h1 class="applicant-text">Applicant Log In</h1>
        </div>
        <form>
            <div class="container-form">
                <fieldset class="input-file-photo">
                    <input type="file" accept="file_extension" id="file">
                    <label for="file" class="upload-file"><span class="material-symbols-outlined">add</span> Upload CV</label>
                    <input type="file" accept="image/*" id="upload-photo">
                    <label for="upload-photo" class="upload-file"><span class="material-symbols-outlined">add</span> Upload Photo</label>
                </fieldset>
                <div class="form-input">
                    <fieldset>
                        <label for="fName">First Name</label>
                        <input type="text" id="fName">
                        <label for="email">Email</label>
                        <input type="email" id="email">
                        <label for="address">Address</label>
                        <input type="text" id="address">
                        <label for="course">Course of Study</label>
                        <input type="text" id="course">
                    </fieldset>
                    <fieldset>
                            <label for="lName">Last Name</label>
                            <input type="text" id="lName">
                            <label for="date">Date of Birth</label>
                            <input type="date" id="date" max="12-31-1979">
                            <label for="university">University</label>
                            <input type="text" id="university">
                            <label for="number">CGPA</label>
                            <input type="number" id="number" min="1" max="5" step="0.01">
                    </fieldset>
                </div>
                <div class="btn-container">
                        <app-button class="signup-btn" :text="submitText"></app-button> 
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
            submitText: "Submit"
        }
    }
}
</script>

<style scoped>
.application-container{
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-content: space-around;
    height: 100vh;
    padding: 20px 0px 10px 0px;
}

.application-header, .applicant-text, .btn-container{
    text-align: center;
}

.applicant-text{
    font-family: 'Lato';
    font-style: italic;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    /* identical to box height */
    color: #2B3C4E;
}

input[type="file"]{
    display: none;
}

.input-file-photo{
    display: flex;
    gap: 32px;
    justify-content: center;
}

.upload-file{
    font-family: 'Nunito', sans-serif;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */
    display: flex;
    align-items: center;
    color: #2B3C4E;
    border: 1.5px dashed #2B3C4E;
    border-radius: 2.87205px;
    padding: 15px 12px;
    width: 100%; 
    max-width: 211px;
    display: flex;
    justify-content: center;
}

input[type="date"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
}

form{
    overflow-x: hidden;
}

.form-input{
    display: flex;
    justify-content: center;
    gap: 62px;
    margin-top: 32px;
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

input[type=password]:focus, [type=date]:focus, [type=number]:focus, [type=text]:focus, [type=tel]:focus, [type=email]:focus {
  border: 3px solid #7557D3;
}

input[type=password], [type=text], [type=date], [type=number], [type=tel], [type=email]{
    padding-left: 10px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */
    color: #4F4F4F; 
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

.container-form{
    background: #FFFFFF;
    box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
    border-radius: 8px;
    max-width: 963px;
    width: 100%;
    margin: 0 auto 10px auto;
    padding: 53px 0px 39px 0px;
}

</style>