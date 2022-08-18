<template>
  <div class="main">
    <div class="header">
      <span class="headerText">
        Results - Batch 2<span class="material-symbols-outlined"> arrow_drop_down </span>
      </span>
      <br />

      <span class="subText">Comprises of all that applied for batch 2</span>
    </div>

    <div class="body">
      <div class="thead">
        <P>Name</P>
        <P>Email</P>
        <div class="text">
          <P>DOB - Age</P>
          <img src="../assets/arrowUpanddown.svg" />
        </div>
        <P>Address</P>
        <P>University</P>
        <div class="text">
          <P>CGPA</P>
          <img src="../assets/arrowUpanddown.svg" />
        </div>
        <div class="text">
          <P>Test Scores</P>
          <img src="../assets/arrowUpanddown.svg" alt="" />
        </div>
      </div>

      <div
        class="data"
        :class="{ active: isActive === true }"
        @click="() => (this.isActive = !this.isActive)"
      >
        <P>Ify Chinke</P>
        <P>ify@enyata.com</P>
        <P>12/09/19 - 22</P>
        <P>3 Sabo Ave, Yaba, Lagos</P>
        <P>University of Nigeria</P>
        <P>5.0</P>
        <p>15</p>
      </div>

      <div class="data">
        <p>Ify Chinke</p>
        <p>ify@enyata.com</p>
        <p>12/09/19 - 22</p>
        <p>3 Sabo Ave, Yaba, Lagos</p>
        <p>University of Nigeria</p>
        <p>5.0</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Entries View",
  components: {},
  data() {
    return {
      isActive: "false",
    };
  },
  methods: {},
};
</script>

<style scoped>
.main {
  /* background: #e5e5e5; */
  margin: 102px 0 0 42px;
}
.header {
  padding-bottom: 38px;
}
.headerText {
  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  font-size: 44px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
  padding: 0 14px 1px 0;
}
.subText {
  font-family: "Lato";
  font-style: italic;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #4f4f4f;
}
.thead {
  width: 1042px;
  height: 46px;
  background: #2b3c4e;
  display: flex;
  align-items: center;
  /* padding: 0 8px 0 42px; */
  justify-content: space-around;
  margin-bottom: 20px;
}
.thead p {
  font-family: "Lato";
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #ffffff;
}
.text {
  display: flex;
  align-items: center;
}
.text img {
  margin-left: 6px;
}
.data {
  display: flex;
  border-radius: 8px;
  width: 1042px;
  height: 66px;
  align-items: center;
  /* padding: 0 22px 0 18px; */
  justify-content: space-around;
}
.active {
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-left-color: #7557d3;
  border-left-style: solid;
  border-left-width: 7px;
}
.data p {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: left;
  color: #4f4f4f;
}
</style>
