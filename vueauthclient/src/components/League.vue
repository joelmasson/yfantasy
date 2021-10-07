<template>
  <div>
      <Standings :standings='league'></Standings>
      <Matchups :matchups='league.scoreboard.matchups' :standings='league'></Matchups>
    </div>
</template>
<script>
import Axios from 'axios'
import Standings from './Standings'
import Matchups from './Matchups.vue'
export default {
  name: 'League',
  data () {
    return {
      league: {
        scoreboard: {
          matchups: []
        }
      },
      league_keys: [],
      sports: [{
        'league': 'nhl',
        'sport': 'Hockey'
      },
      {
        'league': 'nfl',
        'sport': 'Football'
      }],
      season: {},
      proData: {},
      playByPlayData: [],
      dates: []
    }
  },
  components: {
    Standings, Matchups
  },
  computed: {
    league_abbr: function () {
      return this.sports.filter(sport => {
        if (sport.league === this.league.game_code) {
          return sport
        }
      })[0].sport
    }
  },
  methods: {
    getPastLeaugeKeys: function () {
      let self = this
      Axios.get('/api/games/1', {
        league_key: self.league.game_code
      })
        .then((response) => {
          self.league_keys = response.data.filter(league => {
            if (league.name === self.league_abbr) {
              return league
            }
          })[0].game_keys
          self.updateStore()
        })
        .catch((error) => {
          // self.updateStore()
          console.log('error', error)
        })
    },
    getYahooLeague: function () {
      let self = this
      Axios.post('/api/yahoo/leagues/fetch', {
        league_keys: [
          this.$route.params.game_id + '.l.' + this.$route.params.league_id
        ],
        subresources: ['settings', 'standings', 'scoreboard', 'teams', 'transactions']
      })
        .then((response) => {
          self.league = response.data[0]
          self.getPastLeaugeKeys()
          self.updateStore()
          self.getCurrentSeason()
        })
        .catch((error) => {
          // self.updateStore()
          console.log('error', error)
        })
    },
    getCurrentExternalSeason: function () {
      let self = this
      let season = self.league.season + (parseInt(self.league.season) + 1)
      Axios.get('https://statsapi.web.nhl.com/api/v1/schedule?season=' + season)
        .then(response => {
          self.season = response.data
          self.saveSeason()
        }).catch((error) => {
          console.log('error', error)
        })
    },
    getCurrentSeason: function () {
      let self = this
      Axios.get('api/season/' + this.$route.params.game_id)
        .then(response => {
          let today = new Date()
          if (response.data.error === 'Season not found') {
            self.getCurrentExternalSeason()
            self.getSeasonPlayers()
          } else {
            self.season = response.data
            console.log(response)
            if (today > new Date(response.data.startDate)) {
              self.dates = response.data.dates.filter(date => {
                if (response.data.lastGameDayPlayed < date.date) {
                  return date.date
                }
              })
              console.log(self.season.dates.length)
              self.getExtenalPlayByPlay(self.season.dates[0].date, self.season.dates[0].date)
            }
          }
        }).catch((error) => {
          console.log('error', error)
        })
    },
    updateStore: function () {
      let data = {
        settings: this.league.settings,
        teams: this.league.standings.map(team => {
          return {name: team.name, team_id: team.team_id}
        }),
        league: this.league,
        league_keys: this.league_keys
      }
      this.$store.commit('setLeagueData', data)
    },
    saveSeason: function () {
      let self = this
      let seasonData = {
        'name': self.league.season + (parseInt(self.league.season) + 1),
        'game_key': self.$route.params.game_id,
        'totalGames': self.season.totalGames,
        'lastGameDayPlayed': new Date(self.season.dates[0].date),
        'startDate': self.season.dates[0].date,
        'dates': self.season.dates.map(date => {
          return {
            'date': date.date,
            'games': date.games.map(game => {
              return {
                'gamePk': game.gamePk,
                'gameDate': game.dateDate
              }
            })
          }
        })
      }
      Axios.post('api/season', {
        data: seasonData
      }).then(response => {
        self.season = response.data
      }).catch((error) => {
        console.log(error)
      })
    },
    getGameKeys: function () {
      let self = this
      Axios.get('/api/games', {}).then((response) => {
        self.leagues = response.data
      }).catch((error) => {
        // self.updateStore()
        console.log('error', error)
      })
    },
    getPlayByPlay: function (date) {
      console.log(date)
      let self = this
      Axios.get('/api/playbyplay/' + date, {}).then((response) => {
        console.log(response)
        if (response.data.error === 'Play by Play not found') {
          self.getExtenalPlayByPlay(date)
        } else {
          console.log(response)
        }
      }).catch((error) => {
        console.log('error', error)
      })
    },
    getExtenalPlayByPlay: function (start, end) {
      let self = this
      Axios.post('/api/playbyplay/', {
        action: 'fetch',
        game_key: self.season.game_key,
        start: start,
        end: end
      }).then((response) => {
        console.log(response)
        self.dates = self.dates.slice(1)
        console.log('next', self.dates)
        self.getExtenalPlayByPlay(self.dates[0].date, self.dates[1].date)
      }).catch((error) => {
        // self.updateStore()
        console.log('error', error)
      })
    },
    savePlayByPlay: function (game) {
      let self = this
      game.game_key = this.$route.params.game_id
      Axios.post('api/playbyplay', {
        data: game
      }).then(response => {
        self.gamePks = self.dates.slice(1)
        self.getPlayByPlay(self.dates[0].date)
        console.log(response)
      }).catch((error) => {
        console.log(error)
      })
    },
    getSeasonPlayers: function () {
      let season = self.league.season + (parseInt(self.league.season) + 1)
      Axios.get('api/players' + season)
        .then(response => {
          console.log(response)
        }).catch((error) => {
          console.log(error)
        })
    },
    getTransactions: function () {

    }
  },
  mounted () {
    this.getYahooLeague()
    // Check if the season data is saved
  }
}
</script>
