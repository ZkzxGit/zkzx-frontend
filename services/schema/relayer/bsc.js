import { addressType } from '@/constants'

const statusSchema = {
  type: 'object',
  properties: {
    rewardAccount: addressType,
    instances: {
      type: 'object',
      properties: {
        bnb: {
          type: 'object',
          properties: {
            instanceAddress: {
              type: 'object',
              properties: {
                '1': addressType,
                '10': addressType,
                '100': addressType
              },
              required: ['1', '10', '100']
            },
            decimals: { enum: [18] }
          },
          required: ['instanceAddress', 'decimals']
        }
      },
      required: ['bnb']
    },
    netId: { type: 'integer' },
    tornadoServiceFee: { type: 'number', maximum: 20, minimum: 0 },
    health: {
      type: 'object',
      properties: {
        status: { const: 'true' },
        error: { type: 'string' }
      },
      required: ['status']
    },
    currentQueue: { type: 'number' }
  },
  required: ['rewardAccount', 'instances', 'netId', 'tornadoServiceFee', 'health']
}

export { statusSchema }
