<template>
  <button
    class="defColor"
    :style="[isActive ? { backgroundColor: 'green' } : '']"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
    },
    isActive: {
      type: Boolean,
    },
  },
};
</script>

<style scoped>
.defColor {
  padding: 12px 24px;
  color: #ffffff;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  background: #7557d3;
  border-radius: 2px;
  border: none;
  align-items: center;
  cursor: pointer;
}

.signup-btn {
  padding: 16px 233px;
  border: none;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  border-radius: 4px;
  cursor: pointer;
}

.signin-btn {
  border-radius: 4px;
  width: 379px;
  height: 48px;
  border: none;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  background-color: #7557d3;
  cursor: pointer;
}

.takeassessment-btn {
  padding: 11px 42px;
  border: none;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
  background: #b1b1b1;
  border-radius: 4px;
  margin-top: 24px;
  cursor: pointer;
}

.previous-btn {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #211f26;
  padding: 10px 32px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
}

.next-btn {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  padding: 10px 32px;
  border-radius: 4px;
  background: #7557d3;
  cursor: pointer;
}

.finish-btn {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */
  color: #211f26;
  padding: 11px 81px;
  border-radius: 4px;
  background: #cecece;
  color: #ffffff;
}

.home-btn {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */
  color: #211f26;
  padding: 11px 81px;
  border-radius: 4px;
  background: #7557d3;
  color: #ffffff;
}
</style>
