<template>
  <div class="container-fluid">
    <div class="row">
      <!-- NOTE injects all of the HTML stored on the RascalComponent here on the home page -->
      <RascalComponent />
    </div>
    <div class="row">
      <!-- NOTE v-html takes an html string and injects it as HTML into your code -->
      <div class="col-12" v-html="silly"></div>
      <div class="col-12">
        <div class="row">
          <!-- NOTE v-for runs a for-in loop, and it generates HTML for each upgrade stored in my AppState -->
          <div v-for="upgrade in upgrades" class="col-3">
            <!-- NOTE upgrade is what we alias out as being the piece of data pulled out of the collection on each iteration.-->
            <div v-if="upgrade.price <= purrs">
              <h2>Name: {{ upgrade.name }}
                <!-- NOTE we only render this i tag if the boolean on our upgrade is set to true -->
                <i v-if="upgrade.isAuto" class="mdi mdi-timer"></i>
              </h2>
              <h2>Price: {{ upgrade.price }}</h2>
              <h3>Mulitplier: {{ upgrade.multiplier }}</h3>
              <h3>Quantity: {{ upgrade.quantity }}</h3>
              <!-- NOTE we can pass down the entire upgrade object as our argument -->
              <button @click="buyUpgrade(upgrade)" :disabled="upgrade.price > purrs">Buy!</button>
            </div>
            <!-- NOTE we render this div in our html when the if statement on line 15 turns out to be false -->
            <div v-else>Not enough money</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { AppState } from '../AppState.js'
import { logger } from '../utils/Logger.js'
import { purrsService } from '../services/PurrsService.js'
import { computed } from 'vue'
import Pop from '../utils/Pop.js'
// NOTE                                                           don't forget to remove the .js on component imports
// import RascalComponent from '../components/RascalComponent.vue.js'
import RascalComponent from '../components/RascalComponent.vue'

export default {
  setup() {
    // NOTE anything inside your setup method is private
    const num = 2 + 2;

    function collectAuto() {
      logger.log("Am I still running?")
      AppState.upgrades.forEach(upgrade => {
        if (upgrade.isAuto) {
          AppState.purrs += upgrade.quantity * upgrade.multiplier
        }
      })
    }

    setInterval(collectAuto, 3000)
    return {
      // NOTE anything inside your return object is public

      // NOTE we return num from the setup here so we can use it in our template
      num,
      silly: "<h1>Jeremy is the best</h1>",

      // NOTE using a computed returns the value stored in our AppState, and will have the property be reactive in our code
      // NOTE "() =>" signifies that we are writing a function, AppState.purrs is what the function returns
      purrs: computed(() => AppState.purrs),
      upgrades: computed(() => AppState.upgrades),

      // NOTE we return out buyUpgrade so our template html can call this method
      buyUpgrade(upgrade) {
        try {
          purrsService.buyUpgrade(upgrade);
        }
        catch (error) {
          Pop.error(error.message);
          logger.error(error);
        }
      },
    };
  },
  components: { RascalComponent }
}
</script>

<style scoped lang="scss"></style>
