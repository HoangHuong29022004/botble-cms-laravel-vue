<template>
  <header class="header">
    <nav class="nav-container">
      <div class="logo">
        <router-link to="/">{{ siteName }}</router-link>
      </div>
      <div class="nav-links">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
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

<style lang="scss" scoped>
.header {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 1rem;

  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    
    a {
      color: var(--primary-color);
      text-decoration: none;
    }
  }

  .nav-links {
    display: flex;
    gap: 1rem;

    .nav-link {
      color: #2c3e50;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      transition: background-color 0.3s;

      &:hover {
        background-color: #f5f5f5;
      }

      &.router-link-active {
        color: var(--primary-color);
        font-weight: bold;
      }
    }
  }
}
</style> 