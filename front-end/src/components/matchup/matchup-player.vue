<template>
<div class="flex justify-start md:justify-center">
    <Profile :player="player"></Profile>
    <div class="flex group  rounded-lg mx-1 transition-all duration-300 cursor-pointer justify-center w-16" v-bind:class="{'bg-purple-600 shadow-lg dark-shadow':day.today, 'hover:bg-purple-500 hover:shadow-lg hover-dark-shadow':!day.today}" v-for="(day, i) in player.games" :key="i">
        <span v-if="today" class="flex h-3 w-3 absolute -top-1 -right-1">
            <span class="animate-ping absolute group-hover:opacity-75 opacity-0 inline-flex h-full w-full rounded-full bg-purple-400 "></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-purple-100"></span>
        </span>
        <div class="flex items-center px-4 py-4">
            <div class="text-center">
            <p class=" text-gray-900 group-hover:text-gray-100 text-sm transition-all duration-300">
                {{day.matchup}}
            </p>
            <p class=" text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all duration-300 " >
                {{day.score}}
            </p>
            <!-- <p v-if="date.displayedStat !== null" class=" text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all duration-300 " >
                {{chosenStat}} - {{date.displayedStat}}
            </p> -->
            <!-- <p v-else class=" text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all duration-300 " >
                -
            </p> -->
            </div>
        </div>
    </div>
</div>
</template>
<script>
import Profile from './../Profile.vue'
export default {
  name: 'MatchupPlayer',
  data () {
    return {
    }
  },
  props: ['player', 'games', 'chosenStat'],
  components: {Profile},
  computed: {
    today: function () {
      let today = new Date()
      return today.toISOString().split('T')[0]
    }
    // projectedStat: function () {
    //   function compare (a, b) {
    //     if (a.coverage_value > b.coverage_value) {
    //       return -1
    //     }
    //     if (a.coverage_value < b.coverage_value) {
    //       return 1
    //     }
    //     return 0
    //   }
    //   let playbyplayGames = this.player.stats.filter(game => {
    //     let season = game.coverage_value.substring(0, 4)
    //     if (game.coverage_type === 'Game' && season === this.today.substring(0, 4)) {
    //       return game
    //     }
    //   }).sort(compare)
    //   return (5 * parseInt(playbyplayGames[0].stats[this.chosenStat]) + 4 * parseInt(playbyplayGames[1].stats[this.chosenStat]) + 3 * parseInt(playbyplayGames[2].stats[this.chosenStat])) / (5 + 4 + 3)
    // }
  }
}
</script>
