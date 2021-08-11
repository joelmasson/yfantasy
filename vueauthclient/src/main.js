// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
Vue.config.devtools = true

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    positions: {},
    categories: {},
    teams: [],
    league: {}
  },
  getters: {},
  mutations: {
    setLeagueData (state, leagueData) {
      state.positions = leagueData.settings.roster_positions
      state.categories = leagueData.settings.stat_categories
      // state.modifiers = leagueData.settings.stat_modifiers
      state.teams = leagueData.teams
      state.league = leagueData.league
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
