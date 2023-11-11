<script setup lang="ts">

</script>

<template>
  <div>
    <p>
      <!-- use the router-link component for navigation. -->
      <!-- specify the link by passing the `to` prop. -->
      <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
        <br>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </p>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
  </div>

</template>

