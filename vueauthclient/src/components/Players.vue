<template>
    <div>
        <Search></Search>
        <FilterMenu></FilterMenu>
        <div>
            <Player v-for="player in players" :key="player.id"></Player>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Players',
  data () {
    return {
      players: [],
      filters: [],
      searchParams: {}
    }
  }
}
</script>
