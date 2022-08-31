<template>
  <div class="main">
    <p class="headerText">Assessment History</p>

    <table class="tWrap">
      <thead class="head">
        <th width="20%">Batch</th>
        <th>Date Composed</th>
        <th width="30%">No of Questions</th>
        <th>Time Allocated</th>
        <th>Status</th>
      </thead>

      <tbody>
        <tr
          class="data"
          :class="{ active: isActive === true }"
          @click="() => (this.isActive = !this.isActive)"
        >
          <td width="20%">Batch 1</td>
          <td>{{ date }}</td>
          <td class="num">{{ noOfQuestions }}</td>
          <td>{{ time }} mins</td>
          <td>Taken</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HistoryView',
  components: {},
  async created() {
    await this.getAllAssessments();
  },
  data() {
    return {
      isActive: 'false',
      date: null,
      noOfQuestions: null,
      time: null,
    };
  },
  methods: {
    async getAllAssessments() {
      let token = localStorage.getItem('token');
      let res = await axios.get(
        'http://localhost:5000/api/v1/auth/assessments/all',
        {
          headers: { token: token },
        }
      );
      const assessments = res.data.data;
      this.noOfQuestions = assessments.length;
      if (this.noOfQuestions > 0) {
        const date = assessments[0].createdAt;
        this.date = `${date.substr(8, 2)}/${date.substr(5, 2)}/${date.substr(
          2,
          2
        )}`;
      } else {
        this.date = '-';
      }

      let timer = await axios.get('http://localhost:5000/api/v1/auth/timer', {
        headers: { token: token },
      });
      this.time = timer.data.data.minutes;
    },
  },
};
</script>

<style scoped>
.main {
  margin-left: 42px;
}
.headerText {
  font-family: 'Lato';
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

  width: 946px;
  height: fit-content;
  border-collapse: collapse;
}

.head {
  background: #2b3c4e;
  width: 100%;
  height: 42px;
  margin-bottom: 28px;
  font-family: 'Lato';
  font-size: 12.7167px;
  line-height: 15px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 20px;
}
tbody {
  margin-top: 20px;
  border-radius: 8px;
}

.data {
  height: 42px;
  border-radius: 8px;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 14.5333px;
  line-height: 17px;
  color: #4f4f4f;
  text-align: center;
}
.active {
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-left-color: #7557d3;
  border-left-style: solid;
  border-left-width: 7px;
}

.num {
  width: 88px;
}
</style>
