<template>
  <div class="bg-primary mountains-bg min-h-screen">
    <Header class="sticky top-0" />
    
      <NuxtPage />
    
  </div>
</template>

<script lang="ts">

const router = useRouter

</script>

<style scoped>
  .mountains-bg {
    background-image: url(assets/png/mountains2.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
</style>
