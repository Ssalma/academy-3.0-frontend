<template>
  <div class="card-default">
    <h3>{{topHeader}}</h3>
    <p>{{topPara}}</p>
  </div>
</template>

<script>
export default {
    props:{
        topHeader:{
            type: String
        },
        topPara:{
            type: String
        }
    }
}
</script>

<style scoped>
.card-default{
    padding: 24px 26px 34px 24px;
    width: 292px;
    background: rgba(117, 87, 211, 0.1);
}

.card-alternative{
    padding: 24px 26px 34px 24px;
    width: 292px;
    background: #FFFFFF;
}

h3{
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 140%;
    /* or 22px */
    letter-spacing: 0.01em;
    color: #211F26;
}

p{
    margin-top: 12px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 156%;
    /* or 22px */
    letter-spacing: 0.01em;
    color: rgba(33, 31, 38, 0.6);
}

</style>