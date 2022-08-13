<template>
<div class="main-dashboard">
        <div class="left">
            <dashboard-left></dashboard-left>
        </div>
        <div class="right">
            
        </div>
    </div> 
</template>

<script>
import leftDashboardComponentVue from '@/components/leftDashboardComponent.vue';

export default {
    components: {
        "dashboard-left": leftDashboardComponentVue,
    }
}
</script>

<style scoped>
.main-dashboard{
    display: flex;
    grid-template-columns: auto;
    max-width: 1440px;
    font-family: 'Lato';
    font-style: normal;
}

.left{
    width: 100%;
    max-width: 292px;
}

.right{
    width: 100%;
    margin: 107px 0px 86px 56px;
}

.dashboardmain-text{
    font-weight: 300;
    font-size: 43.5555px;
    line-height: 52px;
    letter-spacing: -0.02em;
    color: #2B3C4E;
}

.status{
    font-style: italic;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #2B3C4E;
    margin: 14px 0px 61px 0px;
}

.status-card{
    display: flex;
    justify-content: space-between;
    max-width: 485px;
    width: calc(100% - 20px);
}

.header{
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: left;
    color: #4F4F4F;
}

.status-text{
    font-weight: 300;
    font-size: 48px;
    line-height: 58px;
    text-align: center;
    color: #2B3C4E;
    margin-top: 11px;
}

.blue-horizonal{
    background: #006DF0;
    margin: 19px 0 9px 0px;
    height: 4px;
    width: 148px;
    border-radius: 4px;
    border: none;
}

.yellow-horizonal{
    background: #F09000;
    margin: 19px 0 9px 0px;
    height: 4px;
    width: 148px;
    border-radius: 4px;
    border: none;
}

.status-time{
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #4F4F4F;
}

.update-card{
    display: flex;
    gap: 40px;
}

.update-content{
    width: 100%;
    max-width: 422px;
    border: 1px solid #ECECF9;
    border-radius: 4px;
    padding: 25px 0px 99px 0px;
    margin-top: 97px;
    position: relative;
}

.update-header{
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.02em;
    color: #2B3C4E;
    margin-bottom: 87px;
}

.updatetext-content{
    width: calc(100% - 35px);
    margin: 0 auto;
}

ul{
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 74px;
}

.grey-horizonal{
    border: 1px solid #CECECE;
    width: 382px;
    background: #CECECE;
    height: 0.5px;
    opacity: 50%;
}


.assessment-info{
    font-weight: 400;
    font-size: 15.7273px;
    line-height: 20px;
    text-align: center;
    color: #4F4F4F;
    position: absolute;
    margin: 0 auto;
    top: 50%;
    transform: translate(0, -50%);
}

</style>