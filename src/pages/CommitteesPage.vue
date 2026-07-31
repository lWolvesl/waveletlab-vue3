<template>
  <PageFrame
    :title="t('committeesPage.title')"
    :breadcrumb="t('committeesPage.breadcrumb')"
    :description="t('committeesPage.description')"
  >
    <section class="committee-grid">
      <article v-for="group in committeeGroups" :key="group.title" class="committee-card">
        <h2>{{ group.title }}</h2>
        <ul>
          <li v-for="member in group.members" :key="member">{{ member }}</li>
        </ul>
      </article>
    </section>
  </PageFrame>
</template>

<script setup>
import { computed } from 'vue'
import PageFrame from '../components/PageFrame.vue'
import { useI18n } from '../i18n'

const { t, tm } = useI18n()
const committeeGroups = computed(() => tm('committeeGroups'))
</script>
