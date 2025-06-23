export function setFrameworkRoutes(router: any) {
   router.addRoute('fw', {
    path: '',
    component: () => import('../views/FrameworkMain.vue')
  });
}