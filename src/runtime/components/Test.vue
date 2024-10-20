<template>
  <div class="code">{{ content }}</div>

</template>

<script setup>
const props = defineProps({
  content: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
code {
  user-select: text;
}
</style>
