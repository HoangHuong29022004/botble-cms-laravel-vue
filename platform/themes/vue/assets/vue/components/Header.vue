<template>
  <header class="site-header">
    <nav class="site-header__nav">
      <div class="site-header__logo">
        <router-link to="/">{{ siteName }}</router-link>
      </div>
      <div class="site-header__nav-links">
        <router-link to="/" class="site-header__nav-link">Home</router-link>
        <router-link to="/about" class="site-header__nav-link">About</router-link>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header',
  data() {
    return {
      siteName: 'Botble CMS'
    }
  }
})
</script>