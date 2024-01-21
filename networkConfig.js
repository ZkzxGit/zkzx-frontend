const {
  INFURA_KEY,
  ALCHEMY_POLYGON_KEY,
  ALCHEMY_OPTIMISM_KEY,
  ALCHEMY_ARBITRUM_KEY,
  ALCHEMY_GOERLI_KEY
} = process.env

export default {
  netId1: {
    rpcCallRetryAttempt: 15,
    gasPrices: {
      instant: 80,
      fast: 50,
      standard: 25,
      low: 8
    },
    nativeCurrency: 'eth',
    currencyName: 'ETH',
    explorerUrl: {
      tx: 'https://etherscan.io/tx/',
      address: 'https://etherscan.io/address/',
      block: 'https://etherscan.io/block/'
    },
    merkleTreeHeight: 20,
    emptyElement: '21663839004416932945382355908790599225266501822907911457504978515578255421292',
    networkName: 'Ethereum Mainnet',
    deployedBlock: 16066262,
    rpcUrls: {
      RPC: {
        name: '1RPC',
        url: `https://1rpc.io/eth`
      },
      Infura: {
        name: 'Infura',
        url: `https://mainnet.infura.io/v3/c2d1cdebd15645c590776f9e09d87c46`
      },
      Nodereal: {
        name: 'Nodereal',
        url: 'https://eth-mainnet.nodereal.io/v1/1659dfb40aa24bbb8153a677b98064d7'
      }
    },
    multicall: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
    registryContract: '0x58E8dCC13BE9780fC42E8723D8EaD4CF46943dF2',
    echoContractAccount: '0x9B27DD5Bb15d42DC224FCD0B7caEbBe16161Df42',
    aggregatorContract: '0xE8F47A78A6D52D317D0D2FFFac56739fE14D1b49',
    tokens: {
      eth: {
        instanceAddress: {
          '0.1': '0x654Ea9db6792569BD276FE862748B9D67afaA002',
          '1': '0x7c133d39220877a781fe2905cd7666e6b6e162aa',
          '10': '0xd545A432855ab48f722f47D2833569fb5f48Bf5F',
          '100': '0x753050049Ba2E2869Ad652C3e6d2ba68854C9086'
        },
        symbol: 'ETH',
        decimals: 18
      },
      dai: {
        instanceAddress: {
          '100': '0xe871436b8e0e69934e8f7237a07d7b06d7ca5ff7',
          '1000': '0xf0f16d32f3af84ae46245e490bedf1b0edf785ec',
          '10000': '0x7083377d0cf8852358dd6a559281c7c09366887d',
          '100000': '0x6bf81db7469a0bacb4a14f2cf0a70c7af8be2ff8'
        },
        tokenAddress: '0x6b175474e89094c44da98b954eedeac495271d0f',
        symbol: 'DAI',
        decimals: 18,
        gasLimit: '80000'
      },
      hex: {
        instanceAddress: {
          '100': '0x1fcde12aab9bde309019adf18b36c9aa66bd9e81',
          '1000': '0x4e2bd6c44813ec175c6666a2a615a8f05854ce91',
          '10000': '0x11a99a832d6615209fcb79125e5ef629a92f6c05',
          '100000': '0x4e09ee0f4230bb259f361ddf031ed075a32b34d6'
        },
        tokenAddress: '0x2b591e99afe9f32eaa6214f7b7629768c40eeb39',
        symbol: 'HEX',
        decimals: 8,
        gasLimit: '80000'
      }
    },
    ensSubdomainKey: 'mainnet-white',
    pollInterval: 15,
    'white-proxy-light.contract.tornadocash.eth': '0x73c36830296Cf339027285AedD3251b4D276f44D'
  },
  // netId1: {
  //   rpcCallRetryAttempt: 15,
  //   gasPrices: {
  //     instant: 80,
  //     fast: 50,
  //     standard: 25,
  //     low: 8
  //   },
  //   nativeCurrency: 'eth',
  //   currencyName: 'ETH',
  //   explorerUrl: {
  //     tx: 'https://etherscan.io/tx/',
  //     address: 'https://etherscan.io/address/',
  //     block: 'https://etherscan.io/block/'
  //   },
  //   merkleTreeHeight: 20,
  //   emptyElement: '21663839004416932945382355908790599225266501822907911457504978515578255421292',
  //   networkName: 'Ethereum Mainnet',
  //   deployedBlock: 9116966,
  //   rpcUrls: {
  //     Infura: {
  //       name: 'Infura',
  //       url: `https://mainnet.infura.io/v3/${INFURA_KEY}`
  //     },
  //     Alchemy: {
  //       name: 'Alchemy',
  //       url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_MAINNET_KEY}`
  //     }
  //   },
  //   multicall: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
  //   registryContract: '0x58E8dCC13BE9780fC42E8723D8EaD4CF46943dF2',
  //   echoContractAccount: '0x9B27DD5Bb15d42DC224FCD0B7caEbBe16161Df42',
  //   aggregatorContract: '0xE8F47A78A6D52D317D0D2FFFac56739fE14D1b49',
  //   tokens: {
  //     eth: {
  //       instanceAddress: {
  //         '0.1': '0x12D66f87A04A9E220743712cE6d9bB1B5616B8Fc',
  //         '1': '0x47CE0C6eD5B0Ce3d3A51fdb1C52DC66a7c3c2936',
  //         '10': '0x910Cbd523D972eb0a6f4cAe4618aD62622b39DbF',
  //         '100': '0xA160cdAB225685dA1d56aa342Ad8841c3b53f291'
  //       },
  //       symbol: 'ETH',
  //       decimals: 18
  //     },
  //     dai: {
  //       instanceAddress: {
  //         '100': '0xD4B88Df4D29F5CedD6857912842cff3b20C8Cfa3',
  //         '1000': '0xFD8610d20aA15b7B2E3Be39B396a1bC3516c7144',
  //         '10000': '0x07687e702b410Fa43f4cB4Af7FA097918ffD2730',
  //         '100000': '0x23773E65ed146A459791799d01336DB287f25334'
  //       },
  //       tokenAddress: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
  //       symbol: 'DAI',
  //       decimals: 18,
  //       gasLimit: '55000'
  //     },
  //     cdai: {
  //       instanceAddress: {
  //         '5000': '0x22aaA7720ddd5388A3c0A3333430953C68f1849b',
  //         '50000': '0x03893a7c7463AE47D46bc7f091665f1893656003',
  //         '500000': '0x2717c5e28cf931547B621a5dddb772Ab6A35B701',
  //         '5000000': '0xD21be7248e0197Ee08E0c20D4a96DEBdaC3D20Af'
  //       },
  //       tokenAddress: '0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643',
  //       symbol: 'cDAI',
  //       decimals: 8,
  //       gasLimit: '425000'
  //     },
  //     usdc: {
  //       instanceAddress: {
  //         '100': '0xd96f2B1c14Db8458374d9Aca76E26c3D18364307',
  //         '1000': '0x4736dCf1b7A3d580672CcE6E7c65cd5cc9cFBa9D',
  //         '10000': '',
  //         '100000': ''
  //       },
  //       tokenAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
  //       symbol: 'USDC',
  //       decimals: 6,
  //       gasLimit: '80000'
  //     },
  //     usdt: {
  //       instanceAddress: {
  //         '100': '0x169AD27A470D064DEDE56a2D3ff727986b15D52B',
  //         '1000': '0x0836222F2B2B24A3F36f98668Ed8F0B38D1a872f',
  //         '10000': '',
  //         '100000': ''
  //       },
  //       tokenAddress: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  //       symbol: 'USDT',
  //       decimals: 6,
  //       gasLimit: '100000'
  //     },
  //     wbtc: {
  //       instanceAddress: {
  //         '0.1': '0x178169B423a011fff22B9e3F3abeA13414dDD0F1',
  //         '1': '0x610B717796ad172B316836AC95a2ffad065CeaB4',
  //         '10': '0xbB93e510BbCD0B7beb5A853875f9eC60275CF498',
  //         '100': ''
  //       },
  //       tokenAddress: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
  //       symbol: 'WBTC',
  //       decimals: 8,
  //       gasLimit: '85000'
  //     }
  //   },
  //   ensSubdomainKey: 'mainnet-white',
  //   pollInterval: 15,
  //   constants: {
  //     GOVERNANCE_BLOCK: 11474695,
  //     NOTE_ACCOUNT_BLOCK: 11842486,
  //     ENCRYPTED_NOTES_BLOCK: 14248730,
  //     MINING_BLOCK_TIME: 15
  //   },
  //   'torn.contract.tornadocash.eth': '0x77777FeDdddFfC19Ff86DB637967013e6C6A116C',
  //   'governance.contract.tornadocash.eth': '0x5efda50f22d34F262c29268506C5Fa42cB56A1Ce',
  //   'white-router.contract.tornadocash.eth': '0xd90e2f925DA726b50C4Ed8D0Fb90Ad053324F31b',
  //   'staking-rewards.contract.tornadocash.eth': '0x2FC93484614a34f26F7970CBB94615bA109BB4bf'
  // },
  netId3: {
    rpcCallRetryAttempt: 15,
    gasPrices: {
      instant: 5,
      fast: 5,
      standard: 5,
      low: 5
    },
    nativeCurrency: 'eth',
    currencyName: 'ETH',
    explorerUrl: {
      tx: 'https://ropsten.etherscan.io/tx/',
      address: 'https://ropsten.etherscan.io/address/',
      block: 'https://ropsten.etherscan.io/block/'
    },
    merkleTreeHeight: 20,
    emptyElement: '21663839004416932945382355908790599225266501822907911457504978515578255421292',
    networkName: 'Ropsten Testnet Network',
    deployedBlock: 8158799,
    multicall: '0x53C43764255c17BD724F74c4eF150724AC50a3ed',
    echoContractAccount: '0x9B27DD5Bb15d42DC224FCD0B7caEbBe16161Df42',
    verifier: '0x81BDE582D3c9E5403B1B962B3aE762675DFa9468',
    hasher: '0x85D542E79Ec9e4C564386054759047559F07fBdE',
    rpcUrls: {
      ropstenRpc2: {
        name: 'Ropsten Public RPC 2',
        url: 'https://ropsten.infura.io/v3/c2d1cdebd15645c590776f9e09d87c46'
      }
    },
    tokens: {
      eth: {
        instanceAddress: {
          '0.1': '0x3F589e020B1cf7562d71D8eF0c245212A792f66b',
          '0.2': '0xCBD2B9f6d73a3c337FD86AD36Ec753bCa2aB9971',
          '0.5': '0xCBD2B9f6d73a3c337FD86AD36Ec753bCa2aB9971',
          '1': '0x957935f41658944B54C44Ed8e535e0d004676Bc6',
          '5': '0x3f99a3B3e627e6c35Fde76f7Abf535903098D63D'
        },
        symbol: 'ETH',
        decimals: 18
      }
    },
    ensSubdomainKey: 'ropsten-white',
    pollInterval: 10,
    constants: {
      NOTE_ACCOUNT_BLOCK: 11842486,
      ENCRYPTED_NOTES_BLOCK: 14248730,
      MINING_BLOCK_TIME: 15
    },
    'white-proxy-light.contract.tornadocash.eth': '0x8a09dE096E116eB5b50048dEeD49412C25eE1705'
  },
  netId369: {
    rpcCallRetryAttempt: 15,
    gasPrices: {
      instant: 300000,
      fast: 250000,
      standard: 200000,
      low: 160000
    },
    nativeCurrency: 'pls',
    currencyName: 'Pulse',
    explorerUrl: {
      tx:
        'https://scan.mypinata.cloud/ipfs/bafybeidn64pd2u525lmoipjl4nh3ooa2imd7huionjsdepdsphl5slfowy/#/tx/',
      address:
        'https://scan.mypinata.cloud/ipfs/bafybeidn64pd2u525lmoipjl4nh3ooa2imd7huionjsdepdsphl5slfowy/#/address/',
      block:
        'https://scan.mypinata.cloud/ipfs/bafybeidn64pd2u525lmoipjl4nh3ooa2imd7huionjsdepdsphl5slfowy/#/block/'
    },
    merkleTreeHeight: 20,
    emptyElement: '21663839004416932945382355908790599225266501822907911457504978515578255421292',
    networkName: 'Pulse Chain',
    deployedBlock: 19375980,
    multicall: '0xfF6FD90A470Aaa0c1B8A54681746b07AcdFedc9B',
    echoContractAccount: '0x026e5436B1E4b95E6D1AcBB44C597E4A0C882F8F',
    verifier: '0xC6A9766be359f82515b8432aA5FEC3fAfA729015',
    rpcUrls: {
      publicRpc1: {
        name: 'Pulse Public RPC 1',
        url: 'https://rpc.pulsechain.com/'
      },
      publicRpc2: {
        name: 'Pulse Public RPC 2',
        url: 'https://pulsechain.publicnode.com/'
      },
      publicRpc3: {
        name: 'Pulse Public RPC 3',
        url: 'https://pulse-s.projectpi.xyz/'
      }
    },
    tokens: {
      pls: {
        instanceAddress: {
          // '1': '0x843E6BC0FF39c2DA23DD304F5EF2a3Ec3267E2b6',
          // '2000': '0x93078060946e6E0b7aFD08d911a62A60fD15d809',
          '100000': '0x02B0ce56A55712988700061aD8b1d1713eACf128',
          '1000000': '0x7C83366bD512b9eA87f004909e20EB8c7633b5CB',
          '10000000': '0x1C8e6702Bd2204992443322aC968f7a580E27b8E',
          '100000000': '0x57879323019dC64B18e9Df739e2130a6B2F93E3a'
        },
        symbol: 'PLS',
        decimals: 18
      }
    },
    ensSubdomainKey: 'pulse-white',
    pollInterval: 10,
    constants: {
      NOTE_ACCOUNT_BLOCK: 19375980,
      ENCRYPTED_NOTES_BLOCK: 19375980
    },
    'white-proxy-light.contract.tornadocash.eth': '0xe563D633D32690b6c63c2520F41EDF970a5ae91E'
  },
  netId97: {
    rpcCallRetryAttempt: 15,
    gasPrices: {
      instant: 5,
      fast: 5,
      standard: 5,
      low: 5
    },
    nativeCurrency: 'bnb',
    currencyName: 'BNB',
    explorerUrl: {
      tx: 'https://testnet.bscscan.com/tx/',
      address: 'https://testnet.bscscan.com/address/',
      block: 'https://testnet.bscscan.com/block/'
    },
    merkleTreeHeight: 20,
    emptyElement: '21663839004416932945382355908790599225266501822907911457504978515578255421292',
    networkName: 'Test Binance Smart Chain',
    deployedBlock: 22811029,
    multicall: '0xabe14DD15120c5Cbe2Dce73CBA4f2C62b78B9894',
    echoContractAccount: '0x8a09dE096E116eB5b50048dEeD49412C25eE1705',
    verifier: '0x81BDE582D3c9E5403B1B962B3aE762675DFa9468',
    hasher: '0xFCD5008b5FE0849397BB137524A619364a776c79',
    rpcUrls: {
      publicRpc1: {
        name: 'Test BSC Public RPC 1',
        url: 'https://data-seed-prebsc-1-s1.binance.org:8545'
      },
      publicRpc2: {
        name: 'Test BSC Public RPC 2',
        url: 'https://data-seed-prebsc-1-s2.binance.org:8545'
      },
      publicRpc3: {
        name: 'Test BSC Public RPC 3',
        url: 'https://data-seed-prebsc-1-s3.binance.org:8545'
      }
    },
    tokens: {
      bnb: {
        instanceAddress: {
          '0.1': '0xf9ca8b168647228Cf6Fe3718d03464c85e6292E0',
          '1': '0x957935f41658944B54C44Ed8e535e0d004676Bc6',
          '5': '0x330bdFADE01eE9bF63C209Ee33102DD334618e0a',
          '10': '0x1E34A77868E19A6647b1f2F47B51ed72dEDE95DD',
          '20': '0x1E34A77868E19A6647b1f2F47B51ed72dEDE95DD'
        },
        symbol: 'BNB',
        decimals: 18
      },
      busd: {
        instanceAddress: {
          '10': '0x13C1CE2b1e4303F303b69E552712FdbB40DEEB63',
          '100': '0xd96f2B1c14Db8458374d9Aca76E26c3D18364307'
        },
        tokenAddress: '0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7',
        symbol: 'BUSD',
        decimals: 18,
        gasLimit: '80000'
      }
    },
    ensSubdomainKey: 'bsc-white',
    pollInterval: 10,
    constants: {
      NOTE_ACCOUNT_BLOCK: 22811029,
      ENCRYPTED_NOTES_BLOCK: 22811029
    },
    'white-proxy-light.contract.tornadocash.eth': '0xd415218a7938b73a388eFDe230C7ef5fF3b6C22E'
  },
  netId137: {
    rpcCallRetryAttempt: 15,
    gasPrices: {
      instant: 100,
      fast: 75,
      standard: 50,
      low: 30
    },
    nativeCurrency: 'matic',
    currencyName: 'MATIC',
    explorerUrl: {
      tx: 'https://polygonscan.com/tx/',
      address: 'https://polygonscan.com/address/',
      block: 'https://polygonscan.com/block/'
    },
    merkleTreeHeight: 20,
    emptyElement: '21663839004416932945382355908790599225266501822907911457504978515578255421292',
    networkName: 'Polygon (Matic) Network',
    deployedBlock: 16257962,
    multicall: '0x11ce4B23bD875D7F5C6a31084f55fDe1e9A87507',
    echoContractAccount: '0xa75BF2815618872f155b7C4B0C81bF990f5245E4',
    rpcUrls: {
      Infura: {
        name: 'Infura',
        url: `https://polygon-mainnet.infura.io/v3/${INFURA_KEY}`
      },
      Alchemy: {
        name: 'Alchemy',
        url: `https://polygon-mainnet.g.alchemy.com/v2/${ALCHEMY_POLYGON_KEY}`
      }
    },
    tokens: {
      matic: {
        instanceAddress: {
          '100': '0x1E34A77868E19A6647b1f2F47B51ed72dEDE95DD',
          '1000': '0xdf231d99Ff8b6c6CBF4E9B9a945CBAcEF9339178',
          '10000': '0xaf4c0B70B2Ea9FB7487C7CbB37aDa259579fe040',
          '100000': '0xa5C2254e4253490C54cef0a4347fddb8f75A4998'
        },
        symbol: 'MATIC',
        decimals: 18
      }
    },
    ensSubdomainKey: 'polygon-white',
    pollInterval: 10,
    constants: {
      NOTE_ACCOUNT_BLOCK: 16257996,
      ENCRYPTED_NOTES_BLOCK: 16257996
    },
    'white-proxy-light.contract.tornadocash.eth': '0x0D5550d52428E7e3175bfc9550207e4ad3859b17'
  },
  netId10: {
    rpcCallRetryAttempt: 15,
    gasPrices: {
      instant: 0.001,
      fast: 0.001,
      standard: 0.001,
      low: 0.001
    },
    nativeCurrency: 'eth',
    currencyName: 'ETH',
    explorerUrl: {
      tx: 'https://optimistic.etherscan.io/tx/',
      address: 'https://optimistic.etherscan.io/address/',
      block: 'https://optimistic.etherscan.io/block/'
    },
    merkleTreeHeight: 20,
    emptyElement: '21663839004416932945382355908790599225266501822907911457504978515578255421292',
    networkName: 'Optimism',
    deployedBlock: 2243689,
    multicall: '0x35A6Cdb2C9AD4a45112df4a04147EB07dFA01aB7',
    echoContractAccount: '0xa75BF2815618872f155b7C4B0C81bF990f5245E4',
    ovmGasPriceOracleContract: '0x420000000000000000000000000000000000000F',
    rpcUrls: {
      Alchemy: {
        name: 'Alchemy',
        url: `https://opt-mainnet.g.alchemy.com/v2/${ALCHEMY_OPTIMISM_KEY}`
      },
      Infura: {
        name: 'Infura',
        url: `https://optimism-mainnet.infura.io/v3/${INFURA_KEY}`
      }
    },
    tokens: {
      eth: {
        instanceAddress: {
          '0.1': '0x84443CFd09A48AF6eF360C6976C5392aC5023a1F',
          '1': '0xd47438C816c9E7f2E2888E060936a499Af9582b3',
          '10': '0x330bdFADE01eE9bF63C209Ee33102DD334618e0a',
          '100': '0x1E34A77868E19A6647b1f2F47B51ed72dEDE95DD'
        },
        symbol: 'ETH',
        decimals: 18
      }
    },
    ensSubdomainKey: 'optimism-white',
    pollInterval: 15,
    constants: {
      NOTE_ACCOUNT_BLOCK: 2243694,
      ENCRYPTED_NOTES_BLOCK: 2243694
    },
    'white-proxy-light.contract.tornadocash.eth': '0x0D5550d52428E7e3175bfc9550207e4ad3859b17'
  },
  netId42161: {
    rpcCallRetryAttempt: 15,
    gasPrices: {
      instant: 4,
      fast: 3,
      standard: 2.52,
      low: 2.29
    },
    nativeCurrency: 'eth',
    currencyName: 'ETH',
    explorerUrl: {
      tx: 'https://arbiscan.io/tx/',
      address: 'https://arbiscan.io/address/',
      block: 'https://arbiscan.io/block/'
    },
    merkleTreeHeight: 20,
    emptyElement: '21663839004416932945382355908790599225266501822907911457504978515578255421292',
    networkName: 'Arbitrum One',
    deployedBlock: 3430648,
    multicall: '0x842eC2c7D803033Edf55E478F461FC547Bc54EB2',
    echoContractAccount: '0xa75BF2815618872f155b7C4B0C81bF990f5245E4',
    rpcUrls: {
      Arbitrum: {
        name: 'Arbitrum Public RPC',
        url: 'https://arb1.arbitrum.io/rpc'
      },
      Alchemy: {
        name: 'Alchemy',
        url: `https://arb-mainnet.g.alchemy.com/v2/${ALCHEMY_ARBITRUM_KEY}`
      },
      Infura: {
        name: 'Infura',
        url: `https://arbitrum-mainnet.infura.io/v3/${INFURA_KEY}`
      }
    },
    tokens: {
      eth: {
        instanceAddress: {
          '0.1': '0x84443CFd09A48AF6eF360C6976C5392aC5023a1F',
          '1': '0xd47438C816c9E7f2E2888E060936a499Af9582b3',
          '10': '0x330bdFADE01eE9bF63C209Ee33102DD334618e0a',
          '100': '0x1E34A77868E19A6647b1f2F47B51ed72dEDE95DD'
        },
        symbol: 'ETH',
        decimals: 18
      }
    },
    ensSubdomainKey: 'arbitrum-white',
    pollInterval: 15,
    constants: {
      NOTE_ACCOUNT_BLOCK: 3430605,
      ENCRYPTED_NOTES_BLOCK: 3430605
    },
    'white-proxy-light.contract.tornadocash.eth': '0x0D5550d52428E7e3175bfc9550207e4ad3859b17'
  },
  netId100: {
    rpcCallRetryAttempt: 15,
    gasPrices: {
      instant: 6,
      fast: 5,
      standard: 4,
      low: 1
    },
    nativeCurrency: 'xdai',
    currencyName: 'xDAI',
    explorerUrl: {
      tx: 'https://blockscout.com/xdai/mainnet/tx/',
      address: 'https://blockscout.com/xdai/mainnet/address/',
      block: 'https://blockscout.com/xdai/mainnet/block/'
    },
    merkleTreeHeight: 20,
    emptyElement: '21663839004416932945382355908790599225266501822907911457504978515578255421292',
    networkName: 'Gnosis Chain',
    deployedBlock: 17754561,
    multicall: '0xb5b692a88bdfc81ca69dcb1d924f59f0413a602a',
    echoContractAccount: '0xa75BF2815618872f155b7C4B0C81bF990f5245E4',
    rpcUrls: {
      publicRpc: {
        name: 'Gnosis Chain RPC',
        url: 'https://rpc.gnosischain.com/white'
      }
    },
    tokens: {
      xdai: {
        instanceAddress: {
          '100': '0x1E34A77868E19A6647b1f2F47B51ed72dEDE95DD',
          '1000': '0xdf231d99Ff8b6c6CBF4E9B9a945CBAcEF9339178',
          '10000': '0xaf4c0B70B2Ea9FB7487C7CbB37aDa259579fe040',
          '100000': '0xa5C2254e4253490C54cef0a4347fddb8f75A4998'
        },
        symbol: 'xDAI',
        decimals: 18
      }
    },
    ensSubdomainKey: 'gnosis-white',
    pollInterval: 15,
    constants: {
      NOTE_ACCOUNT_BLOCK: 17754564,
      ENCRYPTED_NOTES_BLOCK: 17754564
    },
    'white-proxy-light.contract.tornadocash.eth': '0x0D5550d52428E7e3175bfc9550207e4ad3859b17'
  },
  netId43114: {
    rpcCallRetryAttempt: 15,
    gasPrices: {
      instant: 225,
      fast: 35,
      standard: 25,
      low: 25
    },
    nativeCurrency: 'avax',
    currencyName: 'AVAX',
    explorerUrl: {
      tx: 'https://snowtrace.io/tx/',
      address: 'https://snowtrace.io/address/',
      block: 'https://snowtrace.io/block/'
    },
    merkleTreeHeight: 20,
    emptyElement: '21663839004416932945382355908790599225266501822907911457504978515578255421292',
    networkName: 'Avalanche Mainnet',
    deployedBlock: 4429818,
    multicall: '0xe86e3989c74293Acc962156cd3F525c07b6a1B6e',
    echoContractAccount: '0xa75BF2815618872f155b7C4B0C81bF990f5245E4',
    rpcUrls: {
      publicRpc: {
        name: 'Avalanche RPC',
        url: 'https://api.avax.network/ext/bc/C/rpc'
      }
    },
    tokens: {
      avax: {
        instanceAddress: {
          '10': '0x330bdFADE01eE9bF63C209Ee33102DD334618e0a',
          '100': '0x1E34A77868E19A6647b1f2F47B51ed72dEDE95DD',
          '500': '0xaf8d1839c3c67cf571aa74B5c12398d4901147B3'
        },
        symbol: 'AVAX',
        decimals: 18
      }
    },
    ensSubdomainKey: 'avalanche-white',
    pollInterval: 10,
    constants: {
      NOTE_ACCOUNT_BLOCK: 4429813,
      ENCRYPTED_NOTES_BLOCK: 4429813
    },
    'white-proxy-light.contract.tornadocash.eth': '0x0D5550d52428E7e3175bfc9550207e4ad3859b17'
  },
  netId5: {
    rpcCallRetryAttempt: 15,
    gasPrices: {
      instant: 80,
      fast: 50,
      standard: 25,
      low: 8
    },
    nativeCurrency: 'eth',
    currencyName: 'gETH',
    explorerUrl: {
      tx: 'https://goerli.etherscan.io/tx/',
      address: 'https://goerli.etherscan.io/address/',
      block: 'https://goerli.etherscan.io/block/'
    },
    merkleTreeHeight: 20,
    emptyElement: '21663839004416932945382355908790599225266501822907911457504978515578255421292',
    networkName: 'Ethereum Goerli',
    deployedBlock: 3781595,
    multicall: '0x77dca2c955b15e9de4dbbcf1246b4b85b651e50e',
    echoContractAccount: '0x37e6859804b6499d1e4a86d70a5fdd5de6a0ac65',
    aggregatorContract: '0x8cb1436F64a3c33aD17bb42F94e255c4c0E871b2',
    rpcUrls: {
      Alchemy: {
        name: 'Alchemy',
        url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_GOERLI_KEY}`
      }
    },
    tokens: {
      eth: {
        instanceAddress: {
          '0.1': '0x6Bf694a291DF3FeC1f7e69701E3ab6c592435Ae7',
          '1': '0x3aac1cC67c2ec5Db4eA850957b967Ba153aD6279',
          '10': '0x723B78e67497E85279CB204544566F4dC5d2acA0',
          '100': '0x0E3A09dDA6B20aFbB34aC7cD4A6881493f3E7bf7'
        },
        symbol: 'ETH',
        decimals: 18
      },
      dai: {
        instanceAddress: {
          '100': '0x76D85B4C0Fc497EeCc38902397aC608000A06607',
          '1000': '0xCC84179FFD19A1627E79F8648d09e095252Bc418',
          '10000': '0xD5d6f8D9e784d0e26222ad3834500801a68D027D',
          '100000': '0x407CcEeaA7c95d2FE2250Bf9F2c105aA7AAFB512'
        },
        tokenAddress: '0xdc31Ee1784292379Fbb2964b3B9C4124D8F89C60',
        symbol: 'DAI',
        decimals: 18,
        gasLimit: '55000'
      },
      cdai: {
        instanceAddress: {
          '5000': '0x833481186f16Cece3f1Eeea1a694c42034c3a0dB',
          '50000': '0xd8D7DE3349ccaA0Fde6298fe6D7b7d0d34586193',
          '500000': '0x8281Aa6795aDE17C8973e1aedcA380258Bc124F9',
          '5000000': '0x57b2B8c82F065de8Ef5573f9730fC1449B403C9f'
        },
        tokenAddress: '0x822397d9a55d0fefd20F5c4bCaB33C5F65bd28Eb',
        symbol: 'cDAI',
        decimals: 8,
        gasLimit: '425000'
      },
      usdc: {
        instanceAddress: {
          '100': '0x05E0b5B40B7b66098C2161A5EE11C5740A3A7C45',
          '1000': '0x23173fE8b96A4Ad8d2E17fB83EA5dcccdCa1Ae52',
          '10000': '',
          '100000': ''
        },
        tokenAddress: '0xD87Ba7A50B2E7E660f678A895E4B72E7CB4CCd9C',
        symbol: 'USDC',
        decimals: 6,
        gasLimit: '80000'
      },
      usdt: {
        instanceAddress: {
          '100': '0x538Ab61E8A9fc1b2f93b3dd9011d662d89bE6FE6',
          '1000': '0x94Be88213a387E992Dd87DE56950a9aef34b9448',
          '10000': '',
          '100000': ''
        },
        tokenAddress: '0xb7FC2023D96AEa94Ba0254AA5Aeb93141e4aad66',
        symbol: 'USDT',
        decimals: 6,
        gasLimit: '100000'
      },
      wbtc: {
        instanceAddress: {
          '0.1': '0x242654336ca2205714071898f67E254EB49ACdCe',
          '1': '0x776198CCF446DFa168347089d7338879273172cF',
          '10': '0xeDC5d01286f99A066559F60a585406f3878a033e',
          '100': ''
        },
        tokenAddress: '0xC04B0d3107736C32e19F1c62b2aF67BE61d63a05',
        symbol: 'WBTC',
        decimals: 8,
        gasLimit: '85000'
      }
    },
    ensSubdomainKey: 'goerli-white',
    pollInterval: 15,
    constants: {
      GOVERNANCE_BLOCK: 3945171,
      NOTE_ACCOUNT_BLOCK: 4131375,
      ENCRYPTED_NOTES_BLOCK: 4131375,
      MINING_BLOCK_TIME: 15
    },
    'torn.contract.tornadocash.eth': '0x77777FeDdddFfC19Ff86DB637967013e6C6A116C',
    'governance.contract.tornadocash.eth': '0x5efda50f22d34F262c29268506C5Fa42cB56A1Ce',
    'white-proxy.contract.tornadocash.eth': '0x454d870a72e29d5e5697f635128d18077bd04c60'
  }
}
