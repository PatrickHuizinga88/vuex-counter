<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Counter />
    <CounterSquared />
    <Buttons />
    <ColorCode />
  </div>
</template>

<script>
import Counter from '@/components/Counter.vue'
import CounterSquared from '@/components/CounterSquared.vue'
import Buttons from '@/components/Buttons.vue'
import ColorCode from '@/components/ColorCode.vue'

export default {
  name: 'Home',
  components: {
    Counter,
    CounterSquared,
    Buttons,
    ColorCode
  }
}
</script>

<style>
  .home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    min-height: 360px;
  }
  img {
    width: 150px;
  }
  .counter, .counter-squared, .buttons {
    margin-bottom: 10px;
  }
  .counter {
    font-size: 80px;
    font-weight: bold;
  }
  .buttons button {
    font-size: 40px;
    width: 100px;
    margin: 0 10px;
    background: #eee;
  }
</style>
