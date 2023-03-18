import { createRouter, createMemoryHistory } from "vue-router";
import login from './components/login.vue'
import register from './components/register.vue'
import home from './components/home.vue'
import homeOne from './components/home-one.vue'
import apply from "./components/apply.vue";
import applyOne from './components/apply-vue/apply-one.vue'
import applyTwo from './components/apply-vue/apply-two.vue'
import sweep from './components/sweep.vue'
import replenish from './components/replenish.vue'
import scan from './components/scan.vue'
import manage from './components/manage.vue'
import sell from './components/manage-vue/sell.vue'
import rent from './components/manage-vue/rent.vue'
import info from './components/info.vue'
import infoOne from './components/info-vue/info-one.vue'
import infoTwo from './components/info-vue/info-two.vue'
import person from './components/person.vue'
import bind from './components/bind.vue'
import selectGoods from './components/apply-vue/select-goods.vue'
import record from './components/person-vue/record.vue'
import used from './components/person-vue/used.vue'
import tips from './components/person-vue/tips.vue'
import approve from './components/person-vue/approve.vue'

const router = createRouter({
    history: createMemoryHistory(),
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/login', component: login },
        { path: '/approve', component: approve },
        { path: '/tips', component: tips },
        { path: '/used', component: used },
        { path: '/record', component: record },
        { path: '/register', component: register },
        { path: '/selectGoods', component: selectGoods },
        {
          path: '/apply', component: apply, redirect: '/apply/applyOne', children: [
          { path: 'applyOne', component: applyOne },
          { path: 'applyTwo', component: applyTwo },
        ] },
        {
          path: '/home', component: home,redirect:'/home/homeOne', children: [
            { path: 'homeOne', component: homeOne },
            { path: 'person', component: person },
        ]},
      { path: '/sweep', component: sweep },
      { path: '/replenish', component: replenish },
      { path: '/scan', component: scan },
      { path: '/bind', component: bind },
      {
        path: '/manage', component: manage, redirect:'/manage/sell',children: [
          { path: 'sell', component: sell },
          { path: 'rent', component: rent },
        ]
      },
      {
        path: '/info', component: info,
        redirect: '/info/infoOne', children: [
          { path: 'infoOne', component: infoOne },
          { path: 'infoTwo', component: infoTwo },
        ]
      },


    ]
})
export default router