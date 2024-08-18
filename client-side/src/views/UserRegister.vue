<template>
  <div class="register-container">
    <h1>Register</h1>
    <form @submit.prevent="handleRegister">
      <div class="form-group">
        <label for="name">Name</label>
        <input v-model="name" type="text" id="name" placeholder="Name" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input v-model="email" type="email" id="email" placeholder="Email" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input v-model="password" type="password" id="password" placeholder="Password" required />
      </div>
      <button type="submit" class="btn-primary">Register</button>
    </form>
    <div class="back-to-login">
      <button @click="goToLogin" class="btn-secondary">Back to Login</button>
    </div>
  </div>
</template>

<script>
import { register } from '../services/authService';

export default {
  name: 'UserRegister',
  data() {
    return {
      name: '',
      email: '',
      password: '',
    };
  },
  methods: {
    async handleRegister() {
      try {
        const { token } = await register({ name: this.name, email: this.email, password: this.password });
        localStorage.setItem('token', token);
        this.$router.push('/');
      } catch (error) {
        console.error('Registration error:', error);
      }
    },
    goToLogin() {
      this.$router.push('/login');
    }
  },
};
</script>

<style scoped>
.register-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: Arial, sans-serif;
}

.register-container h1 {
  margin-bottom: 10px;
}

.register-container .form-group {
  margin-bottom: 15px;
  text-align: left;
}

.register-container label {
  display: block;
  margin-bottom: 5px;
}

.register-container input {
  width: 100%;
  padding: 10px;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  box-sizing: border-box;
}

.btn-primary, .btn-secondary {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.btn-primary {
  background-color: #000;
  color: #fff;
}

.btn-primary:hover {
  background-color: #333;
}

.btn-secondary {
  background-color: #f1f1f1;
  color: #000;
}

.btn-secondary:hover {
  background-color: #ddd;
}

.back-to-login {
  margin-top: 20px;
}
</style>
