<script lang="ts" setup>
import TheLocaleChanger from './UI/TheLocaleChanger.vue'
import TheDarkBtn from './UI/TheDarkBtn.vue'
import { ref } from 'vue'

const isNavVisible = ref(false)

function toggleNav () {
  isNavVisible.value = !isNavVisible.value
}

</script>
<template>
  <div>
    <div
      class=""
    >
      <button
        id="theme-toggle"
        type="button"
        aria-label="settings"
        class="tw-fixed tw-right-2 tw-top-2 tw-z-50 tw-box-content tw-flex tw-flex-row tw-items-center tw-rounded-md tw-bg-slate-100 tw-px-3 tw-py-1 tw-align-middle tw-text-purple-500 hover:tw-bg-gray-200 hover:tw-text-purple-600 focus:tw-outline-none focus-visible:tw-ring-4 focus-visible:tw-ring-indigo-400 dark:tw-bg-indigo-900 dark:tw-text-amber-200 dark:hover:tw-text-amber-50 dark:focus:tw-bg-indigo-600 md:tw-hidden"
        @click="toggleNav()"
      >
        <span
          v-if="!isNavVisible"
          class="tw-i-ph-list tw-h-11 tw-w-10"
        />
        <span
          v-else
          class="tw-i-ph-x tw-h-11 tw-w-10"
        />
      </button>
    </div>

    <Transition name="fade">
      <div
        v-show="isNavVisible"
        class="tw-l-0 tw-fixed tw-top-0 tw-z-40 tw-h-screen tw-w-screen tw-bg-indigo-100 dark:tw-bg-indigo-900"
      >
        <div>
          <div class="tw-mt-20 tw-flex tw-w-[70%] tw-flex-row tw-items-center tw-justify-center">
            <TheDarkBtn />
            <TheLocaleChanger />
          </div>

          <hr class="tw-mt-10 tw-border-t-2 tw-border-indigo-200 tw-px-20 tw-pt-10 dark:tw-border-indigo-700">
          <nav
            v-scroll-spy-active
            v-scroll-spy-link
            role="navigation"
            class="tw-align-center tw-flex tw-w-full tw-select-none tw-flex-col tw-items-center tw-space-y-6 tw-text-center tw-text-xl tw-font-semibold"
          >
            <RouterLink
              to="/#about"
              class="custom-nav-link tw-w-full tw-px-3 tw-py-4 tw-transition-all focus-visible:tw-outline-none focus-visible:tw-ring-4 dark:tw-text-white dark:focus-visible:tw-ring-gray-700"
            >
              {{ $t("nav.about") }}
            </RouterLink>
            <RouterLink
              to="/#expertise"
              class="custom-nav-link tw-w-full tw-px-3 tw-py-4 tw-transition-all focus-visible:tw-outline-none focus-visible:tw-ring-4 dark:tw-text-white dark:focus-visible:tw-ring-gray-700"
            >
              {{ $t("nav.skills") }}
            </RouterLink>
            <RouterLink
              to="/#contact"
              class="custom-nav-link tw-w-full tw-px-3 tw-py-4 tw-transition-all focus-visible:tw-outline-none focus-visible:tw-ring-4 dark:tw-text-white dark:focus-visible:tw-ring-gray-700"
            >
              {{ $t("nav.contact") }}
            </RouterLink>
          </nav>

          <hr class="tw-my-20 tw-border-t-2 tw-border-indigo-200 tw-px-20 dark:tw-border-indigo-700">
          <div class="tw-my-10 tw-w-full tw-text-center lg:tw-mt-0 lg:tw-w-4/12 lg:tw-text-right">
            <router-link
              to="/impressum"
              class="tw-mr-5 tw-rounded-md tw-bg-opacity-50 tw-px-2 tw-py-2 tw-text-indigo-800 tw-underline tw-underline-offset-4 tw-transition-colors hover:tw-bg-black hover:tw-text-purple-50 "
            >
              Impressum
            </router-link>
            <router-link
              to="/datenschutz"
              class="tw-rounded-md tw-bg-opacity-50 tw-px-2 tw-py-2 tw-text-indigo-800 tw-underline tw-underline-offset-4 tw-transition-colors hover:tw-bg-black hover:tw-text-purple-50 "
            >
              Datenschutz
            </router-link>
          </div>

          <div class="tw-text-center tw-text-black dark:tw-text-indigo-100 lg:tw-w-4/12 lg:tw-text-left">
            <p class="tw-mb-2">
              &copy; 2023 Laura A. Redeker
            </p>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>