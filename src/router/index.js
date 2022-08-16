import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpView from '../views/SignUpView.vue'
import SignInView from '../views/SignInView.vue'
import ApplicationView from '../views/ApplicationView.vue'
import DashboardView from '../views/DashboardView.vue'
import AssessmentDashboardView from '../views/AssessmentView.vue'
import ForgotView from '../views/ForgetView.vue'
import TakeAssessmentView from '../views/TakeAssessmentView.vue'
import ThankYouAssessmentView from '../views/ThankYouView.vue'

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
    component: ApplicationView
  },
  {
    path: '/applicantdashboard',
    name: 'applicantdashboard',
    component: DashboardView
  },
  {
    path: '/assessmentdashboard',
    name: 'assessmentdashboard',
    component: AssessmentDashboardView
  },
  {
    path: '/takeassessmentdashboard',
    name: 'takeassessmentdashboard',
    component: TakeAssessmentView
  },
  {
    path: '/thankyouassessmentdashboard',
    name: 'thankyoussessmentdashboard',
    component: ThankYouAssessmentView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router