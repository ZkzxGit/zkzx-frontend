module.exports = {
  languageTag: 'uk-UA',
  delimiters: {
    thousands: ' ',
    decimal: ','
  },
  abbreviations: {
    thousand: 'k',
    million: 'm',
    billion: 'b',
    trillion: 't'
  },
  ordinal: () => {
    // not ideal, but since in Ukrainian it can taken on
    // different forms (masculine, feminine, neuter)
    // this is all we can do
    return ''
  },
  currency: {
    symbol: '\u20B4',
    position: 'postfix',
    code: 'UAH'
  },
  currencyFormat: {
    thousandSeparated: true,
    totalLength: 4,
    spaceSeparated: true,
    average: true
  },
  formats: {
    fourDigits: {
      totalLength: 4,
      spaceSeparated: true,
      average: true
    },
    fullWithTwoDecimals: {
      output: 'currency',
      mantissa: 2,
      spaceSeparated: true,
      thousandSeparated: true
    },
    fullWithTwoDecimalsNoCurrency: {
      mantissa: 2,
      thousandSeparated: true
    },
    fullWithNoDecimals: {
      output: 'currency',
      spaceSeparated: true,
      thousandSeparated: true,
      mantissa: 0
    }
  }
}
