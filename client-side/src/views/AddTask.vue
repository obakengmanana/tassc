<template>
    <div class="add-task-container">
      <h1>Add New Task</h1>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Task Name</label>
          <input v-model="task.name" type="text" id="name" placeholder="Task Name" required />
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <textarea v-model="task.description" id="description" placeholder="Description" required></textarea>
        </div>
        <div class="form-group">
          <label for="status">Status</label>
          <select v-model="task.status" id="status" required>
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
        </div>
        <div class="form-group">
          <label for="dueDate">Due Date</label>
          <input v-model="task.dueDate" type="date" id="dueDate" required />
        </div>
        <button type="submit" class="btn-primary">Add Task</button>
      </form>
    </div>
  </template>
  
  <script>
  import { addTask } from '../services/taskService';
  
  export default {
    name: 'AddTask',
    data() {
      return {
        task: {
          name: '',
          description: '',
          status: 'Pending',
          dueDate: ''
        }
      };
    },
    methods: {
      async handleSubmit() {
        try {
          await addTask(this.task);
          this.$router.push('/tasks');
        } catch (error) {
          console.error('Error adding task:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .add-task-container {
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
  }
  
  .add-task-container .form-group {
    margin-bottom: 15px;
    text-align: left;
  }
  
  .add-task-container label {
    display: block;
    margin-bottom: 5px;
  }
  
  .add-task-container input,
  .add-task-container textarea,
  .add-task-container select {
    width: 100%;
    padding: 10px;
    border: 1px solid #eaeaea;
    border-radius: 5px;
    box-sizing: border-box;
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
  