<template>
    <div><h2 class="subtitle">{{ agency.name }}</h2></div>
</template>

<script>
import { Agency } from '@/models/Agency'

export default {
  name: 'AgencyPane',
  props: {
    agency: Agency
  }
}
</script>
