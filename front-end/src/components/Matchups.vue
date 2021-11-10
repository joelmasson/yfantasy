<template>
    <section>
        <router-link v-for="(matchup, i) in matchups" :key="i" :to="{ name:'Matchup', params: { game_id: $route.params.game_id, league_id:$route.params.league_id, week_num:matchup.week, matchup:matchup.teams[0].team_id+'-'+matchup.teams[1].team_id } }">
            <Matchup :matchup="matchup" :settings="standings"></Matchup>
        </router-link>
    </section>
</template>
<script>
import Matchup from './MatchupHeader.vue'

export default {
  name: 'Matchups',
  components: {
    Matchup
  },
  props: ['matchups', 'standings'],
  data () {
    return {
      matches: [],
      currentWeek: 0
    }
  }
}
</script>
