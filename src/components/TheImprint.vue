<template>
  <base-container>
    <base-breadcrumbs currentPage="impressum" />

    <h1 class="tw-mt-10 tw-text-4xl tw-font-semibold tw-text-indigo-700 dark:tw-text-indigo-300 md:tw-mb-20 md:tw-text-6xl xl:tw-text-7xl">
      Impressum
    </h1>
    <section>
      <p>
        Dieses Impressum gilt für alle Angebote unter der Domain www.lauraredeker.com inklusive aller Subdomains (Unterseiten).
      </p>
      <h4 class="tw-mb-2 tw-mt-8 tw-text-xl tw-font-semibold">
        Angaben gemäß § 5 TMG
      </h4>
      <p>
        Laura Redeker<br>
        Firstalmstr. 19<br>
        81539 München<br>
      </p>
      <h4 class="tw-mb-2 tw-mt-8 tw-text-xl tw-font-semibold">
        Kontakt
      </h4>
      <p>
        E-Mail: <a
          class="tw-font-semibold tw-text-purple-500 tw-underline tw-underline-offset-4 hover:tw-bg-gray-200 hover:tw-text-black dark:tw-text-purple-200 dark:hover:tw-bg-black dark:hover:tw-text-white"
          href="mailto:lauraredeker.ux@gmail.com"
        >lauraredeker.ux@gmail.com</a>
      </p>
      <h4 class="tw-mb-2 tw-mt-8 tw-text-xl tw-font-semibold">
        Gültigkeit
      </h4>
      <p>
        Dieses Impressum gilt ab dem 6. September 2023.
      </p>
    </section>

    <section class="tw-mt-20">
      <h4  class="tw-mb-2 tw-mt-8 tw-text-xl tw-font-semibold">
        Haftung für Inhalte
      </h4>
      <p>
        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
        allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
        übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen,
        die auf eine rechtswidrige Tätigkeit hinweisen.
      </p>
      <p>
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
      </p>
    </section>

    <section class="tw-mt-20">
      <h4  class="tw-mb-2 tw-mt-8 tw-text-xl tw-font-semibold">
        Haftung für Links
      </h4>
      <p>
        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
        Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
      </p>
      <p>
        Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
      </p>
    </section>

    <section class="tw-mt-20">
      <h4  class="tw-mb-2 tw-mt-8 tw-text-xl tw-font-semibold">
        Urheberrecht
      </h4>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede
        Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
      </p>
      <p>
        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
      </p>
    </section>
  </base-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseBreadcrumbs from './BaseBreadcrumbs.vue'

export default defineComponent({
  name: 'TheImprint',
  components: {
    BaseBreadcrumbs,
  },
})
</script>