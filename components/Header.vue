<template>
  <div class="relative">
    <img src="@/assets/png/mountains4.png" class="h-32 md:h-auto w-full" />
    <nav class="absolute top-0 w-full flex justify-between items-center text-white px-[10%] h-12 bg-transparent">
      <div class="font-semibold hidden md:block">
        <NuxtLink :to="{ name: 'index' }">Christian Harrison</NuxtLink>
      </div>

      <div class="font-semibold block md:hidden">
        <NuxtLink :to="{ name: 'index' }">CH</NuxtLink>
      </div>
      <div class="hidden md:block">
        <NavigationDesktopHeader />
      </div>
      <div class="block md:hidden">
        <NavigationMobileHeader />
      </div>
    </nav>
  </div>
</template>


