export function setFrameworkRoutes(router: any) {
   router.addRoute('fw', {
    path: '',
    name: 'fw-main-1',
    component: () => import('../views/FrameworkMain.vue')
  });

  router.addRoute('fw', {
    path: '',
    name: 'fw-main-2',
    component: () => import('../views/FrameworkMainCopy.vue')
  });
}