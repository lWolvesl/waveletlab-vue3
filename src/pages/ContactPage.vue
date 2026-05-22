<template>
  <PageFrame
    :title="t('contact.title')"
    :breadcrumb="t('contact.breadcrumb')"
    :description="t('contact.description')"
  >
    <section class="section-block">
      <h2>{{ t('contact.secretariat') }}</h2>
      <p>{{ t('contact.intro') }}</p>
      <div class="contact-grid">
        <a class="contact-card" :href="`tel:${conference.phone.replaceAll(' ', '')}`">
          <Phone />
          <span>{{ t('contact.tel') }}</span>
          <strong>{{ conference.phone }}</strong>
        </a>
        <a class="contact-card" :href="`mailto:${conference.email}`">
          <Message />
          <span>{{ t('contact.email') }}</span>
          <strong>{{ conference.email }}</strong>
        </a>
      </div>
    </section>
    <section class="section-block">
      <h2>{{ t('contact.qqTitle') }}</h2>
      <p>{{ t('contact.qqText') }}</p>
      <img class="qr-image" src="/images/QQGroup.jpg" :alt="t('contact.qqAlt')" />
    </section>
  </PageFrame>
</template>

<script setup>
import { computed } from 'vue'
import { Message, Phone } from '@element-plus/icons-vue'
import PageFrame from '../components/PageFrame.vue'
import { useI18n } from '../i18n'

const { t, tm } = useI18n()
const conference = computed(() => tm('conference'))
</script>
