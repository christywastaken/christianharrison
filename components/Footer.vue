<template>
  <div class="flex w-full h-12 items-center justify-center bg-transparent">
    <span class="text-sm font-extralight text-slate-300">© christianharrison.co.uk {{ thisYear }}</span>
  </div>
</template>

<script setup lang="ts">
  const date = new Date();
  const thisYear = date.getFullYear();
</script>
