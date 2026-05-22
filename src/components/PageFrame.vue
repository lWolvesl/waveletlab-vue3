<template>
  <section class="page-hero">
    <div class="container page-hero__inner">
      <p class="eyebrow">{{ eyebrow || t('pageFrame.eyebrow') }}</p>
      <h1>{{ title }}</h1>
      <p v-if="description">{{ description }}</p>
    </div>
  </section>
  <nav class="breadcrumbs" :aria-label="t('aria.breadcrumb')">
    <div class="container">
      <RouterLink to="/">{{ t('pageFrame.home') }}</RouterLink>
      <span aria-hidden="true">/</span>
      <span>{{ breadcrumb || title }}</span>
    </div>
  </nav>
  <div class="container content-layout">
    <ConferenceSidebar />
    <article class="content-panel">
      <slot />
    </article>
  </div>
</template>

<script setup>
import ConferenceSidebar from './ConferenceSidebar.vue'
import { useI18n } from '../i18n'

const { t } = useI18n()

defineProps({
  title: {
    type: String,
    required: true,
  },
  eyebrow: {
    type: String,
    default: '',
  },
  breadcrumb: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
})
</script>
