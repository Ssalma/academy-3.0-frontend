<template>
  <div class="container-nav">
    <figure>
      <img src="../assets/heroLogo.svg" alt="Enyata Logo">
    </figure>
    <ul>
      <router-link :to="{ name: 'home'}"><li>Home</li></router-link>
      <router-link :to="{ name: 'signin'}"><li>Sign in</li></router-link>
      <router-link :to="{ name: 'signup'}"><li class="register-now">Register Now</li></router-link>
    </ul>

  </div>
    
</template>

<script>
export default {

}
</script>

<style scoped>
.container-nav{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

a{
  text-decoration: none;
  position: relative;
}

ul{
  display: flex;
  list-style-type: none;
  gap: 40px;
  align-items: center;
}

li{
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(33, 31, 38, 0.71);

}

.register-now{
  padding: 12px 20px;
  border: 1px solid rgba(117, 87, 211, 0.4);
  border-radius: 2px;
  color: #7557D3;
} 

</style>