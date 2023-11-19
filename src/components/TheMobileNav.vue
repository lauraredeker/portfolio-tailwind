<script lang="ts" setup>
  import TheLocaleChanger from './UI/TheLocaleChanger.vue';
  import TheDarkBtn from './UI/TheDarkBtn.vue';
  import TheNav from './TheNav.vue';
  import { ref } from 'vue';

  const isNavVisible = ref(false);

  function toggleNav() {
    isNavVisible.value = !isNavVisible.value;
    document.body.classList.toggle('tw-overflow-hidden', isNavVisible.value);
  }
</script>
<template>
  <div>
    <button
      id="theme-toggle"
      type="button"
      aria-label="settings"
      class="tw-fixed tw-right-2 tw-top-2 tw-z-50 tw-flex tw-flex-row tw-items-center tw-rounded-full tw-bg-indigo-400 tw-px-2 tw-py-2 tw-align-middle tw-text-indigo-50 hover:tw-bg-indigo-200 hover:tw-text-indigo-600 focus:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-indigo-400 dark:tw-bg-indigo-900 dark:tw-text-indigo-100 dark:hover:tw-text-amber-50 dark:focus:tw-bg-indigo-900 md:tw-hidden"
      @click="toggleNav()">
      <span
        v-show="!isNavVisible"
        class="tw-sr-only">
        {{ $t('nav.menu-close') }}
      </span>
      <span
        v-show="!isNavVisible"
        class="tw-i-ph-list tw-h-11 tw-w-11" />
      <span
        v-show="isNavVisible"
        class="tw-i-ph-x tw-h-11 tw-w-11" />
      <span
        v-show="isNavVisible"
        class="tw-sr-only">
        {{ $t('nav.menu-close') }}
      </span>
    </button>

    <div
      v-show="isNavVisible"
      role="dialog"
      aria-modal="true"
      class="animate__animated animate__slideInRight animate__ tw-l-0 tw-fixed tw-top-0 tw-z-40 tw-flex tw-h-full tw-w-screen tw-flex-col tw-justify-between tw-bg-indigo-100 dark:tw-bg-gradient-to-br dark:tw-from-indigo-900 dark:tw-to-indigo-950">
      <div>
        <span
          class="tw-mx-6 tw-mb-1 tw-mt-20 tw-block tw-text-sm tw-font-semibold md:tw-hidden"
          for="mobile-nav">
          Navigation
        </span>
        <hr class="tw-mx-6 tw-border-t-2 tw-border-indigo-200 dark:tw-border-indigo-700" />
      </div>
      <TheNav
        id="mobile-nav"
        class="tw-mt-6"
        @link-click="toggleNav()" />
      <hr class="tw-mx-6 tw-mt-6 tw-border-t-2 tw-border-indigo-200 dark:tw-border-indigo-700" />

      <div class="tw-mt-5 tw-flex tw-flex-row tw-justify-between tw-px-6">
        <TheDarkBtn @click="toggleNav()" />
        <TheLocaleChanger @click="toggleNav()" />
      </div>

      <div>
        <div class="tw-mb-5 tw-mt-10 tw-w-full tw-text-center lg:tw-mt-0 lg:tw-w-4/12 lg:tw-text-right">
          <router-link
            to="/impressum"
            class="tw-mr-5 tw-rounded-md tw-bg-opacity-50 tw-px-2 tw-py-2 tw-text-indigo-800 tw-underline tw-underline-offset-4 tw-transition-colors hover:tw-bg-black hover:tw-text-purple-50 dark:tw-text-indigo-400">
            {{ $t('footer.imprint') }}
          </router-link>
          <router-link
            to="/datenschutz"
            class="tw-rounded-md tw-bg-opacity-50 tw-px-2 tw-py-2 tw-text-indigo-800 tw-underline tw-underline-offset-4 tw-transition-colors hover:tw-bg-black hover:tw-text-purple-50 dark:tw-text-indigo-400">
            {{ $t('footer.privacy') }}
          </router-link>
        </div>

        <p class="tw-mb-16 tw-text-center tw-text-black dark:tw-text-indigo-100">
          &copy; 2023 Laura A. Redeker
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate__animated.animate__slideInRight {
	--animate-duration: 0.5s;
}
</style>
