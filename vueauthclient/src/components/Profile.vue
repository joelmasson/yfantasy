<template>
    <div>
        <img :src="player.portrait" />
        <div>
            <h4 >{{simplifiedName}}</h4>
            <h5></h5>
        </div>
        <div v-if="action">
            <button v-if="action === 'add'" v-on:click="addPLayer(player)">ADD</button>
            <button v-if="action === 'drop'" v-on:click="dropPLayer(player)">DROP</button>
            <button v-if="action === 'trade'" v-on:click="tradePLayer(player)">TRADE</button>
        </div>
        <button v-if="compare" v-on:click="comparePLayer(player)">Compare</button>
    </div>
</template>
<script>
export default {
  name: 'profile',
  data () {
    return {
      firstName: '',
      lastName: '',
      position: '',
      originalTeam: '',
      fantasyTeam: '',
      actions: null,
      compare: false
    }
  },
  computed: {
    simplifiedName: function () {
      return ''
    },
    simplifiedMeta: function () {
      return ''
    }
  },
  methods: {
    addPLayer: function () {

    },
    dropPLayer: function () {

    },
    tradePLayer: function () {

    },
    comparePLayer: function () {

    }
  }
}
</script>
