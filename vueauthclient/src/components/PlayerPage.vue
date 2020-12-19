<template>
  <div>
    <Profile :type="'player'" :data="playerData"></Profile>
    <Stats :statsData="playerData"></Stats>
  </div>
</template>
<script>
import Axios from 'axios'
import Profile from './Profile'
import Stats from './Stats'
export default {
  name: 'PlayerCard',
  data () {
    return {
      playerData: {}
    }
  },
  components: {
    Profile,
    Stats
  },
  props: ['player'],
  computed: {
    playerMeta: function () {
      return {
        headshot: {
          url: this.headshot
        },
        name: this.name,
        position_type: this.position_type,
        editorial_team_abbr: this.editorial_team_abbr
      }
    }
  },
  methods: {
    getPlayer: function () {
      Axios.get('/api/yahoo/player/', {
        players: [
          this.$route.params.game_id + '.p.' + this.$route.params.player_id
        ],
        subresources: ['stats', 'percent_owned', 'draft_analysis']
      })
        .then((response) => {
          console.log(response)
          self.$set(this, 'playerData', response)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  mounted () {
    this.getPlayer()
  }
}
</script>
