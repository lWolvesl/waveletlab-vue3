<template>
  <aside class="sidebar" :aria-label="t('aria.conferenceShortcuts')">
    <nav class="side-card">
      <RouterLink v-for="item in sideNav" :key="item.to" :to="item.to">
        {{ item.label }}
      </RouterLink>
    </nav>
    <section class="download-card">
      <h2>{{ t('sidebar.flyerTitle') }}</h2>
      <p>{{ t('sidebar.flyerDescription') }}</p>
      <a v-for="item in downloadLinks" :key="item.href" :href="item.href" :download="item.download">
        <Download />
        {{ item.label }}
      </a>
    </section>
  </aside>
</template>

<script setup>
import { computed } from 'vue'
import { Download } from '@element-plus/icons-vue'
import { useI18n } from '../i18n'

const { t, tm } = useI18n()
const sideNav = computed(() => tm('sideNav'))
const downloadLinks = computed(() => tm('downloadLinks'))
</script>
