import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/adminViews/HomeView.vue'
import DashBoard from '../views/adminViews/DashBoard.vue'
import CreateAssessment from '../views/adminViews/CreateAssessment.vue'
import ApplicationEntries from '../views/adminViews/ApplicationEntries.vue'
import ComposeAssessment from "../views/adminViews/ComposeAssessment.vue"
import AssessmentHistory from "../views/adminViews/AssessmentHistory.vue"
import ResultsView from "../views/adminViews/Results.vue"
import Settings from "../views/adminViews/SettingsProfile.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  {
    path:'/dashboard',
    name:'DashBoard',
    component:DashBoard,
    meta: { requiresAuth: true },
    
  },
  {
    path:'/createAssessment',
    name:"FormAssesment",
    component: CreateAssessment,
    meta: { requiresAuth: true },
  },
  {
    path:"/applicationEntries",
    name:"ApplicationEntries",
    component: ApplicationEntries,
    meta: { requiresAuth: true },
  },
  {
    path:"/composeAssessment",
    name:"ComposeAssessment",
    component: ComposeAssessment,
    meta: { requiresAuth: true },
  },
  {
     path:"/AssessmentHistory",
      name:"AssessmentHistory",
      component: AssessmentHistory,
      meta: { requiresAuth: true },
  },
  {
    path:"/results",
    name:"Results",
    component: ResultsView,
    meta: { requiresAuth: true },
  },
  {
    path:"/settingsProfile",
    name:"Settings",
    component:Settings,
    meta: { requiresAuth: true },
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to) => {
  const token = localStorage.getItem("token");
  let loggedIn = false;
  if (token) {
     loggedIn = true;
  }
  if (to.meta.requiresAuth && !loggedIn) {
    return "/";
  }

  });


export default router
