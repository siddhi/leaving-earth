<template>
    <img :src="agencyPath(name)" :class="size"/>
</template>

<script>
export default {
  props: {
    name: String,
    size: String
  },
  methods: {
    agencyPath: (name) => require('../assets/' + name.toLowerCase() + '.png')
  }
}
</script>

<style scoped>
.medium {
    width: 100px;
}
</style>
