import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignUpView from "@/views/user_views/SignUpView.vue"
import LoginView from "@/views/user_views/LoginView.vue"
import PreDashboardView from "@/views/user_views/PreDashboardView.vue"
import ForgetPasswordView from "@/views/user_views/ForgetPasswordView.vue"
import DashboardView from "@/views/user_views/DashboardView.vue"
import AssessmentView from "@/views/user_views/AssessmentView.vue"
import QuestionsView from "@/views/user_views/QuestionsView.vue"
import SuccessfulView from "@/views/user_views/SuccessfulView.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/signup",
    name: "signUP",
    component: SignUpView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/forget-password",
    name: "forget-password",
    component: ForgetPasswordView,
  },
  {
    path: "/pre-dashboard",
    name: "pre-dashboard",
    component: PreDashboardView,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardView,
  },

  {
    path: "/assessment",
    name: "assessment",
    component: AssessmentView,
  },
  {
    path: "/questions",
    name: "questions",
    component: QuestionsView,
  },
  {
    path: "/successful",
    name: "successful",
    component: SuccessfulView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
