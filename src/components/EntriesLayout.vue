<template>
  <div class="main">
    <div class="header">
      <span class="headerText">
        Entries - Batch 2<span class="material-symbols-outlined"> arrow_drop_down </span>
      </span>
      <br />

      <span class="subText">Comprises of all that applied for batch 2</span>
    </div>

    <div class="tWrap">
      <div class="head">
        <p>Name</p>
        <p>Email</p>
        <p>
          DOB - Age
          <img src="../assets/arrowUpanddown.svg" alt="" />
        </p>
        <p>Address</p>
        <p>University</p>
        <p>CGPA<img src="../assets/arrowUpanddown.svg" class="arrow" /></p>
      </div>

      <div class="body">
        <div
          class="data"
          :class="{ active: isActive === true }"
          @click="() => (this.isActive = !this.isActive)"
        >
          <p>Ify Chinke</p>
          <p>ify@enyata.com</p>
          <p>12/09/19 - 22</p>
          <p>3 Sabo Ave, Yaba, Lagos</p>
          <p>University of Nigeria</p>
          <p>5.0</p>
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
  </div>
</template>

<script>
export default {
  name: "Entries View",
  components: {},
  data() {
    return {
      isActive: "false",
      isVisibility: "false",
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
  padding: 0 16px 1px 0;
}
.subText {
  font-family: "Lato";
  font-style: italic;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #4f4f4f;
}
.head {
  width: 1042px;
  height: 46px;
  background: #2b3c4e;
  /* padding: 0 42px; */
  margin-bottom: 20px;
  align-items: center;
  display: flex;
  justify-content: space-around;
}
.head p {
  font-family: "Lato";
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #ffffff;
}
.arrow {
  margin-left: 2px;
}
.data {
  width: 1042px;
  height: 66px;
  border-radius: 8px;
  align-items: center;
  display: flex;
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
  text-align: center;
  color: #4f4f4f;
}
</style>
