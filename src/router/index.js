import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const base = import.meta.env.BASE_URL;

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { title: "Home" },
  },
  {
    path: "/code",
    name: "code",
    component: () => import("@/views/CodeView.vue"),
    meta: { title: "Code" },
  },
  {
    path: "/research",
    redirect: { name: "code" },
  },
  {
    path: "/team",
    name: "team",
    component: () => import("@/views/TeamView.vue"),
    meta: { title: "Team" },
  },
  {
    path: "/publications",
    name: "publications",
    component: () => import("@/views/PublicationsView.vue"),
    meta: { title: "Publications" },
  },
  {
    path: "/sponsors",
    name: "sponsors",
    component: () => import("@/views/SponsorsView.vue"),
    meta: { title: "Sponsors" },
  },
  {
    path: "/press",
    name: "press",
    component: () => import("@/views/PressView.vue"),
    meta: { title: "Press" },
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/views/ContactView.vue"),
    meta: { title: "Contact" },
  },
  {
    path: "/imprint",
    name: "imprint",
    component: () => import("@/views/ImprintView.vue"),
    meta: { title: "Imprint" },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/views/NotFoundView.vue"),
    meta: { title: "Not Found" },
  },
];

const router = createRouter({
  history: createWebHistory(base),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) return { el: to.hash, behavior: "smooth" };
    return { top: 0 };
  },
});

router.afterEach((to) => {
  const defaultTitle = "HULKs — Humanoid Robotics Research at TUHH";
  document.title = to.meta?.title ? `${to.meta.title} · HULKs` : defaultTitle;
});

export default router;
