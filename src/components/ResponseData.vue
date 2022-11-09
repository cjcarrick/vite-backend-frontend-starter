<script setup lang="ts">
import { type GreetingRequest, type GreetingResponse } from 'lib'
const props = defineProps<{ request: GreetingRequest }>()

const data = await fetch('/api/hello?name=' + props.request.name)
const greeting: GreetingResponse = await data.json()
</script>

<template>
  <p>The server says: {{ greeting }}</p>
</template>
