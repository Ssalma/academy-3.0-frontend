<template>
  <div class="applicant-dashboard">
    <section class="left">
        <figure class="user-info">
            <img src="../assets/userImage.svg" alt="Image of the user">
            <figcaption>Jane Doe</figcaption>
            <figcaption>doe@enyata.com</figcaption>
        </figure>
        <div>
            <h3 class="dashboard-text"><span><img src="../assets/timer.svg" alt=""></span> Dashboard</h3>
            <h3 class="dashboard-text"><span><img src="../assets/assessment.svg" alt=""></span> Assessmnet</h3>
            <h3 class="dashboard-text"><span><img src="../assets/logout.svg" alt=""></span> Log Out</h3>
        </div>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.applicant-dashboard{
    width: 100%;
    max-width: 1440px;
}

.user-info{
    width: 292px;
    padding: 75px 0px 38px 0px; 
    text-align: center;

}
</style>