import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import League from '@/components/League'
import Team from '@/components/Team'
import Players from '@/components/Players'
import Player from '@/components/Player'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/game/:id',
      name: 'League',
      component: League
    },
    {
      path: '/league/:id/roster/:id',
      name: 'Team',
      component: Team
    },
    {
      path: '/league/:id/players',
      name: 'Players',
      component: Players
    },
    {
      path: '/league/:id/players/:id',
      name: 'player',
      component: Player
    }
  ]
})
