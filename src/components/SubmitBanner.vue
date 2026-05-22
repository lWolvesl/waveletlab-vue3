<template>
  <section class="submit-banner" :aria-label="t('aria.paperSubmission')">
    <div class="container submit-banner__inner">
      <p>{{ t('submitBanner.text') }}</p>
      <div class="submit-banner__actions">
        <el-button tag="a" :href="conference.cmtUrl" target="_blank" rel="noreferrer" type="primary" size="large">
          {{ t('submitBanner.submit') }}
        </el-button>
        <el-button tag="a" :href="conference.submissionInstruction" size="large">
          {{ t('submitBanner.instruction') }}
        </el-button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from '../i18n'

const { t, tm } = useI18n()
const conference = computed(() => tm('conference'))
</script>
