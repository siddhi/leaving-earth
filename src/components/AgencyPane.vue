<template>
  <div>
    <AgencyBanner :name="agency.name" size="medium" />
    <div v-if="Object.keys(availableTechnologies).length > 0">
      <b-field>
        <b-select placeholder="Buy a technology" v-model="selectedTech">
          <option v-for="(tech, key) in availableTechnologies" :key="key" :value="key">
            {{ tech }}
          </option>
        </b-select>
      </b-field>
      <b-field>
        <button class="button is-primary" @click="buyTechnology">Buy</button>
      </b-field>
    </div>
    <div v-if="technologies.length > 0">
      <h2 class="subtitle">Purchased Technologies</h2>
      <ul>
        <li v-for="tech in technologies" :key="tech.name">
            <TechnologyComponent :component="tech" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Agency } from '@/models/Agency'
import { AvailableComponents, Component } from '@/models/Component'
import { OutcomeDeck } from '@/models/Deck'
import TechnologyComponent from './TechnologyComponent.vue'
import AgencyBanner from './AgencyBanner.vue'

export default {
  name: 'AgencyPane',
  props: {
    agency: Agency
  },
  components: {
    TechnologyComponent,
    AgencyBanner
  },
  data: function () {
    return {
      availableTechnologies: { ...AvailableComponents },
      technologies: [],
      selectedTech: null
    }
  },
  methods: {
    buyTechnology: function () {
      this.technologies.push(new Component(AvailableComponents[this.selectedTech], OutcomeDeck))
      delete this.availableTechnologies[this.selectedTech]
      this.selectedTech = null
    }
  }
}
</script>
