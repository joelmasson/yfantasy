import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '@/components/Dashboard'
import League from '@/components/League'
import Game from '@/components/Game'
import Team from '@/components/Team'
import Players from '@/components/Players'
import PlayerPage from '@/components/PlayerPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/game/:game_id', // This would be for the whole 2020 NHL season
      name: 'Game',
      component: Game
    },
    {
      path: '/game/:game_id/league/:league_id', // This would be for the 2020 DFHL Season
      name: 'League',
      component: League
    },
    {
      path: '/game/:game_id/league/:league_id/team/:team_id',
      name: 'Team',
      component: Team
    },
    {
      path: '/game/:game_id/league/:league_id/players',
      name: 'Players',
      component: Players
    },
    {
      path: '/game/:game_id/player/:player_id',
      name: 'Player',
      component: PlayerPage
    }
  ]
})
