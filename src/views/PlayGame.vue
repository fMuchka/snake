<script setup lang="ts">
    import { defineAsyncComponent, onMounted, reactive } from 'vue'
    import { createSnake } from "@/functions/createSnake"
    import { useGameStore } from "@/store/GameStore"
    import MoveKeyDirection from '@/enums/MoveKeyDirection';

    const store = useGameStore();
    const snake = reactive(createSnake());

    onMounted(() => {
        store.setSnake(snake);
    })

    function moveSnake(direction: MoveKeyDirection): void {
        snake.move(direction);
    }
    

    const GameBoard = defineAsyncComponent(() => import("@/components/GameBoard.vue"))
    const ControlsPanel = defineAsyncComponent(() => import("@/components/ControlsPanel.vue"))
</script>

<template>
    <div>
        <GameBoard />
        <Controls-Panel @move="(direction) => moveSnake(direction)" />
    </div>
</template>



<style scoped>

</style>