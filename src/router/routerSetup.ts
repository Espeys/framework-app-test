import FrameworkWrapper from "@/views/FrameworkWrapper.vue";

export function setFrameworkRoutes(router: any) {
    return router.addRoute({
    path: '/fw',
    component: FrameworkWrapper,
    children: []
  });
}