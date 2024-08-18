<template>
  <div class="login-container">
    <h1>Login</h1>
    <p>Enter your email below to login to your account</p>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="email">Email</label>
        <input v-model="email" type="email" id="email" placeholder="m@example.com" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <div class="password-container">
          <input v-model="password" type="password" id="password" placeholder="Password" required />
          <a href="#" class="forgot-password">Forgot your password?</a>
        </div>
      </div>
      <button type="submit" class="btn-primary">Login</button>
    </form>
    <!--<button class="btn-secondary" @click="loginWithGoogle">Login with Google</button>-->
    <p class="sign-up">
      Don't have an account? <router-link to="/register">Sign up</router-link>
    </p>
  </div>
</template>

<script>
import { login } from '../services/authService';

export default {
  name: 'UserLogin',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async handleLogin() {
      try {
        const { token } = await login({ email: this.email, password: this.password });
        localStorage.setItem('token', token);
        this.$router.push('/tasks');
      } catch (error) {
        console.error('Login error:', error);
      }
    },
    loginWithGoogle() {
      console.log('Logging in with Google');
      // Add logic for Google login if needed
    }
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: Arial, sans-serif;
}

.login-container h1 {
  margin-bottom: 10px;
}

.login-container p {
  margin-bottom: 20px;
  color: #777;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  box-sizing: border-box;
}

.password-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.forgot-password {
  font-size: 0.9em;
  color: #007bff;
  text-decoration: none;
}

.forgot-password:hover {
  text-decoration: underline;
}

.btn-primary {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #333;
}

.btn-secondary {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  color: #000;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  cursor: pointer;
}

.btn-secondary:hover {
  background-color: #ddd;
}

.sign-up {
  margin-top: 10px;
}

.sign-up a {
  color: #007bff;
  text-decoration: none;
}

.sign-up a:hover {
  text-decoration: underline;
}
</style>
