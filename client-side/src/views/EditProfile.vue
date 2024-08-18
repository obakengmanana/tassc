<template>
  <div class="edit-profile-container">
    <h1>Edit Profile</h1>
    <form @submit.prevent="handleEdit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          v-model="user.name"
          type="text"
          id="name"
          placeholder="Name"
          required
        />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          v-model="user.email"
          type="email"
          id="email"
          placeholder="Email"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          v-model="user.password"
          type="password"
          id="password"
          placeholder="New Password"
        />
      </div>
      <button type="submit" class="btn-primary">Save Changes</button>
    </form>
    <div class="back-to-profile">
      <button @click="goToProfile" class="btn-secondary">
        Back to Profile
      </button>
    </div>

    <!-- Popup for success message -->
    <div v-if="showPopup" class="popup">
      <p>Changes have been saved successfully!</p>
      <button @click="goToTasks">Go Back to Task List</button>
    </div>
  </div>
</template>

<script>
import { getProfile, updateProfile } from "../services/userService";

export default {
  name: "EditProfile",
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
      },
      showPopup: false, // Control the display of the popup
    };
  },
  async created() {
    try {
      const user = await getProfile();
      this.user = { ...user };
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  },
  methods: {
    async handleEdit() {
      try {
        await updateProfile(this.user);
        this.showPopup = true; // Show the popup on successful update
      } catch (error) {
        console.error("Error updating profile:", error);
      }
    },
    goToProfile() {
      this.$router.push("/profile");
    },
    goToTasks() {
      this.$router.push("/tasks"); // Redirect to the task list
      this.showPopup = false; // Hide the popup after navigation
    },
  },
};
</script>

<style scoped>
.edit-profile-container {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: Arial, sans-serif;
}

.edit-profile-container h1 {
  margin-bottom: 10px;
}

.edit-profile-container .form-group {
  margin-bottom: 15px;
  text-align: left;
}

.edit-profile-container label {
  display: block;
  margin-bottom: 5px;
}

.edit-profile-container input {
  width: 100%;
  padding: 10px;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  box-sizing: border-box;
}

.btn-primary,
.btn-secondary {
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

.back-to-profile {
  margin-top: 20px;
}

/* Popup styles */
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  text-align: center;
}

.popup p {
  margin-bottom: 20px;
  font-size: 18px;
  color: #333;
}

.popup button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}

.popup button:hover {
  background-color: #0056b3;
}
</style>
