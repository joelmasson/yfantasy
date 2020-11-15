<template>
    <div>
        <label id='player-search-label' for="player-search" tabindex="-1">Search</label>
        <input v-model="searchVal" autocomplete="off" type="text" size="" title="player search" id="player-search" name="player-search" spellcheck="false" aria-labelledby="player-search-label" placeholder="Search by player name">
        <button v-on:click="searchForPlayers"><span class='visally-hidden'>Search</span>GO</button>
    </div>
</template>
<script>
export default {
  name: 'Search',
  data () {
    return {
      searchVal: ''
    }
  },
  methods: {
    searchForPlayers: function () {

    }
  }
}
</script>
