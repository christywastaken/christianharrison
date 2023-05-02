<template>
  <div class="flex justify-between items-center px-[10%] h-12 bg-white">
    <div class="font-semibold">
      <NuxtLink :to="{ name: 'index' }">Christian Harrison</NuxtLink>
    </div>
    <div class="hidden md:block">
      <NavigationDesktopHeader />
    </div>
    <div class="block md:hidden">
      <NavigationMobileHeader />
    </div>
  </div>
</template>
