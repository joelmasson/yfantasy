import Stats from 'Stats'
<template>
    <div>
        <img :src='team.logo' />
        <div>
            <h6 v-if="team.location !== ''">{{team.location}}</h6>
            <h4>{{team.name}}</h4>
        </div>
        <div v-for="stat in stats" :key="stat.id">
            <Stats :stat="stat"></Stats>
        </div>
    </div>
</template>
<script>
export default {
  name: 'teamHeader',
  data () {
    return {
      team: {
        logo: '',
        location: '',
        name: '',
        stats: [
          1
        ]
      }
    }
  }
}
</script>
