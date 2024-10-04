<template>
  <div class="home-container">
    <div class="logo-container">
      <img src="@/assets/logo4.png" alt="Logo" class="logo"/>
    </div>
    <button @click="goToLogin" class="btn-primary">Proceed</button>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    goToLogin() {
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.logo {
  width: 200px;
  height: auto;
}


.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  font-family: Arial, sans-serif;
}

.logo-container {
  margin-bottom: 20px;
}

.logo {
  max-width: 100%;
  height: auto;
}

.btn-primary {
  width: 200px;
  padding: 10px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  background-color: #000;
  color: #fff;
}

.btn-primary:hover {
  background-color: #333;
}
</style>
