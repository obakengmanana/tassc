import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import UserLogin from '../views/UserLogin.vue';
import UserRegister from '../views/UserRegister.vue';
import TaskList from '../views/TaskList.vue';
import TaskDetails from '../views/TaskDetails.vue';
import AddTask from '../views/AddTask.vue';
import EditTask from '../views/EditTask.vue'; 
import EditProfile from '../views/EditProfile.vue';

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/login', name: 'UserLogin', component: UserLogin },
  { path: '/register', name: 'UserRegister', component: UserRegister },
  { path: '/tasks', name: 'TaskList', component: TaskList },
  { path: '/task/:id', name: 'TaskDetails', component: TaskDetails, props: true },
  { path: '/add-task', name: 'AddTask', component: AddTask },
  { path: '/edit-task/:id', name: 'EditTask', component: EditTask, props: true },
  { path: '/profile', name: 'EditProfile', component: EditProfile }

];

const router = createRouter({
  history: createWebHistory(), // Updated usage
  routes,
});

export default router;


