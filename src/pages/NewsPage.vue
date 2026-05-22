<template>
  <PageFrame :title="t('newsPage.title')" :breadcrumb="t('newsPage.breadcrumb')" :description="t('newsPage.description')">
    <section class="section-block">
      <h2>{{ t('newsPage.heading') }}</h2>
      <ul class="news-list news-list--full">
        <li v-for="item in latestNews" :key="`${item.date}-${item.text}`">
          <time>{{ item.date }}</time>
          <a v-if="item.href" :href="item.href">{{ item.text }}</a>
          <span v-else>{{ item.text }}</span>
        </li>
      </ul>
    </section>
  </PageFrame>
</template>

<script setup>
import { computed } from 'vue'
import PageFrame from '../components/PageFrame.vue'
import { useI18n } from '../i18n'

const { t, tm } = useI18n()
const latestNews = computed(() => tm('latestNews'))
</script>
