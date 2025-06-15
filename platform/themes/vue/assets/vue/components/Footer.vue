<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>{{ siteName }}</h3>
        <p>{{ copyright }}</p>
      </div>
      <div class="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Footer',
  data() {
    return {
      siteName: 'Botble CMS',
      copyright: '© 2024 Botble CMS. All rights reserved.'
    }
  }
})
</script>

<style lang="scss" scoped>
.footer {
  background-color: #2c3e50;
  color: #fff;
  padding: 2rem 0;
  margin-top: 2rem;

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    padding: 0 1rem;
  }

  .footer-section {
    h3 {
      color: var(--primary-color);
      margin-bottom: 1rem;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin-bottom: 0.5rem;

        a {
          color: #fff;
          text-decoration: none;
          transition: color 0.3s;

          &:hover {
            color: var(--primary-color);
          }
        }
      }
    }
  }
}
</style> 