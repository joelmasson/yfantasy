<template>
<div class="bg-white shadow-md rounded-lg">
    <MatchupProjectionWeek v-if="settings !== undefined" :settings="settings" :team="team" :players="players"></MatchupProjectionWeek>
    <div class="flex justify-start md:justify-center overflow-x-scroll mx-auto py-4 px-2 ">
        <div class="w-36"></div>
        <div class="flex group  rounded-lg mx-1 transition-all duration-300 cursor-pointer justify-center w-16" v-bind:class="{'bg-purple-600 shadow-lg dark-shadow':day.today, 'hover:bg-purple-500 hover:shadow-lg hover-dark-shadow':!day.today}" v-for="(day, i) in games" :key="i">
            <span v-if="today" class="flex h-3 w-3 absolute -top-1 -right-1">
                <span class="animate-ping absolute group-hover:opacity-75 opacity-0 inline-flex h-full w-full rounded-full bg-purple-400 "></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-purple-100"></span>
                </span>
                <div class="flex items-center px-4 py-4">
                <div class="text-center">
                    <p class=" text-gray-900 group-hover:text-gray-100 text-sm transition-all duration-300">
                    {{day.DOW}}
                    </p>
                    <p class=" text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all duration-300 " >
                    {{day.Num}}
                    </p>
                </div>
            </div>
        </div>
    </div>
    <MatchupPlayer v-for="player in playerGames" :key="player.nhl_player_id" :player="player" :games="games" :chosenStat="chosenStat"></MatchupPlayer>
</div>
</template>
<script>
import MatchupPlayer from './matchup-player.vue'
import Axios from 'axios'
import MatchupProjectionWeek from './matchup-projection-week.vue'
export default {
  name: 'MatchupTeam',
  components: {
    MatchupPlayer,
    MatchupProjectionWeek
  },
  data () {
    return {
      team: {},
      players: [],
      fullPlayers: [],
      availableSpots: [],
      availableTeams: [],
      replacements: []
    }
  },
  props: ['games', 'chosenStat', 'team_id', 'teams', 'settings'],
  methods: {
    getRoster: function () {
      let self = this
      Axios.post('/api/yahoo/teams/fetch', {
        team_key: [
          self.$route.params.game_id + '.l.' + self.$route.params.league_id + '.t.' + self.team_id
        ],
        subresources: ['roster', 'matchups']
      }).then((response) => {
        console.log('getRoster', response.data)
        self.team = response.data[0]
        self.fullPlayers = self.players.map(player => {
          let yPlayer = self.team.roster.filter(yPlayer => {
            if (player.name === yPlayer.name.full) {
              return yPlayer
            }
          })[0]
          player.display_position = yPlayer.display_position
          player.headshot = 'https://' + yPlayer.headshot.url.split('https://')[2]
          player.eligible_positions = yPlayer.eligible_positions.toString()
          player.editorial_team_abbr = yPlayer.editorial_team_abbr
          return player
        })
        this.$forceUpdate()
      }).catch((error) => {
        console.log('error', error)
      })
    },
    getPlayers: function (names) {
      function compare (a, b) {
        if (a.coverage_value < b.coverage_value) {
          return -1
        }
        if (a.coverage_value > b.coverage_value) {
          return 1
        }
        return 0
      }
      let self = this
      Axios.post('/api/players', {
        queryBy: 'fantasyTeamId',
        value: [self.$route.params.game_id + '.l.' + self.$route.params.league_id + '.t.' + self.$props.team_id]
      }).then(response => {
        self.players = response.data.map(player => {
          let playbyplayGames = player.stats.filter(game => {
            let season = game.coverage_value.toString().substring(0, 4)
            if (game.coverage_type === 'Game' && season === this.today.substring(0, 4)) {
              return game
            }
          }).sort(compare)
          player.projectedStats = {}
          Object.keys(playbyplayGames[0].stats).forEach(stat => {
            let last = playbyplayGames[0] === undefined ? 0 : (playbyplayGames[0].stats[stat])
            let two = playbyplayGames[1] === undefined ? 0 : (playbyplayGames[1].stats[stat])
            let three = playbyplayGames[2] === undefined ? 0 : (playbyplayGames[2].stats[stat])
            if (stat === 'SAVE_PERCENTAGE') {
              console.log(last, two, three)
            }
            player.projectedStats[stat] = ((5 * last + 4 * two + 3 * three) / (5 + 4 + 3))
          })
          return player
        })
        self.getRoster()
        self.findAvailableSpots()
      })
    },
    // NEXT STEPS
    // Calculate the number of open spots per day
    // 1C, 2RW, 1D ... on monday, 1C, 2RW, 1D ... on tuesday
    // find teams that have games in those days
    // NYR, MTL on monday, FLA, TOR on Tuesday
    // Find the teams that match the number of open spots best
    // FLA, TOR, MTL ...
    // return top players in those spots
    // C -thornton...
    findAvailableSpots: function () {
      // let gamesByTeam = []
      function compare (a, b) {
        if (a.count > b.count) {
          return -1
        }
        if (a.count < b.count) {
          return 1
        }
        return 0
      }
      let gameDays = this.games.filter(date => {
        if (new Date(date.date + 'T23:59:59.000-04:00') > new Date()) {
          return date
        }
      }).map(date => {
        return {date: date.date,
          roster_positions: [
            {position: 'C', count: 2},
            {position: 'LW', count: 2},
            {position: 'RW', count: 2},
            {position: 'D', count: 4},
            {position: 'Util', count: 1},
            {position: 'G', count: 2}
          ],
          games: date.games,
          totalOpenSpots: 0,
          proTeams: []}
      })
      gameDays.forEach((date, i) => {
        this.players.forEach(player => {
          if (player.selected_position !== '' || player.selected_position !== 'IR+') {
            let isPlayerInGame = date.games.filter(game => {
              if (game.away.name === player.editorial_team_full_name || game.home.name === player.editorial_team_full_name) {
                return game
              }
            })
            if (isPlayerInGame.length > 0) {
              let position = player.display_position.split(',')
              if (player.position_type === 'P') {
                position.push('Util')
              }
              for (let index = 0; index < gameDays[i].roster_positions.length; index++) {
                if (position.includes(gameDays[i].roster_positions[index].position) && gameDays[i].roster_positions[index].count > 0) {
                  gameDays[i].roster_positions[index].count -= 1
                  break
                }
              }
            }
          }
        })
        gameDays[i].totalOpenSpots = gameDays[i].roster_positions.reduce(function (a, b) {
          return {count: a.count + b.count} // returns object with property x
        }).count
        if (gameDays[i].totalOpenSpots > 0) {
          gameDays[i].games.forEach(game => {
            gameDays[i].proTeams.push(game.home.id)
            gameDays[i].proTeams.push(game.away.id)
          })
        }
      })
      this.availableSpots = gameDays
      // return array of teams [{team, team_id, count}, {team, team_id, count}...]
      let availableTeams = []
      gameDays.forEach(day => {
        if (day.totalOpenSpots > 0) {
          day.proTeams.forEach(team => {
            if (availableTeams.some(availableTeam => availableTeam.id === team)) {
              for (let index = 0; index < availableTeams.length; index++) {
                if (availableTeams[index].id === team) {
                  availableTeams[index].count += 1
                  break
                }
              }
            } else {
              availableTeams.push({id: team, count: 1})
            }
          })
        }
      })
      this.availableTeams = availableTeams.sort(compare)
      console.log('availableTeams', availableTeams)
      this.getTeamPlayers()
    },
    getTeamPlayers: function () {
      let maxGames = this.availableTeams[0].count
      let teamsToQuery = this.availableTeams.filter(team => {
        if (team.count === maxGames) {
          return team
        }
      }).map(team => {
        return parseInt(team.id)
      })
      console.log(teamsToQuery)
      Axios.post('api/players', {
        teams: teamsToQuery
      }).then(response => {
        console.log(response)
      })
    },
    projectedStat: function () {
      function compare (a, b) {
        if (a.coverage_value > b.coverage_value) {
          return -1
        }
        if (a.coverage_value < b.coverage_value) {
          return 1
        }
        return 0
      }
      let playbyplayGames = this.player.stats.filter(game => {
        let season = game.coverage_value.substring(0, 4)
        if (game.coverage_type === 'Game' && season === this.today.substring(0, 4)) {
          return game
        }
      }).sort(compare)
      return (5 * parseInt(playbyplayGames[0].stats[this.chosenStat]) + 4 * parseInt(playbyplayGames[1].stats[this.chosenStat]) + 3 * parseInt(playbyplayGames[2].stats[this.chosenStat])) / (5 + 4 + 3)
    }
  },
  computed: {
    today: function () {
      let today = new Date()
      return today.toISOString().split('T')[0]
    },
    playerGames: function () {
      return this.players.map(player => {
        player.games = this.games.map(date => {
          let gameObject = {
            displayedStat: null,
            matchup: null,
            score: null,
            stats: null
          }
          let isPlayerInGame = date.games.filter(game => {
            if (game.awayId === player.currentTeamId || game.homeId === player.currentTeamId) {
              return game
            }
          })
          if (isPlayerInGame.length > 0) {
            if (isPlayerInGame[0].homeId === player.currentTeamId) {
              gameObject.matchup = isPlayerInGame[0].away.name_abbv
            } else if (isPlayerInGame[0].awayId === player.currentTeamId) {
              gameObject.matchup = '@' + isPlayerInGame[0].home.name_abbv
            }
            if (isPlayerInGame[0].events.length > 0) { // GAME HAS BEEN PLAYED
              let gameStats = player.stats.filter(game => {
                if (game.coverage_value === isPlayerInGame[0].gamePk) {
                  return game
                }
              })
              gameObject.stats = gameStats
              gameObject.displayedStat = Object.keys(gameStats).filter(stat => {
                if (stat === this.chosenStat) {
                  return gameStats[gameStats]
                }
              })
              gameObject.score = isPlayerInGame[0].homeScore + ' v ' + isPlayerInGame[0].awayScore
            } else {
              gameObject.stats = player.stats.filter(game => {
                if (game.coverage_type === 'Game') {
                  return game
                }
              }).slice(-3)
              gameObject.displayedStat = 0
              gameObject.stats.forEach((game, i) => {
                Object.keys(game.stats).forEach(stat => {
                  if (stat === this.chosenStat) {
                    gameObject.displayedStat = gameObject.displayedStat === undefined ? game.stats[stat] : (gameObject.displayedStat + game.stats[stat]) / 2
                  }
                })
              })
              gameObject.score = '- v -'
            }
          }
          return gameObject
        })
        return player
      })
    }
  },
  mounted () {
    this.getPlayers()
  }
}
</script>
