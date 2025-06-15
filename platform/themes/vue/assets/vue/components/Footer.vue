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

<template>
  <footer class="site-footer">
    <div class="site-footer__content">
      <div class="site-footer__section">
        <h3>{{ siteName }}</h3>
        <p>{{ copyright }}</p>
      </div>
      <div class="site-footer__section">
        <h3>Quick Links</h3>
        <ul class="site-footer__list">
          <li class="site-footer__list-item">
            <router-link to="/" class="site-footer__link">Home</router-link>
          </li>
          <li class="site-footer__list-item">
            <router-link to="/about" class="site-footer__link">About</router-link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>