import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Excel',
      component(resolve) {
        require(['@/components/dashborad'], resolve);
      }
    },
    {
      path: '/login',
      component(resolve) {
        require(['@/components/login'], resolve);
      }
    },
    {
      path: '/track-mark',
      component(resolve) {
        require(['@/pages/tracking-num/index.vue'], resolve);
      }
    },
    {
      path: '/transport',
      component(resolve) {
        require(['@/pages/logistics-manage/index.vue'], resolve);
      }
    },   {
      path: '/reptile-system',
      component(resolve) {
        require(['@/pages/reptile-system/index.vue'], resolve);
      }
    },
    {
      path: '/channel-queue',
      component(resolve) {
        require(['@/components/channel-queue'], resolve);
      }
    },
    {
      path: '/day-queue',
      component(resolve) {
        require(['@/components/day-queue'], resolve);
      }
    },
    {
      path: '/track-list',
      component(resolve) {
        require(['@/components/track-list'], resolve);
      }
    },
    {
      path: '/setting',
      component(resolve) {
        require(['@/components/setting'], resolve);
      }
    }
  ]
})
