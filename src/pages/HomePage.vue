<template>
  <section class="home-hero" aria-labelledby="home-title">
    <div class="home-hero__image" aria-hidden="true"></div>
    <div class="home-hero__overlay"></div>
    <div class="container home-hero__content">
      <p class="eyebrow">{{ t('home.heroMeta') }}</p>
      <h1 id="home-title">
        <span class="hero-title-main">{{ t('home.titleMain') }}</span>
        <span class="hero-year">{{ t('home.titleYear') }}</span>
      </h1>
      <p class="hero-subtitle">{{ conference.fullName }}</p>
      <div class="hero-actions">
        <el-button tag="a" :href="conference.cmtUrl" target="_blank" rel="noreferrer" type="success" size="large">
          {{ t('home.submitPaper') }}
        </el-button>
        <el-button tag="a" href="/doc/CallforPaper-EN.pdf" size="large">{{ t('home.callForPaper') }}</el-button>
      </div>
    </div>
  </section>

  <div class="container content-layout home-layout">
    <ConferenceSidebar />
    <article class="content-panel">
      <section class="section-block">
        <img class="intro-image" src="/images/introduction.png" :alt="t('home.posterAlt')" />
        <h2>{{ t('home.introHeading') }}</h2>
        <p v-for="paragraph in tm('home.introParagraphs')" :key="paragraph">{{ paragraph }}</p>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <h2>{{ t('home.latestNews') }}</h2>
          <RouterLink to="/news.html">{{ t('home.viewAllNews') }}</RouterLink>
        </div>
        <ul class="news-list">
          <li v-for="item in latestNews.slice(0, 5)" :key="`${item.date}-${item.text}`">
            <time>{{ item.date }}</time>
            <a v-if="item.href" :href="item.href">{{ item.text }}</a>
            <span v-else>{{ item.text }}</span>
          </li>
        </ul>
      </section>

      <section class="section-block">
        <h2>{{ t('home.routineTitle') }}</h2>
        <p>
          {{ t('home.routineTextBefore') }} <strong>{{ t('home.routineTime') }}</strong>.
          {{ t('home.routineTextAfter') }}
          <a href="https://meeting.tencent.com/" target="_blank" rel="noreferrer">Tencent Meeting</a>
          {{ t('home.routineTextEnd') }}
        </p>
        <div class="routine-list">
          <div v-for="item in routine" :key="`${item.time}-${item.title}`" class="routine-item">
            <time>{{ item.time }}</time>
            <span>{{ item.title }}<small v-if="item.note"> ({{ item.note }})</small></span>
          </div>
        </div>
      </section>

      <section class="section-block">
        <h2>{{ t('home.importantDates') }}</h2>
        <DataTable :columns="dateColumns" :rows="importantDates" />
      </section>

      <section class="section-block">
        <h2>{{ t('home.catalogNumbers') }}</h2>
        <DataTable :columns="catalogColumns" :rows="catalogNumbers" />
        <p>
          {{ t('home.contactBefore') }}
          <RouterLink to="/contact.html">{{ t('home.contactLink') }}</RouterLink>
          {{ t('home.contactAfter') }}
        </p>
      </section>
    </article>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import ConferenceSidebar from '../components/ConferenceSidebar.vue'
import DataTable from '../components/DataTable.vue'
import { useI18n } from '../i18n'

const { t, tm } = useI18n()
const conference = computed(() => tm('conference'))
const latestNews = computed(() => tm('latestNews'))
const routine = computed(() => tm('routine'))
const importantDates = computed(() => tm('importantDates'))
const catalogNumbers = computed(() => tm('catalogNumbers'))
const dateColumns = computed(() => tm('columns.importantDates'))
const catalogColumns = computed(() => tm('columns.catalog'))
</script>
