// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import Axios from 'axios'
Vue.config.devtools = true

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  actions: {
    // getLeagueData ({ commit, getters }, payload) {
    //   const data = getters.getYahooLeague
    //   localStorage.setItem('league', state)
    // },
    async getYahooLeague (context, payload) {
      await Axios.post('/api/yahoo/leagues/fetch', {
        league_keys: [
          payload.game_id + '.l.' + payload.league_id
        ],
        subresources: ['settings', 'standings', 'scoreboard'],
        week: 2
      }).then((response) => {
        let league = response.data[0]
        let data = {
          settings: league.settings,
          teams: league.standings.map(team => {
            return {name: team.name, team_id: team.team_id}
          }),
          league: league,
          league_keys: league
        }
        context.commit('setLeagueData', data)
      }).catch((error) => {
        console.log('error', error)
      })
    },
    getStateData () {
      return localStorage.getItem('state')
    }
  },
  state: {
    positions: {},
    categories: {},
    teams: [],
    league: {},
    league_keys: []
  },
  getters: {
    getLeague: state => () => {
      return state.league
    },
    getLeagueKeys: state => () => {
      return state.league_keys
    },
    getTeams: state => () => {
      return state.teams
    },
    getCategories: state => () => {
      return state.categories
    },
    getPositions: state => () => {
      return state.positions
    }
  },
  mutations: {
    setLeagueData (state, leagueData) {
      let allCategories = leagueData.settings.stat_categories.map((category) => {
        return {'stat_id': 'p-' + category.stat_id, 'enabled': category.enabled, 'name': 'Projected ' + category.name, 'display_name': 'P-' + category.display_name, 'sort_order': category.sort_order, 'position_type': category.position_type, 'stat_position_types': category.stat_position_types}
      })
      state.positions = leagueData.settings.roster_positions
      state.categories = [...leagueData.settings.stat_categories, ...allCategories]
      // state.modifiers = leagueData.settings.stat_modifiers
      state.teams = leagueData.teams
      state.league = leagueData.league
      state.league_keys = leagueData.league_keys
    },
    setLeagueKeys (state, data) {
      state.league_keys = data
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  components: { App },
  template: '<App/>'
})
