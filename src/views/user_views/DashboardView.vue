<template>
<the-layout>
  <template v-slot:side-nav>
     <SideNav />
  </template>
  <template v-slot:main-content>
     <h2>Dashboard</h2>
      <p>
        Your Application is currently being review, you wil be notified if
        successful
      </p>

      <div class="application-info">
        <div class="date">
          <p>Date of Application</p>
          <h3>09.09.19</h3>
          <div></div>
          <p>4 days since applied</p>
        </div>
        <div class="status">
          <p>Application Status</p>
          <h3>Pending</h3>
          <div></div>
          <p>We will get back to you</p>
        </div>
      </div>

      <div class="card-container">
        <div class="card">
          <h4>Updates</h4>
        </div>
        <div class="card">
          <h4>Take Assessment</h4>
          <div class="assessment-container">
            <p>
              We have 4 days left until the next assessment Watch this space
            </p>
            <button>Take Assessment</button>
          </div>
        </div>
      </div>
  </template>
</the-layout>
 
</template>

<script>
import SideNav from "@/components/UserSideNav.vue";
import TheLayout from "@/components/TheLayout.vue";

export default {
  components: {
    SideNav,TheLayout
  },
};
</script>

<style lang="scss" scoped>
h2 {
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
  margin-bottom: 14px;
}

p {
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #2b3c4e;
  font-style: italic;
}

.application-info {
  display: flex;
  gap: 0 87px;
  margin-top: 61px;

  .date {
    p {
      margin-bottom: 11px;
    }
    div {
      width: 148px;
      height: 4px;
      background: #006df0;
      border-radius: 4px;
      margin-bottom: 9px;
    }
  }

  .status {
    p {
      margin-bottom: 11px;
    }
    div {
      width: 148px;
      height: 4px;
      background: #f09000;
      border-radius: 4px;
      margin-bottom: 9px;
    }
  }

  h3 {
    margin-bottom: 11px;
    font-weight: 300;
    font-size: 48px;
    line-height: 58px;
  }
}

.card-container {
  margin-top: 97px;
  display: flex;
  gap: 0 67px;
  .card {
    padding: 25px 34px;
    width: 482px;
    height: 453px;
    border: 1px solid #ececf9;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 144px 0;
  }
  .assessment-container {
    justify-self: center;
    align-self: center;
    text-align: center;
    p {
      font-style: normal;
      width: 342.91px;
      font-weight: 400;
      font-size: 16.7273px;
      line-height: 20px;
      text-align: center;
      color: #4f4f4f;
    }

    button {
      width: 205px;
      margin-top: 24px;
      height: 41px;
      color: #fff;
      background: #b1b1b1;
      border-radius: 4px;
      border: none;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      cursor: pointer;
    }
  }
}
</style>