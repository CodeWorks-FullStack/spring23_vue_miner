import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"

class PurrsService {
  petCat() {
    AppState.purrs++
    AppState.upgrades.forEach(upgrade => {
      if (!upgrade.isAuto) {
        AppState.purrs += upgrade.quantity * upgrade.multiplier
      }
    })
    logger.log('Purrs', AppState.purrs)
  }

  buyUpgrade(upgrade) {
    if (upgrade.price > AppState.purrs) {
      throw new Error("NOT ENOUGH MONEY")
    }
    upgrade.quantity++
    AppState.purrs -= upgrade.price
    upgrade.price += upgrade.price
  }
}

export const purrsService = new PurrsService()