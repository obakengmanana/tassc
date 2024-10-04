<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar">
      <div class="navbar-logo">
        <router-link to="/">
          <img src="@/assets/logo4.png" alt="Logo" class="logo" />
        </router-link>
      </div>
    </nav>

    <!-- Task List Section -->
    <div class="task-list-container">
      <div class="header">
        <h1>Tasks</h1>
        <div class="header-buttons">
          <router-link to="/profile" class="btn-secondary">Profile</router-link>
          <button @click="logout" class="btn-secondary">Logout</button>
          <router-link to="/add-task" class="btn-primary">Add Task</router-link>
          <button @click="exportToPDF" class="btn-primary">Export to PDF</button>
        </div>
      </div>

      <!-- User Info Section -->
      <div class="user-info" v-if="user">
        <div class="user-card">
          <div class="user-details">
            <p class="user-name">Logged in as: <strong>{{ user.name }}</strong></p>
            <p class="user-email">Email: <strong>{{ user.email }}</strong></p>
          </div>
        </div>
      </div>

      <table class="task-table" v-if="paginatedTasks.length">
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="task in paginatedTasks" :key="task._id">
            <td>{{ task.name }}</td>
            <td>{{ task.description }}</td>
            <td>{{ task.status }}</td>
            <td>{{ formatDate(task.dueDate) }}</td>
            <td>
              <button @click="viewDetails(task._id)" class="btn-action">View Details</button>
              <button @click="editTask(task._id)" class="btn-action">Edit</button>
              <button @click="confirmDelete(task._id)" class="btn-action">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <p v-else>No tasks available</p>

      <!-- Pagination Control -->
      <div class="pagination">
        <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
      </div>

      <!-- Popup for success message -->
      <div v-if="showPopup" class="popup">
        <p>Task has been deleted successfully!</p>
        <button @click="goToTasks">Go Back to Task List</button>
      </div>

      <!-- Confirmation Dialog -->
      <div v-if="showConfirmDialog" class="confirm-dialog">
        <p>Are you sure you want to delete this task?</p>
        <button @click="deleteTask(taskToDelete)" class="btn-primary">Yes</button>
        <button @click="showConfirmDialog = false" class="btn-secondary">No</button>
      </div>
    </div>
  </div>
</template>

<script>
import { getTasks, deleteTask } from "../services/taskService";
import { logout as logoutService, getUser } from "../services/authService";
import jsPDF from "jspdf";
import "jspdf-autotable";

export default {
  name: "TaskList",
  data() {
    return {
      tasks: [],
      showPopup: false,
      showConfirmDialog: false,
      taskToDelete: null,
      user: null,
      currentPage: 1,
      itemsPerPage: 5,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.tasks.length / this.itemsPerPage);
    },
    paginatedTasks() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.tasks.slice(start, start + this.itemsPerPage);
    },
  },
  async created() {
    try {
      // Fetch tasks
      const tasks = await getTasks();
      this.tasks = tasks;

      // Fetch user details
      const user = await getUser(); 
      this.user = user;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
  methods: {
    viewDetails(_id) {
      this.$router.push(`/task/${_id}`);
    },
    editTask(_id) {
      this.$router.push(`/edit-task/${_id}`);
    },
    confirmDelete(_id) {
      this.taskToDelete = _id;
      this.showConfirmDialog = true;
    },
    async deleteTask(_id) {
      try {
        await deleteTask(_id);
        this.tasks = this.tasks.filter((task) => task._id !== _id);
        this.showConfirmDialog = false;
        this.showPopup = true; // Show the popup on successful deletion
      } catch (error) {
        console.error("Error deleting task:", error);
      }
    },
    async logout() {
      try {
        await logoutService();
        localStorage.removeItem("token");
        this.$router.push("/login");
      } catch (error) {
        console.error("Error during logout:", error);
      }
    },
    formatDate(date) {
      return new Date(date).toLocaleDateString("en-GB");
    },
    goToTasks() {
      this.$router.push("/tasks"); // Redirect to the task list
      this.showPopup = false; // Hide the popup after navigation
    },
    exportToPDF() {
      const doc = new jsPDF();
      doc.setFontSize(12);

      const imgData = require("@/assets/logo4.png"); 
      const imgWidth = 40; // width for the image
      const imgHeight = 25; // height for the image
      const pageWidth = doc.internal.pageSize.getWidth();
      const x = (pageWidth - imgWidth) / 2; // Center the image horizontally
      doc.addImage(imgData, "PNG", x, 10, imgWidth, imgHeight); // Add image

      const text = "Tasks List";
      const textWidth = doc.getTextWidth(text);
      const titleYPosition = 10 + imgHeight + 10; // Position below the image
      const titleX = (pageWidth - textWidth) / 2;
      doc.setFont("helvetica", "bold");
      doc.text(text, titleX, titleYPosition); // Draw title text

      doc.setFont("helvetica", "normal");
      const columns = ["Task Name", "Description", "Status", "Due Date"];
      const rows = this.tasks.map((task) => [
        task.name,
        task.description,
        task.status,
        this.formatDate(task.dueDate),
      ]);

      doc.autoTable(columns, rows, { startY: titleYPosition + 10 });
      doc.save("tasks-list.pdf");
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
  },
};
</script>

<style scoped>
/* Navbar styling */
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: white;
  border: 2px solid rgba(0, 0, 0, 0.1); /* Initial border */
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); /* Fading border effect */
}

.navbar-logo img {
  width: 100px; /* Adjust the logo size */
  height: auto;
}

body {
  background-color: white;
}

/* User Info Section styles */
.user-info {
  margin-bottom: 20px;
}

.user-card {
  display: flex;
  align-items: center;
  background-color: #f9f9f9; /* Light background for contrast */
  border: 1px solid #eaeaea; /* Subtle border */
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.user-details {
  flex-grow: 1; /* Take up remaining space */
}

.user-name,
.user-email {
  margin: 0; /* Reset default margins */
  font-size: 1em; /* Set a standard font size */
}

.user-name strong,
.user-email strong {
  color: #333; /* Darker color for the strong text */
}

/* Task List styling */
.task-list-container {
  margin: 50px 50px;
  padding: 20px;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.header-buttons {
  display: flex;
  gap: 10px;
}

.task-table {
  width: 100%;
  border-collapse: collapse;
}

.task-table th,
.task-table td {
  padding: 10px;
  border-bottom: 1px solid #eaeaea;
  text-align: left;
}

.task-table th {
  background-color: #f9f9f9;
}

.btn-primary,
.btn-secondary,
.btn-action {
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
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

.btn-action {
  margin: 0 5px;
  background-color: #000;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
}

.btn-action:hover {
  background-color: #333;
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

/* Confirmation dialog styles */
.confirm-dialog {
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

.confirm-dialog p {
  margin-bottom: 20px;
  font-size: 18px;
  color: #333;
}

/* Pagination styles */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.pagination button {
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #000;
  color: #fff;
  margin: 0 5px;
}

.pagination button:disabled {
  background-color: #ddd;
  cursor: not-allowed;
}

.pagination span {
  margin: 0 10px;
}
</style>
