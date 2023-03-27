export class Upgrade {
  constructor (data) {
    this.name = data.name
    this.price = data.price
    this.multiplier = data.multiplier
    this.quantity = data.quantity || 0
    this.isAuto = data.isAuto || false
  }
}