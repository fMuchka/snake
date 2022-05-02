<script setup lang="ts">
    import { generateGrid } from "@/functions/generateGrid"
    import { useGameStore } from "@/store/GameStore"
    import { reactive, watch, onMounted } from "vue"

    const store = useGameStore();

    const GRID_SIZE = store.getGridSize;
    const GRID = reactive(generateGrid(GRID_SIZE))
    const SNAKE: any = reactive(store.getSnake)

    onMounted(() => {
        const {x, y} = SNAKE.head.coordinates;
        GRID[x][y].color = "red"
    })
    

    watch(SNAKE, (newSnake, oldSnake) => {
        const {x : newX, y : newY} = newSnake.head.coordinates;
        GRID[newX][newY].color = "red"
    })
</script>

<template>
    <div id="gameBoard">
        <div
            v-for="(col, colIndex) in GRID"
            :key="`col_${colIndex}`"
            class="col"
        >
            <div
                v-for="(cell, rowIndex) in col"
                :key="`cell_${colIndex}_${rowIndex}`"
                class="cell"
                :style="{ backgroundColor: cell.color }"
            >
            </div>
        </div>
    </div>
</template>

<style scoped>

.cell{
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    height: 1em;
    width: 1em;
}

.col{
    display: grid;
    grid-auto-flow: row;
}

#gameBoard{
    display: grid;
    margin: auto;
    grid-auto-flow: column;
    background-color: grey;
    height: fit-content;
    width: fit-content;
}

</style>