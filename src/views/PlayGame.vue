<script setup lang="ts">
    import { defineAsyncComponent } from 'vue'

    const GameBoard = defineAsyncComponent(() => import("@/components/GameBoard.vue"))
</script>

<template>
    <div>
        <GameBoard />
    </div>
</template>



<style scoped>

</style>