<template>
  <PageFrame
    :title="t('speakersPage.title')"
    :breadcrumb="t('speakersPage.breadcrumb')"
    :description="t('speakersPage.description')"
  >
    <section class="speaker-list">
      <article v-for="speaker in speakers" :key="speaker.name" class="speaker-card">
        <img :src="speaker.image" :alt="speaker.name" />
        <div>
          <p class="eyebrow">{{ speaker.title }}</p>
          <h2>{{ speaker.name }}</h2>
          <p class="speaker-affiliation">{{ speaker.affiliation }}</p>
          <p>{{ speaker.bio }}</p>
        </div>
      </article>
    </section>
  </PageFrame>
</template>

<script setup>
import { computed } from 'vue'
import PageFrame from '../components/PageFrame.vue'
import { useI18n } from '../i18n'

const { t, tm } = useI18n()
const speakers = computed(() => tm('speakers'))
</script>
