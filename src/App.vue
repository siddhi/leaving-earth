<template>
  <div id="app" class="container">
      <h1 class="title">Leaving Earth Outcome Simulator</h1>
      <b-tabs v-model="activePlayer">
          <b-tab-item icon="plus" :visible="numPlayers !== 5">
              <h2 class="subtitle">Choose an agency</h2>
              <ul>
                  <li v-for="agency in agencies" :key="agency.name"
                      @click="addPlayer(agency)" class="agency-banner">
                      <AgencyBanner :name="agency.name" size="medium"/>
                  </li>
              </ul>
          </b-tab-item>
          <b-tab-item v-for="player in players" :label="player.name" :key="player.name">
              <AgencyPane :agency="player" />
          </b-tab-item>
      </b-tabs>
  </div>
</template>

<script>
import { AvailableAgencies } from '@/models/Agency'
import AgencyPane from './components/AgencyPane.vue'
import AgencyBanner from './components/AgencyBanner.vue'

export default {
  name: 'app',
  components: {
    AgencyPane,
    AgencyBanner
  },
  data: function () {
    return {
      activePlayer: 0,
      agencies: AvailableAgencies,
      players: []
    }
  },
  computed: {
    numPlayers: function () {
      return this.players.length
    }
  },
  methods: {
    addPlayer: function (agency) {
      delete this.agencies[agency.name]
      this.players.push(agency)
      if (this.numPlayers === 5) {
        this.activePlayer = 1
      }
    }
  }
}
</script>

<style>
.agency-banner {
    float: left;
    margin-right: 10px;
}
</style>
