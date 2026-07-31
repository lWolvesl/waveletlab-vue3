<template>
  <header class="site-header">
    <a class="skip-link" href="#main-content">{{ t('aria.skipToContent') }}</a>
    <div class="topbar">
      <div class="container topbar__inner">
        <span>{{ conference.location }}</span>
        <span>{{ conference.date }}</span>
        <a :href="`mailto:${conference.email}`">{{ conference.email }}</a>
      </div>
    </div>
    <nav class="navbar" :aria-label="t('aria.mainNavigation')">
      <div class="container navbar__inner">
        <RouterLink class="brand" to="/" aria-label="ICCWAMTIP home">
          <img src="/images/logo.png" alt="ICCWAMTIP" />
        </RouterLink>
        <div class="navbar__actions">
          <ul id="primary-navigation" class="nav-list" :class="{ 'nav-list--open': menuOpen }">
            <li v-for="item in primaryNav" :key="item.to">
              <RouterLink :to="item.to" @click="menuOpen = false">{{ item.label }}</RouterLink>
            </li>
          </ul>
          <div class="language-switch" role="group" :aria-label="t('aria.switchLanguage')">
            <button
              class="language-option"
              type="button"
              :class="{ 'language-option--active': locale === 'en' }"
              :aria-pressed="locale === 'en'"
              @click="setLocale('en')"
            >
              EN
            </button>
            <button
              class="language-option"
              type="button"
              :class="{ 'language-option--active': locale === 'zh' }"
              :aria-pressed="locale === 'zh'"
              @click="setLocale('zh')"
            >
              中文
            </button>
          </div>
          <button
            class="nav-toggle"
            type="button"
            :aria-expanded="menuOpen"
            aria-controls="primary-navigation"
            :aria-label="t('aria.toggleNavigation')"
            @click="menuOpen = !menuOpen"
          >
            <Menu v-if="!menuOpen" />
            <Close v-else />
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { computed, ref } from 'vue'
import { Close, Menu } from '@element-plus/icons-vue'
import { useI18n } from '../i18n'

const menuOpen = ref(false)
const { locale, setLocale, t, tm } = useI18n()
const conference = computed(() => tm('conference'))
const primaryNav = computed(() => tm('primaryNav'))
</script>
