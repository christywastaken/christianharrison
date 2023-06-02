<template>
  <div class="relative">
    <div class="bg-primary w-full bg-contain mountain-background" >
      <div class="fixed top-0 left-0 right-0 h-12 backdrop-blur-xl z-10"></div>
      <Header class="sticky top-0 z-20"/>
      <NuxtPage class="z-50 min-h-screen"/>
    </div>
    <Footer class="absolute bottom-0"/>
  </div>
</template>


<style scoped>
  .mountain-background {
    background-image: url('@/assets/png/mountains5.png');
    background-position: 0px 48px;
    background-repeat: no-repeat;
  }

</style>


