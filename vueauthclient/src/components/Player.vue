<template>
  <tr>
    <td class="px-6 py-4 whitespace-nowrap">
      <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        {{player.position_type}}
      </button>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <Profile :type="'player'" :player="player" :team="$attrs.team"></Profile>
    </td>
    <td class="px-6 py-4 whitespace-nowrap" v-for="stat in playerStats" :key="stat.stat_id">
      {{stat.value}}
    </td>
  </tr>
</template>
<script>
import Profile from './Profile'
export default {
  name: 'Player',
  components: {
    Profile
  },
  props: ['player', 'team', 'allCategories', 'stats'],
  computed: {
    playerStats: function () {
      if (this.allCategories) {
        let stats = []
        console.log(this.stats)
        this.stats.stats.forEach(category => {
          let sat = this.player.stats.stats.some(stat => {
            if (parseInt(category.stat_id) === parseInt(stat.stat_id)) {
              stats.push(stat)
              return stat
            }
          })
          if (!sat) {
            stats.push({value: '-'})
          }
        })
        return stats
      } else {
        let categories = []
        this.stats.stats.forEach(stat => {
          if (stat.position_type === this.player.position_type) {
            categories.push(stat.stat_id)
          }
        })
        return this.player.stats.stats.filter(stat => {
          if (categories.includes(parseInt(stat.stat_id))) {
            return stat
          }
        })
      }
    }
  },
  methods: {
  },
  mounted () {
    // this.getPlayer()
  }
}
</script>
