<template>
  <PageFrame
    :title="t('information.title')"
    :breadcrumb="t('information.breadcrumb')"
    :description="t('information.description')"
  >
    <section class="section-block">
      <h2>{{ t('information.callForPaper') }}</h2>
      <p v-for="paragraph in tm('information.paragraphs')" :key="paragraph">{{ paragraph }}</p>
      <p>{{ t('information.topicsIntro') }}</p>
      <ul class="two-column-list">
        <li v-for="topic in callForPaperTopics" :key="topic">{{ topic }}</li>
      </ul>
      <p>
        {{ t('information.submitBefore') }}
        <a :href="conference.cmtUrl" target="_blank" rel="noreferrer">{{ t('information.cmtSystem') }}</a>
        {{ t('information.submitMiddle') }}
        (<strong>{{ t('information.stronglyRecommend') }}</strong>), {{ t('information.submitAfter') }}
        <a :href="`mailto:${conference.email}`">{{ conference.email }}</a>.
      </p>
      <p>{{ t('information.lookingForward') }}</p>
    </section>

    <section class="section-block">
      <h2>{{ t('information.importantDates') }}</h2>
      <ul class="date-list">
        <li v-for="item in importantDates" :key="item.event">
          <span>{{ item.event }}</span>
          <strong>{{ item.date }}</strong>
        </li>
      </ul>
    </section>

    <section class="section-block">
      <h2>{{ t('information.catalogNumbers') }}</h2>
      <DataTable :columns="catalogColumns" :rows="catalogNumbers" />
    </section>

    <section class="section-block organization">
      <h2>{{ t('information.organization') }}</h2>
      <p v-for="line in tm('information.organizationLines')" :key="line">{{ line }}</p>
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
const callForPaperTopics = computed(() => tm('callForPaperTopics'))
const importantDates = computed(() => tm('importantDates'))
const catalogNumbers = computed(() => tm('catalogNumbers'))
const catalogColumns = computed(() => tm('columns.catalog'))
</script>
