<template>
  <div class="background">
    <p class="headText">Dashboard</p>

    <div class="cartWrap">
      <div class="cart">
        <div class="hr">
          <span class="cHeadT">Current Applications</span><br />
          <span class="num">233</span>
        </div>
        <hr id="Ist" />
        <div><span class="subText">Academy 2.0</span></div>
      </div>

      <div class="cart">
        <span class="cHeadT">Total Applications</span><br />
        <span class="num">4253</span>
        <hr id="Lnd" />
        <div>
          <span class="subText">All entries do far</span>
        </div>
      </div>

      <div class="cart">
        <div>
          <span class="cHeadT">Academy’s</span><br />
          <span class="num">4</span>
        </div>
        <hr id="Rrd" />
        <div><span class="subText">So far</span></div>
      </div>
    </div>

    <div class="mid">
      <p class="midHead">History</p>
      <p class="midSub">Last Update 18:24, 22/02/19</p>
    </div>

    <div class="bottom">
      <div class="batchWrap">
        <div class="batch" id="batch1">
          <p>Academy Batch 1</p>
          <p>15 students</p>
          <p>started 11/09/15</p>
        </div>

        <div class="batch">
          <p>Academy Batch 2</p>
          <p>15 students</p>
          <p>started 11/09/15</p>
        </div>

        <div class="batch">
          <p>Academy Batch 3</p>
          <p>15 students</p>
          <p>started 11/09/15</p>
        </div>
      </div>

      <div class="box">
        <p class="boxH">Create Assessment</p>
        <p class="boxSub">Create test question for an incoming academy students</p>
        <button class="boxBtn">Create Assessment</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: "false",
    };
  },
  methods: {
    activeTab() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>
.background {
  /* background: #e5e5e5; */
}
.headText {
  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
  padding: 108px 0 66px 0;
  margin-left: 47px;
}
.cartWrap {
  display: flex;
  margin-left: 56px;
}
.cart::-webkit-scrollbar {
  /* border-radius: 17px; */
  width: 6px;
}
.cart::-webkit-scrollbar-track {
  /* background: #cdcfd6; */
  background: #00f026;
}
.cart::-webkit-scrollbar-thumb {
  background: #031131;
  opacity: 0.7;
  border-radius: 17px;
  /* width: 6px; */
  /* height: 66.42px; */
}
.cart {
  margin-right: 100px;
}
.cHeadT {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #4f4f4f;
  margin: 0 0 8px 0;
}
.num {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 65px;
  color: #2b3c4e;
  /* margin: 0 0 11px 0; */
  width: 87px;
  height: 66px;
}
.subText {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #4f4f4f;
}

hr {
  height: 4px;
  border-radius: 4px;
  border: none;
  width: 148px;
  margin: 12px 0 10px 0;
}
#Ist {
  background: #006df0;
}
#Lnd {
  background: #00f026;
}
#Rrd {
  background: #f09000;
}
.mid {
  margin: 77px 0 0 60px;
}
.midHead {
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
  margin-bottom: 4px;
}
.midSub {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #4f4f4f;
  margin-bottom: 32px;
}
.bottom {
  display: flex;
  margin-left: 56px;
}
.batchWrap {
  margin-right: 67px;
}
.batch {
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  width: 482px;
  align-items: center;
  height: 66px;
  padding: 0 21px 0 25px;
}
#batch1 {
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  background: #ffffff;
  border-left-color: #7557d3;
  border-left-style: solid;
  border-left-width: 7px;
}
.batch p {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #4f4f4f;
}
.box {
  border: 1px solid #ececf9;
  border-radius: 4px;
  width: 482px;
  /* height: 307px; */
  padding: 26px 0 80px 31px;
}
.boxH {
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
  margin-bottom: 70px;
}
.boxSub {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16.7273px;
  line-height: 23px;
  color: #4f4f4f;
  width: 342.91px;
  height: 46px;
  text-align: center;
  margin: 0 auto;
  padding-bottom: 24px;
}
.boxBtn {
  background: #b1b1b1;
  border-radius: 4px;
  width: 205px;
  height: 41px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  border: none;
  /* margin: 0 auto; */
  margin-left: 118px;
}
</style>
