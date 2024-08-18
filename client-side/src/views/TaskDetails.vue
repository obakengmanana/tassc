<template>
  <div class="task-details-container">
    <h1>Task Details</h1>
    <div class="task-details" v-if="task">
      <p><strong>Name:</strong> {{ task.name }}</p>
      <p><strong>Description:</strong> {{ task.description }}</p>
      <p><strong>Status:</strong> {{ task.status }}</p>
      <p><strong>Due Date:</strong> {{ formatDate(task.dueDate) }}</p>
    </div>
    <p v-else>Loading task details...</p>
    <button @click="goBack" class="btn-primary">Back to Tasks</button>
  </div>
</template>

<script>
import { getTask } from "../services/taskService";

export default {
  name: "TaskDetails",
  data() {
    return {
      task: null, // Initially, no task data is loaded
    };
  },
  methods: {
    goBack() {
      this.$router.push("/tasks");
    },
    formatDate(date) {
      return new Date(date).toLocaleDateString("en-GB"); // Format as 'dd/mm/yyyy'
    },
  },
  async mounted() {
    try {
      const taskId = this.$route.params.id;
      const task = await getTask(taskId);
      this.task = task;
    } catch (error) {
      console.error("Error fetching task details:", error);
    }
  },
};
</script>

<style scoped>
.task-details-container {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  text-align: left;
}

.task-details p {
  margin-bottom: 10px;
}

.btn-primary {
  display: inline-block;
  margin-top: 20px;
  background-color: #000;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
}

.btn-primary:hover {
  background-color: #333;
}
</style>
