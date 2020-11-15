import Profile from 'Profile'
import Stats from 'Stats'
<template>
    <div>
        <div v-for="team in teams" :key="team.id">
            <Profile :team="team"></Profile>
            <Stats></Stats>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Standings',
  data () {
    return {
      teams: []
    }
  }
}
</script>
