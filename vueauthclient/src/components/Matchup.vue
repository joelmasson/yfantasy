
<template>
    <section>
        <MatchupHeader :matchup="getMatch"></MatchupHeader>
        <Calender :start="getMatch.week_start" :end="getMatch.week_end"></Calender>
        <table>
            <tr>
                <td>team</td>
                <td v-for="stat in settings" :key="stat.stat_id">
                    {{stat.display_name}}
                </td>
            </tr>
            <tr v-for="team in getMatch.teams" :key="team.team_id">
                <td>
                    <TeamProfile :team="team" :settings="settings"></TeamProfile>
                </td>
                <td v-for="stat in team.stats" :key="stat.stat_id">
                    {{stat.value}}
                </td>
            </tr>
        </table>
        <Team v-for="team in getMatch.teams" :key="team.team_id" :teamID="team.team_id" :projections="projections"></Team>
    </section>
</template>
<script>
import Calender from './calender/calender.vue'
import MatchupHeader from './MatchupHeader.vue'
import TeamProfile from './TeamProfile.vue'
import Team from './Team.vue'
import Axios from 'axios'

export default {
  name: 'Matchup',
  components: {
    MatchupHeader, TeamProfile, Team, Calender
  },
  data () {
    return {
      settings: this.$store.state.categories,
      projections: []
    }
  },
  methods: {
    getProjections () {
      let self = this
      this.gameDays.forEach(date => {
        Axios.get('https://api.sportsdata.io/v3/nhl/projections/json/PlayerGameProjectionStatsByDate/' + date + '?key=5e5eab28999741c59dc36c6c3beed615')
          .then((response) => {
            self.projections.push(response.data)
          })
          .catch((error) => {
            console.log(error)
          })
      })
    }
  },
  computed: {
    getMatch () {
      let homeId = this.$route.params.matchup.split('-')[0]
      return this.$store.state.league.scoreboard.matchups.filter((match) => {
        return match.teams.some((team) => {
          if (team.team_id === homeId) {
            return match
          }
        })
      })[0]
    }
    // gameDays () {
    //   function convertDate (date) {
    //     var months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
    //     var yyyy = date.getFullYear().toString()
    //     var mm = (date.getMonth() + 1).toString()
    //     var dd = date.getDate().toString()

    //     var ddChars = dd.split('')

    //     return yyyy + '-' + months[mm] + '-' + (ddChars[1] ? dd : '0' + ddChars[0])
    //   }
    //   function getDates (start, end) {
    //     start = new Date(start.setDate(start.getDate() + 1))
    //     end = new Date(end.setDate(end.getDate() + 2))
    //     for (var arr = [], dt = start; dt <= end; dt.setDate(dt.getDate() + 1)) {
    //       arr.push(convertDate(new Date(dt)))
    //     }
    //     return arr
    //   };
    //   return getDates(new Date(this.getMatch.week_start), new Date(this.getMatch.week_end))
    // }
  },
  mounted () {
    // this.getProjections()
  }
}
</script>
