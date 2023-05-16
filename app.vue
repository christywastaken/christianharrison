<template>
  <div class="overflow-scroll bg-primary h-screen w-full bg-contain mountain-background relative" >
    <div class="fixed top-0 left-0 right-0 h-12 backdrop-blur-xl z-10"></div>
    <Header class="sticky top-0 z-20"/>
    <NuxtPage class="z-50"/>
  </div>
</template>


<style scoped>
  .mountain-background {
    background-image: url('@/assets/png/mountains5.png');
    background-position: 0px 48px;
    background-repeat: no-repeat;
  }

</style>


