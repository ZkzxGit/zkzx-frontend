<template>
  <div>
    <b-notification
      class="main-notification"
      type="is-warning"
      icon-pack="icon"
      has-icon
      :aria-close-label="$t('closeNotification')"
      @close="disableNotification({ key: 'binanceInternal' })"
    >
      <i18n path="zkzx" />
    </b-notification>
    <b-notification
      v-if="netId === 56"
      :active="isActiveNotification.binanceInternal"
      class="main-notification"
      type="is-warning"
      icon-pack="icon"
      has-icon
      :aria-close-label="$t('closeNotification')"
      @close="disableNotification({ key: 'binanceInternal' })"
    >
      <i18n path="binanceInternalTxsNotification" />
    </b-notification>

    <!-- <b-notification
      :active="isActiveNotification.third"
      class="main-notification"
      type="is-warning"
      icon-pack="icon"
      has-icon
      :aria-close-label="$t('closeNotification')"
      @close="disableNotification({ key: 'third' })"
    >
      <i18n path="trustBanner.trustLess">
        <template v-slot:link>
          <a href="https://whitewasheth.com//">{{ $t('trustBanner.link') }}</a>
        </template>
      </i18n>
    </b-notification> -->

    <b-notification
      :active="isActiveNotification.first"
      class="main-notification"
      type="is-info"
      icon-pack="icon"
      has-icon
      :aria-close-label="$t('closeNotification')"
      @close="disableNotification({ key: 'first' })"
    >
      <i18n path="indexNotification">
        <template v-slot:link>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">{{
            $t('indexNotificationLinkText')
          }}</a>
        </template>
      </i18n>
    </b-notification>

    <!-- <b-notification
      v-if="isEthLink"
      :active="isActiveNotification.ethLink"
      class="main-notification"
      type="is-warning"
      icon-pack="icon"
      has-icon
      :aria-close-label="$t('closeNotification')"
      @close="disableNotification({ key: 'ethLink' })"
    >
      <i18n path="ethLinkBanner.notification">
        <template v-slot:issue>
          <a
            href="https://discuss.ens.domains/t/eth-link-expiry/13899"
            target="_blank"
            rel="noopener noreferrer"
            >{{ $t('ethLinkBanner.issue') }}</a
          >
        </template>
        <template v-slot:alternative>
          <a href="https://whitewasheth.com//">{{ $t('ethLinkBanner.alternative') }}</a>
        </template>
      </i18n>
    </b-notification> -->

    <div class="columns">
      <div class="column is-half">
        <b-tabs v-model="activeTab" class="is-white" :animated="false" @input="tabChanged">
          <Deposit />
          <Withdraw :active-tab="activeTab" @get-key="onGetKey" />
        </b-tabs>
      </div>
      <Statistics />
    </div>
    <!-- <div class="columns center-justify-xee">
      <b-tabs
        v-model="activeTab"
        :style="activeTab === 1 ? { height: 'fit-content' } : ''"
        class="is-white-xeedev tab-content"
        :class="activeTab !== 0 ? 'xee-overflow-scroll' : ''"
        :animated="false"
        @input="tabChanged"
      >
        <Deposit />
        <Withdraw :active-tab="activeTab" @get-key="onGetKey" />
        <Notes />
      </b-tabs>
    </div> -->
    <!-- <div class="columns center-justify-xee">
      <Statistics />
    </div> -->
    <!-- <Txs /> -->
  </div>
</template>
<script>
/* eslint-disable no-console */
import { mapState, mapGetters, mapActions } from 'vuex'

// import Txs from '@/components/Txs'
import Deposit from '@/components/Deposit'
import Statistics from '@/components/Statistics'
import Withdraw from '@/components/withdraw/Withdraw'
// import Notes from '@/components/Notes'

export default {
  name: 'HomePage',
  components: {
    // Txs,
    Deposit,
    Withdraw,
    Statistics
    // Notes
  },
  data() {
    return {
      activeTab: 0,
      isActive: false,
      isEthLink: window.location.host === 'tornadocash.eth.link'
    }
  },
  computed: {
    ...mapState('application', ['selectedInstance']),
    ...mapState('settings', ['isActiveNotification']),
    ...mapGetters('metamask', ['netId'])
  },
  watch: {
    netId() {
      if (this.activeTab === 1) {
        // this.$store.dispatch('relayer/pickRandomRelayer', { type: 'white' })
      }
    }
  },
  created() {
    this.$store.dispatch('application/setNativeCurrency', { netId: this.netId })
    this.checkIsTrustedUrl()
  },
  methods: {
    ...mapActions('settings', ['disableNotification']),
    checkIsTrustedUrl() {
      const isIpfs = this.$isLoadedFromIPFS()
      if (!isIpfs) {
        this.disableNotification({ key: 'third' })
      }
    },
    onGetKey(fn) {
      this.getKeys = fn
    },
    async tabChanged(tabIndex) {
      if (tabIndex === 1) {
        // this.$store.dispatch('relayer/pickRandomRelayer', { type: 'white' })

        if (typeof this.getKeys === 'function' && !this.isActive) {
          this.isActive = true
          const result = await this.getKeys()

          if (!result) {
            this.isActive = false
          }
        }
      } else {
        const { currency, amount } = this.selectedInstance
        this.$store.dispatch('application/setAndUpdateStatistic', { currency, amount })
      }
    }
  }
}
</script>

<style scoped>
.is-white-xeedev {
  margin-top: 90px;
  background-color: #ffffff !important;
  border: 1px solid #000000 !important;
}
.center-justify-xee {
  justify-content: center;
}
</style>
