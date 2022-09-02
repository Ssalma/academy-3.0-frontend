import { createRouter, createWebHistory } from 'vue-router'
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