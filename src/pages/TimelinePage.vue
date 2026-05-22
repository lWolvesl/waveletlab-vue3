<template>
  <PageFrame
    :title="t('timelinePage.title')"
    :breadcrumb="t('timelinePage.breadcrumb')"
    :description="t('timelinePage.description')"
  >
    <section class="section-block">
      <h2>{{ t('timelinePage.heading') }}</h2>
      <DataTable :columns="timelineColumns" :rows="timelineRows" />
    </section>
  </PageFrame>
</template>

<script setup>
import { computed } from 'vue'
import DataTable from '../components/DataTable.vue'
import PageFrame from '../components/PageFrame.vue'
import { useI18n } from '../i18n'

const { t, tm } = useI18n()
const timelineRows = computed(() => tm('timelineRows'))
const timelineColumns = computed(() => tm('columns.timeline'))
</script>
