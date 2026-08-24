<template>
  <PageFrame
    :title="t('guidance.title')"
    :breadcrumb="t('guidance.breadcrumb')"
    :description="t('guidance.description')"
  >
    <section class="section-block faq-list">
      <article>
        <h2>{{ t('guidance.q1') }}</h2>
        <p>
          {{ t('guidance.q1TextBefore') }}
          <a href="https://cdn.jsdelivr.net/gh/waveletlab-uestc/oos@271b5494f91c1869d5d3d590b8ab02d682295ef4/PaperFormat-2026(EN)-260731.dotx">PAPER FORMAT (EN)</a> or
          <a href="https://cdn.jsdelivr.net/gh/waveletlab-uestc/oos@271b5494f91c1869d5d3d590b8ab02d682295ef4/PaperFormat-2026(CN)-260731.dotx">PAPER FORMAT (CN)</a> or
          <a :href="latexTemplateUrl">LaTeX Template</a>
          ({{ t('guidance.q1TextAfter') }})
        </p>
      </article>
      <article>
        <h2>{{ t('guidance.q2') }}</h2>
        <p>
          {{ t('guidance.q2Text') }}
          <a href="https://cdn.jsdelivr.net/gh/waveletlab-uestc/oos@271b5494f91c1869d5d3d590b8ab02d682295ef4/CallforPaper-CN260731.pdf">CallForPaper-CN</a> /
          <a href="https://cdn.jsdelivr.net/gh/waveletlab-uestc/oos@271b5494f91c1869d5d3d590b8ab02d682295ef4/CallforPaper-EN260731.pdf">CallForPaper-EN</a>.
        </p>
      </article>
      <article>
        <h2>{{ t('guidance.q3') }}</h2>
        <p>{{ t('guidance.q3Intro') }}</p>
        <ol>
          <li>
            <a href="https://cmt3.research.microsoft.com/" target="_blank" rel="noreferrer">{{ t('guidance.steps.0') }}</a>
          </li>
          <li>
            <a href="https://cmt3.research.microsoft.com/ICCWAMTIP2026" target="_blank" rel="noreferrer">
              {{ t('guidance.steps.1') }}
            </a>.
          </li>
          <li>{{ t('guidance.steps.2') }}</li>
        </ol>
      </article>
      <article>
        <h2>{{ t('guidance.q4') }}</h2>
        <p>{{ t('guidance.q4Text') }}</p>
      </article>
    </section>

    <section class="section-block submission-requirements">
      <div class="submission-requirements__header">
        <h2>{{ submissionRequirements.title }}</h2>
        <p class="language-notice">{{ submissionRequirements.languageNotice }}</p>
      </div>
      <ul class="requirement-list">
        <li>
          <div class="requirement-heading">
            <strong>{{ submissionRequirements.initial.label }}</strong>
            <span>{{ submissionRequirements.initial.stage }}</span>
          </div>
          <p>{{ submissionRequirements.initial.text }}</p>
        </li>
        <li>
          <div class="requirement-heading">
            <strong>{{ submissionRequirements.cameraReady.label }}</strong>
            <span>{{ submissionRequirements.cameraReady.stage }}</span>
          </div>
          <p>{{ submissionRequirements.cameraReady.text }}</p>
          <ul class="source-list">
            <li v-for="item in submissionRequirements.cameraReady.items" :key="item.label">
              <strong>{{ item.label }}</strong>
              <span>{{ item.textBefore }}</span>
              <template v-for="(fileType, index) in item.fileTypes" :key="fileType">
                <code>{{ fileType }}</code>
                <span v-if="index < item.fileTypes.length - 1">{{ item.separator }}</span>
              </template>
              <span v-if="item.packageBefore">{{ item.packageBefore }}</span>
              <code v-if="item.packageType">{{ item.packageType }}</code>
              <span>{{ item.textAfter }}</span>
            </li>
          </ul>
        </li>
      </ul>
    </section>

    <section class="section-block">
      <h2>{{ t('guidance.feeTitle') }}</h2>
      <DataTable :columns="feeColumns" :rows="fees" />
      <p>{{ t('guidance.feeExample') }}</p>
    </section>

    <section class="section-block">
      <h2>{{ t('guidance.moreQuestions') }}</h2>
      <p>
        {{ t('guidance.moreQuestionsTextBefore') }}
        <RouterLink to="/contact.html">{{ t('guidance.contactPage') }}</RouterLink>.
      </p>
      <p>{{ t('guidance.ourEmail') }} <a :href="`mailto:${conference.email}`">{{ conference.email }}</a></p>
    </section>

    <section class="section-block">
      <h2>{{ t('guidance.acknowledgment') }}</h2>
      <p>{{ t('guidance.acknowledgmentText') }}</p>
    </section>
  </PageFrame>
</template>

<script setup>
import { computed } from 'vue'
import DataTable from '../components/DataTable.vue'
import PageFrame from '../components/PageFrame.vue'
import { latexTemplateUrl, useI18n } from '../i18n'

const { t, tm } = useI18n()
const conference = computed(() => tm('conference'))
const feeColumns = computed(() => tm('columns.fees'))
const fees = computed(() => tm('guidance.fees'))
const submissionRequirements = computed(() => tm('guidance.submissionRequirements'))
</script>
