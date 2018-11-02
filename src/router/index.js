import Vue from 'vue'
import Router from 'vue-router'
import ProjectOverview from '../views/projectOverview/projectOverview'
import FundsManagement from '../views/fundsManagement/fundsManagement'
import RealTimeMonitoring from '../views/realTimeMonitoring/realTimeMonitoring'
import EnvMonitoring from '../views/envMonitoring/envMonitoring'
import EquMonitoring from '../views/equMonitoring/equMonitoring'
import MaterialManagement from '../views/materialManagement/materialManagement'
import LaborManagement from '../views/laborManagement/laborManagement'
import ProgressManagement from '../views/progressManagement/progressManagement'
import SecurityManagement from '../views/securityManagement/securityManagement'
import QualityManagement from '../views/qualityManagement/qualityManagement'
import NotFindPage from '../views/notFindPage/notFindPage.vue'
Vue.use(Router)


let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/projectOverview',
    },
    {
      path: '/projectOverview',
      name: 'projectOverview',
      component: ProjectOverview,
      meta: {
        title: '智慧工地-项目概况'
      }
    },
    {
      path: '/fundsManagement',
      name: 'fundsManagement',
      component: FundsManagement,
      meta: {
        title: '智慧工地-资金管理'
      }
    },
    {
      path: '/realTimeMonitoring',
      name: 'realTimeMonitoring',
      component: RealTimeMonitoring,
      meta: {
        title: '智慧工地-实时监控'
      }
    },
    {
      path: '/envMonitoring',
      name: 'envMonitoring',
      component: EnvMonitoring,
      meta: {
        title: '智慧工地-环境监测'
      }
    },
    {
      path: '/equMonitoring',
      name: 'equMonitoring',
      component: EquMonitoring,
      meta: {
        title: '智慧工地-设备监控'
      }
    },
    {
      path: '/materialManagement',
      name: 'materialManagement',
      component: MaterialManagement,
      meta: {
        title: '智慧工地-物料管理'
      }
    },
    {
      path: '/laborManagement',
      name: 'laborManagement',
      component: LaborManagement,
      meta: {
        title: '智慧工地-劳务管理'
      }
    },
    {
      path: '/progressManagement',
      name: 'progressManagement',
      component: ProgressManagement,
      meta: {
        title: '智慧工地-进度管理'
      }
    },
    {
      path: '/securityManagement',
      name: 'securityManagement',
      component: SecurityManagement,
      meta: {
        title: '智慧工地-安全管理'
      }
    },
    {
      path: '/qualityManagement',
      name: 'qualityManagement',
      component: QualityManagement,
      meta: {
        title: '智慧工地-质量管理'
      }
    },
    {
      path: '*',
      name: 'notFindPage',
      component: NotFindPage,
      meta: {
        title: '404页面'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title
    next()
})
export default router
