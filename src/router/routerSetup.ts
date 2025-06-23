import FrameworkMain from "../views/FrameworkMain.vue";

export function setFrameworkRoutes(router: any) {
    return router.addRoute({
    path: '/fw',
    component: FrameworkMain,
    children: []
  });
}