<template>
<div>
   <td class="px-6 py-4 whitespace-nowrap" v-for="(stat, index) in stats" :key="index">
      <div class="flex items-center">
        <div class="ml-4">
          <div class="text-sm font-medium text-gray-900">
            <!-- <span>{{stat[0]}}</span> -->
            {{stat[1]}}
          </div>
        </div>
      </div>
    </td>
    <!-- <h3>{{stats.rank}}</h3> -->
</div>
</template>
<script>
export default {
  name: 'Stat',
  data () {
    return {
      stats: this.statsData
    }
  },
  props: [
    'statsData'
  ]
}
</script>
