<template>
  <form class="flex flex-col items-center justify-center px-4 py-4" @submit.prevent="submitForm">
    <input class="my-4 w-full px-5 text-white bg-transparent border-b-2 h-10 focus:outline-none focus:bg-transparent" type="text" id="name" v-model="form.name" required placeholder="Your name" autocomplete="off" />
    
    <input class="my-4 w-full px-5 text-white bg-transparent border-b-2 h-10 focus:outline-none focus:bg-transparent" type="email" id="email" v-model="form.email" required placeholder="Your email" autocomplete="off"/>

    <textarea class="my-4 w-full px-5 text-white bg-transparent border-b-2 h-10 focus:outline-none focus:bg-transparent" id="message" v-model="form.message" required placeholder="Your message for me" autocomplete="off"></textarea>

    <button class="flex items-center justify-center rounded-full bg-gray-400 px-8" type="submit">Send</button>
  </form>
</template>

<script setup lang="ts">
  const form = ref({
    name: "",
    email: "",
    message: "",
  });

  const submitForm = () => {
    $fetch("/api/send-email", {
      method: "POST",
      body: {
        name: form.value.name,
        email: form.value.email,
        message: form.value.message,
      },
    })
      .then((response) => {
        console.log(response);
        form.value.name = "";
        form.value.email = "";
        form.value.message = "";
        alert("Email sent successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("Error: " + err);
      });
  };
</script>
