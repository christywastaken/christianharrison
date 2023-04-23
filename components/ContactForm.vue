<template>
  <form @submit.prevent="submitForm">
    <div class="flex flex-col items-center justify-center">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="form.name" required />
    </div>
    <div class="flex flex-col items-center justify-center my-4">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="form.email" required />
    </div>
    <div class="flex flex-col items-center justify-center my-4">
      <label for="message">Message:</label>
      <textarea id="message" v-model="form.message" required></textarea>
    </div>
    <div class="flex flex-col items-center justify-center px-16 my-4">
      <button class="flex items-center justify-center rounded-full bg-gray-400 px-8" type="submit">Send</button>
    </div>
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
