<template>
  <button class="defColor">{{text}}</button>
</template>

<script>
export default {
props: {
    text:{
        type: String
    }
}
}
</script>

<style scoped>
.defColor{
    padding: 12px 24px;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    background: #7557D3;
    border-radius: 2px;
    border: none;
    align-items: center;
}

.signup-btn{
    padding: 16px 233px;
    border: none;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
}

</style>