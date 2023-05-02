<!-- <template>
   <button class="flex items-center justify-center w-12 h-12 rounded-full hover:border-slate-400 hover:border z-10" @click="toggleMobileMenu">
        <Icon name="menu" class="m-4 h-6 w-6 fill-slate-400" />
      </button>
      <NavigationSideMenu
      v-if="navMenuActive"
      id="dropdown"
      class="fixed flex"
      @click="toggleMobileMenu"
    />
</template>

<script setup>
  const navMenuActive = ref(false);
  
  const toggleMobileMenu = () => {
    console.log('test');
    navMenuActive.value = !navMenuActive.value;
    navMenuActive.value ? document.body.setAttribute("style", "overflow: hidden;") : document.body.removeAttribute("style", "overflow: hidden;");
    console.log(`clickState: ${navMenuActive.value}`);
  };

</script> -->

<template>
   <button class="flex items-center justify-center w-12 h-12 rounded-full hover:border-slate-400 hover:border z-10" @click="toggleMobileMenu">
        <Icon name="menu" class="m-4 h-6 w-6 fill-slate-400" />
   </button>
   <NavigationSideMenu
      v-if="navMenuActive"
      id="dropdown"
      class="fixed flex"
      @click="toggleMobileMenu"
   />
</template>

<script setup>
  import NavigationSideMenu from '@/components/navigation/SideMenu.vue'

  const navMenuActive = ref(false);

  const toggleMobileMenu = () => {
    console.log('test');
    navMenuActive.value = !navMenuActive.value;
    navMenuActive.value ? document.body.setAttribute("style", "overflow: hidden;") : document.body.removeAttribute("style", "overflow: hidden;");
    console.log(`clickState: ${navMenuActive.value}`);
  };
</script>

<script>
  export default {
    components: { NavigationSideMenu }
  }
</script>
