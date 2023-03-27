<template>
  <div class="col-12 text-center mt-3">
    <img @click="petCat()" src="../assets/img/Frame_1-removebg-preview.png" class="img-fluid rascal-img selectable"
      alt="">
  </div>
  <div class="col-12 text-center">
    <!-- NOTE by using data binding on our class, we pass through instructions on when to apply styles to our h1 -->
    <!-- NOTE the key inside of the object will be which style you want to apply, and the value must be a truthy/falsey statement -->
    <h1 class="fw-bold" :class="{ 'text-danger': purrs < 10, 'text-success': purrs > 25 }">Purrs: {{ purrs }}</h1>
  </div>
</template>


<script>
import { AppState } from '../AppState.js';
import { computed } from 'vue';
import { purrsService } from '../services/PurrsService.js';

export default {
  setup() {
    // function getPurrs() {
    //   return AppState.purrs
    // }

    return {
      // purrs: computed(() => {
      //   return AppState.purrs
      // })
      purrs: computed(() => AppState.purrs),
      petCat() {
        purrsService.petCat()
      },
    }
  }
}
</script>


<style lang="scss" scoped>
img {
  height: 51.2vh;
  width: 51.2vh;
  border-radius: 50%;
}
</style>