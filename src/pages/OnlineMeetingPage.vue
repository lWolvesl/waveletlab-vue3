<template>
  <PageFrame
    :title="t('onlineMeetingPage.title')"
    :breadcrumb="t('onlineMeetingPage.breadcrumb')"
    :description="t('onlineMeetingPage.description')"
  >
    <section class="section-block">
      <h2>{{ t('onlineMeetingPage.heading') }}</h2>
      <p>{{ t('onlineMeetingPage.intro') }}</p>
      <ul class="meeting-info">
        <li v-for="row in rows" :key="row.label">
          <span>{{ row.label }}</span>
          <strong>{{ row.value }}</strong>
        </li>
      </ul>
      <p>{{ t('onlineMeetingPage.note') }}</p>
    </section>
  </PageFrame>
</template>

<script setup>
import { computed } from 'vue'
import PageFrame from '../components/PageFrame.vue'
import { useI18n } from '../i18n'

const { t, tm } = useI18n()
const rows = computed(() => tm('onlineMeetingPage.rows'))
</script>
