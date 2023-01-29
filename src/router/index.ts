import { createRouter, createWebHistory } from 'vue-router'
import { routerM } from '@/router/routerM'
import { routerPC } from '@/router/routerPC'
let screenWidth = document.body.clientWidth

const ISMOBILE = () => {
  let flag = navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  );
  // console.log(flag);
  // window.onresize = () => {
  //   return (() => {
  //     console.log(screenWidth);
  //     flag
  //   })()
  // }
  return flag;
}
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: ISMOBILE() ? routerM : routerPC,
})

export default router
