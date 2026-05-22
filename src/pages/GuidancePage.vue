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
          <a href="/doc/PaperFormat-EN.dotx">PAPER FORMAT (EN)</a> or
          <a href="/doc/PaperFormat-CN.dotx">PAPER FORMAT (CN)</a>
          ({{ t('guidance.q1TextAfter') }})
        </p>
      </article>
      <article>
        <h2>{{ t('guidance.q2') }}</h2>
        <p>
          {{ t('guidance.q2Text') }}
          <a href="/doc/CallforPaper-CN.pdf">CallForPaper-CN</a> /
          <a href="/doc/CallforPaper-EN.pdf">CallForPaper-EN</a>.
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
            <a href="https://cmt3.research.microsoft.com/ICCWAMTIP2025/Submission/Index" target="_blank" rel="noreferrer">
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
import { useI18n } from '../i18n'

const { t, tm } = useI18n()
const conference = computed(() => tm('conference'))
const feeColumns = computed(() => tm('columns.fees'))
const fees = computed(() => tm('guidance.fees'))
</script>
