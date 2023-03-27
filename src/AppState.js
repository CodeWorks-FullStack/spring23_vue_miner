import { reactive } from 'vue'
import { Upgrade } from './models/Upgrade.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},

  purrs: 0,

  /** @type {import('./models/Upgrade.js').Upgrade[]} */
  upgrades: [
    new Upgrade({
      name: 'Brush',
      price: 10,
      multiplier: 1
    }),
    new Upgrade({
      name: 'Catnip',
      price: 20,
      multiplier: 1,
      isAuto: true
    }),
    new Upgrade({
      name: 'Mittens',
      price: 20,
      multiplier: 2
    }),
    new Upgrade({
      name: 'Kissy Noises',
      price: 100,
      multiplier: 5,
      isAuto: true
    }),
  ]

})
