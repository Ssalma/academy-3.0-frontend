<template>
  <div class="main">
    <p class="headerText">Assessment History</p>

    <div class="tWrap">
      <div class="head">
        <p>Batch</p>
        <p>Date Compsed</p>
        <p>No of Questions</p>
        <p>Time Allocated</p>
        <p>Status</p>
      </div>

      <div
        class="data"
        :class="{ active: isActive === true }"
        @click="() => (this.isActive = !this.isActive)"
      >
        <p>Batch 1</p>
        <p>12/07/94</p>
        <p class="num">30</p>
        <p>30 mins</p>
        <p>Taken</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HistoryView",
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
  margin-left: 42px;
}
.headerText {
  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
}
.tWrap {
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-radius: 8px;
  width: fit-content;
  height: fit-content;
  padding: 42px 30px;
}
.tWrap::-webkit-scrollbar {
  width: 6px;
  height: 205px;
}
.tWrap::-webkit-scrollbar-thumb {
}
.tWrap ::-webkit-scrollbar-track {
  background: #cdcfd6;
}
.tWrap ::-webkit-scrollbar-track-piece {
  background: #031131;
  opacity: 0.7;
  border-radius: 17px;
  height: 120px;
}
.head {
  background: #2b3c4e;
  width: 946px;
  height: 42px;
  align-items: center;
  display: flex;
  justify-content: space-around;
  /* padding: 0 112px 0 58px; */
  margin-bottom: 28px;
}
.head p {
  font-family: "Lato";
  font-size: 12.7167px;
  line-height: 15px;
  text-align: center;
  color: #ffffff;
}
.data {
  width: 946px;
  height: 42px;
  align-items: center;
  display: flex;
  justify-content: space-around;
  /* padding: 0 112px 0 58px; */
  border-radius: 8px;
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
  font-size: 14.5333px;
  line-height: 17px;
  /* text-align: center; */
  color: #4f4f4f;
}
.num {
  width: 88px;
}
</style>
