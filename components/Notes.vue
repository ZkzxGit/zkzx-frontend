<template>
  <b-tab-item label="Notes" header-class="button_tab_notes xee-trbr">
    <fieldset>
      <div v-for="(tx, index) in filteredTxs" :key="index">
        <div
          v-if="!tx.isEncrypted"
          style="border:1px solid grey; border-radius: 5px; height: 45px;
    line-height: 38px; color: black; display:flex; justify-content: space-around;"
          class="pt-1 mt-3"
        >
          <span v-if="index < 9" style="display:flex">0{{ index + 1 }}</span>
          <span v-else style="display:flex">{{ index + 1 }}</span>
          <span style="display:flex"
            ><a :href="txExplorerUrl(tx.txHash)" style="color:blue; cursor: pointer;" target="_blank"
              >{{ tx.txHash.substring(0, 40) }}...</a
            ></span
          >
          <b-tooltip :active="!!tx.note" :label="tooltipShareUrl" position="is-left">
            <span style="cursor:pointer; display:flex" @click="copy(tx.prefix + '-' + tx.note)">Copy</span>
          </b-tooltip>
        </div>
      </div>
    </fieldset>
  </b-tab-item>
</template>
<script>
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
  data() {
    return {
      filters: {
        currency: '',
        ifAfter24hrs: false,
        isSpent: undefined,
        timer: null
      },
      transactions: 'all',
      currentSort: 'timestamp',
      isAsc: false,
      mobileSort: 'timestamp',
      tooltipShareUrl: this.$t('copyNote')
    }
  },
  computed: {
    ...mapGetters('metamask', ['networkConfig', 'nativeCurrency']),
    ...mapGetters('txHashKeeper', ['allTxs', 'txs', 'txExplorerUrl', 'encryptedTxs']),
    ...mapGetters('relayer', ['jobs']),
    ...mapGetters('price', ['getTokenPrice']),
    ...mapState('application', ['statistic']),
    tokens() {
      return this.networkConfig.tokens
    },
    activeTokensFilters() {
      const filters = new Set()
      this.allTxs.forEach((tx) => {
        filters.add(tx.currency)
      })
      return filters
    },
    filteredTxs() {
      if (this.transactions === 'regular') {
        return this.filterTxs(this.txs)
      }
      if (this.transactions === 'encrypted') {
        return this.filterTxs(this.encryptedTxs)
      }
      return this.filterTxs(this.allTxs)
    }
  },
  watch: {
    mobileSort(sort) {
      if (this.currentSort === sort) {
        return
      }
      this.setSort(sort)
    },
    currentSort(sort) {
      this.mobileSort = sort
    }
  },
  mounted() {
    this.timer = setTimeout(() => {
      this.cleanTxs()
      this.cleanEncryptedTxs()
      this.checkPendingTransaction()
      this.checkPendingEncryptedTransaction()
    }, 2500)
  },
  beforeDestroy() {
    clearTimeout(this.timer)
  },
  methods: {
    ...mapActions('txHashKeeper', [
      'cleanTxs',
      'cleanEncryptedTxs',
      'checkPendingTransaction',
      'checkPendingEncryptedTransaction'
    ]),
    setFilter(filter, value) {
      this.filters[filter] = this.filters[filter] === value ? '' : value
    },
    setSort(sort) {
      this.isAsc = sort === this.currentSort ? !this.isAsc : true
      this.currentSort = sort
    },
    filterTxs(txs) {
      return txs.filter((tx) => {
        const isMatched = []
        if (this.filters.currency !== '') {
          isMatched.push(this.filters.currency === tx.currency)
        }
        if (this.filters.ifAfter24hrs) {
          isMatched.push(this.$moment().unix() - Number(tx.timestamp) > 86400)
        }
        if (this.filters.isSpent !== undefined) {
          isMatched.push(this.filters.isSpent === Boolean(tx.isSpent))
        }

        return isMatched.every(Boolean)
      })
    },
    getDepositsPast(tx) {
      const [, currency, amount] = tx.prefix.split('-')
      return this.statistic[currency][amount].nextDepositIndex - tx.index - 1
    },
    setTransactionFilter(value) {
      this.transactions = this.transactions === value ? 'all' : value
    },
    setSpent(value) {
      this.filters.isSpent = this.filters.isSpent === value ? undefined : value
    },
    copy(v) {
      navigator.clipboard.writeText(v)
      this.tooltipShareUrl = this.$t('copied')
      this.copyTimer = setTimeout(() => {
        this.tooltipShareUrl = this.$t('copyNote')
      }, 1500)
    }
  }
}
</script>
