<template>
  <PageFrame
    :title="t('topicsPage.title')"
    :breadcrumb="t('topicsPage.breadcrumb')"
    :description="t('topicsPage.description')"
  >
    <section class="section-block">
      <h2>{{ t('topicsPage.heading') }}</h2>
      <p>{{ t('topicsPage.intro') }}</p>
      <div class="topic-grid">
        <article v-for="group in topicGroups" :key="group.title" class="topic-card">
          <h3>{{ group.title }}</h3>
          <ul>
            <li v-for="item in group.items" :key="item">{{ item }}</li>
          </ul>
        </article>
      </div>
    </section>
  </PageFrame>
</template>

<script setup>
import { computed } from 'vue'
import PageFrame from '../components/PageFrame.vue'
import { useI18n } from '../i18n'

const { t, tm } = useI18n()
const topicGroups = computed(() => tm('topicGroups'))
</script>
