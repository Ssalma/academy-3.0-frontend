import { createRouter, createWebHistory } from 'vue-router'
import AdminHomeView from '../views/adminViews/HomeView.vue'
import DashBoard from '../views/adminViews/DashBoard.vue'
import CreateAssessment from '../views/adminViews/CreateAssessment.vue'
import ApplicationEntries from '../views/adminViews/ApplicationEntries.vue'
import ComposeAssessment from "../views/adminViews/ComposeAssessment.vue"
import AssessmentHistory from "../views/adminViews/AssessmentHistory.vue"
import ResultsView from "../views/adminViews/Results.vue"
import Settings from "../views/adminViews/SettingsProfile.vue"
import HomeView from '../views/user/HomeView.vue'
import SignUpView from '../views/user/SignUpView.vue'
import SignInView from '../views/user/SignInView.vue'
import ApplicationView from '../views/user/ApplicationView.vue'
import DashboardView from '../views/user/DashboardView.vue'
import AssessmentDashboardView from '../views/user/AssessmentView.vue'
import ForgotView from '../views/user/ForgetView.vue'
import TakeAssessmentView from '../views/user/TakeAssessmentView.vue'
import ThankYouAssessmentView from '../views/user/ThankYouView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/signup',
    name: 'signup',
    component: SignUpView
  },

  {
    path: '/signin',
    name: 'signin',
    component: SignInView
  },
  {
    path: '/forgot',
    name: 'forgot',
    component: ForgotView
  },
  {
    path: '/applicationform',
    name: 'applicationform',
    component: ApplicationView,
    meta: { requiresAuth: true },
  },
  {
    path: '/applicantdashboard',
    name: 'applicantdashboard',
    component: DashboardView,
    meta: { requiresAuth: true },
  },
  {
    path: '/assessmentdashboard',
    name: 'assessmentdashboard',
    component: AssessmentDashboardView,
    meta: { requiresAuth: true },
  },
  {
    path: '/takeassessmentdashboard',
    name: 'takeassessmentdashboard',
    component: TakeAssessmentView,
    meta: { requiresAuth: true },
  },
  {
    path: '/thankyouassessmentdashboard',
    name: 'thankyoussessmentdashboard',
    component: ThankYouAssessmentView,
    meta: { requiresAuth: true },
  },
  {
    path: '/adminHome',
    name: 'adminhome',
    component: AdminHomeView
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
})

router.beforeEach((to) => {
  const token = localStorage.getItem("token");
  let loggedIn = false;
  if (token) {
    // const decoded = jwt_decode(token);
    // const expiryDate = new Date(decoded.exp * 1000);
    // const now = new Date();
    // if (now < expiryDate)
    loggedIn = true;
  }
  if (to.meta.requiresAuth && !loggedIn) {
    return "/";
  }

  // return true or nothing: navigation is valid
  // return false: breaks navigation
  // return route: redirects to that route
});

export default router
