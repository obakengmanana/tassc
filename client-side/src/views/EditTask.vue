<template>
  <div class="edit-task-container">
    <h1>Edit Task</h1>
    <form @submit.prevent="handleEdit">
      <div class="form-group">
        <label for="name">Task Name</label>
        <input
          v-model="task.name"
          type="text"
          id="name"
          placeholder="Task Name"
          required
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea
          v-model="task.description"
          id="description"
          placeholder="Description"
          required
        ></textarea>
      </div>
      <div class="form-group">
        <label for="status">Status</label>
        <select v-model="task.status" id="status" required>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div class="form-group">
        <label for="dueDate">Due Date</label>
        <input v-model="task.dueDate" type="date" id="dueDate" required />
      </div>
      <button type="submit" class="btn-primary">Save Changes</button>
    </form>
    <div class="back-to-tasks">
      <button @click="goToTasks" class="btn-secondary">Back to Tasks</button>
    </div>

    <!-- Popup for success message -->
    <div v-if="showPopup" class="popup">
      <p>Task has been updated successfully!</p>
      <button @click="goToTasks">Go Back to Task List</button>
    </div>
  </div>
</template>

<script>
import { getTask, updateTask } from "../services/taskService";

export default {
  name: "EditTask",
  data() {
    return {
      task: {
        name: "",
        description: "",
        status: "",
        dueDate: "",
      },
      showPopup: false, // Control the display of the popup
    };
  },
  async created() {
    try {
      const taskId = this.$route.params.id;
      const task = await getTask(taskId);
      this.task = task;
    } catch (error) {
      console.error("Error fetching task:", error);
    }
  },
  methods: {
    async handleEdit() {
      try {
        await updateTask(this.task._id, this.task);
        this.showPopup = true; // Show the popup on successful update
      } catch (error) {
        console.error("Error updating task:", error);
      }
    },
    goToTasks() {
      this.$router.push("/tasks"); // Redirect to the task list
      this.showPopup = false; // Hide the popup after navigation
    },
  },
};
</script>

<style scoped>
.edit-task-container {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: Arial, sans-serif;
}

.edit-task-container h1 {
  margin-bottom: 10px;
}

.edit-task-container .form-group {
  margin-bottom: 15px;
  text-align: left;
}

.edit-task-container label {
  display: block;
  margin-bottom: 5px;
}

.edit-task-container input,
.edit-task-container textarea,
.edit-task-container select {
  width: 100%;
  padding: 10px;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  box-sizing: border-box;
}

.edit-task-container textarea {
  resize: vertical;
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

.back-to-tasks {
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
