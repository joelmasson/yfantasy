import {Roster, Profile} from "Roster";
<template>
    <div>
        <header>
            <Profile :team="home"></Profile>
            <span>{{home.score}}</span>
            <div>
              <a v-on:click="changeDay(-1)">prev</a>
                <span>{{gameday}}</span>
              <a v-on:click="changeDay(1)">next</a>
            </div>
            <Profile :team="away"></Profile>
            <span>{{away.score}}</span>
        </header>
        <section>
            <Roster :team="home"></Roster>
            <Roster :team="awat"></Roster>
        </section>
    </div>
</template>
<script>

export default {
  name: 'Matchup',
  data () {
    return {
      home: {
        score: 0
      },
      away: {
        score: 0
      }
    }
  }
}
</script>
