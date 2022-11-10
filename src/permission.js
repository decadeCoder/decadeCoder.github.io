import router from './router'

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token')
  if (token) {
    if (to.path === '/login') {
      next()
    } else {
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
})
