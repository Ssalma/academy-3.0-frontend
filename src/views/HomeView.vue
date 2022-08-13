<template>
  <div class="container">
    <figure class="layer">
      <img src="../assets/Layer.svg" alt="image of the layer">
    </figure>
    <app-nav></app-nav>
    
    <main>
      <div class="hero-main">
        <section class="hero-text-container">
          <h1 class="hero-text">Ever had a Dream of Becoming a Software <span class="engineerColor">Engineer</span></h1>
          <p class="hero-para">Join enyata academy today and bring your long awaiting dream to reality.</p>
          <app-button :text="registerbtnText"></app-button>
        </section>
        <figure>
          <img src="../assets/manChildImage.svg" alt="Image of a man teaching his child on a computer">
        </figure>
      </div>
      <div class="before-card">
        <hr class="horizontal-rule">
        <span class="why-us">Why us?</span>
      </div>
      <div class="card-container">  
        <app-card class="card-default" :topHeader="cardInfo.firstCardTopHeaderText" :topPara="cardInfo.firstCardTopParaText"></app-card>
        <app-card class="card-alternative" :topHeader="cardInfo.secondCardTopHeaderText" :topPara="cardInfo.firstCardTopParaText"></app-card>
        <app-card class="card-default" :topHeader="cardInfo.thirdCardTopHeaderText" :topPara="cardInfo.firstCardTopParaText"></app-card>
        <app-card class="card-alternative" :topHeader="cardInfo.fourthCardTopHeaderText" :topPara="cardInfo.firstCardTopParaText"></app-card>
      </div>
    </main>
  </div>
  <app-footer></app-footer>
  
</template>

<script>
import NavigationComponentView from "../components/navigationComponentView.vue"
import buttonVue from "@/components/buttonComponent.vue";
import cardContainerVue from "@/components/cardContainer.vue";
import footerComponentVue from "@/components/footerComponent.vue";
export default {
    components:{
        "app-nav": NavigationComponentView,
        "app-button": buttonVue,
        "app-card": cardContainerVue,
        "app-footer": footerComponentVue,
    },
    data(){
      return{
        registerbtnText: "Register Now",
        cardInfo:{
          firstCardTopHeaderText: "Learn from the best",
          firstCardTopParaText: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation amet.",
          secondCardTopHeaderText: "100% online classes",
          thirdCardTopHeaderText: "Get paid while learning",
          fourthCardTopHeaderText: "Work on real project",
          }
      }
    }
}
</script>

<style scoped>
.container{
  position: relative;
  max-width: 1440px;
  width: calc(100% - 272px);
  margin: 0 auto;
  padding: 46px 0px 0px 0px;
}

main{
  margin: 110px 0px 0px 0px;
}

.layer{
  position: absolute;
  right: -110px;
  top: 0px;
}

.hero-main{
  display: flex;
  justify-content: space-between;
}

.hero-text-container{
  margin-top: 101px;
}

.hero-main img{
  position: relative;
  width: 100%;
  max-width: 582px;
  z-index: 1;
  margin-bottom: 134px;
}

.hero-text{
  width: 100%;
  max-width: 483px;
  font-style: normal;
  font-weight: 700;
  font-size: 40.9082px;
  line-height: 57px;
  letter-spacing: 0.035em;
  color: #211F26;
}

.engineerColor{
  color: #7557D3;
}

.hero-para{
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.02em;
  color: rgba(33, 31, 38, 0.71);
  width: 100%;
  max-width: 510px;
  margin: 23px 0px 32px 0px;
}

.before-card{
  display: flex;
  align-items: center;
  margin-bottom: 40px;
}

.horizontal-rule{
  width: 34px;
  height: 5px;
  background: #FDC840;
  border-radius: 2px;
  margin-right: 16px;
  border: none;
}

.why-us{
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 140%;
  /* identical to box height, or 34px */
  letter-spacing: 0.01em;
  color: #211F26;
}

.card-container{
  margin-top: 40px;
  display: flex;
}





</style>