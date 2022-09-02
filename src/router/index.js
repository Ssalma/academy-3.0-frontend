import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashBoard from '../views/DashBoard.vue'
import CreateAssessment from '../views/CreateAssessment.vue'
import ApplicationEntries from '../views/ApplicationEntries.vue'
import ComposeAssessment from "../views/ComposeAssessment.vue"
import AssessmentHistory from "../views/AssessmentHistory.vue"
import ResultsView from "../views/Results.vue"
import Settings from "../views/SettingsProfile.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
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
