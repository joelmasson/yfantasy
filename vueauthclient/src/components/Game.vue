<template>
  <div>
    <h2>Games</h2>
    <p>Name: {{ user.name }}</p>
    <p>LIST OUT ALL USER INFO</p>
  </div>
</template>
<script>
import axios from 'axios'
import router from '../router'
export default {
  name: 'Dashboard',
  data () {
    return {
      activeTeams: {},
      inactiveTeams: {}
    }
  },
  methods: {
    getUserGames: function () {
      let self = this
      axios
        .get('/api/yahoo/user/games')
        .then((response) => {
          console.log(response)
          let inactiveTeams = response.games.filter((team) => {
            if (team.is_game_over === 1) {
              return team
            }
          })
          let activeTeams = response.games.filter((team) => {
            if (team.is_game_over === 0) {
              return team
            }
          })
          self.$set(this, 'inactiveTeams', inactiveTeams)
          self.$set(this, 'activeTeams', activeTeams)
        })
        .catch((errors) => {
          console.log(errors)
          router.push('/')
        })
    }
  },
  mounted () {
    this.getUserGames()
  }
}
</script>
