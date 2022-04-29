<script setup lang="ts">
    import { defineAsyncComponent } from 'vue'

    const GameBoard = defineAsyncComponent(() => import("@/components/GameBoard.vue"))
    const ControlsPanel = defineAsyncComponent(() => import("@/components/ControlsPanel.vue"))
</script>

<template>
    <div>
        <GameBoard />
        <Controls-Panel />
    </div>
</template>



<style scoped>

</style>