<template>
    <div>
      <h3>{{ component.name }}</h3>
      <div v-if="component.deck.length() > 0">[{{ this.component.deck.length() }} outcome cards ]</div>
      <div v-if="component.deck.length() === 0 && card === null">Fully Tested. Automatic success</div>
      <button class='button is-primary' @click='drawOutcome'
          v-if='component.deck.length() > 0 && card === null'>Draw Outcome</button>
      <div v-if="card !== null">
        {{ card }}
        <button class='button is-primary' @click='removeCard'>Remove outcome</button>
        <button class='button' @click='keepCard'>Keep outcome</button>
      </div>
    </div>
</template>

<script>
import { Component } from '@/models/Component'

export default {
  name: 'TechnologyComponent',
  props: {
    component: Component
  },
  data: function () {
    return {
      card: null
    }
  },
  methods: {
    drawOutcome: function () {
      this.card = this.component.deck.draw()
    },
    keepCard: function () {
      this.component.deck.addCard(this.card)
      this.component.deck = this.component.deck.shuffle()
      this.card = null
    },
    removeCard: function () {
      this.component.deck = this.component.deck.shuffle()
      this.card = null
    }
  }
}
</script>
