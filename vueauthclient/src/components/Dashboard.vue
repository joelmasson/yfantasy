<template>
  <div>
    <DashboardCard v-for="game in games" :key="game.game_id" :game="game"></DashboardCard>
    <!-- <h3 v-else>Sorry you have no active or favourtited Teams</h3>
    <h2>Other Teams</h2>
    <ul  v-if="inactiveGames.length >= 1">
      <DashboardCard v-for="game in inactiveGames" :key="game.game_id" :game="game"></DashboardCard>
    </ul>
    <h3 v-else>Sorry you have no inactive or favourtited Teams</h3> -->
   </div>
</template>
<script>
import axios from 'axios'
// import router from '../router'

import DashboardCard from './DashboardCard'

export default {
  name: 'Dashboard',
  data () {
    return {
      games: [
        {
          game_key: '341',
          game_id: '341',
          name: 'Hockey',
          code: 'nhl',
          type: 'full',
          url: 'http://hockey.fantasysports.yahoo.com/hockey',
          season: '2013',
          leagues: [
            {
              league_key: '341.l.21063',
              league_id: '21063',
              name: 'theREDleague OLD',
              url: 'http://hockey.fantasysports.yahoo.com/hockey/21063',
              password: '',
              draft_status: 'postdraft',
              num_teams: 14,
              edit_key: '2014-11-15',
              weekly_deadline: 'intraday',
              league_update_timestamp: '1416042475',
              scoring_type: 'point',
              league_type: 'private',
              renew: '321_63055',
              renewed: '',
              short_invitation_url: 'https://yho.com/nhl?l=21063&k=7a5b54fa3927ebc2',
              is_pro_league: '0',
              start_date: '2014-10-08',
              end_date: '2015-04-11'
            }
          ]
        }
      ],
      gameKeys: [],
      showInactive: false
    }
  },
  components: {DashboardCard},
  methods: {
    // /resource/user/game_leagues
    getUserAllGames: function () {
      let self = this
      axios
        .post('/api/yahoo/user/games')
        .then((response) => {
          let gameKeys = response.data.games.map(game => {
            return game.game_key
          })
          self.gameKeys = gameKeys
          self.getUserInactivesTeams(gameKeys)
        })
        .catch((errors) => {
          console.log(errors)
        })
    },
    getUserInactivesTeams: function (ids) {
      let self = this
      axios
        .post('/api/yahoo/user/game_leagues', {game_key: ids.slice(ids.length - 9)})
        .then((response) => {
          console.log(response.data.games)
          self.games = response.data.games.reverse()
        })
        .catch((errors) => {
          console.log(errors)
        })
    }
  },
  mounted () {
    // this.getUsersCurrentTeams()
    this.getUserAllGames()
  }
}
</script>
