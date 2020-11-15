import TeamHeader from 'TeamHeader'
import FilterMenu from 'FilterMenu'
import Player from 'Player'
<template>
    <div>
        <TeamHeader></TeamHeader>
        <FilterMenu></FilterMenu>
        <div v-for="player in team.players" :key=player.id>
            <Player></Player>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Team',
  data () {
    return {
      team: [{
        players: [

        ]
      }]
    }
  }
}
</script>
