<script setup lang="ts">
import Button from 'primevue/button'

import { usePrimeVue } from 'primevue/config'

const PrimeVue = usePrimeVue()

const increment = () => {
  PrimeVue.changeTheme('aura-light-green', 'aura-dark-green', 'theme-link', () => {})
}
</script>

<template><Button @click="increment">Allo</Button></template>

<style scoped></style>
