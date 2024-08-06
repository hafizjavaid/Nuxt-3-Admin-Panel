<template>
    <div>
        count :
        {{ counter.count }}
        <button @click="counter.increment">count++</button>
        <br>
        double :
        {{ counter.doubleCount }}
        <button @click="counter.decrement">count--</button>
    </div>
</template>

<script setup lang="ts">
import { useCountStore } from '../../stores/demo/count.store'
const counter = useCountStore();
</script>

<style scoped>

</style>