<template>
    <ul>
        <li v-for="stat in player.stats" :key="stat.id">
            <h6>{{stat.categoryName}}</h6>
            <h4>{{stat.value}}</h4>
        </li>
    </ul>
</template>
<script>
export default {
  name: 'Stat',
  data () {
    return {
      stats: [
        {
          categoryName: 'Goals',
          value: '2'
        }
      ]
    }
  }
}
</script>
